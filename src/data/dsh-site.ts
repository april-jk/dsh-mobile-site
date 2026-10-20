export type SiteLocale = 'en' | 'pl' | 'zh-CN';

export const releaseUrl = 'https://github.com/april-jk/dsh-mobile-suite/releases/latest';
export const sourceUrl = 'https://github.com/april-jk/dsh-mobile-suite';

export const siteCopy = {
  en: {
    lang: 'en',
    hero: {
      label: 'Open source Android remote',
      title: 'DeepSeek Harness on your phone',
      subtitle: 'Pair once, open your local Harness, and submit normal tasks from Android through the familiar Web UI.',
      primary: 'Download APK',
      secondary: 'View source',
      disclaimer:
        'Unofficial community project. Independently developed and not reviewed, endorsed, or supported by DeepSeek.',
    },
    workflow: {
      title: 'Remote access without a public computer port',
      body: 'The phone, Relay, and computer each have one clear job. Your local DSH listener stays local.',
      items: [
        {
          title: 'Phone',
          body: 'Sign in, scan the encrypted pairing QR code, then choose an online computer.',
          icon: 'tabler:device-mobile',
        },
        {
          title: 'Computer',
          body: 'The plugin follows the DSH Web process. DSH stays bound to 127.0.0.1:3080.',
          icon: 'tabler:device-laptop',
        },
        {
          title: 'Relay',
          body: 'Routes authenticated opaque frames without receiving the DSH content key.',
          icon: 'tabler:arrows-exchange',
        },
      ],
    },
    steps: {
      title: 'Pair. Open. Run.',
      body: 'The remote flow stays inside the interfaces you already use.',
      items: [
        {
          title: 'Install and start',
          body: 'Install the signed Android APK and the pinned DSH plugin, then start DSH Web.',
        },
        {
          title: 'Pair the phone',
          body: 'Open Settings > Remote Access, then scan the encrypted QR code.',
        },
        {
          title: 'Use the normal Harness UI',
          body: 'Choose the computer, create a task, submit instructions, and follow progress in real time.',
        },
      ],
    },
    harness: {
      title: 'The real Harness workspace, fitted to mobile',
      body: 'Keep the normal workspace picker, mode, model, task composer, live reasoning status, elapsed time, and stop control.',
      link: 'See how remote sessions work',
    },
    security: {
      title: 'Outbound-only from the computer',
      body: 'The Companion opens an outbound WSS connection. It does not create a public listener or send the device token to the phone.',
      warning: 'Version 0.1.4 encrypts DSH session content end to end; traffic metadata remains visible to the Relay.',
      nodes: ['Android phone', 'HTTPS/WSS Relay', 'Local DSH'],
      link: 'Read the security model',
    },
    relay: {
      title: 'Hosted by default. Self-hosted when you need it.',
      body: 'Public builds can switch to a compatible private Relay without recompiling the app.',
      hosted: {
        title: 'Hosted Relay',
        body: 'Start quickly with relay.dshmobile.online. The phone and computer use the same account boundary.',
      },
      private: {
        title: 'Private Relay',
        body: 'Deploy the MIT-licensed Relay behind HTTPS, persist its data, and point both ends to your origin.',
      },
      link: 'Deploy a private Relay',
    },
    faqTitle: 'Questions before you pair',
    faqBody: 'Straight answers about compatibility, traffic, and project status.',
    cta: {
      title: 'Put your local Harness within reach',
      body: 'Download the signed Android build, verify its checksum, and pair it from DSH settings.',
    },
  },
  pl: {
    lang: 'pl',
    hero: {
      label: 'Otwarty klient zdalny na Androida',
      title: 'DeepSeek Harness w Twoim telefonie',
      subtitle:
        'Sparuj urządzenia raz, otwórz lokalny Harness i wysyłaj zwykłe zadania z Androida przez znany interfejs WWW.',
      primary: 'Pobierz APK',
      secondary: 'Zobacz kod źródłowy',
      disclaimer:
        'Nieoficjalny projekt społecznościowy. Rozwijany niezależnie; nie był oceniany, polecany ani wspierany przez DeepSeek.',
    },
    workflow: {
      title: 'Zdalny dostęp bez publicznego portu na komputerze',
      body: 'Telefon, Relay i komputer mają jasno określone zadania. Lokalny serwer DSH pozostaje lokalny.',
      items: [
        {
          title: 'Telefon',
          body: 'Zaloguj się, zeskanuj szyfrowany kod QR do parowania i wybierz komputer online.',
          icon: 'tabler:device-mobile',
        },
        {
          title: 'Komputer',
          body: 'Wtyczka działa razem z procesem DSH Web. DSH nadal nasłuchuje na 127.0.0.1:3080.',
          icon: 'tabler:device-laptop',
        },
        {
          title: 'Relay',
          body: 'Przekazuje uwierzytelnione, nieprzezroczyste ramki, nie otrzymując klucza treści DSH.',
          icon: 'tabler:arrows-exchange',
        },
      ],
    },
    steps: {
      title: 'Sparuj. Otwórz. Uruchom.',
      body: 'Zdalna praca odbywa się w interfejsach, które już znasz.',
      items: [
        {
          title: 'Zainstaluj i uruchom',
          body: 'Zainstaluj podpisany APK na Androida i wtyczkę DSH w przypiętej wersji, a następnie uruchom DSH Web.',
        },
        {
          title: 'Sparuj telefon',
          body: 'Otwórz ustawienia dostępu zdalnego (Settings > Remote Access) i zeskanuj szyfrowany kod QR.',
        },
        {
          title: 'Korzystaj ze zwykłego interfejsu Harness',
          body: 'Wybierz komputer, utwórz zadanie, wyślij instrukcje i śledź postęp na żywo.',
        },
      ],
    },
    harness: {
      title: 'Prawdziwy obszar roboczy Harness na ekranie telefonu',
      body: 'Zachowujesz wybór obszaru roboczego, trybu i modelu, edytor zadania, stan rozumowania na żywo, czas wykonania i przycisk zatrzymania.',
      link: 'Jak działają sesje zdalne',
    },
    security: {
      title: 'Tylko połączenia wychodzące z komputera',
      body: 'Companion otwiera wychodzące połączenie WSS. Nie uruchamia publicznego serwera i nie wysyła tokenu urządzenia do telefonu.',
      warning: 'Wersja 0.1.4 szyfruje treść sesji DSH od końca do końca; metadane ruchu pozostają widoczne dla Relay.',
      nodes: ['Telefon z Androidem', 'Relay HTTPS/WSS', 'Lokalny DSH'],
      link: 'Poznaj model bezpieczeństwa',
    },
    relay: {
      title: 'Domyślnie hosting. Własny serwer, gdy go potrzebujesz.',
      body: 'Publiczne wersje aplikacji mogą przełączyć się na zgodny prywatny Relay bez ponownej kompilacji.',
      hosted: {
        title: 'Hostowany Relay',
        body: 'Zacznij szybko z relay.dshmobile.online. Telefon i komputer korzystają z tej samej granicy konta.',
      },
      private: {
        title: 'Prywatny Relay',
        body: 'Wdróż Relay na licencji MIT za HTTPS, zapewnij trwałe przechowywanie danych i ustaw ten sam origin po obu stronach.',
      },
      link: 'Wdróż prywatny Relay',
    },
    faqTitle: 'Pytania przed parowaniem',
    faqBody: 'Konkretne odpowiedzi o zgodności, ruchu i statusie projektu.',
    cta: {
      title: 'Twój lokalny Harness zawsze pod ręką',
      body: 'Pobierz podpisaną wersję na Androida, sprawdź sumę kontrolną i sparuj urządzenia w ustawieniach DSH.',
    },
  },
  'zh-CN': {
    lang: 'zh-CN',
    hero: {
      label: '开源 Android 遥控端',
      title: '在手机上使用 DeepSeek Harness',
      subtitle: '一次配对，在 Android 上打开本地 Harness，并通过原有 Web UI 正常提交任务。',
      primary: '下载 APK',
      secondary: '查看源码',
      disclaimer: '非官方社区项目。由社区独立开发，未经 DeepSeek 审核、推荐或支持。',
    },
    workflow: {
      title: '远程访问，不开放电脑公网端口',
      body: '手机、Relay 与电脑职责清晰，本地 DSH 监听始终留在本地。',
      items: [
        {
          title: '手机',
          body: '登录后扫描加密配对二维码，再选择在线电脑。',
          icon: 'tabler:device-mobile',
        },
        {
          title: '电脑',
          body: '插件随 DSH Web 进程启停，DSH 继续监听 127.0.0.1:3080。',
          icon: 'tabler:device-laptop',
        },
        {
          title: 'Relay',
          body: '中转已认证的不透明密文帧，不持有 DSH 内容密钥。',
          icon: 'tabler:arrows-exchange',
        },
      ],
    },
    steps: {
      title: '配对，打开，运行',
      body: '远程流程仍然使用你熟悉的 DSH 界面。',
      items: [
        {
          title: '安装并启动',
          body: '安装已签名 Android APK 与固定版本的 DSH 插件，然后启动 DSH Web。',
        },
        {
          title: '配对手机',
          body: '打开 Settings > Remote Access，然后扫描加密二维码。',
        },
        {
          title: '使用原有 Harness UI',
          body: '选择电脑、创建任务、提交指令，并实时查看任务进度。',
        },
      ],
    },
    harness: {
      title: '真实 Harness 工作区，适配手机屏幕',
      body: '保留工作区选择、模式、模型、任务输入、实时推理状态、耗时与停止控制。',
      link: '了解远程会话流程',
    },
    security: {
      title: '电脑端只建立出站连接',
      body: 'Companion 只建立出站 WSS 连接，不创建公网监听，也不会把设备 Token 发给手机。',
      warning: '0.1.4 已端到端加密 DSH 会话内容；Relay 仍可见流量元数据。',
      nodes: ['Android 手机', 'HTTPS/WSS Relay', '本地 DSH'],
      link: '阅读安全模型',
    },
    relay: {
      title: '默认公共 Relay，也支持自行部署',
      body: '公开构建无需重新编译，即可切换到兼容的私有 Relay。',
      hosted: {
        title: '公共 Relay',
        body: '使用 relay.dshmobile.online 快速开始，手机和电脑位于同一账号边界。',
      },
      private: {
        title: '私有 Relay',
        body: '在 HTTPS 后部署 MIT 许可的 Relay，持久化数据，并让两端使用相同 Origin。',
      },
      link: '部署私有 Relay',
    },
    faqTitle: '配对前常见问题',
    faqBody: '关于兼容性、流量与项目状态的直接说明。',
    cta: {
      title: '随时打开你的本地 Harness',
      body: '下载已签名 Android 安装包，校验 SHA-256，然后在 DSH 设置中完成配对。',
    },
  },
} as const;

