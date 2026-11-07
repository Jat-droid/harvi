import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights & Blog | Harvi IT Solutions',
  description: 'Read the latest insights on enterprise AI, modern web architecture, and software development strategies.',
};

export default function BlogPage() {
  const dummyPosts = [
    { slug: 'future-of-enterprise-ai', title: 'The Future of Enterprise AI', date: 'Sept 20, 2026' },
    { slug: 'nextjs-vs-vite-performance', title: 'Next.js vs Vite: A Performance Deep Dive', date: 'Sept 15, 2026' },
    { slug: 'scaling-crm-hubs', title: 'Scaling CRM Hubs for Global Teams', date: 'Sept 10, 2026' },
  ];

  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Insights & Engineering Blog</h1>
        <p className="text-xl text-slate-600 mb-12">Expert perspectives on software architecture and artificial intelligence.</p>
        
        <div className="space-y-6">
          {dummyPosts.map((post) => (
            <div key={post.slug} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-medium text-primary-600 mb-2 block">{post.date}</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{post.title}</h2>
              <p className="text-slate-600 mb-4">A brief preview of the article content goes here. This will eventually be powered by Markdown or a CMS.</p>
              <Link href={`/blog/${post.slug}`} className="text-slate-900 font-medium hover:text-primary-600 flex items-center">
                Read Article &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
