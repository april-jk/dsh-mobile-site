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

## Content boundaries

- Product claims must match the Suite and component repositories.
- The project must always be identified as an unofficial community project.
- Do not describe the MVP as application-level end-to-end encrypted.
- Do not publish release metrics, compatibility claims, or user testimonials without a source.

## License

The website and upstream AstroWind template are distributed under the [MIT License](LICENSE.md).
