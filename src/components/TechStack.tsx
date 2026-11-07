"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon?: string; // Optional icon class or URL
}

interface TechStackProps {
  title?: string;
  technologies: TechItem[];
}

const TechStack = ({ title = "Technologies We Use", technologies }: TechStackProps) => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-10">{title}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 font-medium hover:border-primary-500 hover:text-primary-600 transition-colors cursor-default"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
