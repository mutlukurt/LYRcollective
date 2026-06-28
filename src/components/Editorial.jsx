import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import editorial1Signature from '../assets/editorial1_signature.webp';
import editorial2Inferno from '../assets/editorial2_inferno.webp';

export default function Editorial() {
  return (
    <section 
      style={{
        padding: '120px 0',
        background: '#050505',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
      id="collections"
    >
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            color: 'var(--accent-color)', 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '15px'
          }}>
            Brand Philosophy
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', 
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            fontWeight: 800,
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            WHERE COMFORT MEETS SOPHISTICATION
          </h2>
        </div>

        {/* Editorial Two Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="editorial-grid">
          
          {/* Card 1: Signature Jacket */}
          <motion.div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '600px',
              border: '1px solid var(--border-color)',
              background: '#0d0d0d'
            }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Image with hover zoom */}
            <motion.img 
              src={editorial1Signature} 
              alt="Signature Jacket with Refined Embroidery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.9) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Content Overlays */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              zIndex: 3
            }}>
              <div>
                <span style={{ 
                  color: 'var(--accent-color)', 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Crafted Utility // 01
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800, textTransform: 'uppercase' }}>
                  Signature Jacket with Refined Embroidery
                </h3>
              </div>

              <a href="#shop" className="btn-circle interactive" style={{ flexShrink: 0 }} aria-label="Shop Signature Jacket with Refined Embroidery">
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Inferno Riding Jersey */}
          <motion.div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '600px',
              border: '1px solid var(--border-color)',
              background: '#0d0d0d'
            }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Image with hover zoom */}
            <motion.img 
              src={editorial2Inferno} 
              alt="Inferno Riding Jersey"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.9) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Content Overlays */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              zIndex: 3
            }}>
              <div>
                <span style={{ 
                  color: 'var(--accent-color)', 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Active Streetwear // 02
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800, textTransform: 'uppercase' }}>
                  Inferno Riding Jersey 🔥
                </h3>
              </div>

              <a href="#shop" className="btn-circle interactive" style={{ flexShrink: 0, background: 'var(--accent-color)', borderColor: 'var(--accent-color)' }} aria-label="Shop Inferno Riding Jersey">
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .editorial-grid > div {
            height: 480px !important;
          }
        }
      `}</style>
    </section>
  );
}
