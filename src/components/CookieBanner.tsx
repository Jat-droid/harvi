"use client";
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Small delay before showing so it doesn't immediately snap in
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Cookie consent"
      className="fixed bottom-4 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-[100] md:max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-fade-in-up"
    >
      <button 
        onClick={() => setIsVisible(false)}
        aria-label="Close cookie banner"
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
      >
        <X size={20} />
      </button>
      
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
          <Cookie size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-1">We value your privacy</h4>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic.
          </p>
          <div className="flex space-x-3">
            <button 
              onClick={acceptCookies}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors shadow-md shadow-primary-500/20 w-full"
            >
              Accept All
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors w-full"
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;
