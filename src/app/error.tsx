"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to telemetry/monitoring service
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 pt-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-8xl font-extrabold text-rose-200 mb-4 tracking-tighter">500</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Something Went Wrong</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          An unexpected error occurred while rendering this page. You can try refreshing the component or return to the main dashboard.
        </p>

        {error?.digest && (
          <p className="text-xs text-slate-400 font-mono mb-8 bg-slate-100 py-1.5 px-3 rounded-md inline-block">
            Error ID: {error.digest}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => reset()}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors w-full sm:w-auto shadow-sm"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-colors w-full sm:w-auto shadow-sm"
          >
            Return Home
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-colors w-full sm:w-auto shadow-sm"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}

