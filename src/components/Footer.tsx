import { Mail, Globe, Briefcase, Hash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white mb-4 block">
            Harvi <span className="text-primary-500">IT Solutions</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Empowering businesses with enterprise-grade IT solutions, from custom apps to comprehensive ERPs. We blend startup agility with enterprise reliability.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Briefcase size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Hash size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary-400 transition-colors">Custom App Development</a></li>
            <li><a href="#" className="hover:text-primary-400 transition-colors">Website Development</a></li>
            <li><a href="#" className="hover:text-primary-400 transition-colors">CRM Solutions</a></li>
            <li><a href="#" className="hover:text-primary-400 transition-colors">ERP Systems</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
            <li><a href="#process" className="hover:text-primary-400 transition-colors">Our Process</a></li>
            <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Harvi IT Solutions. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center">
          <Mail size={16} className="mr-2" /> hello@harvi-it.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
