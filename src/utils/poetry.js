import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 获取所有诗词文件
export function getAllPoetryFiles() {
  const poetryDir = path.join(process.cwd(), 'docs/poetry');
  const categories = ['others']; // 可以添加更多分类

  let files = [];
  categories.forEach(category => {
    const categoryPath = path.join(poetryDir, category);
    if (fs.existsSync(categoryPath)) {
      const categoryFiles = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))
        .map(file => ({
          path: `${category}/${file}`,
          fullPath: path.join(categoryPath, file)
        }));
      files = [...files, ...categoryFiles];
    }
  });

  return files;
}

// 解析诗词文件内容
export function parsePoetryFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    ...data,
    content: content.trim(),
    path: `/docs/poetry/${filePath.split('/').slice(-2).join('/')}`.replace('.md', '')
  };
}

// 搜索诗词
export function searchPoetry(query) {
  const files = getAllPoetryFiles();
  const results = [];

  files.forEach(file => {
    try {
      const poetry = parsePoetryFile(file.fullPath);
      
      // 检查标题、作者、内容是否匹配查询
      const matchTitle = poetry.title?.toLowerCase().includes(query.toLowerCase());
      const matchAuthor = poetry.author?.toLowerCase().includes(query.toLowerCase());
      const matchContent = poetry.content?.toLowerCase().includes(query.toLowerCase());

      if (matchTitle || matchAuthor || matchContent) {
        results.push(poetry);
      }
    } catch (error) {
      console.error(`Error parsing file ${file.path}:`, error);
    }
  });

  return results;
}

// 获取搜索建议
export function getSearchSuggestions(query) {
  const files = getAllPoetryFiles();
  const suggestions = new Set();

  files.forEach(file => {
    try {
      const poetry = parsePoetryFile(file.fullPath);
      
      // 检查标题和作者是否匹配查询
      const matchTitle = poetry.title?.toLowerCase().includes(query.toLowerCase());
      const matchAuthor = poetry.author?.toLowerCase().includes(query.toLowerCase());

      if (matchTitle || matchAuthor) {
        suggestions.add(JSON.stringify({
          id: poetry.path,
          title: poetry.title,
          author: poetry.author,
          dynasty: poetry.dynasty
        }));
      }
    } catch (error) {
      console.error(`Error parsing file ${file.path}:`, error);
    }
  });

  return Array.from(suggestions).map(s => JSON.parse(s));
}

// 从在线 API 获取诗词
export async function fetchPoetryFromAPI(query) {
  try {
    // TODO: 实现从在线 API 获取诗词数据
    // const response = await fetch(`https://api.example.com/poetry?q=${encodeURIComponent(query)}`);
    // const data = await response.json();
    // return data;
    
    // 临时返回空数组
    return [];
  } catch (error) {
    console.error('Error fetching poetry from API:', error);
    return [];
  }
}

// 生成诗词文件
export async function generatePoetryFile(poetry) {
  try {
    const timestamp = Date.now();
    const fileName = `poem-${timestamp}.md`;
    const filePath = path.join(process.cwd(), 'docs/poetry/others', fileName);

    // TODO: 使用 poetry_generator.py 生成文件
    // const result = await generatePoetry(poetry);
    
    return `/docs/poetry/others/${fileName}`;
  } catch (error) {
    console.error('Error generating poetry file:', error);
    return null;
  }
} 