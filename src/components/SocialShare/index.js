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
  FaTimes
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles.module.css';

export default function SocialShare({ title, content }) {
  const [showQRCode, setShowQRCode] = useState(false);
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
          <div className={styles.domesticShare}>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('weixin')}
              aria-label="分享到微信"
            >
              <FaWeixin />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('weibo')}
              aria-label="分享到微博"
            >
              <FaWeibo />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('qq')}
              aria-label="分享到QQ"
            >
              <FaQq />
            </button>
          </div>
          <div className={styles.divider} />
          <div className={styles.internationalShare}>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('twitter')}
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('facebook')}
              aria-label="Share on Facebook"
            >
              <FaFacebook />
            </button>
            <button
              className={styles.shareButton}
              onClick={() => handleShare('linkedin')}
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin />
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
              onClick={() => handleShare('reddit')}
              aria-label="Share on Reddit"
            >
              <FaReddit />
            </button>
          </div>
          <div className={styles.divider} />
          <button
            className={styles.shareButton}
            onClick={() => handleShare('copy')}
            aria-label="复制链接"
          >
            <FaLink />
          </button>
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
    </>
  );
} 