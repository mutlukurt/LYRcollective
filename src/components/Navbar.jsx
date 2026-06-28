import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Search, Menu, X, Trash2, ArrowRight } from 'lucide-react';

import productFleece from '../assets/product1_fleece.webp';
import productCartoon from '../assets/product2_cartoon.webp';
import appModel from '../assets/app_promo_model.webp';
import lookbookModel from '../assets/lookbook_creative.webp';
import teeBlack from '../assets/tee_black.webp';

export default function Navbar({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Overlay Toggles
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Search Input State
  const [searchQuery, setSearchQuery] = useState('');
  
  // Local product dictionary for search logic
  const searchCatalog = [
    { title: 'Fleece Full-Zip Jacket', price: '$120.00', category: 'Jackets', image: productFleece },
    { title: 'Cartoon-Themed Denim', price: '$145.00', category: 'Denim', image: productCartoon },
    { title: 'Technical Utility Parka', price: '$185.00', category: 'Techwear', image: lookbookModel },
    { title: 'Signature Oversized Tee (Black)', price: '$65.00', category: 'T-Shirts', image: teeBlack },
    { title: 'Oversized Cotton Hoodie (White)', price: '$120.00', category: 'Hoodies', image: appModel }
  ];

  const filteredCatalog = searchQuery.trim() === ''
    ? []
    : searchCatalog.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const navLinks = ['Home', 'Shop', 'Products', 'Collections', 'Contact us'];

  // Remove item from cart
  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, idx) => idx !== indexToRemove));
  };

  // Handle smooth scroll on link click
  const handleNavLinkClick = (e, link) => {
    e.preventDefault();
    setActiveTab(link);
    const wasOpen = mobileMenuOpen;
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    const targetId = link.toLowerCase().replace(' ', '-');
    
    // We add a short timeout on mobile to allow the drawer animation to settle
    // and prevent the browser from cancelling the smooth scroll.
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, wasOpen ? 200 : 0);
  };

  // Calculate cart subtotal
  const getSubtotal = () => {
    const total = cart.reduce((sum, item) => {
      const priceNum = parseFloat(item.price.replace('$', ''));
      return sum + priceNum;
    }, 0);
    return `$${total.toFixed(2)}`;
  };

  // Prevent scroll when search or cart drawer is open
  useEffect(() => {
    if (isSearchOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen, isCartOpen]);

  return (
    <>
      <motion.header 
        className="glass-panel"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 4%',
          borderBottom: '1px solid var(--border-color)',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a href="#home" className="interactive" style={{ textDecoration: 'none', color: '#fff' }}>
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.4rem', 
              letterSpacing: '0.05em' 
            }}>
              LYR
            </span>
            <span style={{ 
              fontSize: '0.65rem', 
              color: 'var(--accent-color)', 
              letterSpacing: '0.45em',
              paddingLeft: '0.1em'
            }}>
              COLLECTIVE
            </span>
          </motion.div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="interactive"
              onClick={(e) => handleNavLinkClick(e, link)}
              style={{
                position: 'relative',
                color: activeTab === link ? '#fff' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '8px 0',
                transition: 'color 0.3s'
              }}
            >
              {link}
              {activeTab === link && (
                <motion.div
                  layoutId="activeUnderline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--accent-color)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', position: 'relative' }}>
          {/* Search Trigger */}
          <button 
            className="interactive" 
            onClick={() => setIsSearchOpen(true)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Open search"
          >
            <Search size={20} />
          </button>
          
          {/* Profile Trigger */}
          <button 
            className="interactive" 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: isProfileOpen ? 'var(--accent-color)' : '#fff',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle profile menu"
          >
            <User size={20} />
          </button>
          
          {/* Shopping Bag Trigger */}
          <button 
            className="interactive" 
            onClick={() => setIsCartOpen(true)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px'
            }}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cart.length > 0 && (
                <motion.span
                  key={cart.length}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    backgroundColor: 'var(--accent-color)',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="interactive mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#fff',
              display: 'none',
              width: '48px',
              height: '48px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Profile Dropdown Modal */}
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                key="profile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsProfileOpen(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 109,
                  background: 'transparent',
                  cursor: 'default'
                }}
              />
            )}
            {isProfileOpen && (
              <motion.div
                key="profile-dropdown"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '25px',
                  width: '260px',
                  padding: '24px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  zIndex: 110,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>GUEST_MEMBER_942</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-color)', textTransform: 'uppercase', marginTop: '2px', fontWeight: 600 }}>Level 1: Novice Collective</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="/account/orders" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase' }} className="interactive-link">Order History</a>
                  <a href="/account/addresses" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase' }} className="interactive-link">Shipping Addresses</a>
                  <a href="/account/settings" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase' }} className="interactive-link">Account Settings</a>
                </div>

                <button 
                  className="btn-primary interactive" 
                  onClick={() => setIsProfileOpen(false)}
                  style={{ padding: '8px 16px', fontSize: '0.75rem', width: '100%', justifyContent: 'center' }}
                >
                  Log In / Sign Up
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Drawer menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: '80px',
                left: 0,
                right: 0,
                background: '#0d0d0d',
                borderBottom: '1px solid var(--border-color)',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 4%'
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  style={{
                    color: activeTab === link ? 'var(--accent-color)' : '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    padding: '18px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* 1. Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(5,5,5,0.92)',
              backdropFilter: 'blur(20px)',
              zIndex: 200,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '10%'
            }}
          >
            <div style={{ width: '90%', maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>SEARCH</span>
                <button 
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="interactive btn-circle"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Large Input Field */}
              <input 
                type="text" 
                placeholder="TYPE TO SEARCH THE COLLECTIVE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="interactive"
                aria-label="Search catalog items"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontSize: '1.5rem',
                  padding: '15px 0',
                  outline: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700
                }}
              />

              {/* Suggestions */}
              {searchQuery.trim() === '' ? (
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '15px' }}>Trending searches</div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Fleece Jacket', 'Denim', 'Utility Parka', 'Oversized Tee'].map((term) => (
                      <button 
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="interactive btn-secondary" 
                        style={{ padding: '8px 18px', fontSize: '0.75rem', borderRadius: '20px' }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto', maxHeight: '350px', paddingRight: '10px' }} className="search-results">
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Found {filteredCatalog.length} Matching items
                  </div>
                  {filteredCatalog.map((item, idx) => (
                    <a 
                      href="#shop" 
                      key={`search-${idx}`}
                      onClick={() => setIsSearchOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '12px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        textDecoration: 'none',
                        color: '#fff'
                      }}
                      className="interactive"
                    >
                      <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.category}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--accent-color)' }}>{item.price}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Slide-in Cart Side Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              style={{ position: 'absolute', inset: 0, background: '#000' }}
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '420px',
                background: '#0d0d0d',
                borderLeft: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 30px'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShoppingBag size={20} style={{ color: 'var(--accent-color)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>YOUR BAG</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="interactive btn-circle"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Close cart"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Items List */}
              <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingRight: '5px' }} className="cart-list">
                {cart.length === 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80%', gap: '15px' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>YOUR BAG IS CURRENTLY EMPTY.</div>
                    <button 
                      className="btn-primary interactive"
                      onClick={() => setIsCartOpen(false)}
                      style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <motion.div 
                      key={`cart-item-${item.id}-${idx}`}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        paddingBottom: '20px',
                        borderBottom: '1px solid rgba(255,255,255,0.03)'
                      }}
                    >
                      <img src={item.image} alt={item.title} style={{ width: '64px', height: '76px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>{item.title}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '2px' }}>{item.category}</div>
                        <div style={{ color: 'var(--accent-color)', fontWeight: 800, fontSize: '0.95rem', marginTop: '5px' }}>{item.price}</div>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(idx)}
                        className="interactive"
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ff3333'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer and Checkout */}
              {cart.length > 0 && (
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>SUBTOTAL</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{getSubtotal()}</span>
                  </div>
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    TAXES AND SHIPPING CALCULATED AT CHECKOUT. ALL OFFERS & DISCOUNTS HAVE BEEN APPLIED.
                  </p>
                  <button 
                    className="btn-primary interactive"
                    style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
                    onClick={() => alert("Checkout flow simulation. Thank you for shopping with LYRCollective!")}
                  >
                    PROCEED TO CHECKOUT
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .interactive-link {
          transition: color 0.2s;
        }
        .interactive-link:hover {
          color: #fff !important;
        }
        .cart-list::-webkit-scrollbar,
        .search-results::-webkit-scrollbar {
          width: 4px;
        }
        .cart-list::-webkit-scrollbar-thumb,
        .search-results::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 2px;
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
