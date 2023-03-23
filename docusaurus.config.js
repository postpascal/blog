const path = require('path')
const beian = ''

const announcementBarContent = `<a href="/typescript-full-stack-technology-trpc" target="_blank">Typescript 全栈最值得学习的技术栈 TRPC</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '大盗天放',
  titleDelimiter: '-',
  url: 'https://kuizuo.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tianfang',
  projectName: 'blog',
  tagline: '天地不仁',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content: '大盗天放',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, Java, Python, Apple, IOS, SwiftUI',
      },
      {
        name: 'keywords',
        content: '独立开发者, 独立投资人, 算法工程师, IOSAPP，数字游民',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '大盗天放',
      logo: {
        alt: '大盗天放',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          label: '阅读',
          to:'/docs/reading/readtest',

        },

        // {
        //   label: '阅读',
        //   position: 'left',
        //   items: [
        //     {
        //       label: '阅读',
        //       to: '/docs/reading/readtest',
        //     },
           
        //   ],
        // },

        {
          label: '投资',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
           
          ],
        },
        {
          label: '技术',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
           
          ],
        },
        {
          label: '学习',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '笔记',
              to: 'docs/skill/',
            },
            {
              label: '工具推荐',
              to: 'docs/tools/',
            },
            {
              label: '前端示例',
              to: 'https://example.kuizuo.cn',
            },
          ],
        },
        {
          label: '工具',
          position: 'right',
          items: [
            {
              label: 'API服务',
              to: 'https://api.kuizuo.cn',
            },
            {
              label: 'JS代码还原',
              to: 'https://js-de-obfuscator.kuizuo.cn',
            },
            {
              label: 'CyberChef加密',
              to: 'https://cipher.kuizuo.cn',
            },
            {
              label: 'Transform',
              to: 'https://transform.kuizuo.cn',
            },
            {
              label: '网盘',
              to: 'https://pan.kuizuo.cn',
            },
          ],
        },
        {
          label: '导航',
          position: 'right',
          to: 'resource',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
            {
              label: '前端示例',
              to: 'https://example.kuizuo.cn',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/postpascal',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/M8cVcjDxkz',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              position: 'right',
              to: 'friends',
            },
            {
              label: '导航',
              position: 'right',
              to: 'resource',
            },
          ],
        },
      ],
      copyright: `<p>Copyright © 2023 -大盗天放</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/postpascal',
      twitter: 'https://twitter.com/kuizuo',
      zhihu: 'https://www.zhihu.com/people/kuizuo',

    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '大盗天放的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '大盗天放的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '大盗天放',
          copyright: `Copyright © ${new Date().getFullYear()} 大盗天放 Built with Docusaurus`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(25 25 112)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
