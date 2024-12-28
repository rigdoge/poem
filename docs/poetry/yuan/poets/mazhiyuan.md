---
sidebar_position: 1
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 马致远曲选

<PinyinSwitch />

export const poems = {
  tianJingZhong: {
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
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 