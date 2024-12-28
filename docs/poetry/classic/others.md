---
sidebar_position: 4
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 其他

<PinyinSwitch />

export const liSao = {
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
};

export const muLanCi = {
  title: "木兰辞",
  author: "佚名",
  content: [
    "唧唧复唧唧，",
    "木兰当户织。",
    "不闻机杼声，",
    "惟闻女叹息。"
  ],
  pinyinData: [
    ["jī", "jī", "fù", "jī", "jī"],
    ["mù", "lán", "dāng", "hù", "zhī"],
    ["bù", "wén", "jī", "zhù", "shēng"],
    ["wéi", "wén", "nǚ", "tàn", "xī"]
  ]
};

<PinyinPoem {...liSao} />

<PinyinPoem {...muLanCi} /> 