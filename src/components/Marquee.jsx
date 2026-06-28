import React from 'react';

export default function Marquee() {
  const words = [
    "LYR Collective",
    "Streetwear Designed for the Future",
    "Comfort & Sophistication",
    "Technical Utility",
    "Premium Craftsmanship",
    "Limited Release"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {/* First list of items */}
        {words.map((word, idx) => (
          <div key={`item1-${idx}`} className="ticker-item">
            {word} <span>//</span>
          </div>
        ))}
        {/* Repeated list of items to create endless scroll effect */}
        {words.map((word, idx) => (
          <div key={`item2-${idx}`} className="ticker-item">
            {word} <span>//</span>
          </div>
        ))}
      </div>
    </div>
  );
}
