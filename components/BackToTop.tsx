
import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 bg-black text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-gray-900 active:scale-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black overflow-hidden border border-white/10"
      >
        {/* Decorative Internal Glow */}
        <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
        
        {/* Refined Minimalist Icon */}
        <svg 
          className="relative w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            d="M5 15l7-7 7 7" 
          />
        </svg>
        
        <span className="sr-only">Back to top</span>
      </button>
      
      {/* Editorial Signature Dot - Responsive position */}
      <div 
        className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-black rounded-full border-2 border-[#FDFCF8] transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      ></div>
    </div>
  );
};

export default BackToTop;
