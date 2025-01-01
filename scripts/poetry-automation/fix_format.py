#!/usr/bin/env python3
import os
import re

def fix_file_format(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 添加花括号
    content = re.sub(r'content=(\[.*?\])', r'content={\1}', content)
    content = re.sub(r'pinyinData=(\[.*?\])', r'pinyinData={\1}', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    poetry_dir = os.path.join(base_dir, 'docs', 'poetry')
    
    for category in ['tang', 'song', 'yuan', 'others']:
        category_dir = os.path.join(poetry_dir, category)
        if not os.path.exists(category_dir):
            continue
            
        for file_name in os.listdir(category_dir):
            if not file_name.endswith('.md'):
                continue
                
            file_path = os.path.join(category_dir, file_name)
            print(f"Processing {file_path}")
            fix_file_format(file_path)

if __name__ == "__main__":
    main() 