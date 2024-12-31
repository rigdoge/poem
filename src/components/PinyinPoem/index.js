import React, { useState } from 'react';
import styles from './styles.module.css';
import SocialShare from '../SocialShare';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { s2t, t2s } from 'chinese-s2t';

const PinyinPoem = ({ title, author, content, pinyinData }) => {
  const [showPinyin, setShowPinyin] = useState(false);
  const [isTraditional, setIsTraditional] = useState(false);

  const togglePinyin = () => {
    setShowPinyin(!showPinyin);
  };

  const toggleChinese = () => {
    setIsTraditional(!isTraditional);
  };

  // 处理拼音数据，将每行的拼音字符串拆分成单个拼音
  const processPinyinLine = (pinyinLine) => {
    // 先按标点符号分割，再按空格分割
    return pinyinLine[0]
      .split(/[,，.。?？!！、;；:：""''()（）\[\]【】《》<>〈〉…—~～「」『』〔〕]/u)
      .map(segment => segment.trim())
      .filter(segment => segment !== '')
      .flatMap(segment => segment.split(' ').filter(pinyin => pinyin !== ''));
  };

  // 转换文字
  const convertText = (text) => {
    return isTraditional ? s2t(text) : t2s(text);
  };

  // 生成标题的 id
  const titleId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className={styles.poem}>
      <h3 id={titleId} className={styles.title}>{convertText(title)}</h3>
      <div className={styles.authorLine}>
        <span className={styles.author}>{convertText(author)}</span>
        <div className={styles.controls}>
          <button
            onClick={toggleChinese}
            className={styles.pinyinToggle}
            aria-label={isTraditional ? '切换简体' : '切换繁体'}
            title={isTraditional ? '切换简体' : '切换繁体'}
          >
            <MdTranslate />
          </button>
          <button
            onClick={togglePinyin}
            className={styles.pinyinToggle}
            aria-label={showPinyin ? '隐藏拼音' : '显示拼音'}
            title={showPinyin ? '隐藏拼音' : '显示拼音'}
          >
            {showPinyin ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className={styles.content}>
        {content.map((line, lineIndex) => {
          const pinyinLine = pinyinData[lineIndex] ? processPinyinLine(pinyinData[lineIndex]) : [];
          const chars = convertText(line).split('');
          let pinyinIndex = 0;
          
          return (
            <div key={lineIndex} className={`${styles.line} ${showPinyin ? styles.lineWithPinyin : ''}`}>
              {chars.map((char, charIndex) => {
                // 跳过标点符号的拼音
                const isPunctuation = /[，。？！、；：""''（）【】《》〈〉…—～「」『』〔〕]/u.test(char);
                const pinyin = !isPunctuation ? pinyinLine[pinyinIndex++] : '';
                
                return (
                  <div key={charIndex} className={`${styles.characterWrapper} ${showPinyin ? styles.withPinyin : ''}`}>
                    {showPinyin && pinyin && (
                      <div className={styles.pinyinChar}>
                        {pinyin}
                      </div>
                    )}
                    <div className={styles.character}>
                      {char}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <SocialShare title={`${convertText(title)} - ${convertText(author)}`} content={content.map(line => convertText(line))} />
    </div>
  );
};

export default PinyinPoem; 