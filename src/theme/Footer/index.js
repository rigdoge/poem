import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function FooterSocialLink({ href, icon, label }) {
  return (
    <a href={href} className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label={label}>
      <i className={`ri-${icon}-fill`}></i>
    </a>
  );
}

export default function Footer() {
  const { footer } = useThemeConfig();
  const { copyright } = footer;

  const socialLinks = [
    {
      href: 'https://github.com/tattoomaster/my-website',
      icon: 'github',
      label: 'GitHub',
    },
    {
      href: 'https://t.me/share/url?url=https://poetry.tschenfeng.com',
      icon: 'telegram',
      label: 'Share on Telegram',
    },
    {
      href: 'https://twitter.com/intent/tweet?url=https://poetry.tschenfeng.com',
      icon: 'twitter',
      label: 'Share on Twitter',
    },
  ];

  return (
    <footer className="footer">
      <div className="container container--fluid">
        <div className="footer__social-links">
          {socialLinks.map((link, index) => (
            <FooterSocialLink key={index} {...link} />
          ))}
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">{copyright}</div>
        </div>
      </div>
    </footer>
  );
} 