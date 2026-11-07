import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 pt-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-8xl font-extrabold text-slate-200 mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors w-full sm:w-auto"
          >
            Return Home
          </Link>
          <Link 
            href="/services"
            className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-colors w-full sm:w-auto"
          >
            Our Services
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-colors w-full sm:w-auto"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
