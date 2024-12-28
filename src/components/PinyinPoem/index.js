import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const PinyinPoem = ({ title, author, content, pinyinData }) => {
  const [showPinyin, setShowPinyin] = useState(false);

  useEffect(() => {
    const handlePinyinToggle = (event) => {
      setShowPinyin(event.detail);
    };

    document.addEventListener('pinyinToggle', handlePinyinToggle);
    return () => {
      document.removeEventListener('pinyinToggle', handlePinyinToggle);
    };
  }, []);

  return (
    <div className={styles.poem}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>
        {content.map((line, lineIndex) => (
          <div key={lineIndex} className={`${styles.line} ${showPinyin ? styles.lineWithPinyin : ''}`}>
            {line.split('').map((char, charIndex) => (
              <div key={charIndex} className={`${styles.characterWrapper} ${showPinyin ? styles.withPinyin : ''}`}>
                {showPinyin && pinyinData[lineIndex] && (
                  <div className={styles.pinyinChar}>
                    {pinyinData[lineIndex][charIndex]}
                  </div>
                )}
                <div className={styles.character}>
                  {char}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinyinPoem; 