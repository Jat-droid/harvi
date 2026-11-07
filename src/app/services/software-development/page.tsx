import { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '../../../components/FAQ';
import ServiceFeatures from '../../../components/ServiceFeatures';
import TechStack from '../../../components/TechStack';
import ProcessTimeline from '../../../components/ProcessTimeline';
import Portfolio from '../../../components/Portfolio';

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Global ERP & CRM Solutions',
  description: 'Top-rated custom software development company. We build bespoke Enterprise ERPs and CRM hubs that scale globally and automate your business operations.',
};

const softwareFaqs = [
  {
    question: "When should a business invest in custom software vs off-the-shelf?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Off-the-shelf software rarely fits complex business models perfectly. You should invest in custom software when existing tools create bottlenecks, force you to change your workflow, or fail to integrate securely with your other systems.
        </p>
        <p>Custom software is an investment in your company's proprietary operational efficiency. While off-the-shelf SaaS products require you to pay monthly licensing fees per user forever, custom software is an asset you own outright. It scales with you infinitely without exponential cost increases, and it is tailored exactly to the nuances of your industry.</p>
      </div>
    )
  },
  {
    question: "How much does custom software cost?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Our enterprise-grade custom software development starts from 20k. This includes full architecture planning, bespoke engineering, and seamless integration with your existing data systems.
        </p>
        <p>Because every business is unique, the total cost depends entirely on the scope of the project. A custom internal dashboard for 50 employees will cost significantly less than a globally distributed, multi-tenant ERP system serving thousands of concurrent users. We provide highly detailed, transparent quoting during our discovery phase.</p>
      </div>
    )
  },
  {
    question: "How long does custom software take to build?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Using our Agile delivery methodology, we can deliver functional initial modules (MVPs) in just 10 to 15 days, allowing your team to start seeing ROI immediately while we scale the full platform.
        </p>
        <p>Instead of locking ourselves into a "waterfall" development cycle where you don't see the product for 6 months, we believe in rapid iteration. We identify the most critical bottleneck in your business logic and solve that first. We then deploy that module and begin gathering real-world data while we engineer the next set of features.</p>
      </div>
    )
  }
];

const softwareFeatures = [
  { title: "Enterprise ERP Systems", description: "Consolidate your operations into a single, custom-built resource planning hub tailored to your exact workflows." },
  { title: "Bespoke CRM Solutions", description: "Manage customer relationships with custom pipelines, automated lead scoring, and complex integrations." },
  { title: "Legacy System Modernization", description: "Safely migrate from outdated mainframes to scalable, secure cloud-native architectures." },
  { title: "API Development & Integration", description: "Connect disparate software systems together securely with custom REST and GraphQL APIs." }
];

const softwareTech = [
  { name: "Node.js" }, { name: "Python / Django" }, { name: "Go" }, { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Docker" }, { name: "Kubernetes" }, { name: "Redis" }
];

const softwareProcess = [
  { title: "System Analysis", description: "Deep dive into your business logic to map out every requirement and edge case." },
  { title: "Database & Architecture", description: "Designing the core data structures and microservices architecture for infinite scalability." },
  { title: "Core Engineering", description: "Writing secure, highly tested backend code and intuitive administrative dashboards." },
  { title: "UAT & Deployment", description: "Rigorous User Acceptance Testing followed by a phased, zero-downtime deployment." }
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/services" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Services
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Custom Software Development</h1>
        
        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
          <p className="text-xl leading-relaxed mb-8">
            Bespoke software engineering for complex business logic. We build resilient, scalable software systems tailored exactly to your unique operational needs.
          </p>
          <p className="leading-relaxed">
            When off-the-shelf software solutions fall short, we step in. Our engineers specialize in untangling complex workflows and digitizing them into streamlined, automated, and secure enterprise software. From custom ERPs to dynamic CRMs, we build the digital backbone of your organization.
          </p>
        </div>
        
        <ServiceFeatures 
          title="What We Provide" 
          subtitle="Engineering bespoke solutions for complex enterprise challenges." 
          features={softwareFeatures} 
        />
        
        <TechStack technologies={softwareTech} />
        
        <ProcessTimeline steps={softwareProcess} />
        
        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have a complex technical challenge?</h2>
          <p className="text-lg text-slate-600 mb-8">Our software engineering team can design the perfect bespoke solution.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/30">
            Discuss Your Software Needs
          </Link>
        </div>
      </div>
      
      <div className="mt-24">
        <Portfolio />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <FAQ faqs={softwareFaqs} />
      </div>
    </main>
  );
}
