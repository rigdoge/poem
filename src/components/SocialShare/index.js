import React, { useState } from 'react';
import {
  FaWeixin,
  FaWeibo,
  FaQq,
  FaLink,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaReddit,
  FaTimes,
  FaShareAlt,
  FaFileAlt,
  FaEllipsisH
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles.module.css';

export default function SocialShare({ title, content }) {
  const [showQRCode, setShowQRCode] = useState(false);
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
      case 'qq':
        shareLink = `http://connect.qq.com/widget/shareqq/index.html?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
        break;
      case 'weixin':
        setShowQRCode(true);
        return;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
        break;
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
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
              onClick={() => handleShare('twitter')}
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('weixin')}
              aria-label="分享到微信"
            >
              <FaWeixin />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('text')}
              aria-label="复制文本"
            >
              <FaFileAlt />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('share')}
              aria-label="分享网址"
            >
              <FaShareAlt />
            </button>
            <div className={styles.moreContainer}>
              <button
                className={styles.shareButton}
                onClick={() => setShowMore(!showMore)}
                aria-label="更多分享选项"
              >
                <FaEllipsisH />
              </button>
              {showMore && (
                <div className={styles.moreDropdown}>
                  <button onClick={() => handleShare('weibo')}>
                    <FaWeibo /> 微博
                  </button>
                  <button onClick={() => handleShare('qq')}>
                    <FaQq /> QQ
                  </button>
                  <button onClick={() => handleShare('facebook')}>
                    <FaFacebook /> Facebook
                  </button>
                  <button onClick={() => handleShare('linkedin')}>
                    <FaLinkedin /> LinkedIn
                  </button>
                  <button onClick={() => handleShare('telegram')}>
                    <FaTelegram /> Telegram
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

      {showQRCode && (
        <div className={styles.qrcodeOverlay} onClick={() => setShowQRCode(false)}>
          <div className={styles.qrcodeModal} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowQRCode(false)}
              aria-label="关闭"
            >
              <FaTimes />
            </button>
            <h3>微信扫码分享</h3>
            <QRCodeSVG
              value={shareUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
            <p className={styles.qrcodeHint}>
              请使用微信扫描二维码<br />
              点击右上角按钮分享
            </p>
          </div>
        </div>
      )}

      {showShareUrl && (
        <div className={styles.qrcodeOverlay} onClick={() => setShowShareUrl(false)}>
          <div className={styles.qrcodeModal} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowShareUrl(false)}
              aria-label="关闭"
            >
              <FaTimes />
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
              <FaTimes />
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