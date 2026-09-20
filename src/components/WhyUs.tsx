"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2 } from 'lucide-react';

const reasons = [
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "Intelligence Architecture",
    description: "From predictive models to scalable backend architectures, our team handles the entire technical lifecycle."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Enterprise-Grade Reliability",
    description: "Security and compliance are built-in from day one. We deliver CRM and ERP nodes that meet strict corporate standards."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Startup Speed",
    description: "We iterate rapidly. Get your MVP to market faster or deploy critical enterprise features without the usual corporate bloat."
  }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-50 rounded-l-[100px] -z-0 opacity-50 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">The Harvi Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Built for scale, designed for impact.</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We don't just write code; we build high-performance digital ecosystems that leverage AI, Automation, and Cloud to dominate markets.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark rounded-xl flex items-center justify-center mr-5 shadow-lg shadow-dark/20">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h4>
                    <p className="text-slate-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-dark p-8 md:p-12 rounded-3xl relative z-10 border border-slate-700">
              <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                <code>
{`// Initialize Harvi Intelligence Hub
const ecosystem = new HarviSolutions({
  type: 'Neural Enterprise Node',
  scale: 'Global Availability',
  latency: 'Sub-100ms'
});

await ecosystem.architect();
await ecosystem.develop();
const success = await ecosystem.deploy();

if (success) {
  console.log("Operations synced successfully.");
}`}
                </code>
              </pre>
            </div>
            {/* Decorative background for code block */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-rose-400 opacity-30 blur-2xl rounded-[3rem] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
