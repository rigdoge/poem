// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  liaoSidebar: [
    'liao/intro',
    {
      type: 'category',
      label: '第一章',
      items: [
        'liao/chapter1/article1',
        'liao/chapter1/article2',
      ],
      link: {
        type: 'generated-index',
        title: '第一章',
        description: '第一章的所有文章列表',
        keywords: ['guides'],
      },
    },
  ],
  chenSidebar: [
    'chen/intro',
    {
      type: 'category',
      label: '第一章',
      items: [
        'chen/chapter1/article1',
        'chen/chapter1/article2',
      ],
      link: {
        type: 'generated-index',
        title: '第一章',
        description: '第一章的所有文章列表',
        keywords: ['guides'],
      },
    },
  ],
  childrenSidebar: [
    'children/intro',
    {
      type: 'category',
      label: '第一章',
      items: [
        'children/chapter1/article1',
        'children/chapter1/article2',
      ],
      link: {
        type: 'generated-index',
        title: '第一章',
        description: '第一章的所有文章列表',
        keywords: ['guides'],
      },
    },
  ],
};

module.exports = sidebars;
