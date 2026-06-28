import React from 'react';
import { motion } from 'framer-motion';
import appPromoModel from '../assets/app_promo_model.webp';

export default function AppPromo() {
  return (
    <section 
      style={{
        padding: '100px 0',
        background: '#050505',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
      id="about"
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }} className="promo-grid">
          
          {/* Left Column: text details and store buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ 
              color: 'var(--accent-color)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '15px'
            }}>
              Seamless Experience
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              lineHeight: 1, 
              color: '#fff',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              STAY UPDATED.<br />
              STAY AHEAD.
            </h2>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.95rem', 
              lineHeight: 1.6, 
              maxWidth: '460px',
              marginBottom: '40px'
            }}>
              Download the official LYRCollective mobile app to access exclusive drops, early releases, and personalized style recommendations tailored to your fit. Join the collective today.
            </p>

            {/* Store Download Badges */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="promo-buttons">
              {/* App Store button */}
              <a href="https://apps.apple.com/us/app/lyrcollective" className="interactive glass-panel" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 24px',
                borderRadius: '12px',
                color: '#fff',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              aria-label="Download LYRCollective on the App Store"
              >
                {/* Simple Apple Icon Vector from Simple Icons */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Download on the</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>App Store</span>
                </div>
              </a>

              {/* Google Play button */}
              <a href="https://play.google.com/store/apps/details?id=com.lyrcollective.app" className="interactive glass-panel" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 24px',
                borderRadius: '12px',
                color: '#fff',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              aria-label="Get LYRCollective on Google Play"
              >
                {/* Simple Google Play Vector from Simple Icons */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Get it on</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Google Play</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive mobile mockup with floating badges */}
          <div style={{ 
            position: 'relative', 
            height: '100%', 
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} className="promo-image-col">
            
            {/* Phone outline container */}
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '310px',
                aspectRatio: '9/18',
                borderRadius: '40px',
                border: '10px solid #222',
                background: '#0d0d0d',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                zIndex: 2
              }}
              initial={{ opacity: 0, y: 100, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Phone speaker/notch */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '18px',
                background: '#222',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px',
                zIndex: 4
              }} />

              {/* Inside phone image */}
              <img 
                src={appPromoModel} 
                alt="App Interface" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />

              {/* Internal phone app tags */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                right: '15px',
                background: 'rgba(5,5,5,0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 3
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Oversized Cotton Hoodie</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '2px' }}>LYR Collection Fall '26</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-color)' }}>$110.00</span>
                  <span style={{ fontSize: '0.6rem', color: '#fff', background: '#333', padding: '3px 8px', borderRadius: '20px' }}>In Stock</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 1: Limited Edition Fit */}
            <motion.div
              className="glass-panel promo-badge-absolute"
              style={{
                position: 'absolute',
                top: '20%',
                left: '2%',
                padding: '10px 16px',
                borderRadius: '12px',
                zIndex: 3,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                height: 'fit-content',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Limited Edition Fit</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--accent-color)' }}>120 Items Left</div>
            </motion.div>

            {/* Floating Badge 2: Fast Delivery */}
            <motion.div
              className="glass-panel promo-badge-absolute"
              style={{
                position: 'absolute',
                bottom: '30%',
                right: '2%',
                padding: '10px 16px',
                borderRadius: '12px',
                zIndex: 3,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                height: 'fit-content',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Fast Delivery</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Free next-day shipping</div>
            </motion.div>

            {/* Floating Badge 3: Easy Return */}
            <motion.div
              className="glass-panel promo-badge-absolute"
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '8%',
                padding: '8px 16px',
                borderRadius: '30px',
                zIndex: 3,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: 'fit-content',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00e676' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#fff' }}>Easy Returns & Swaps</span>
            </motion.div>

            {/* Mobile-only inline badges block */}
            <div className="promo-badges-mobile">
              <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Limited Edition Fit</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700 }}>120 Items Left</span>
              </div>
              <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Fast Delivery</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Free next-day shipping</span>
              </div>
              <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00e676' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Easy Returns & Swaps</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .promo-badge-absolute {
          display: block;
        }
        .promo-badges-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .promo-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .promo-buttons {
            justify-content: center;
          }
          p {
            margin: 0 auto 40px !important;
          }
          .promo-image-col {
            min-height: 420px !important;
            flex-direction: column;
          }
          .promo-badge-absolute {
            display: none !important;
          }
          .promo-badges-mobile {
            display: flex !important;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            max-width: 310px;
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}
