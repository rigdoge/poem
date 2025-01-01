#!/usr/bin/env python3
import os
import re

def fix_mdx_syntax(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix content and pinyinData props
    content = re.sub(r'content=(\[.*?\])', r'content={\1}', content)
    content = re.sub(r'pinyinData=(\[.*?\])', r'pinyinData={\1}', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Get the project root directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(os.path.dirname(script_dir))
    docs_dir = os.path.join(project_root, 'docs', 'poetry')
    
    # Process all .md files in the poetry directory and its subdirectories
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                print(f"Processing {file_path}")
                fix_mdx_syntax(file_path)

if __name__ == '__main__':
    main() 