---
sidebar_position: 3
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 元曲

<PinyinSwitch />

export const tianJingZhong = {
  title: "天净沙·秋思",
  author: "马致远",
  content: [
    "枯藤老树昏鸦，",
    "小桥流水人家，",
    "古道西风瘦马。",
    "夕阳西下，",
    "断肠人在天涯。"
  ],
  pinyinData: [
    ["kū", "téng", "lǎo", "shù", "hūn", "yā"],
    ["xiǎo", "qiáo", "liú", "shuǐ", "rén", "jiā"],
    ["gǔ", "dào", "xī", "fēng", "shòu", "mǎ"],
    ["xī", "yáng", "xī", "xià"],
    ["duàn", "cháng", "rén", "zài", "tiān", "yá"]
  ]
};

export const siShengYuan = {
  title: "四声猿·秋",
  author: "王实甫",
  content: [
    "碧云天，黄叶地，",
    "秋色连波，波上寒烟翠。",
    "山映斜阳天接水，",
    "芳草无情，更在斜阳外。"
  ],
  pinyinData: [
    ["bì", "yún", "tiān", "huáng", "yè", "dì"],
    ["qiū", "sè", "lián", "bō", "bō", "shàng", "hán", "yān", "cuì"],
    ["shān", "yìng", "xié", "yáng", "tiān", "jiē", "shuǐ"],
    ["fāng", "cǎo", "wú", "qíng", "gèng", "zài", "xié", "yáng", "wài"]
  ]
};

<PinyinPoem {...tianJingZhong} />

<PinyinPoem {...siShengYuan} /> 