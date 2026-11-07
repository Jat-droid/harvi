"use client";
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { submitContactForm } from '../app/actions/contact';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Basic validation
    if (!email.includes('@')) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
    
    // Server Action submission
    const result = await submitContactForm(formData);
    
    if (result.success) {
      router.push('/thank-you');
    } else {
      setError(result.error || "An error occurred");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Let's build something extraordinary.</h3>
            <p className="text-slate-600 text-lg mb-12">
              Ready to modernize your IT infrastructure or build your next flagship product? Contact us today for a free consultation and project quote.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mr-5 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">harviitsolutions@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600 rounded-[2rem] transform rotate-3 opacity-10"></div>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl relative z-10 border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam prevention */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    tabIndex={-1} 
                    aria-hidden="true" 
                    autoComplete="off" 
                    className="sr-only opacity-0 absolute -z-10 pointer-events-none" 
                  />

                  {error && (
                    <div id="form-error" role="alert" className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 font-medium text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        id="firstName"
                        name="firstName" 
                        required 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-900" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        id="lastName"
                        name="lastName" 
                        required 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-900" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      id="email"
                      name="email" 
                      required 
                      type="email" 
                      aria-invalid={error?.toLowerCase().includes('email') ? 'true' : 'false'}
                      aria-describedby={error ? 'form-error' : undefined}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-900" 
                      placeholder="john@company.com" 
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                    <select 
                      id="service"
                      name="service" 
                      required 
                      defaultValue="" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-slate-700"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="app">Custom App Development</option>
                      <option value="web">Website Development</option>
                      <option value="crm">CRM Solutions</option>
                      <option value="erp">ERP Systems</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all resize-none text-slate-900" 
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 text-white font-bold bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors shadow-lg shadow-primary-500/40 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Initializing...
                      </span>
                    ) : "Start a Project"}
                  </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
