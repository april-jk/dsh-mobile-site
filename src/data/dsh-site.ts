export type SiteLocale = 'en' | 'zh-CN';

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
          body: 'Sign in, pair by QR or six-digit code, then choose an online computer.',
          icon: 'tabler:device-mobile',
        },
        {
          title: 'Computer',
          body: 'The plugin follows the DSH Web process. DSH stays bound to 127.0.0.1:3080.',
          icon: 'tabler:device-laptop',
        },
        {
          title: 'Relay',
          body: 'HTTPS/WSS carries authenticated traffic. Use the hosted Relay or deploy your own.',
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
          body: 'Open Settings > Remote Access, then scan the QR code or enter the six-digit code.',
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
      warning: 'The MVP uses TLS but does not yet add application-level end-to-end encryption.',
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
          body: '登录后扫描二维码或输入六位配对码，再选择在线电脑。',
          icon: 'tabler:device-mobile',
        },
        {
          title: '电脑',
          body: '插件随 DSH Web 进程启停，DSH 继续监听 127.0.0.1:3080。',
          icon: 'tabler:device-laptop',
        },
        {
          title: 'Relay',
          body: 'HTTPS/WSS 中转已认证流量，可使用公共 Relay 或自行部署。',
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
          body: '打开 Settings > Remote Access，扫码或输入六位配对码。',
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
      warning: '当前 MVP 使用 TLS，但尚未提供应用层端到端加密。',
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
        'Not at the application layer in the current MVP. HTTPS/WSS protects traffic in transit, but the Relay process can see forwarded content.',
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
      answer: '当前 MVP 没有应用层端到端加密。HTTPS/WSS 保护传输过程，但 Relay 进程能够看到中转内容。',
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
