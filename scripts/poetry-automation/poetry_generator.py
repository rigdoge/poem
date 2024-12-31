import json
import requests
from tqdm import tqdm

def generate_markdown_content(self, poetry_data):
    title = poetry_data.get('title', '')
    author = poetry_data.get('author', '')
    dynasty = poetry_data.get('dynasty', '')
    content = poetry_data.get('content', [])
    pinyin_data = poetry_data.get('pinyinData', [])

    template = f"""# {title}

{title}是一首{dynasty}诗歌，作者是{author}。

<details>
<summary>创作背景</summary>

这首诗作于{dynasty}，具体创作年代已不可考。

</details>

## 原文

import PinyinPoem from '@site/src/components/PinyinPoem';

<PinyinPoem 
  title="{title}"
  author="{author}"
  content={json.dumps(content, ensure_ascii=False)}
  pinyinData={json.dumps(pinyin_data, ensure_ascii=False)}
/>

## 赏析

<details>
<summary>艺术特色</summary>

1. **语言特点**
   - 语言优美凝练
   - 意境深远
   - 韵律和谐

2. **表现手法**
   - 善用比喻和象征
   - 意象鲜明
   - 结构严谨

</details>

<details>
<summary>主题思想</summary>

1. **主题内容**
   - 待补充

2. **思想特色**
   - 待补充

</details>

<details>
<summary>写作背景</summary>

这首诗创作于{dynasty}，反映了当时的社会状况和文人心态。

</details>

<details>
<summary>影响意义</summary>

1. 艺术价值
   - 意境优美
   - 格律工整
   - 语言精炼

2. 历史价值
   - 反映时代特征
   - 展现文人情怀
   - 传承文化精神

</details>

## 注释

<details>
<summary>词语注释</summary>

{self._generate_annotations(content)}

</details>
"""
    return template

def _generate_annotations(self, content_lines):
    annotations = []
    for line in content_lines:
        words = line.split('，')
        for word in words:
            if len(word) >= 4:  # 只为较长的词语添加注释
                annotations.append(f"- {word}：待补充")
    return '\n'.join(annotations) if annotations else "- 待添加" 