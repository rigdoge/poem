import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function FooterLink({ href }) {
  return (
    <a href={href} className="footer__link" target="_blank" rel="noopener noreferrer" aria-label="AI 助手">
      <svg 
        className="footer__link-icon" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24"
      >
        <path 
          fill="currentColor" 
          d="M12 2C6.477 2 2 6.477 2 12c0 1.82.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8c-1.719 0-3.312-.546-4.613-1.47l-.365-.24l-2.266.422l.422-2.266l-.24-.365A7.958 7.958 0 0 1 4 12c0-4.418 3.582-8 8-8zM8.5 7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 7h-7zm1 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z"
        />
      </svg>
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
          <FooterLink href="https://chat.chenyinke.com" />
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">{copyright}</div>
        </div>
      </div>
    </footer>
  );
} 