export const faqs = {
  en: [
    {
      question: 'Is DSH Mobile an official DeepSeek product?',
      answer:
        'No. It is an independently developed open-source community project. DeepSeek has not reviewed, endorsed, or supported it.',
    },
    {
      question: 'Does it expose DSH directly to the internet?',
      answer:
        'No. DSH remains on 127.0.0.1:3080. The computer-side plugin opens only an outbound WSS connection to the configured Relay.',
    },
    {
      question: 'Can I use my own Relay server?',
      answer:
        'Yes. Deploy the open-source Relay behind HTTPS, then configure the same origin in the mobile app and before starting DSH.',
    },
    {
      question: 'Is Relay traffic end-to-end encrypted?',
      answer:
        'Yes for DSH session content in version 0.1.4. Mobile and Companion encrypt HTTP, SSE, and WebSocket envelopes; the Relay still sees account/device associations, timing, and ciphertext sizes.',
    },
    {
      question: 'Which mobile platforms are available?',
      answer:
        'The current public release provides a signed Android APK for Android 8.0 or newer. The Flutter source also targets iOS 14 or newer.',
    },
    {
      question: 'Does the phone receive the computer device token?',
      answer:
        'No. The mobile client uses account access tokens and short-lived WebView tickets. The device credential stays on the computer.',
    },
    {
      question: 'Does the Relay save my Harness tasks?',
      answer:
        'It does not persist forwarded HTTP or WebSocket bodies. It stores accounts, devices, pairing state, and bounded access metadata.',
    },
  ],
  pl: [
    {
      question: 'Czy DSH Mobile jest oficjalnym produktem DeepSeek?',
      answer:
        'Nie. To niezależny, otwarty projekt społecznościowy. DeepSeek go nie oceniał, nie poleca ani nie wspiera.',
    },
    {
      question: 'Czy DSH jest bezpośrednio udostępniany w internecie?',
      answer:
        'Nie. DSH pozostaje na 127.0.0.1:3080. Wtyczka na komputerze otwiera wyłącznie wychodzące połączenie WSS do skonfigurowanego Relay.',
    },
    {
      question: 'Czy mogę używać własnego serwera Relay?',
      answer:
        'Tak. Wdróż otwarty Relay za HTTPS, a następnie ustaw ten sam origin w aplikacji mobilnej i przed uruchomieniem DSH.',
    },
    {
      question: 'Czy ruch przez Relay jest szyfrowany od końca do końca?',
      answer:
        'Tak, w przypadku treści sesji DSH w wersji 0.1.4. Mobile i Companion szyfrują koperty HTTP, SSE i WebSocket; Relay nadal widzi powiązania kont i urządzeń, czas oraz rozmiary szyfrogramów.',
    },
    {
      question: 'Jakie platformy mobilne są dostępne?',
      answer:
        'Obecne publiczne wydanie zawiera podpisany APK dla Androida 8.0 lub nowszego. Kod Fluttera jest też przeznaczony dla iOS 14 lub nowszego.',
    },
    {
      question: 'Czy telefon otrzymuje token urządzenia komputera?',
      answer:
        'Nie. Klient mobilny używa tokenów dostępu do konta i krótkotrwałych biletów WebView. Dane uwierzytelniające urządzenia pozostają na komputerze.',
    },
    {
      question: 'Czy Relay zapisuje moje zadania Harness?',
      answer:
        'Nie utrwala przekazywanej treści HTTP ani WebSocket. Przechowuje konta, urządzenia, stan parowania i ograniczone metadane dostępu.',
    },
  ],
  'zh-CN': [
    {
      question: 'DSH Mobile 是 DeepSeek 官方产品吗？',
      answer: '不是。这是社区独立开发的开源项目，未经 DeepSeek 审核、推荐或支持。',
    },
    {
      question: '它会把 DSH 直接暴露到公网吗？',
      answer: '不会。DSH 继续监听 127.0.0.1:3080，电脑端插件只向配置的 Relay 建立出站 WSS 连接。',
    },
    {
      question: '可以使用自己的 Relay 吗？',
      answer: '可以。将开源 Relay 部署在 HTTPS 后，再让手机应用与 DSH 启动环境使用相同 Origin。',
    },
    {
      question: 'Relay 流量是端到端加密的吗？',
      answer:
        '0.1.4 已对 DSH 会话内容端到端加密。Mobile 与 Companion 加密 HTTP、SSE 和 WebSocket 信封；Relay 仍可见账号/设备关系、时序与密文大小。',
    },
    {
      question: '目前支持哪些移动平台？',
      answer: '当前公开 Release 提供 Android 8.0 及以上的已签名 APK。Flutter 源码也以 iOS 14 及以上为目标。',
    },
    {
      question: '手机会拿到电脑设备 Token 吗？',
      answer: '不会。移动端使用账号访问 Token 与短期 WebView Ticket，设备凭据只保留在电脑上。',
    },
    {
      question: 'Relay 会保存 Harness 任务内容吗？',
      answer: '不会持久化中转的 HTTP 或 WebSocket Body，但会保存账号、设备、配对状态与受限访问元数据。',
    },
  ],
} as const;

