import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50 relative overflow-hidden">
      <Helmet>
        <title>Page Not Found | Harvi IT Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="absolute inset-0 futuristic-grid opacity-30 z-0"></div>
      
      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-8">
          <AlertTriangle size={40} />
        </div>
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Connection Lost</h2>
        <p className="text-slate-600 mb-10 text-lg">
          The requested node could not be found in our network. It may have been relocated or decommissioned.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-xl shadow-primary-500/20 transition-all group"
        >
          Return to Registry
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
