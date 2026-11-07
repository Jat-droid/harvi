import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
  title: 'Case Studies | Harvi IT Solutions',
  description: 'Explore how Harvi IT Solutions has transformed enterprises with bespoke software and AI integration.',
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Harvi IT Solutions Case Studies",
  description: "Explore how Harvi IT Solutions has transformed enterprises with bespoke software and AI integration.",
  url: `${siteConfig.url}/case-studies`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function CaseStudiesPage() {
  const dummyCases = [
    { slug: 'global-logistics-erp', title: 'Modernizing a Global Logistics ERP', industry: 'Logistics' },
    { slug: 'fintech-predictive-ai', title: 'Implementing Predictive AI in FinTech', industry: 'Finance' },
  ];

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={caseStudiesSchema} />
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Case Studies</h1>
        <p className="text-xl text-slate-600 mb-12">Real-world impact delivered through enterprise-grade software.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyCases.map((caseStudy) => (
            <div key={caseStudy.slug} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="inline-block px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-full mb-4 border border-slate-200">
                {caseStudy.industry}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{caseStudy.title}</h2>
              <p className="text-slate-600 mb-6">Discover how we solved complex technical challenges and delivered massive ROI.</p>
              <Link href={`/case-studies/${caseStudy.slug}`} className="px-5 py-2.5 bg-dark hover:bg-slate-800 text-white font-medium rounded-lg transition-colors inline-block text-sm">
                Read Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
