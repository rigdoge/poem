import React, { useState } from 'react';
import styles from './styles.module.css';
import SocialShare from '../SocialShare';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PinyinPoem = ({ title, author, content, pinyinData }) => {
  const [showPinyin, setShowPinyin] = useState(false);

  const togglePinyin = () => {
    setShowPinyin(!showPinyin);
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

  return (
    <div className={styles.poem}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.authorLine}>
        <span className={styles.author}>{author}</span>
        <button
          onClick={togglePinyin}
          className={styles.pinyinToggle}
          aria-label={showPinyin ? '隐藏拼音' : '显示拼音'}
          title={showPinyin ? '隐藏拼音' : '显示拼音'}
        >
          {showPinyin ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className={styles.content}>
        {content.map((line, lineIndex) => {
          const pinyinLine = pinyinData[lineIndex] ? processPinyinLine(pinyinData[lineIndex]) : [];
          const chars = line.split('');
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
      <SocialShare title={`${title} - ${author}`} content={content} />
    </div>
  );
};

export default PinyinPoem; 