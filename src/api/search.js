import { searchPoetry, getSearchSuggestions, fetchPoetryFromAPI, generatePoetryFile } from '../utils/poetry';

export default async function handler(req, res) {
  const { query, type = 'search' } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    let results = [];

    if (type === 'suggestions') {
      // 获取搜索建议
      results = getSearchSuggestions(query);
    } else {
      // 搜索本地诗词
      results = searchPoetry(query);

      // 如果本地没有结果，尝试从 API 获取
      if (results.length === 0) {
        const apiResults = await fetchPoetryFromAPI(query);
        
        // 为每个 API 结果生成本地文件
        for (const poetry of apiResults) {
          const filePath = await generatePoetryFile(poetry);
          if (filePath) {
            results.push({
              ...poetry,
              path: filePath
            });
          }
        }
      }
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 