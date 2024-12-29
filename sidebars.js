// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 唐诗
  tangSidebar: [
    'poetry/tang/intro',
    {
      type: 'category',
      label: '诗人',
      link: {
        type: 'generated-index',
        description: '按诗人分类浏览唐诗'
      },
      items: [
        'poetry/tang/poets/libai',
        'poetry/tang/poets/dufu',
        'poetry/tang/poets/wangwei'
      ],
    },
  ],

  // 宋词
  songSidebar: [
    'poetry/song/intro',
    {
      type: 'category',
      label: '词人',
      link: {
        type: 'generated-index',
        description: '按词人分类浏览宋词'
      },
      items: [
        'poetry/song/poets/sushi',
        'poetry/song/poets/liyu'
      ],
    },
  ],

  // 元曲
  yuanSidebar: [
    'poetry/yuan/intro',
    {
      type: 'category',
      label: '曲家',
      link: {
        type: 'generated-index',
        description: '按作者分类浏览元曲'
      },
      items: [
        'poetry/yuan/poets/mazhiyuan',
        'poetry/yuan/poets/wangshifu'
      ],
    },
  ],

  // 其他
  othersSidebar: [
    'poetry/others/intro',
    {
      type: 'category',
      label: '诗人',
      link: {
        type: 'generated-index',
        description: '按诗人分类浏览其他时期诗歌'
      },
      items: [
        'poetry/others/poets/caocao',
        'poetry/others/poets/quyuan',
        'poetry/others/poets/anonymous'
      ],
    },
  ],
};

module.exports = sidebars;
