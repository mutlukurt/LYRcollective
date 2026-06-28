import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import product1Fleece from '../assets/product1_fleece.webp';
import product2Cartoon from '../assets/product2_cartoon.webp';
import lookbookCreative from '../assets/lookbook_creative.webp';

export default function ProductSlider({ onAddToCart }) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  const products = [
    {
      id: 'slider-1',
      title: 'Fleece Full-Zip Jacket',
      price: '$120.00',
      category: 'Jackets & Outerwear',
      image: product1Fleece,
      badge: 'New Drop'
    },
    {
      id: 'slider-2',
      title: 'Cartoon-Themed Graffiti Denim',
      price: '$145.00',
      category: 'Denim',
      image: product2Cartoon,
      badge: 'Highly Coveted'
    },
    {
      id: 'slider-3',
      title: 'Layered Technical Parka',
      price: '$185.00',
      category: 'Techwear',
      image: lookbookCreative,
      badge: 'Premium Fit'
    },
    {
      id: 'slider-4',
      title: 'Fleece Full-Zip Jacket (Dark Grey)',
      price: '$120.00',
      category: 'Jackets & Outerwear',
      image: product1Fleece,
      badge: 'Restocked'
    }
  ];

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const slide = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      style={{
        padding: '100px 0',
        background: '#0d0d0d',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
      id="products"
    >
      <div className="container">
        
        {/* Header and navigation controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '50px'
        }}>
          <div>
            <span style={{ 
              color: 'var(--accent-color)', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}>
              Curated Releases
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}>
              LATEST PRODUCTS
            </h2>
          </div>

          {/* Draggable Slider Controls */}
          <div style={{ display: 'flex', gap: '15px' }} className="desktop-only">
            <button 
              className="btn-circle interactive" 
              onClick={() => slide('left')}
              aria-label="Slide Left"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              className="btn-circle interactive" 
              onClick={() => slide('right')}
              aria-label="Slide Right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Draggable Carousel Container */}
        <div 
          ref={carouselRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '24px',
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px',
            scrollbarWidth: 'none', /* Hide scrollbar Firefox */
            msOverflowStyle: 'none' /* Hide scrollbar IE */
          }}
          className="carousel-container"
        >
          {products.map((product, idx) => (
            <motion.div
              key={`${product.id}-${idx}`}
              style={{
                flex: '0 0 320px',
                scrollSnapAlign: 'start',
                position: 'relative'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="product-card">
                <div className="product-image-container">
                  <span className="product-badge">{product.badge}</span>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image"
                    loading="lazy"
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
        </div>
        
      </div>
      <style>{`
        .carousel-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome/Safari */
        }
      `}</style>
    </section>
  );
}
