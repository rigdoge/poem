import annotations from '../data/annotations.json';

/**
 * 获取字符的注释信息
 * @param {string} char - 需要查询的汉字
 * @param {number} level - 注释详细程度 (1: 基础, 2: 进阶, 3: 高级)
 * @returns {string} 格式化后的注释文本
 */
export function getCharacterAnnotation(char, level = 1) {
  const charData = annotations.characters[char];
  if (!charData) return null;

  // 如果字符的难度等级小于等于请求的等级，返回完整解释
  if (charData.level <= level) {
    return `${char}：${charData.meanings.join('；')}`;
  }

  // 否则只返回第一个基本含义
  return `${char}：${charData.meanings[0]}`;
}

/**
 * 为诗句生成注释
 * @param {string} text - 诗句文本
 * @param {number} lineIndex - 行号
 * @param {number} level - 注释详细程度
 * @returns {Object} 注释对象，key为位置索引，value为注释内容
 */
export function generateLineAnnotations(text, lineIndex, level = 1) {
  const annotations = {};
  const chars = text.split('');
  
  chars.forEach((char, charIndex) => {
    // 跳过标点符号
    if (/[，。？！、；：""''（）【】《》〈〉…—～「」『』〔〕]/u.test(char)) {
      return;
    }
    
    const annotation = getCharacterAnnotation(char, level);
    if (annotation) {
      annotations[`${lineIndex}-${charIndex}`] = annotation;
    }
  });
  
  return annotations;
}

/**
 * 为整首诗生成注释
 * @param {string[]} lines - 诗句数组
 * @param {number} level - 注释详细程度
 * @returns {Object} 完整的注释对象
 */
export function generatePoemAnnotations(lines, level = 1) {
  const poemAnnotations = {};
  
  lines.forEach((line, lineIndex) => {
    const lineAnnotations = generateLineAnnotations(line, lineIndex, level);
    Object.assign(poemAnnotations, lineAnnotations);
  });
  
  return poemAnnotations;
}

/**
 * 获取字符的所有相关信息
 * @param {string} char - 需要查询的汉字
 * @returns {Object|null} 字符的完整信息
 */
export function getCharacterDetails(char) {
  return annotations.characters[char] || null;
}

/**
 * 检查字符是否有注释
 * @param {string} char - 需要检查的汉字
 * @returns {boolean} 是否有注释
 */
export function hasAnnotation(char) {
  return char in annotations.characters;
}

/**
 * 获取字符的繁体形式
 * @param {string} char - 简体汉字
 * @returns {string} 繁体汉字
 */
export function getTraditionalChar(char) {
  const charData = annotations.characters[char];
  return charData ? charData.traditional : char;
}

export default {
  getCharacterAnnotation,
  generateLineAnnotations,
  generatePoemAnnotations,
  getCharacterDetails,
  hasAnnotation,
  getTraditionalChar,
}; 