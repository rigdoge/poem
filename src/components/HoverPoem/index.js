import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaBookOpen, FaBook } from 'react-icons/fa';

const HoverPoem = ({ title, author, content, annotations }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [showAnnotations, setShowAnnotations] = useState(false);

  const handleInteraction = (tooltipKey) => {
    if (!showAnnotations) return;
    if (activeTooltip === tooltipKey) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipKey);
    }
  };

  const toggleAnnotations = () => {
    setShowAnnotations(!showAnnotations);
    setActiveTooltip(null);
  };

  return (
    <div className={styles.poem}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.authorLine}>
        <div className={styles.author}>{author}</div>
        <button
          onClick={toggleAnnotations}
          className={styles.annotationToggle}
          aria-label={showAnnotations ? '关闭注释' : '开启注释'}
          title={showAnnotations ? '关闭注释' : '开启注释'}
        >
          {showAnnotations ? <FaBookOpen /> : <FaBook />}
        </button>
      </div>
      <div className={styles.content}>
        {content.map((line, lineIndex) => {
          const chars = line.split('');
          return (
            <div key={lineIndex} className={styles.line}>
              {chars.map((char, charIndex) => {
                const tooltipKey = `${lineIndex}-${charIndex}`;
                const annotation = annotations[tooltipKey];
                
                return (
                  <span
                    key={charIndex}
                    className={`${styles.character} ${annotation && showAnnotations ? styles.hasAnnotation : ''} ${activeTooltip === tooltipKey ? styles.active : ''}`}
                    onClick={() => annotation && handleInteraction(tooltipKey)}
                    onMouseEnter={() => annotation && showAnnotations && setActiveTooltip(tooltipKey)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {char}
                    {activeTooltip === tooltipKey && annotation && (
                      <div 
                        className={styles.tooltip}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {annotation}
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverPoem; 