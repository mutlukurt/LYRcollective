import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star, ArrowUp } from 'lucide-react';
import lookbookModel from '../assets/lookbook_creative.webp';

export default function Lookbook() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      style={{
        background: '#050505',
        overflow: 'hidden'
      }}
    >
      {/* Testimonial Split Section */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          borderBottom: '1px solid var(--border-color)',
          alignItems: 'stretch' 
        }} 
        className="lookbook-grid"
      >
        
        {/* Left Side: Large Visual */}
        <div style={{ position: 'relative', minHeight: '550px' }}>
          <img 
            src={lookbookModel} 
            alt="Technical layered outdoor fashion jacket lookbook" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent, rgba(5,5,5,0.3) 100%)'
          }} />
        </div>

        {/* Right Side: Quote Content */}
        <div style={{ 
          padding: '8% 10%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          background: '#0a0a0a'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              Testimonials
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '40px'
            }}>
              STYLE APPROVED BY THE CREATIVE CROWD.
            </h2>

            {/* Author Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#222',
                overflow: 'hidden'
              }}>
                <img 
                  src={lookbookModel} 
                  alt="Reviewer Avatar" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Lucas Sterling</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Visual Director</div>
              </div>
            </div>

            {/* Quote details */}
            <div style={{
              fontSize: '1.25rem',
              color: '#fff',
              lineHeight: 1.6,
              fontStyle: 'italic',
              marginBottom: '30px',
              borderLeft: '3px solid var(--accent-color)',
              paddingLeft: '20px'
            }}>
              "Lightweight yet structured, this technical parka moves with you. The layered breathable materials keep things cool, comfortable, and extremely stylish in any environment."
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '5px', color: '#ffb300' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginLeft: '10px', fontStyle: 'normal' }}>
                4.9 Rated by 4k+ Customers
              </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Newsletter Signup Banner */}
      <div 
        style={{ 
          padding: '100px 0', 
          borderBottom: '1px solid var(--border-color)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ 
              color: 'var(--accent-color)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '15px'
            }}>
              Weekly Newsletter
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              maxWidth: '700px',
              marginBottom: '20px'
            }}>
              SUBSCRIBE TO GET NEW DROPS ON YOUR SCHEDULE
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              maxWidth: '500px',
              lineHeight: 1.6,
              marginBottom: '40px'
            }}>
              Sign up to receive 15% off your first purchase and exclusive access to our seasonal capsules.
            </p>

            {/* Form */}
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  padding: '15px 30px',
                  borderRadius: '30px',
                  background: 'rgba(0,230,118,0.1)',
                  border: '1px solid rgba(0,230,118,0.3)',
                  color: '#00e676',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                Thank you! Welcome to the LYRCollective.
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubscribe}
                style={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: '500px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '10px',
                  alignItems: 'center'
                }}
              >
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="interactive"
                  aria-label="Email address for newsletter subscription"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    flexGrow: 1,
                    fontSize: '0.9rem',
                    outline: 'none',
                    letterSpacing: '0.05em',
                    paddingRight: '15px'
                  }}
                />
                <button 
                  type="submit" 
                  className="interactive"
                  aria-label="Subscribe"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-color)'
                  }}
                >
                  <Send size={18} />
                </button>
              </form>
            )}

            {/* Scroll back to top circle button */}
            <button 
              className="btn-circle interactive"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                marginTop: '60px'
              }}
            >
              <ArrowUp size={20} />
            </button>

          </div>
        </div>

        {/* Huge watermarked text in background */}
        <div style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '12vw',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(255,255,255,0.01)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          zIndex: 1
        }}>
          LYRCOLLECTIVE
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .lookbook-grid {
            grid-template-columns: 1fr !important;
          }
          .lookbook-grid > div {
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
