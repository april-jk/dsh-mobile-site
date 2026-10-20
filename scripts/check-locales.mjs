import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = path.resolve(import.meta.dirname, '..');
const source = await readFile(path.join(root, 'src/data/dsh-site.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { siteCopy, faqs, chromeCopy, screenCopy, productPaths, localeHref, localeFromPath, localeAlternates } =
  await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object')
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]));
  return typeof value;
}
for (const locale of ['en', 'pl', 'zh-CN']) {
  assert.deepEqual(shape(siteCopy[locale]), shape(siteCopy.en), `siteCopy shape: ${locale}`);
  assert.deepEqual(shape(faqs[locale]), shape(faqs.en), `FAQ shape: ${locale}`);
  assert.deepEqual(shape(chromeCopy[locale]), shape(chromeCopy.en), `chrome shape: ${locale}`);
  assert.deepEqual(shape(screenCopy[locale]), shape(screenCopy.en), `screen copy shape: ${locale}`);
  assert.equal(localeFromPath(localeHref(locale)), locale);
}
assert.equal(localeFromPath('/playlist/'), 'en');
assert.equal(localeFromPath('/zh-cn-extra/'), 'en');
assert.equal(localeAlternates('/category/security/').length, 0);

const dist = path.join(root, 'dist');
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory() ? files(path.join(directory, entry.name)) : path.join(directory, entry.name)
      )
    )
  ).flat();
}
const htmlFiles = (await files(dist)).filter((file) => file.endsWith('.html'));
assert.ok(htmlFiles.length, 'Build the site before checking generated output');
const decode = (text) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/\s+/g, ' ')
    .trim();
const text = (html) =>
  decode(html.replace(/<(script|style|code|pre)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' '));
const attr = (tag, name) => decode(tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, 'i'))?.[1] || '');
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) || [];
let checkedLinks = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const pagePath = relative === 'index.html' ? '/' : `/${relative.replace(/index\.html$/, '')}`;
  for (const tag of [...tags(html, 'a'), ...tags(html, 'link')]) {
    const href = attr(tag, 'href');
    // Inherited 404 canonical uses /404/, while Astro emits /404.html.
    if (relative === '404.html' && attr(tag, 'rel') === 'canonical' && href === 'https://dshmobile.online/404/')
      continue;
    if (!href || /^(?:mailto:|tel:|data:|javascript:)/i.test(href)) continue;
    const url = new URL(href, `https://dshmobile.online${pagePath}`);
    if (url.origin !== 'https://dshmobile.online') continue;
    const target = decodeURIComponent(url.pathname);
    const output = path.join(dist, target.endsWith('/') ? `${target}index.html` : target);
    try {
      await access(output);
    } catch {
      assert.fail(`${pagePath}: missing local target ${href}`);
    }
    checkedLinks++;
  }
}

