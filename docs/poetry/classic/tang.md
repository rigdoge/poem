---
sidebar_position: 1
---

import PinyinSwitch from '@site/src/components/PinyinSwitch';
import PinyinPoem from '@site/src/components/PinyinPoem';

# 唐诗

<PinyinSwitch />

## 李白

export const libaiPoems = {
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

{Object.values(libaiPoems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))}

## 杜甫

export const dufuPoems = {
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

{Object.values(dufuPoems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))}

## 王维

export const wangweiPoems = {
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

{Object.values(wangweiPoems).map((poem) => (
  <PinyinPoem key={poem.title} {...poem} />
))} 