// Locale routing covers only published translations. Chinese keeps its existing landing route.
export const productPaths = [
  '/',
  '/download/',
  '/how-it-works/',
  '/security/',
  '/self-hosted-relay/',
  '/privacy/',
  '/terms/',
  '/blog/',
  '/blog/dsh-mobile-security-boundaries/',
  '/blog/remote-deepseek-harness-from-android/',
  '/blog/when-to-self-host-dsh-relay/',
] as const;
export const localeFromPath = (path: string): SiteLocale =>
  /^\/pl(?:\/|$)/.test(path) ? 'pl' : /^\/zh-cn(?:\/|$)/.test(path) ? 'zh-CN' : 'en';
export const unlocalizedPath = (path: string) => path.replace(/^\/(?:pl|zh-cn)(?=\/|$)/, '') || '/';

// Pages with a published Polish translation. Unlisted product pages stay in
// English rather than pointing at a Polish URL that does not exist.
export const polishPaths: ReadonlySet<string> = new Set(productPaths);
export const localeHref = (locale: SiteLocale, path = '/') => {
  if (locale === 'pl') return polishPaths.has(path) ? `/pl${path === '/' ? '/' : path}` : path;
  return locale === 'zh-CN' && path === '/' ? '/zh-cn/' : path;
};
export const localeAlternates = (path: string) => {
  const base = unlocalizedPath(path.endsWith('/') ? path : `${path}/`);
  if (!(productPaths as readonly string[]).includes(base)) return [];
  return [
    { lang: 'en', href: base },
    ...(polishPaths.has(base) ? [{ lang: 'pl', href: localeHref('pl', base) }] : []),
    ...(base === '/' ? [{ lang: 'zh-CN', href: '/zh-cn/' }] : []),
    { lang: 'x-default', href: base },
  ];
};

