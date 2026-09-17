import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-transparent backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-normal tracking-tight text-slate-900 flex items-center">
          <span className="font-normal text-[1.15em] mr-1.5 tracking-[-0.08em]">
            ℋ𝒶𝓇𝓋
            <span className="relative inline-grid">
              <span className="col-start-1 row-start-1 text-slate-900">𝒾</span>
              <span className="col-start-1 row-start-1 text-primary-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)' }}>𝒾</span>
            </span>
          </span>
          <span className="tracking-tight">
            IT Solut
            <span className="relative inline-grid">
              <span className="col-start-1 row-start-1 text-slate-900">i</span>
              <span className="col-start-1 row-start-1 text-primary-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)' }}>i</span>
            </span>
            ons
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-colors shadow-lg shadow-primary-500/30"
          >
            Establish Uplink
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-800 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center px-5 py-3 text-base font-medium text-white bg-primary-600 rounded-lg"
          >
            Establish Uplink
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
