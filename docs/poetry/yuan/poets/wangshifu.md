---
sidebar_position: 2
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 王实甫曲选

<PinyinSwitch />

export const poems = {
  siShengYuan: {
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
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 