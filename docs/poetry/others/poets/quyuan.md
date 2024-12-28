---
sidebar_position: 1
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 屈原诗选

<PinyinSwitch />

export const poems = {
  liSao: {
    title: "离骚（节选）",
    author: "屈原",
    content: [
      "帝高阳之苗裔兮，",
      "朕皇考曰伯庸。",
      "摄提贞于孟陬兮，",
      "惟庚寅吾以降。"
    ],
    pinyinData: [
      ["dì", "gāo", "yáng", "zhī", "miáo", "yì", "xī"],
      ["zhèn", "huáng", "kǎo", "yuē", "bó", "yōng"],
      ["shè", "tí", "zhēn", "yú", "mèng", "zōu", "xī"],
      ["wéi", "gēng", "yín", "wú", "yǐ", "jiàng"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 