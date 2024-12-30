import React, { useState } from 'react';
import {
  FaWeibo,
  FaLink,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaReddit,
  FaXmark,
  FaShareNodes,
  FaFile,
  FaEllipsis
} from 'react-icons/fa6';
import styles from './styles.module.css';

export default function SocialShare({ title, content }) {
  const [showShareUrl, setShowShareUrl] = useState(false);
  const [showShareText, setShowShareText] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title}\n${content.join('\n')}`;
  
  const handleShare = (platform) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    
    let shareLink = '';
    
    switch (platform) {
      case 'weibo':
        shareLink = `http://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedText}`;
        break;
      case 'x':
        shareLink = `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
        break;
      case 'reddit':
        shareLink = `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('链接已复制到剪贴板');
        }).catch(() => {
          alert('复制失败，请手动复制');
        });
        return;
      case 'text':
        setShowShareText(true);
        return;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: title,
            text: shareText,
            url: shareUrl,
          }).catch(() => {
            setShowShareUrl(true);
          });
        } else {
          setShowShareUrl(true);
        }
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=500');
    }
  };

  return (
    <>
      <div className={styles.shareContainer}>
        <span className={styles.shareText}>分享到：</span>
        <div className={styles.shareButtons}>
          <div className={styles.mainShare}>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('x')}
              aria-label="Share on X"
            >
              <FaXTwitter />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('telegram')}
              aria-label="Share on Telegram"
            >
              <FaTelegram />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('text')}
              aria-label="复制文本"
            >
              <FaFile />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('share')}
              aria-label="分享网址"
            >
              <FaShareNodes />
            </button>
            <div className={styles.moreContainer}>
              <button
                className={styles.shareButton}
                onClick={() => setShowMore(!showMore)}
                aria-label="更多分享选项"
              >
                <FaEllipsis />
              </button>
              {showMore && (
                <div className={styles.moreDropdown}>
                  <button onClick={() => handleShare('weibo')}>
                    <FaWeibo /> 微博
                  </button>
                  <button onClick={() => handleShare('facebook')}>
                    <FaFacebook /> Facebook
                  </button>
                  <button onClick={() => handleShare('linkedin')}>
                    <FaLinkedin /> LinkedIn
                  </button>
                  <button onClick={() => handleShare('reddit')}>
                    <FaReddit /> Reddit
                  </button>
                  <button onClick={() => handleShare('copy')}>
                    <FaLink /> 复制链接
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showShareUrl && (
        <div className={styles.qrcodeOverlay} onClick={() => setShowShareUrl(false)}>
          <div className={styles.qrcodeModal} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowShareUrl(false)}
              aria-label="关闭"
            >
              <FaXmark />
            </button>
            <h3>分享网址</h3>
            <div className={styles.urlContainer}>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className={styles.urlInput}
                onClick={e => e.target.select()}
              />
              <button
                className={styles.copyButton}
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl).then(() => {
                    alert('链接已复制到剪贴板');
                  });
                }}
              >
                复制
              </button>
            </div>
            <p className={styles.qrcodeHint}>
              复制链接分享给好友
            </p>
          </div>
        </div>
      )}

      {showShareText && (
        <div className={styles.qrcodeOverlay} onClick={() => setShowShareText(false)}>
          <div className={styles.qrcodeModal} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowShareText(false)}
              aria-label="关闭"
            >
              <FaXmark />
            </button>
            <h3>复制文本</h3>
            <div className={styles.textContainer}>
              <textarea
                value={shareText}
                readOnly
                className={styles.textArea}
                onClick={e => e.target.select()}
              />
              <button
                className={styles.copyButton}
                onClick={() => {
                  navigator.clipboard.writeText(shareText).then(() => {
                    alert('文本已复制到剪贴板');
                  });
                }}
              >
                复制
              </button>
            </div>
            <p className={styles.qrcodeHint}>
              复制文本分享给好友
            </p>
          </div>
        </div>
      )}
    </>
  );
} 