import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { siteConfig } from '../../../config/site';
import { prisma } from '@/lib/prisma';

const fallbackCaseStudies = [
  'global-logistics-erp',
  'fintech-predictive-ai',
];

export async function generateStaticParams() {
  if (process.env.DATABASE_URL) {
    try {
      const cases = await prisma.caseStudy.findMany({
        where: { published: true },
        select: { slug: true },
      });

      if (cases && cases.length > 0) {
        return cases.map((item) => ({ slug: item.slug }));
      }
    } catch {
      // Fallback if database is unavailable during build
    }
  }

  return fallbackCaseStudies.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const title = `${formattedTitle} Case Study | Harvi Enterprise Solutions`;
  const description = `Detailed technical case study: Architectural approach, solutions delivered, and ROI outcomes for ${slug.replace(/-/g, ' ')}.`;
  const canonical = `${siteConfig.url}/case-studies/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: '2026-09-20T00:00:00.000Z',
      authors: [`${siteConfig.name} Architecture Team`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  let caseData: { title?: string; industry?: string | null; content?: string | null; createdAt?: Date; updatedAt?: Date } | null = null;
  if (process.env.DATABASE_URL) {
    try {
      caseData = await prisma.caseStudy.findUnique({
        where: { slug },
        select: { title: true, industry: true, content: true, createdAt: true, updatedAt: true },
      });
    } catch {
      // Graceful fallback for static prerender or offline DB
    }
  }

  const publishedDate = caseData?.createdAt ? caseData.createdAt.toISOString() : '2026-09-20T00:00:00.000Z';
  const modifiedDate = caseData?.updatedAt ? caseData.updatedAt.toISOString() : publishedDate;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseData?.title || formattedTitle,
    description: `Detailed technical case study: Architectural approach, solutions delivered, and ROI outcomes for ${slug.replace(/-/g, ' ')}.`,
    url: `${siteConfig.url}/case-studies/${slug}`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} Architecture Team`,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/case-studies/${slug}`,
    },
  };

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={caseStudySchema} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/case-studies" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to Case Studies
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 capitalize">
          {caseData?.title || slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 prose prose-lg text-slate-600 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
            <p className="mb-8">
              {caseData?.content || `Legacy infrastructure limitations created significant operational overhead for this ${slug} engagement. Real-time transaction volumes were causing data sync bottlenecks and escalating cloud infrastructure licensing costs.`}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Architectural Solution</h2>
            <p className="mb-8">
              Harvi engineered an event-driven microservices architecture utilizing Next.js edge caching, custom Node.js middleware, and auto-scaling PostgreSQL clusters. By replacing monolithic batch jobs with real-time streaming pipelines, transaction latency dropped into single-digit milliseconds.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Measurable Results</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>300% throughput increase:</strong> Handled peak load surges with zero latency degradation.</li>
              <li><strong>$2M annual cost savings:</strong> Eliminated redundant per-user SaaS license fees.</li>
              <li><strong>Zero-downtime deployment:</strong> Transitioned live production environments seamlessly without interruption.</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4">Project Overview</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="block text-slate-900">Industry</strong>
                  {caseData?.industry || 'Enterprise Technology'}
                </div>
                <div>
                  <strong className="block text-slate-900">Technologies</strong>
                  Next.js, AI Models, Node.js, PostgreSQL
                </div>
                <div>
                  <strong className="block text-slate-900">Timeline</strong>
                  15 Days (MVP) to 3 Months (Full Rollout)
                </div>
                <div>
                  <strong className="block text-slate-900">Verified By</strong>
                  Harvi Architecture Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
