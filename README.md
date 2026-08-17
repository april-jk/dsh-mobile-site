# DSH Mobile Remote website

Static promotional and documentation site for [DSH Mobile Remote](https://github.com/april-jk/dsh-mobile-suite), published at [dshmobile.online](https://dshmobile.online).

The site is based on the MIT-licensed [AstroWind](https://github.com/arthelokyo/astrowind) template and keeps its Astro, Tailwind CSS, sitemap, RSS, image optimization, and metadata infrastructure.

## Development

Node.js 22.22.3 or newer is required.

```bash
npm ci
npm run dev
```

The development server starts on `http://localhost:4321`.

## Verification

```bash
npm run generate:assets
npm run check
npm run build
```

## Deployment

Pushes to `main` run checks, build the static site, and deploy `dist/` to GitHub Pages. The repository Pages configuration uses `dshmobile.online` as its custom domain.

DNS is managed in Cloudflare. The website records must not replace or proxy the independent `relay.dshmobile.online` service record.

### HTTPS recovery

Keep the apex and `www` website records DNS-only while GitHub provisions its certificate. GitHub documents that HTTPS can take up to an hour after a custom-domain or DNS change. If DNS already resolves to GitHub Pages but the certificate job was never created, remove and re-add the Pages custom domain to retrigger issuance:

```bash
gh api --method PUT repos/april-jk/dsh-mobile-site/pages -F cname=null
gh api --method PUT repos/april-jk/dsh-mobile-site/pages \
  -f cname=dshmobile.online \
  -f build_type=workflow
```

Removing the custom domain briefly serves the site only from its default `github.io` URL. After GitHub finishes issuing the certificate, enforce HTTPS and verify both hostnames:

```bash
gh api --method PUT repos/april-jk/dsh-mobile-site/pages \
  -F https_enforced=true \
  -f cname=dshmobile.online \
  -f build_type=workflow
curl -I https://dshmobile.online/
curl -I https://www.dshmobile.online/
```

## Content boundaries

- Product claims must match the Suite and component repositories.
- The project must always be identified as an unofficial community project.
- Describe 0.1.3 narrowly as end-to-end encryption for DSH session content between Mobile and Companion; retain the documented metadata and forward-secrecy limits.
- Do not publish release metrics, compatibility claims, or user testimonials without a source.

## License

The website and upstream AstroWind template are distributed under the [MIT License](LICENSE.md).
