---
sidebar_position: 1
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 李白诗选

<PinyinSwitch />

export const poems = {
  jingYeSi: {
    title: "静夜思",
    author: "李白",
    content: [
      "床前明月光，",
      "疑是地上霜。",
      "举头望明月，",
      "低头思故乡。"
    ],
    pinyinData: [
      ["chuáng", "qián", "míng", "yuè", "guāng"],
      ["yí", "shì", "dì", "shàng", "shuāng"],
      ["jǔ", "tóu", "wàng", "míng", "yuè"],
      ["dī", "tóu", "sī", "gù", "xiāng"]
    ]
  },
  wangLuanZhou: {
    title: "望庐山瀑布",
    author: "李白",
    content: [
      "日照香炉生紫烟，",
      "遥看瀑布挂前川。",
      "飞流直下三千尺，",
      "疑是银河落九天。"
    ],
    pinyinData: [
      ["rì", "zhào", "xiāng", "lú", "shēng", "zǐ", "yān"],
      ["yáo", "kàn", "pù", "bù", "guà", "qián", "chuān"],
      ["fēi", "liú", "zhí", "xià", "sān", "qiān", "chǐ"],
      ["yí", "shì", "yín", "hé", "luò", "jiǔ", "tiān"]
    ]
  }
};

{Object.values(poems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 