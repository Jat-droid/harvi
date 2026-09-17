import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Users, Database, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary-500" />,
    title: "Neural App Mobility",
    description: "High-performance iOS and Android applications with fluid animations and native hardware integration."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary-500" />,
    title: "Precision Web Architecture",
    description: "Next-gen web applications built for speed, SEO, and massive scalability using Headless architectures."
  },
  {
    icon: <Users className="w-8 h-8 text-primary-500" />,
    title: "Enterprise CRM Hubs",
    description: "Tailor-made Customer Relationship Management systems with predictive modeling and AI insights."
  },
  {
    icon: <Database className="w-8 h-8 text-primary-500" />,
    title: "Automated ERP Nodes",
    description: "Comprehensive Enterprise Resource Planning networks to unify and automate your operations."
  }
];

const Services = () => {
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
              className="glass p-8 rounded-2xl group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                Learn more <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
