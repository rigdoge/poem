---
sidebar_position: 2
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 李煜词选

<PinyinSwitch />

export const poems = {
  yuMeiRen: {
    title: "虞美人·春花秋月何时了",
    author: "李煜",
    content: [
      "春花秋月何时了？",
      "往事知多少。",
      "小楼昨夜又东风，",
      "故国不堪回首月明中。"
    ],
    pinyinData: [
      ["chūn", "huā", "qiū", "yuè", "hé", "shí", "liǎo"],
      ["wǎng", "shì", "zhī", "duō", "shǎo"],
      ["xiǎo", "lóu", "zuó", "yè", "yòu", "dōng", "fēng"],
      ["gù", "guó", "bù", "kān", "huí", "shǒu", "yuè", "míng", "zhōng"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 