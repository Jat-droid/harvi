"use client";
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow Inc",
    content: "Harvi IT Solutions completely transformed our legacy CRM. Their enterprise-grade approach and startup-like speed were exactly what we needed to scale.",
    rating: 5
  },
  {
    name: "Michael Chang",
    role: "Founder, QuickCart",
    content: "The custom e-commerce app they built for us handles our peak traffic flawlessly. Outstanding technical architecture and beautiful UI design.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "VP Operations, GlobalLogistics",
    content: "Deploying our new ERP system was daunting, but Harvi made the transition seamless. We now have real-time visibility across our entire supply chain.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Operational Feedback</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Trusted by industry leaders.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex text-amber-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 text-lg flex-grow mb-8 font-light italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
