import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

const releaseUrl = 'https://github.com/april-jk/dsh-mobile-suite/releases/latest';

export const headerData = {
  links: [
    { text: 'How it works', href: getPermalink('/how-it-works') },
    { text: 'Private Relay', href: getPermalink('/self-hosted-relay') },
    { text: 'Security', href: getPermalink('/security') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: '简体中文', href: getPermalink('/zh-cn') },
  ],
  actions: [{ text: 'Download', href: getPermalink('/download') }],
};

export const footerData = {
  links: [
    {
      title: 'Use DSH Mobile',
      links: [
        { text: 'Download Android APK', href: getPermalink('/download') },
        { text: 'How it works', href: getPermalink('/how-it-works') },
        { text: 'Security model', href: getPermalink('/security') },
      ],
    },
    {
      title: 'Open source',
      links: [
        { text: 'Mobile Suite', href: 'https://github.com/april-jk/dsh-mobile-suite' },
        { text: 'DSH plugin', href: 'https://github.com/april-jk/dsh-mobile-plugin' },
        { text: 'Relay server', href: 'https://github.com/april-jk/dsh-relay' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Private Relay guide', href: getPermalink('/self-hosted-relay') },
        { text: 'Latest release', href: releaseUrl },
        {
          text: 'Community discussion',
          href: 'https://github.com/deepseek-ai/deepseek-harness/discussions/2520',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS feed', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'GitHub source',
      icon: 'tabler:brand-github',
      href: 'https://github.com/april-jk/dsh-mobile-suite',
    },
  ],
  footNote: `
    <strong>Unofficial community project.</strong> Not reviewed, endorsed, or supported by DeepSeek.<br />
    Built from <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a> under the MIT License.
  `,
};
