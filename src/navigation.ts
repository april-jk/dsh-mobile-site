import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';
import { chromeCopy, localeHref, productPaths, releaseUrl, unlocalizedPath, type SiteLocale } from './data/dsh-site';

export function navigationFor(locale: SiteLocale, pathname = '/') {
  const c = chromeCopy[locale];
  const link = (path: string) => getPermalink(localeHref(locale, path));
  const base = unlocalizedPath(pathname.endsWith('/') ? pathname : `${pathname}/`);
  return {
    headerData: {
      links: [
        { text: c.how, href: link('/how-it-works/') },
        { text: c.private, href: link('/self-hosted-relay/') },
        { text: c.security, href: link('/security/') },
        { text: c.blog, href: locale === 'pl' ? link('/blog/') : getBlogPermalink() },
        {
          text: c.languages,
          links: [
            { text: 'English', href: getPermalink((productPaths as readonly string[]).includes(base) ? base : '/') },
            {
              text: 'Polski',
              href: getPermalink(localeHref('pl', (productPaths as readonly string[]).includes(base) ? base : '/')),
            },
            { text: '简体中文', href: getPermalink('/zh-cn/') },
          ],
        },
      ],
      actions: [{ text: c.download, href: link('/download/') }],
    },
    footerData: {
      links: [
        {
          title: c.use,
          links: [
            { text: c.apk, href: link('/download/') },
            { text: c.how, href: link('/how-it-works/') },
            { text: c.model, href: link('/security/') },
          ],
        },
        {
          title: c.open,
          links: [
            { text: c.suite, href: 'https://github.com/april-jk/dsh-mobile-suite' },
            { text: c.plugin, href: 'https://github.com/april-jk/dsh-mobile-plugin' },
            { text: c.relay, href: 'https://github.com/april-jk/dsh-relay' },
          ],
        },
        {
          title: c.resources,
          links: [
            { text: c.guide, href: link('/self-hosted-relay/') },
            { text: c.release, href: releaseUrl },
            { text: c.discussion, href: 'https://github.com/deepseek-ai/deepseek-harness/discussions/2520' },
          ],
        },
      ],
      secondaryLinks: [
        { text: c.privacy, href: link('/privacy/') },
        { text: c.terms, href: link('/terms/') },
      ],
      socialLinks: [
        { ariaLabel: c.rss, icon: 'tabler:rss', href: getAsset('/rss.xml') },
        { ariaLabel: c.source, icon: 'tabler:brand-github', href: 'https://github.com/april-jk/dsh-mobile-suite' },
      ],
      footNote: c.footnote,
    },
  };
}

export const { headerData, footerData } = navigationFor('en');
