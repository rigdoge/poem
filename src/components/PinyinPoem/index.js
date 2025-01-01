import React, { useState } from 'react';
import styles from './styles.module.css';
import SocialShare from '../SocialShare';
import { FaEye, FaEyeSlash, FaBookOpen, FaBook, FaMusic } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { s2t, t2s } from 'chinese-s2t';

const UNDERLINE_STYLES = ['solid', 'dotted', 'dashed', 'double', 'wavy'];

const PinyinPoem = ({ title, author, dynasty = "", content, pinyinData, toneData = [], annotations = {} }) => {
  const [showPinyin, setShowPinyin] = useState(false);
  const [isTraditional, setIsTraditional] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [showTones, setShowTones] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState('dashed');

  const togglePinyin = () => {
    setShowPinyin(!showPinyin);
  };

  const toggleChinese = () => {
    setIsTraditional(!isTraditional);
  };

  const toggleAnnotations = () => {
    setShowAnnotations(!showAnnotations);
    setActiveTooltip(null);
  };

  const toggleTones = () => {
    setShowTones(!showTones);
  };

  const handleInteraction = (tooltipKey) => {
    if (!showAnnotations) return;
    if (activeTooltip === tooltipKey) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipKey);
    }
  };

  const cycleUnderlineStyle = () => {
    const currentIndex = UNDERLINE_STYLES.indexOf(underlineStyle);
    const nextIndex = (currentIndex + 1) % UNDERLINE_STYLES.length;
    setUnderlineStyle(UNDERLINE_STYLES[nextIndex]);
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
        <span className={styles.author}>
          {dynasty && showAnnotations && <span className={styles.dynasty}>[{convertText(dynasty)}] </span>}
          {convertText(author)}
        </span>
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
          <button
            onClick={toggleTones}
            className={styles.pinyinToggle}
            aria-label={showTones ? '隐藏平仄' : '显示平仄'}
            title={showTones ? '隐藏平仄' : '显示平仄'}
          >
            <FaMusic />
          </button>
          <button
            onClick={toggleAnnotations}
            className={styles.pinyinToggle}
            aria-label={showAnnotations ? '关闭注释' : '开启注释'}
            title={showAnnotations ? '关闭注释' : '开启注释'}
          >
            {showAnnotations ? <FaBookOpen /> : <FaBook />}
          </button>
          {showAnnotations && (
            <button
              onClick={cycleUnderlineStyle}
              className={styles.pinyinToggle}
              aria-label="切换下划线样式"
              title={`当前样式: ${underlineStyle}`}
            >
              _
            </button>
          )}
        </div>
      </div>
      <div className={styles.content}>
        {content.map((line, lineIndex) => {
          const pinyinLine = pinyinData[lineIndex] ? processPinyinLine(pinyinData[lineIndex]) : [];
          const toneLine = toneData[lineIndex] || [];
          const chars = convertText(line).split('');
          let pinyinIndex = 0;
          
          return (
            <div key={lineIndex} className={`${styles.line} ${showPinyin ? styles.lineWithPinyin : ''}`}>
              {chars.map((char, charIndex) => {
                const isPunctuation = /[，。？！、；：""''（）【】《》〈〉…—～「」『』〔〕]/u.test(char);
                const pinyin = !isPunctuation ? pinyinLine[pinyinIndex++] : '';
                const tooltipKey = `${lineIndex}-${charIndex}`;
                const annotation = annotations[tooltipKey];
                const hasAnnotation = annotation && showAnnotations;
                const tone = !isPunctuation ? toneLine[charIndex] : '';

                return (
                  <div 
                    key={charIndex} 
                    className={`${styles.characterWrapper} ${showPinyin ? styles.withPinyin : ''}`}
                  >
                    {showPinyin && pinyin && (
                      <div className={styles.pinyinChar}>
                        {pinyin}
                      </div>
                    )}
                    <div 
                      className={`${styles.character} ${hasAnnotation ? styles.hasAnnotation : ''} ${activeTooltip === tooltipKey ? styles.active : ''}`}
                      data-style={hasAnnotation ? underlineStyle : undefined}
                      onClick={() => annotation && handleInteraction(tooltipKey)}
                      onMouseEnter={() => annotation && showAnnotations && setActiveTooltip(tooltipKey)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      {char}
                      {showTones && tone && (
                        <div className={styles.toneChar}>
                          {tone === 'ping' ? '○' : '、'}
                        </div>
                      )}
                      {activeTooltip === tooltipKey && annotation && (
                        <div 
                          className={styles.tooltip}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {annotation}
                        </div>
                      )}
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