export const chromeCopy = {
  en: {
    how: 'How it works',
    private: 'Private Relay',
    security: 'Security',
    blog: 'Blog',
    languages: 'Languages',
    download: 'Download',
    use: 'Use DSH Mobile',
    apk: 'Download Android APK',
    model: 'Security model',
    open: 'Open source',
    suite: 'Mobile Suite',
    plugin: 'DSH plugin',
    relay: 'Relay server',
    resources: 'Resources',
    guide: 'Private Relay guide',
    release: 'Latest release',
    discussion: 'Community discussion',
    privacy: 'Privacy',
    terms: 'Terms',
    rss: 'RSS feed (English)',
    source: 'GitHub source',
    nav: 'Main navigation',
    menu: 'Toggle Menu',
    theme: 'Toggle between Dark and Light mode',
    home: 'DSH Mobile Remote home',
    footnote:
      '<strong>Unofficial community project.</strong> Not reviewed, endorsed, or supported by DeepSeek.<br />Built from <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a> under the MIT License.',
  },
  pl: {
    how: 'Jak to działa',
    private: 'Prywatny Relay',
    security: 'Bezpieczeństwo',
    blog: 'Poradniki',
    languages: 'Języki',
    download: 'Pobierz',
    use: 'Korzystaj z DSH Mobile',
    apk: 'Pobierz APK na Androida',
    model: 'Model bezpieczeństwa',
    open: 'Otwarty kod źródłowy',
    suite: 'Pakiet Mobile',
    plugin: 'Wtyczka DSH',
    relay: 'Serwer Relay',
    resources: 'Zasoby',
    guide: 'Poradnik prywatnego Relay',
    release: 'Najnowsze wydanie',
    discussion: 'Dyskusja społeczności',
    privacy: 'Prywatność',
    terms: 'Warunki',
    rss: 'Kanał RSS (angielski)',
    source: 'Kod źródłowy na GitHubie',
    nav: 'Nawigacja główna',
    menu: 'Otwórz lub zamknij menu',
    theme: 'Przełącz między jasnym a ciemnym motywem',
    home: 'DSH Mobile Remote — strona główna',
    footnote:
      '<strong>Nieoficjalny projekt społecznościowy.</strong> Nie był oceniany, polecany ani wspierany przez DeepSeek.<br />Na bazie <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a> na licencji MIT.',
  },
  'zh-CN': {
    how: '使用流程（英文）',
    private: '私有 Relay（英文）',
    security: '安全（英文）',
    blog: '指南（英文）',
    languages: '语言',
    download: '下载（英文）',
    use: '使用 DSH Mobile',
    apk: '下载 Android APK（英文）',
    model: '安全模型（英文）',
    open: '开源',
    suite: 'Mobile 套件',
    plugin: 'DSH 插件',
    relay: 'Relay 服务端',
    resources: '资源',
    guide: '私有 Relay 指南（英文）',
    release: '最新 Release',
    discussion: '社区讨论',
    privacy: '隐私（英文）',
    terms: '条款（英文）',
    rss: 'RSS 订阅（英文）',
    source: 'GitHub 源码',
    nav: '主导航',
    menu: '展开或收起菜单',
    theme: '切换深色和浅色主题',
    home: 'DSH Mobile Remote 首页',
    footnote:
      '<strong>非官方社区项目。</strong>未经 DeepSeek 审核、推荐或支持。<br />基于 MIT 许可的 <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a> 构建。',
  },
} as const;

