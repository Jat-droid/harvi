"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Globe, Users, Database, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary-500" />,
    title: "Mobile App Development",
    description: "High-performance iOS and Android applications with fluid animations and native hardware integration.",
    features: ["Cross-platform compatibility (React Native, Flutter)", "Native performance optimization", "Offline data synchronization", "Push notifications & deep linking", "App Store & Play Store deployment"]
  },
  {
    icon: <Globe className="w-8 h-8 text-primary-500" />,
    title: "Precision Web Architecture",
    description: "Next-gen web applications built for speed, SEO, and massive scalability using Headless architectures.",
    features: ["Headless CMS integration", "Server-Side Rendering (SSR)", "Progressive Web App (PWA) design", "Micro frontend architecture", "Advanced caching & CDN delivery"]
  },
  {
    icon: <Users className="w-8 h-8 text-primary-500" />,
    title: "Enterprise CRM Hubs",
    description: "Tailor-made Customer Relationship Management systems with predictive modeling and AI insights.",
    features: ["Automated lead tracking & scoring", "AI-powered sales forecasting", "Custom reporting & analytics", "Third-party platform integrations", "Granular role-based access control"]
  },
  {
    icon: <Database className="w-8 h-8 text-primary-500" />,
    title: "Automated ERP Nodes",
    description: "Comprehensive Enterprise Resource Planning networks to unify and automate your operations.",
    features: ["Real-time inventory tracking", "Automated invoicing workflows", "Supply chain analytics dashboards", "HR & payroll system integration", "Scalable cloud database architecture"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Services that scale with you</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            From emerging startups to established enterprises, we provide the technical foundation for your next phase of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
                className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700 mt-auto"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto relative z-10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                {selectedService.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {selectedService.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                {selectedService.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-sm mb-4">Key Features</h4>
                {selectedService.features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="#contact" 
                  onClick={() => setSelectedService(null)}
                  className="block w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-center transition-colors"
                >
                  Start a project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
