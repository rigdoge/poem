---
sidebar_position: 2
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 佚名诗选

<PinyinSwitch />

export const poems = {
  muLanCi: {
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
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 