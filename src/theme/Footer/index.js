import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function FooterLink({ href, label }) {
  return (
    <a href={href} className="footer__link" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default function Footer() {
  const { footer } = useThemeConfig();
  const { copyright } = footer;

  return (
    <footer className="footer">
      <div className="container container--fluid">
        <div className="footer__links">
          <FooterLink 
            href="https://chat.chenyinke.com" 
            label="AI 助手"
          />
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">{copyright}</div>
        </div>
      </div>
    </footer>
  );
} 