export const screenCopy = {
  en: {
    screens: 'Real DSH Mobile product screens',
    running: 'A DeepSeek Harness task running on a phone',
    devices: 'Paired computers in DSH Mobile',
    login: 'DSH Mobile login and Relay selection',
    availability: 'Computer availability on the phone',
    task: 'DeepSeek Harness new task screen on a phone',
    live: 'Live DeepSeek Harness task status on a phone',
    release: 'Latest release',
  },
  pl: {
    screens: 'Oryginalne ekrany produktu DSH Mobile',
    running: 'Zadanie DeepSeek Harness uruchomione w telefonie — oryginalny zrzut ekranu',
    devices: 'Sparowane komputery w DSH Mobile — oryginalny zrzut ekranu',
    login: 'Logowanie i wybór Relay w DSH Mobile — oryginalny zrzut ekranu',
    availability: 'Dostępność komputerów w telefonie — oryginalny zrzut ekranu',
    task: 'Nowe zadanie DeepSeek Harness w telefonie — oryginalny zrzut ekranu',
    live: 'Stan zadania DeepSeek Harness na żywo — oryginalny zrzut ekranu',
    release: 'Najnowsze wydanie',
  },
  'zh-CN': {
    screens: 'DSH Mobile 真实产品界面',
    running: '手机中正在运行的 DeepSeek Harness 任务',
    devices: 'DSH Mobile 已配对电脑列表',
    login: 'DSH Mobile 登录与 Relay 选择界面',
    availability: '手机上的电脑在线状态',
    task: '手机中的 DeepSeek Harness 新任务界面',
    live: '手机中的 DeepSeek Harness 实时任务状态',
    release: '最新 Release',
  },
} as const;
