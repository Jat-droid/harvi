"use client";
import { Mail, Globe, Briefcase, Hash } from 'lucide-react';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-4 flex items-center w-fit">
            <img src="/icon.png" alt="Harvi IT Solutions Monogram Logo" className="h-10 w-auto object-contain mr-2" style={{ mixBlendMode: 'multiply' }} />
            <img src="/logo.webp" alt="Harvi IT Solutions Full Logo" className="h-14 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Empowering businesses with enterprise-grade IT solutions, from custom apps to comprehensive ERPs. We blend startup agility with enterprise reliability.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Briefcase size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Hash size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/mobile-app-development" className="hover:text-primary-600 transition-colors">Mobile App Development</Link></li>
            <li><Link href="/services/web-development" className="hover:text-primary-600 transition-colors">Web Architecture</Link></li>
            <li><Link href="/services/software-development" className="hover:text-primary-600 transition-colors">Custom Software (ERP/CRM)</Link></li>
            <li><Link href="/services/ai-solutions" className="hover:text-primary-600 transition-colors">AI & Automation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary-600 transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary-600 transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-primary-600 transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary-600 transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-sm flex flex-col md:flex-row items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Harvi IT Solutions. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center">
          <Mail size={16} className="mr-2" /> harviitsolutions@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
