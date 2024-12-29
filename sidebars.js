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
    {
      type: 'category',
      label: '全唐诗',
      items: [
        {
          type: 'category',
          label: '五言绝句',
          items: [
            'poetry/tang/quantangshi/libai/jingye',
            'poetry/tang/quantangshi/libai/duzuojingting',
            'poetry/tang/quantangshi/wangwei/luchai',
            'poetry/tang/quantangshi/wangwei/songbie',
            'poetry/tang/quantangshi/dufu/yueye'
          ]
        },
        {
          type: 'category',
          label: '五言律诗',
          items: [
            'poetry/tang/quantangshi/dufu/chunwang',
            'poetry/tang/quantangshi/dufu/kuangfu'
          ]
        },
        {
          type: 'category',
          label: '七言绝句',
          items: [
            'poetry/tang/quantangshi/libai/wanglushan',
            'poetry/tang/quantangshi/libai/zaofabaidicheng',
            'poetry/tang/quantangshi/libai/qingpingdiao',
            'poetry/tang/quantangshi/libai/shangyangtai',
            'poetry/tang/quantangshi/libai/wangtianmen',
            'poetry/tang/quantangshi/dufu/jiangnanfeng'
          ]
        },
        {
          type: 'category',
          label: '七言律诗',
          items: [
            'poetry/tang/quantangshi/dufu/denggao',
            'poetry/tang/quantangshi/dufu/qiuxing'
          ]
        },
        {
          type: 'category',
          label: '乐府诗',
          items: [
            'poetry/tang/quantangshi/libai/jiangjinjiu',
            'poetry/tang/quantangshi/libai/shudaonan'
          ]
        },
        {
          type: 'category',
          label: '五言古诗',
          items: [
            'poetry/tang/quantangshi/libai/yuexiadu',
            'poetry/tang/quantangshi/libai/bajiuwenyue',
            'poetry/tang/quantangshi/dufu/wanghua'
          ]
        },
        {
          type: 'category',
          label: '七言古诗',
          items: [
            'poetry/tang/quantangshi/libai/mengyoutianmu'
          ]
        }
      ]
    }
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
        'poetry/others/poets/quyuan',
        'poetry/others/poets/anonymous'
      ],
    },
  ],
};

module.exports = sidebars;
