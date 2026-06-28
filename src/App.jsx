import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AppPromo from './components/AppPromo';
import ProductSlider from './components/ProductSlider';
import Editorial from './components/Editorial';
import ProductGrid from './components/ProductGrid';
import Lookbook from './components/Lookbook';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {/* Cinematic Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar cart={cart} setCart={setCart} />

      {/* Hero Section with 3D Parallax */}
      <Hero />

      {/* Infinite scrolling slogans banner */}
      <Marquee />

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

      {/* Footer info */}
      <Footer />
    </>
  );
}
