import React, { useState } from 'react';
import styles from './styles.module.css';

export default function PinyinSwitch() {
  const [showPinyin, setShowPinyin] = useState(false);

  const togglePinyin = () => {
    setShowPinyin(!showPinyin);
    // 触发一个自定义事件，让其他组件知道拼音状态改变了
    document.dispatchEvent(new CustomEvent('pinyinToggle', { detail: !showPinyin }));
  };

  return (
    <div className={styles.switchContainer}>
      <span className={styles.label}>拼音显示</span>
      <button
        className={`${styles.switch} ${showPinyin ? styles.active : ''}`}
        onClick={togglePinyin}
        role="switch"
        aria-checked={showPinyin}
      >
        <span className={styles.slider} />
      </button>
    </div>
  );
} 