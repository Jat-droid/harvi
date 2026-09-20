import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50 relative overflow-hidden">
      
      <div className="absolute inset-0 futuristic-grid opacity-30 z-0"></div>
      
      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-8 shadow-lg shadow-green-500/20">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Transmission Received</h1>
        <p className="text-slate-600 mb-10 text-lg">
          Thank you for reaching out. Your secure data packet has been successfully delivered to our engineers. We will review your requirements and establish a connection shortly.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-xl transition-all group"
        >
          Return to Hub
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