const allowedEnglish = new Set([
  'DSH Mobile Remote',
  'Mobile Suite', // Part of the unchanged product name DSH Mobile Suite.
  'Relay',
  'Mobile',
  'Companion',
  'Android',
  'DeepSeek Harness',
  'Polski',
  'English',
  'RSS',
]);
const englishUi = [
  ...Object.values(chromeCopy.en),
  ...Object.values(screenCopy.en),
  ...Object.values(siteCopy.en.hero),
].filter(
  (value) => typeof value === 'string' && value.length > 4 && !value.includes('<') && !allowedEnglish.has(value)
);
for (const base of productPaths) {
  for (const locale of ['en', 'pl']) {
    const route = localeHref(locale, base);
    const html = await readFile(path.join(dist, route, 'index.html'), 'utf8');
    assert.equal(attr(tags(html, 'html')[0], 'lang'), locale, `${route}: html lang`);
    assert.ok(
      tags(html, 'meta').some(
        (tag) => attr(tag, 'property') === 'og:locale' && attr(tag, 'content') === (locale === 'pl' ? 'pl_PL' : 'en_US')
      ),
      `${route}: Open Graph locale`
    );
    assert.ok(
      tags(html, 'meta').some((tag) => attr(tag, 'name') === 'description' && attr(tag, 'content')),
      `${route}: description`
    );
    assert.ok(
      tags(html, 'link').some(
        (tag) => attr(tag, 'rel') === 'canonical' && attr(tag, 'href') === `https://dshmobile.online${route}`
      ),
      `${route}: canonical`
    );
    assert.equal(tags(html, 'h1').length, 1, `${route}: one primary heading`);
    assert.ok(html.includes(`header-${locale}-`), `${route}: locale-scoped header persistence`);
    for (const counterpart of [base, localeHref('pl', base)])
      assert.ok(
        tags(html, 'a').some((tag) => attr(tag, 'href') === counterpart),
        `${route}: language-switch counterpart ${counterpart}`
      );
    for (const alternate of localeAlternates(route)) {
      assert.ok(
        tags(html, 'link').some(
          (tag) =>
            attr(tag, 'hreflang') === alternate.lang &&
            attr(tag, 'href') === `https://dshmobile.online${alternate.href}`
        ),
        `${route}: alternate ${alternate.lang}`
      );
    }
    if (locale === 'pl') {
      const visible = text(html);
      for (const phrase of englishUi) assert.ok(!visible.includes(phrase), `${route}: leaked English UI: ${phrase}`);
      for (const tag of tags(html, 'a')) {
        const href = attr(tag, 'href');
        if (href.startsWith('/') && !href.startsWith('/pl/') && !['/', '/zh-cn/', '/rss.xml', base].includes(href))
          assert.fail(`${route}: unlocalized internal link ${href}`);
      }
      const labels = tags(html, 'button')
        .map((tag) => attr(tag, 'aria-label'))
        .filter(Boolean);
      assert.ok(labels.includes(chromeCopy.pl.menu), `${route}: Polish menu accessible name`);
      assert.ok(labels.includes(chromeCopy.pl.theme), `${route}: Polish theme accessible name`);
      assert.ok(
        !labels.some((label) => /Toggle|Main navigation|RSS Feed/.test(label)),
        `${route}: English accessible name`
      );
      for (const tag of tags(html, 'img'))
        assert.ok(/(?:^$|[ąćęłńóśźż]|oryginalny)/i.test(attr(tag, 'alt')), `${route}: untranslated image alt`);
      if (base !== '/') {
        const english = await readFile(path.join(dist, base, 'index.html'), 'utf8');
        const paragraphs = [...english.matchAll(/<(?:p|h[1-6]|li)\b[^>]*>([\s\S]*?)<\/(?:p|h[1-6]|li)>/gi)]
          .map((match) => text(match[1]))
          .filter((value) => value.length > 45 && /[A-Za-z]/.test(value));
        for (const paragraph of paragraphs)
          assert.ok(!visible.includes(paragraph), `${route}: unchanged English prose: ${paragraph}`);
      }
    }
  }
}
const sitemap = (
  await Promise.all(
    (await files(dist)).filter((file) => /sitemap.*\.xml$/.test(file)).map((file) => readFile(file, 'utf8'))
  )
).join('\n');
for (const base of productPaths)
  assert.ok(sitemap.includes(`https://dshmobile.online${localeHref('pl', base)}`), `Polish sitemap entry: ${base}`);
const chinese = await readFile(path.join(dist, 'zh-cn/index.html'), 'utf8');
assert.equal(attr(tags(chinese, 'html')[0], 'lang'), 'zh-CN');
assert.ok(text(chinese).includes(siteCopy['zh-CN'].hero.title));
assert.ok(text(chinese).includes(chromeCopy['zh-CN'].menu));
for (const locale of ['en', 'pl', 'zh-CN']) {
  const html = await readFile(path.join(dist, localeHref(locale), 'index.html'), 'utf8');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(
    (match) => JSON.parse(match[1])
  );
  const faq = schemas.find((schema) => schema['@type'] === 'FAQPage');
  assert.deepEqual(
    faq.mainEntity.map((item) => item.name),
    faqs[locale].map((item) => item.question)
  );
}
console.log(
  `PASS: 3 locale copy shapes; ${productPaths.length * 2 + 1} localized product/legal/blog outputs; ${htmlFiles.length} HTML files and ${checkedLinks} local links; metadata, alternates, accessible labels, FAQ parity and English-leak checks.`
);
console.log(
  `Static checks only; no browser layout, theme interaction, mobile-menu interaction or screenshot-pixel translation claim. Root: ${pathToFileURL(root)}`
);
