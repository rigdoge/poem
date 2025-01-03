// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '古诗文',
  tagline: '传统诗词赏析',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://poem.chenyinke.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // Remove or comment out these lines since we're not using GitHub Pages
  // organizationName: 'tattoomaster',
  // projectName: 'my-website',

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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
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
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3b82f6',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#3b82f6',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: '#3b82f6',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.svg',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#3b82f6',
          },
        ],
      },
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
        title: '古诗词',
        logo: {
          alt: '古诗词 Logo',
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
        copyright: `Copyright © ${new Date().getFullYear()} 一年五班 ｜小憨憨`,
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
        appId: 'COYED1GNJI',
        apiKey: 'be83f151341f8b228b95039fae1ad316',
        indexName: 'poetry-chenyinke',
        placeholder: '搜索诗词...',
        contextualSearch: false,
      },
    }),
};

export default config;
