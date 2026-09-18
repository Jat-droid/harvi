import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "FinTech Mobile App",
    category: "App Development",
    description: "A secure, scalable cross-platform mobile wallet built for a leading financial institution.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Global Supply Chain ERP",
    category: "ERP Solutions",
    description: "End-to-end resource planning system integrating logistics, inventory, and finance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SaaS Sales CRM",
    category: "CRM Solutions",
    description: "Custom CRM with AI-driven lead scoring and automated pipeline management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Platform",
    category: "Website Development",
    description: "High-performance, headless commerce frontend processing 10k+ daily transactions.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Audit Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Proven track record of excellence.</h3>
          </div>
          <a href="#" className="mt-6 md:mt-0 inline-flex items-center text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors uppercase tracking-wider">
            View Our Work <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-75"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
