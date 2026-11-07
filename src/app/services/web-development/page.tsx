import { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '../../../components/FAQ';
import ServiceFeatures from '../../../components/ServiceFeatures';
import TechStack from '../../../components/TechStack';
import ProcessTimeline from '../../../components/ProcessTimeline';
import Portfolio from '../../../components/Portfolio';
import GeoBlock from '../../../components/GeoBlock';
import JsonLd from '../../../components/JsonLd';
import { siteConfig } from '../../../config/site';

export const metadata: Metadata = {
  title: 'React & Next.js Development Services | Web Dev for Startups | Harvi',
  description: 'Enterprise web architecture and React / Next.js development services. We build high-performance, scalable website solutions for global startups and enterprises.',
  alternates: {
    canonical: `${siteConfig.url}/services/web-development`,
  },
};

const webSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Web Architecture & Development",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "Web Application Engineering",
      description: "Enterprise web architecture and React / Next.js development services. We build high-performance, scalable website solutions for global startups and enterprises.",
      url: `${siteConfig.url}/services/web-development`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development",
          item: `${siteConfig.url}/services/web-development`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our professional website development services start from 20k. This covers complete design, architecture, and deployment of a high-performance scalable web platform.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a business website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our standard timeline for an enterprise-grade business website is 10 to 15 days, thanks to our agile methodology and pre-architected React components.",
          },
        },
        {
          "@type": "Question",
          name: "Which technology is best for a startup website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React and Next.js are the industry standards for startups. They provide unparalleled performance, robust SEO capabilities, and infinite scalability as your business grows.",
          },
        },
      ],
    },
  ],
};

const webDevFaqs = [
  {
    question: "How much does website development cost?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Our professional website development services start from 20k. This covers complete design, architecture, and deployment of a high-performance scalable web platform.
        </p>
        <p>The final investment depends heavily on the complexity of your requirements. For example:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Standard Corporate Sites:</strong> Typically range from 20k to 35k and include custom design, CMS integration, and SEO setup.</li>
          <li><strong>E-Commerce Platforms:</strong> Due to payment gateways, inventory management, and security compliance, these often start around 40k.</li>
          <li><strong>Complex Web Applications:</strong> Bespoke business logic, user dashboards, and third-party API integrations require custom scoping.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How long does it take to build a business website?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Our standard timeline for an enterprise-grade business website is 10 to 15 days, thanks to our agile methodology and pre-architected React components.
        </p>
        <p>This rapid deployment is achieved through our highly structured process:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Days 1-3:</strong> Discovery, UI/UX Wireframing, and Architecture planning.</li>
          <li><strong>Days 4-10:</strong> Core development, frontend coding, and CMS integration.</li>
          <li><strong>Days 11-15:</strong> Quality Assurance (QA), Security Auditing, Performance tuning, and final launch.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Which technology is best for a startup website?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          React and Next.js are the industry standards for startups. They provide unparalleled performance, robust SEO capabilities, and infinite scalability as your business grows.
        </p>
        <p>
          Unlike legacy platforms (such as WordPress), a Next.js architecture decoupled from a Headless CMS ensures that your website is entirely immune to common plugin vulnerabilities. Furthermore, Server-Side Rendering (SSR) guarantees that your pages load instantly, which drastically reduces bounce rates and improves Google Core Web Vitals scoring.
        </p>
      </div>
    )
  }
];

const webFeatures = [
  { title: "Custom Web Applications", description: "Bespoke, complex web apps tailored to your unique business logic." },
  { title: "E-Commerce Platforms", description: "High-conversion headless commerce platforms capable of handling massive traffic." },
  { title: "Enterprise CMS Integration", description: "Seamless content management architectures for marketing agility." },
  { title: "Progressive Web Apps (PWA)", description: "App-like experiences directly in the browser for maximum reach." }
];

const webTech = [
  { name: "React.js" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Node.js" }, { name: "Tailwind CSS" }, { name: "GraphQL" }, { name: "AWS" }, { name: "Vercel" }
];

const webProcess = [
  { title: "Discovery & Architecture", description: "We analyze your business requirements and design a scalable system architecture." },
  { title: "UI/UX Design", description: "Creating intuitive, conversion-optimized interfaces that reflect your brand." },
  { title: "Agile Development", description: "Iterative engineering using modern frameworks for rapid, reliable delivery." },
  { title: "Deployment & Scaling", description: "Rigorous testing followed by seamless deployment to global edge networks." }
];

export default function WebDevelopmentPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={webSchemas} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/services" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Services
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Web Architecture & Development</h1>
        
        {/* 40-to-60-word factual summary */}
        <p className="text-lg text-slate-700 leading-relaxed font-medium bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-12 shadow-sm">
          Harvi engineers enterprise web platforms and full-stack cloud applications designed for high throughput, technical SEO, and sub-second load times. Utilizing React, Next.js, TypeScript, Node.js, and Tailwind CSS on edge networks, our agile development teams deliver production-grade platforms within a 10-to-15-day timeline.
        </p>

        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
          <p className="text-xl leading-relaxed mb-8">
            We specialize in creating robust, scalable, and secure web applications. From corporate portals to complex enterprise systems, our engineering team utilizes the latest in web technologies to deliver blazing-fast digital experiences.
          </p>
          <p className="leading-relaxed">
            In today's competitive digital landscape, a slow website costs you customers. We specialize in Server-Side Rendering (SSR) and Edge Network delivery to ensure your web applications not only score perfectly on Core Web Vitals but also dominate search engine rankings through superior technical SEO.
          </p>
        </div>
        
        <ServiceFeatures 
          title="What We Provide" 
          subtitle="Comprehensive web engineering services designed for scale." 
          features={webFeatures} 
        />
        
        <TechStack technologies={webTech} />
        
        <ProcessTimeline steps={webProcess} />
        
        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to upgrade your web architecture?</h2>
          <p className="text-lg text-slate-600 mb-8">Our engineers are ready to build your next generation platform.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/30">
            Consult with an Architect
          </Link>
        </div>
      </div>
      
      <div className="mt-24">
        <Portfolio />
      </div>

      <div className="mt-20">
        <GeoBlock />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <FAQ faqs={webDevFaqs} />
      </div>
    </main>
  );
}
