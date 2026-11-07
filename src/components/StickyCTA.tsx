"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const StickyCTA = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  if (!isHome || !isScrolled) return null;

  return (
    <aside aria-label="Quick contact call to action" className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-in-up">
      <a
        href="#contact"
        className="flex items-center justify-center w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Initialize Project
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </aside>
  );
};

export default StickyCTA;
