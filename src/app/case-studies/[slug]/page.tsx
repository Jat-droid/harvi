import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Harvi Case Studies`,
    description: `Case study detailing our work on ${slug.replace(/-/g, ' ')}`,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/case-studies" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to Case Studies
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 prose prose-lg text-slate-600 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
            <p className="mb-8">
              This is a dummy case study for <strong>{slug}</strong>. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
            <p className="mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Results</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>300% increase in performance</li>
              <li>$2M annual cost savings</li>
              <li>Zero downtime deployment</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Project Overview</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <strong className="block text-slate-900">Industry</strong>
                  Enterprise
                </div>
                <div>
                  <strong className="block text-slate-900">Technologies</strong>
                  Next.js, AI, Python
                </div>
                <div>
                  <strong className="block text-slate-900">Timeline</strong>
                  3 Months
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
