import json
import os
import time
from pypinyin import lazy_pinyin, Style
import random

class PoetryGenerator:
    def __init__(self):
        self.test_data = [
            {
                'title': '静夜思',
                'author': '李白',
                'dynasty': '唐',
                'content': ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。']
            },
            {
                'title': '登鹳雀楼',
                'author': '王之涣',
                'dynasty': '唐',
                'content': ['白日依山尽，', '黄河入海流。', '欲穷千里目，', '更上一层楼。']
            },
            {
                'title': '春晓',
                'author': '孟浩然',
                'dynasty': '唐',
                'content': ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。']
            }
        ]

    def get_random_poetry(self):
        try:
            return random.choice(self.test_data)
        except Exception as e:
            print(f"Error getting random poetry: {e}")
            return None

    def generate_pinyin(self, text):
        return ' '.join(lazy_pinyin(text, style=Style.TONE))

    def process_poetry(self, poetry_data):
        if not poetry_data:
            return None
        
        # 处理拼音
        pinyin_data = []
        for line in poetry_data['content']:
            # 移除标点符号后生成拼音
            clean_line = line.replace('。', '').replace('，', '')
            pinyin = self.generate_pinyin(clean_line)
            pinyin_data.append([pinyin])
        
        poetry_data['pinyinData'] = pinyin_data
        return poetry_data

    def generate_markdown_content(self, poetry_data):
        title = poetry_data.get('title', '')
        author = poetry_data.get('author', '')
        dynasty = poetry_data.get('dynasty', '')
        content = poetry_data.get('content', [])
        pinyin_data = poetry_data.get('pinyinData', [])

        # 修改数组的格式化方式
        content_str = json.dumps(content, ensure_ascii=False)
        pinyin_data_str = json.dumps(pinyin_data, ensure_ascii=False)

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
  content={{content_str}}
  pinyinData={{pinyin_data_str}}
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

    def save_to_file(self, content, poetry_data):
        # 创建目录
        base_dir = 'docs/poetry/others'
        os.makedirs(base_dir, exist_ok=True)
        
        # 生成文件名
        timestamp = int(time.time())
        filename = f'poem-{timestamp}.md'
        filepath = os.path.join(base_dir, filename)
        
        # 写入文件
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Generated poem file: {filepath}")
        return filepath

def main():
    generator = PoetryGenerator()
    
    # 获取随机诗歌
    print("Fetching random poetry...")
    poetry_data = generator.get_random_poetry()
    
    if poetry_data:
        # 处理诗歌数据
        print("Processing poetry data...")
        processed_data = generator.process_poetry(poetry_data)
        
        # 生成Markdown内容
        print("Generating markdown content...")
        content = generator.generate_markdown_content(processed_data)
        
        # 保存到文件
        print("Saving to file...")
        filepath = generator.save_to_file(content, processed_data)
        
        print("\nDone! Poetry generated successfully.")
        print(f"Title: {poetry_data['title']}")
        print(f"Author: {poetry_data['author']}")
        print(f"Dynasty: {poetry_data['dynasty']}")
    else:
        print("Failed to generate poetry.")

if __name__ == '__main__':
    main() 