---
sidebar_position: 2
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 杜甫诗选

<PinyinSwitch />

export const poems = {
  chunYeXiYu: {
    title: "春夜喜雨",
    author: "杜甫",
    content: [
      "好雨知时节，",
      "当春乃发生。",
      "随风潜入夜，",
      "润物细无声。"
    ],
    pinyinData: [
      ["hǎo", "yǔ", "zhī", "shí", "jié"],
      ["dāng", "chūn", "nǎi", "fā", "shēng"],
      ["suí", "fēng", "qián", "rù", "yè"],
      ["rùn", "wù", "xì", "wú", "shēng"]
    ]
  },
  chunWang: {
    title: "春望",
    author: "杜甫",
    content: [
      "国破山河在，",
      "城春草木深。",
      "感时花溅泪，",
      "恨别鸟惊心。"
    ],
    pinyinData: [
      ["guó", "pò", "shān", "hé", "zài"],
      ["chéng", "chūn", "cǎo", "mù", "shēn"],
      ["gǎn", "shí", "huā", "jiàn", "lèi"],
      ["hèn", "bié", "niǎo", "jīng", "xīn"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 