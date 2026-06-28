import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const heroModel = "/hero_model.webp";

function CountUpNumber({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return () => controls.stop();
  }, [value]);

  return <>{displayValue}{suffix}</>;
}

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  // Track window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Map coordinate to range [-0.5, 0.5]
    const x = (clientX / windowSize.width) - 0.5;
    const y = (clientY / windowSize.height) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax layers transformations
  // Background elements move opposite to mouse
  const bgTranslateX = useTransform(springX, (x) => x * -40);
  const bgTranslateY = useTransform(springY, (y) => y * -40);

  // Model image moves moderately
  const modelTranslateX = useTransform(springX, (x) => x * 20);
  const modelTranslateY = useTransform(springY, (y) => y * 20);

  // Heading texts move slightly
  const textTranslateX = useTransform(springX, (x) => x * 10);
  const textTranslateY = useTransform(springY, (y) => y * 10);

  // Floating tags move more aggressively
  const tagTranslateX = useTransform(springX, (x) => x * 45);
  const tagTranslateY = useTransform(springY, (y) => y * 45);

  // Splitting text animation
  const headingWord1 = "DEFINE YOUR";
  const headingWord2 = "DAILY OUTFITS";

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 80px)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '60px 0',
        background: 'linear-gradient(180deg, #050505 0%, #0d0d0d 100%)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Heading and info */}
          <motion.div 
            style={{ x: textTranslateX, y: textTranslateY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Minimal Brand Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ 
                background: 'rgba(255, 82, 0, 0.1)', 
                border: '1px solid rgba(255, 82, 0, 0.3)', 
                color: 'var(--accent-color)', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                padding: '4px 12px', 
                borderRadius: '20px',
                letterSpacing: '0.1em'
              }}>
                LYRCOLLECTIVE LAB
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-color)' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>PRE-FALL '26</span>
            </div>

            {/* Giant Streetwear Heading */}
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 6rem)', 
              lineHeight: 0.9, 
              letterSpacing: '-0.03em', 
              color: '#fff',
              marginBottom: '30px'
            }}>
              {headingWord1} <br />
              <span style={{ 
                color: 'transparent', 
                WebkitTextStroke: '1px rgba(255,255,255,0.8)',
                fontStyle: 'italic'
              }}>
                {headingWord2.split(' ')[0]}
              </span>{' '}
              <span style={{ color: 'var(--accent-color)' }}>
                {headingWord2.split(' ')[1]}
              </span>
            </h1>

            {/* Description Paragraph */}
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '480px', 
              lineHeight: 1.6,
              marginBottom: '40px'
            }}>
              Harness the ultimate balance of utility and style. LYRCollective merges avant-garde technical designs with core comfort, tailoring garments built for the future metropolis.
            </p>

            {/* Interactive Hero Buttons */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="#shop" className="btn-primary interactive">
                Shop the Drop
                <ArrowUpRight size={16} />
              </a>
              <a href="#collections" className="btn-secondary interactive">
                Explore Story
              </a>
            </div>

            {/* Statistics details */}
            <div style={{ display: 'flex', gap: '40px', marginTop: '60px', borderTop: '1px solid var(--border-color)', paddingTop: '40px' }} className="hero-stats">
              <div>
                <div style={{ fontSize: '2rem', color: '#fff', fontWeight: 800 }} role="text" aria-label="410 thousand plus members active">
                  <CountUpNumber value={410} suffix="K+" />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Members Active</p>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
              <div>
                <div style={{ fontSize: '2rem', color: '#fff', fontWeight: 800 }} role="text" aria-label="260 plus premium fabrics">
                  <CountUpNumber value={260} suffix="+" />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Premium Fabrics</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Parallax Image Layering */}
          <div style={{ 
            position: 'relative', 
            height: '100%', 
            minHeight: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} className="hero-image-col">
            
            {/* Background Parallax Circle */}
            <motion.div 
              style={{
                position: 'absolute',
                width: '110%',
                aspectRatio: '1',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,82,0,0.06) 0%, rgba(0,0,0,0) 70%)',
                border: '1px dashed rgba(255,82,0,0.1)',
                x: bgTranslateX,
                y: bgTranslateY,
                zIndex: 1,
              }}
            />

            {/* Background Tech Wireframe Circle */}
            <motion.div 
              style={{
                position: 'absolute',
                width: '80%',
                aspectRatio: '1',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.03)',
                x: useTransform(springX, (x) => x * -20),
                y: useTransform(springY, (y) => y * -20),
                zIndex: 1,
              }}
            />

            {/* Model Image Layer */}
            <motion.div
              style={{
                x: modelTranslateX,
                y: modelTranslateY,
                zIndex: 2,
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '4/5',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                border: '1px solid var(--border-color)'
              }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src={heroModel} 
                alt="LYRCollective Technical Streetwear Model" 
                width="450"
                height="563"
                fetchpriority="high"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Overlay shading */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,5,5,0.4) 0%, transparent 40%)'
              }} />
            </motion.div>

            {/* Floating Tag Layer: 60% OFF Promotion (Orange Badge) */}
            <motion.div
              className="glass-panel hero-badge-absolute badge-promo"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                padding: '20px',
                borderRadius: '16px',
                zIndex: 3,
                x: tagTranslateX,
                y: tagTranslateY,
                maxWidth: '220px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div style={{ 
                color: 'var(--accent-color)', 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '1.2rem',
                lineHeight: 1,
                marginBottom: '8px'
              }}>
                60% OFF
              </div>
              <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>
                ON SELECTED ITEMS PLUS FREE WORLDWIDE SHIPPING
              </div>
            </motion.div>

            {/* Floating Tag Layer: Technical Quality Indicator */}
            <motion.div
              className="glass-panel hero-badge-absolute badge-quality"
              style={{
                position: 'absolute',
                top: '15%',
                right: '-5%',
                padding: '12px 20px',
                borderRadius: '50px',
                zIndex: 3,
                x: useTransform(springX, (x) => x * 30),
                y: useTransform(springY, (y) => y * 30),
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-color)',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>
                PREMIUM QUALITY
              </span>
            </motion.div>

            {/* Mobile-only inline badges block for Hero */}
            <div className="hero-badges-mobile">
              <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>60% OFF</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#fff', textAlign: 'center' }}>ON SELECTED ITEMS PLUS FREE WORLDWIDE SHIPPING</span>
              </div>
              <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>PREMIUM QUALITY</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(255, 82, 0, 0.4); }
          70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 6px rgba(255, 82, 0, 0); }
          100% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(255, 82, 0, 0); }
        }
        .hero-badge-absolute {
          display: block;
        }
        .hero-badges-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .hero-image-col {
            min-height: 450px !important;
            flex-direction: column;
          }
          .hero-stats {
            justify-content: center;
          }
          p {
            margin: 0 auto 40px !important;
          }
          .btn-primary {
            margin-left: auto;
          }
          .btn-secondary {
            margin-right: auto;
          }
          .hero-badge-absolute {
            display: none !important;
          }
          .hero-badges-mobile {
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
