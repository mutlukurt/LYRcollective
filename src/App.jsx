import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';

// Lazy load below-the-fold components to optimize mobile FCP/LCP & TBT
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const AppPromo = lazy(() => import('./components/AppPromo'));
const ProductSlider = lazy(() => import('./components/ProductSlider'));
const Editorial = lazy(() => import('./components/Editorial'));
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const Lookbook = lazy(() => import('./components/Lookbook'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {/* Cinematic Custom Cursor (Desktop only) */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Main Navigation */}
      <Navbar cart={cart} setCart={setCart} />

      <main>
        {/* Hero Section with 3D Parallax */}
        <Hero />

        {/* Infinite scrolling slogans banner */}
        <Marquee />

        <Suspense fallback={<div style={{ minHeight: '300px', background: '#050505' }} />}>
          {/* App Promo Showcase with floating badges */}
          <AppPromo />

          {/* Draggable Product Slider */}
          <ProductSlider onAddToCart={handleAddToCart} />

          {/* Cinematic Editorial Cards */}
          <Editorial />

          {/* Interactive and Filterable Product Grid */}
          <ProductGrid onAddToCart={handleAddToCart} />

          {/* Testimonials and newsletter signup form */}
          <Lookbook />

          {/* Contact Section */}
          <Contact />
        </Suspense>
      </main>

      {/* Footer info */}
      <Suspense fallback={<div style={{ minHeight: '100px', background: '#050505' }} />}>
        <Footer />
      </Suspense>
    </>
  );
}
