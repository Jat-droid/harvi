"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ParticleNetwork from './ParticleNetwork';

const services = [
  "App Development",
  "Web Architecture",
  "Enterprise CRM Hubs",
  "Automated ERP Nodes",
  "AI Solutions"
];

const titleText = "Next-Generation";
const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Interactive Background */}
      <ParticleNetwork />
      
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-bg opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 futuristic-grid opacity-50 z-0 pointer-events-none"></div>

      {/* Decorative Nodes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto pointer-events-auto"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-6 border border-primary-200 shadow-sm">
            <span className="flex w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            Neural Intelligence Hub
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block">
              {titleText.split('').map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <br className="hidden md:block" />
            <span className="block overflow-hidden py-2 mt-2">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block text-primary-600"
                >
                  {services[index]}
                </motion.div>
              </AnimatePresence>
            </span>
          </motion.h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light">
            We build enterprise-grade software with startup speed. Elevate your business with scalable, futuristic IT solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/contact" 
                title="Initialize your IT Project with us"
                className="px-8 py-4 text-lg font-medium text-white bg-dark hover:bg-slate-800 rounded-full shadow-2xl transition-all flex items-center justify-center w-full"
              >
                Initialize Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/portfolio" 
                title="View our completed IT solutions portfolio"
                className="px-8 py-4 text-lg font-medium text-slate-800 bg-white border border-slate-200 hover:border-slate-300 rounded-full shadow-sm transition-all flex items-center justify-center w-full text-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
