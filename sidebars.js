// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 唐诗
  tangSidebar: [
    'poetry/tang/intro',
    'poetry/tang/xiang-si',
    'poetry/tang/deng-gao',
    'poetry/tang/chun-xiao',
    'poetry/tang/jing-ye-si',
    'poetry/tang/chun-jiang-hua-yue-ye',
    'poetry/tang/hua-tang-chun',
    {
      type: 'category',
      label: '诗人',
      collapsed: false,
      items: [
        'poetry/tang/poets/libai',
        'poetry/tang/poets/dufu',
        'poetry/tang/poets/wangwei']
    }
  ],

  // 宋词
  songSidebar: [
    'poetry/song/intro',
    {
      type: 'category',
      label: '词人',
      collapsed: false,
      items: [
        'poetry/song/poets/sushi',
        'poetry/song/poets/liyu'
      ]
    }
  ],

  // 元曲
  yuanSidebar: [
    'poetry/yuan/intro',
    {
      type: 'category',
      label: '曲家',
      collapsed: false,
      items: [
        'poetry/yuan/poets/mazhiyuan',
        'poetry/yuan/poets/wangshifu'
      ]
    }
  ],

  // 其他
  othersSidebar: [
    'poetry/others/intro',
    {
      type: 'category',
      label: '无题诗',
      collapsed: false,
      items: [
        'poetry/others/poem-1735650001',
        'poetry/others/poem-1735650002',
        'poetry/others/poem-1735650003',
        'poetry/others/poem-1735650004',
        'poetry/others/poem-1735650005'
      ]
    },
    'poetry/others/poem-1735650006',
    'poetry/others/poem-1735650007',
    'poetry/others/kongque',
    'poetry/others/mulan',
    'poetry/others/quyuan',
    'poetry/others/chuci',
    'poetry/others/shijing',
    {
      type: 'category',
      label: '诗人',
      collapsed: false,
      items: [
        'poetry/others/poets/caocao',
        'poetry/others/poets/quyuan',
        'poetry/others/poets/anonymous']
    }
  ]
};

module.exports = sidebars;
