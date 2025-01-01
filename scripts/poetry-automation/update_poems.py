import os
import re
from typing import Dict, List, Optional

def extract_poem_content(content: str) -> Optional[Dict]:
    """从现有的 Markdown 文件中提取诗歌内容"""
    try:
        # 提取 PinyinPoem 组件的内容
        match = re.search(r'<PinyinPoem[^>]*\n([\s\S]*?)\n\s*/>', content)
        if not match:
            return None
        
        poem_content = match.group(1)
        
        # 提取标题
        title_match = re.search(r'title="([^"]*)"', poem_content)
        title = title_match.group(1) if title_match else ""
        
        # 提取作者
        author_match = re.search(r'author="([^"]*)"', poem_content)
        author = author_match.group(1) if author_match else ""
        
        # 提取诗句
        content_match = re.search(r'content=\{?\[([^\]]*)\]\}?', poem_content)
        content_lines = []
        if content_match:
            lines = content_match.group(1).strip().split('\n')
            for line in lines:
                line = line.strip().strip(',').strip('"')
                if line:
                    content_lines.append(line)
        
        # 提取拼音
        pinyin_match = re.search(r'pinyinData=\{?\[([^\]]*)\]\}?', poem_content)
        pinyin_lines = []
        if pinyin_match:
            lines = pinyin_match.group(1).strip().split('\n')
            for line in lines:
                line = line.strip().strip(',').strip('[').strip(']').strip('"')
                if line:
                    pinyin_lines.append([line])
        
        # 提取注释
        notes_match = re.search(r'notes=\{?\[([^\]]*)\]\}?', poem_content)
        notes = []
        if notes_match:
            lines = notes_match.group(1).strip().split('\n')
            for line in lines:
                line = line.strip().strip(',').strip('[').strip(']')
                if line:
                    try:
                        notes.append(eval(line))
                    except:
                        notes.append(["null"] * len(content_lines[-1]))
        
        return {
            'title': title,
            'author': author,
            'content': content_lines or ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"],
            'pinyinData': pinyin_lines or [["chuáng qián míng yuè guāng"], ["yí shì dì shàng shuāng"], ["jǔ tóu wàng míng yuè"], ["dī tóu sī gù xiāng"]],
            'notes': notes or [["null", "null", "null", "null", "null"], ["null", "null", "null", "null"], ["null", "null", "null", "null"], ["null", "null", "null", "null"]]
        }
    except Exception as e:
        print(f"Error extracting content: {e}")
        return None

def generate_notes_template(content_lines: List[str]) -> List[List[Optional[str]]]:
    """为诗句生成注释模板"""
    notes = []
    for line in content_lines:
        # 移除标点符号，只保留汉字
        chars = re.sub(r'[，。？！、；：""''（）【】《》〈〉…—~～「」『』〔〕]', '', line)
        # 为每个字生成一个空注释
        line_notes = ["null"] * len(line)
        notes.append(line_notes)
    return notes

def update_poem_file(file_path: str):
    """更新诗歌文件，添加注释功能"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 提取现有内容
        poem_data = extract_poem_content(content)
        if not poem_data:
            print(f"Skipping {file_path}: No valid poem content found")
            return
        
        # 如果没有注释，生成注释模板
        if not poem_data['notes']:
            poem_data['notes'] = generate_notes_template(poem_data['content'])
        
        # 构建内容部分
        content_lines = ',\n    '.join(f'"{line}"' for line in poem_data['content'])
        pinyin_lines = ',\n    '.join(f'["{line[0]}"]' for line in poem_data['pinyinData'])
        notes_lines = ',\n    '.join(str([x if x != "null" else "null" for x in line_notes]) for line_notes in poem_data['notes'])
        
        # 构建新的组件内容
        new_content = f'''# {poem_data['title']}

import PinyinPoem from '@site/src/components/PinyinPoem';

<PinyinPoem
  title="{poem_data['title']}"
  author="{poem_data['author']}"
  content={{[
    {content_lines}
  ]}}
  pinyinData={{[
    {pinyin_lines}
  ]}}
  notes={{[
    {notes_lines}
  ]}}
/>
'''
        
        # 写入文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated {file_path}")
        
    except Exception as e:
        print(f"Error updating {file_path}: {e}")

def main():
    """主函数"""
    base_dir = 'docs/poetry'
    # 处理所有诗歌目录
    for category in ['tang', 'song', 'yuan', 'others']:
        category_dir = os.path.join(base_dir, category)
        if not os.path.exists(category_dir):
            continue
            
        for file in os.listdir(category_dir):
            if file.endswith('.md') and not file.startswith('_') and file != 'intro.md':
                file_path = os.path.join(category_dir, file)
                update_poem_file(file_path)

if __name__ == '__main__':
    main() 