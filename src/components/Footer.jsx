import React from 'react';
import { Instagram, Twitter, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        background: '#050505',
        padding: '60px 0',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }} className="footer-wrap">
          
          {/* Logo and Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.9 }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.2rem', 
              letterSpacing: '0.05em',
              color: '#fff'
            }}>
              LYR
            </span>
            <span style={{ 
              fontSize: '0.6rem', 
              color: 'var(--accent-color)', 
              letterSpacing: '0.45em',
              paddingLeft: '0.1em'
            }}>
              COLLECTIVE
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '10px' }}>
              © 2026 LYRCOLLECTIVE. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://instagram.com/lyrcollective" className="btn-circle interactive" style={{ width: '40px', height: '40px' }} aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com/lyrcollective" className="btn-circle interactive" style={{ width: '40px', height: '40px' }} aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="mailto:info@lyrcollective.com" className="btn-circle interactive" style={{ width: '40px', height: '40px' }} aria-label="Email">
              <Mail size={16} />
            </a>
            <a href="https://lyrcollective.com" className="btn-circle interactive" style={{ width: '40px', height: '40px' }} aria-label="Globe">
              <Globe size={16} />
            </a>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .footer-wrap {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
