import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

import productFleece from '../assets/product1_fleece.webp';
import productCartoon from '../assets/product2_cartoon.webp';
import heroModel from '../assets/hero_model.webp';
import appModel from '../assets/app_promo_model.webp';
import lookbookModel from '../assets/lookbook_creative.webp';

// New specific product images
import hoodieGrey from '../assets/hoodie_grey.webp';
import hoodieBlack from '../assets/hoodie_black.webp';
import teeBlack from '../assets/tee_black.webp';
import teeWhite from '../assets/tee_white.webp';

export default function ProductGrid({ onAddToCart }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hoodies', 'T-Shirts', 'Outerwear'];

  const allProducts = [
    {
      id: 'grid-1',
      title: 'Signature Oversized Tee (Black)',
      price: '$65.00',
      category: 'T-Shirts',
      image: teeBlack,
      badge: 'Bestseller'
    },
    {
      id: 'grid-2',
      title: 'Oversized Cotton Hoodie (White)',
      price: '$120.00',
      category: 'Hoodies',
      image: appModel,
      badge: 'Classic'
    },
    {
      id: 'grid-3',
      title: 'Fleece Full-Zip Jacket',
      price: '$120.00',
      category: 'Outerwear',
      image: productFleece,
      badge: 'New'
    },
    {
      id: 'grid-4',
      title: 'Cartoon-Themed Denim',
      price: '$145.00',
      category: 'Outerwear',
      image: productCartoon,
      badge: 'Limited'
    },
    {
      id: 'grid-5',
      title: 'Technical Utility Parka',
      price: '$185.00',
      category: 'Outerwear',
      image: lookbookModel,
      badge: 'Premium'
    },
    {
      id: 'grid-6',
      title: 'Oversized Cotton Hoodie (Grey)',
      price: '$120.00',
      category: 'Hoodies',
      image: hoodieGrey,
      badge: 'Restocked'
    },
    {
      id: 'grid-7',
      title: 'Streetwear Heavy Tee (White)',
      price: '$65.00',
      category: 'T-Shirts',
      image: teeWhite,
      badge: 'Hot'
    },
    {
      id: 'grid-8',
      title: 'Premium Streetwear Hoodie (Black)',
      price: '$120.00',
      category: 'Hoodies',
      image: hoodieBlack,
      badge: 'Essential'
    }
  ];

  const filteredProducts = filter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <section 
      style={{
        padding: '100px 0',
        background: '#0d0d0d',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
      id="shop"
    >
      <div className="container">
        
        {/* Title and Filter Categories */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <span style={{ 
            color: 'var(--accent-color)', 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '15px'
          }}>
            Store catalog
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: '40px'
          }}>
            LYRCOLLECTIVE ESSENTIALS
          </h2>

          {/* Filters navbar */}
          <div className="no-scrollbar" style={{ 
            display: 'flex', 
            gap: '10px', 
            background: 'rgba(255,255,255,0.03)', 
            padding: '6px', 
            borderRadius: '50px',
            border: '1px solid var(--border-color)',
            overflowX: 'auto',
            maxWidth: '100%',
            WebkitOverflowScrolling: 'touch'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className="interactive"
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--accent-color)' : 'transparent',
                  color: filter === cat ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <motion.div 
          layout 
          className="product-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="product-card">
                  <div className="product-image-container">
                    <span className="product-badge">{product.badge}</span>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="product-image"
                    />
                  </div>
                  
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <a href="#shop" className="product-title interactive">{product.title}</a>
                    
                    <div className="product-footer">
                      <span className="product-price">{product.price}</span>
                      <button 
                        className="product-add-btn interactive"
                        onClick={() => onAddToCart(product)}
                        aria-label="Add to cart"
                      >
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
