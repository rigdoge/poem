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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '古诗词网',
        logo: {
          alt: '古诗词网 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: '诗词',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'tangSidebar',
                label: '唐诗',
              },
              {
                type: 'docSidebar',
                sidebarId: 'songSidebar',
                label: '宋词',
              },
              {
                type: 'docSidebar',
                sidebarId: 'yuanSidebar',
                label: '元曲',
              },
              {
                type: 'docSidebar',
                sidebarId: 'othersSidebar',
                label: '其他',
              },
            ],
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/tattoomaster/my-website',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
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
            title: '社区',
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
        copyright: `Copyright © ${new Date().getFullYear()} 古诗词网. Built with Docusaurus.`,
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
    }),
};

export default config;
