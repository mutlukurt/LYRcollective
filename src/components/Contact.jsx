import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      style={{
        padding: '120px 0',
        background: '#050505',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
      id="contact-us"
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
            Get in touch
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            fontWeight: 800,
            textTransform: 'uppercase'
          }}>
            CONTACT US
          </h2>
        </div>

        {/* Form and Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }} className="contact-grid">
          
          {/* Left Column: Brand Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px', fontWeight: 700 }}>
                LYRCOLLECTIVE HQ
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', maxWidth: '360px' }}>
                Have questions about our drops, sizing, or return policies? Drop us a line or visit our physical collective hub.
              </p>
            </div>

            {/* Icon Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="btn-circle" style={{ width: '45px', height: '45px', background: 'rgba(255,82,0,0.05)', borderColor: 'rgba(255,82,0,0.1)' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HQ Address</div>
                  <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>142 Greene St, SoHo, New York, NY 10012</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="btn-circle" style={{ width: '45px', height: '45px', background: 'rgba(255,82,0,0.05)', borderColor: 'rgba(255,82,0,0.1)' }}>
                  <Mail size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</div>
                  <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>support@lyrcollective.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="btn-circle" style={{ width: '45px', height: '45px', background: 'rgba(255,82,0,0.05)', borderColor: 'rgba(255,82,0,0.1)' }}>
                  <Phone size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Center</div>
                  <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>+1 (212) 555-0199</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="btn-circle" style={{ width: '45px', height: '45px', background: 'rgba(255,82,0,0.05)', borderColor: 'rgba(255,82,0,0.1)' }}>
                  <Clock size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hub Hours</div>
                  <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Mon - Sat: 11:00 AM - 08:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  background: 'rgba(0, 230, 118, 0.05)',
                  border: '1px solid rgba(0, 230, 118, 0.2)',
                  color: '#00e676',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#00e676' }}>MESSAGE SENT</h3>
                <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. A representative from the LYRCollective team will get back to you within 24 hours.
                </p>
                <button 
                  className="btn-secondary interactive" 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '30px' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                {/* Name field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="interactive contact-input"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>

                {/* Email field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="interactive contact-input"
                    placeholder="ENTER YOUR EMAIL"
                  />
                </div>

                {/* Message field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="interactive contact-input"
                    placeholder="WRITE YOUR MESSAGE HERE..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn-primary interactive" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>

      <style>{`
        .contact-input {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 14px 20px;
          border-radius: 12px;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .contact-input:focus {
          border-color: var(--accent-color);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 15px rgba(255, 82, 0, 0.1);
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
