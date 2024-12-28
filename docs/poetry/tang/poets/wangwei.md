---
sidebar_position: 3
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 王维诗选

<PinyinSwitch />

export const poems = {
  luZhai: {
    title: "鹿柴",
    author: "王维",
    content: [
      "空山不见人，",
      "但闻人语响。",
      "返景入深林，",
      "复照青苔上。"
    ],
    pinyinData: [
      ["kōng", "shān", "bù", "jiàn", "rén"],
      ["dàn", "wén", "rén", "yǔ", "xiǎng"],
      ["fǎn", "jǐng", "rù", "shēn", "lín"],
      ["fù", "zhào", "qīng", "tái", "shàng"]
    ]
  },
  songBie: {
    title: "送别",
    author: "王维",
    content: [
      "山中相送罢，",
      "日暮掩柴扉。",
      "春草明年绿，",
      "王孙归不归。"
    ],
    pinyinData: [
      ["shān", "zhōng", "xiāng", "sòng", "bà"],
      ["rì", "mù", "yǎn", "chái", "fēi"],
      ["chūn", "cǎo", "míng", "nián", "lǜ"],
      ["wáng", "sūn", "guī", "bù", "guī"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 