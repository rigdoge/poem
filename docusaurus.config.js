// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '古诗词网',
  tagline: '传承中华文化，品味诗词之美',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://poetry.tschenfeng.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'tattoomaster',
  projectName: 'my-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tattoomaster/my-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tattoomaster/my-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '古诗词网',
        logo: {
          alt: '古诗词网 Logo',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tangSidebar',
            label: '唐诗',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'songSidebar',
            label: '宋词',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'yuanSidebar',
            label: '元曲',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'othersSidebar',
            label: '更多古诗',
            position: 'left',
          },
          {
            to: '/blog',
            position: 'right',
            className: 'header-blog-link',
            'aria-label': '博客',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '内容导航',
            items: [
              {
                label: '唐诗',
                to: '/docs/poetry/tang/intro',
              },
              {
                label: '宋词',
                to: '/docs/poetry/song/intro',
              },
              {
                label: '元曲',
                to: '/docs/poetry/yuan/intro',
              },
              {
                label: '其他',
                to: '/docs/poetry/others/intro',
              },
            ],
          },
          {
            title: '关注我们',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tattoomaster/my-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 古诗词网 | Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'FB58SOI0YV',
        apiKey: 'ea9b97e3a7aac8e80c2dab5f35271115',
        indexName: 'rigdoge',
        placeholder: '搜索诗词...',
        contextualSearch: false,
      },
    }),
};

export default config;
