---
sidebar_position: 1
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 苏轼词选

<PinyinSwitch />

export const poems = {
  shuiDiaoGetou: {
    title: "水调歌头·明月几时有",
    author: "苏轼",
    content: [
      "明月几时有？",
      "把酒问青天。",
      "不知天上宫阙，",
      "今夕是何年。"
    ],
    pinyinData: [
      ["míng", "yuè", "jǐ", "shí", "yǒu"],
      ["bǎ", "jiǔ", "wèn", "qīng", "tiān"],
      ["bù", "zhī", "tiān", "shàng", "gōng", "què"],
      ["jīn", "xī", "shì", "hé", "nián"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 