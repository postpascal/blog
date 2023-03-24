const path = require('path')
const beian = '闽ICP备'
const math = require('remark-math');
const katex = require('rehype-katex');


const announcementBarContent = `<a href="/typescript-full-stack-technology-trpc" target="_blank">Typescript 全栈最值得学习的技术栈 TRPC</a>`
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '大盗天放',
  titleDelimiter: '-',
  url: 'https://ddtf.top',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tianfang',
  projectName: 'blog',
  tagline: '天地不仁',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
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
          label: '秩序目标',
          position: 'right',
          to:'https://www.orderokr.com/',
        },

        {
          label: '阅读',

          position: 'right',
          to:'/docs/reading/richdad',
        },
        {
          label: '投资',

          position: 'right',
          to: '/docs/invest/investMethodology',
        },
        {
          label: '技术',
          position: 'right',
          items: [
            {
              label: '标签',
              to: '/docs/tags',
            },
            {
              label: '机器学习',
              to: '/docs/dbscan',
            },
           
          ],
        },
        {
          label: '产品',
          position: 'right',
          items: [
            {
              label: '秩序目标',
              to: 'https://www.orderokr.com/',
            },
            {
              label: '巴菲特说',
              to: 'https://buffettsay.vercel.app/',
            },
           
          ],
        },
        // {
        //   label: '学习',
        //   position: 'right',
        //   items: [
        //     {
        //       label: '标签',
        //       to: 'tags',
        //     },
        //     {
        //       label: '归档',
        //       to: 'archive',
        //     },
        //     {
        //       label: '笔记',
        //       to: 'docs/skill/',
        //     },
        //     {
        //       label: '工具推荐',
        //       to: 'docs/tools/',
        //     },
        //   ],
        // },

        // {
        //   label: '导航',
        //   position: 'right',
        //   to: 'resource',
        // },
        // {
        //   label: '项目',
        //   position: 'right',
        //   to: 'project',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
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
              to: '/docs/tags',
            },
            {
              label: '归档',
              to: 'archive',
            },

          ],
        },
        {
          title: '产品',
          items: [
            {
              label: '秩序目标',
              href: 'https://www.orderokr.com/',
            },
            {
              label: '巴菲特说',
              href: 'https://buffettsay.vercel.app/',
            },
          
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '即刻',
              href: 'https://okjk.co/LNZ7PQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dadaotianfang',
            },
            {
              label: '小红书',
              href: 'https://www.xiaohongshu.com/user/profile/635e8475000000001901f56a?xhsshare=CopyLink&appuid=635e8475000000001901f56a&apptime=1669426431',
            },

          ],
        },
        // {
        //   title: '更多',
        //   items: [
        //     {
        //       label: '友链',
        //       position: 'right',
        //       to: 'friends',
        //     },
        //     {
        //       label: '导航',
        //       position: 'right',
        //       to: 'resource',
        //     },
        //   ],
        // },
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
    // algolia: {
    //   appId: 'GV6YN1ODMO',
    //   apiKey: '50303937b0e4630bec4a20a14e3b7872',
    //   indexName: 'kuizuo',
    // },
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
    // giscus: {
    //   repo: 'kuizuo/blog',
    //   repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOF7NJDM4CPK95',
    //   theme: 'light',
    //   darkTheme: 'dark',
    // },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/postpascal',
      twitter: 'https://twitter.com/dadaotianfang',
      jike:  'https://okjk.co/LNZ7PQ',
      redbook: 'https://www.xiaohongshu.com/user/profile/635e8475000000001901f56a?xhsshare=CopyLink&appuid=635e8475000000001901f56a&apptime=1669426431',
      zhihu: 'https://www.zhihu.com/people/opendayoff'

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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
        // editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        //   `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
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
