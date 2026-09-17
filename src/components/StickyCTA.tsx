import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show on home page after scrolling down a bit
    if (location.pathname !== '/') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show CTA after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-in-up">
      <a
        href="#contact"
        className="flex items-center justify-center w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Initialize Project
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
};

export default StickyCTA;
