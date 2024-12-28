---
sidebar_position: 2
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 宋词

<PinyinSwitch />

export const shuiDiaoGetou = {
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
};

export const yuMeiRen = {
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
};

<PinyinPoem {...shuiDiaoGetou} />

<PinyinPoem {...yuMeiRen} /> 