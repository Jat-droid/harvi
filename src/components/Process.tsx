"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: "01", title: "Audit", desc: "Understanding operational requirements and neural mesh mapping." },
  { id: "02", title: "Architect", desc: "Designing scalable enterprise nodes and intelligence hubs." },
  { id: "03", title: "Sync", desc: "Agile development sprints with continuous integration protocols." },
  { id: "04", title: "Deploy", desc: "Seamless global rollout with zero-downtime architecture." },
  { id: "05", title: "Monitor", desc: "24/7 telemetry monitoring and continuous optimization." }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-2">How We Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold">A proven methodology.</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center mb-6 group-hover:border-primary-500 group-hover:bg-primary-900/30 transition-all duration-300">
                  <span className="text-lg font-bold text-slate-400 group-hover:text-primary-400">{step.id}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
