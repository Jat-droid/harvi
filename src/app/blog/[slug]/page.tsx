import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Harvi Blog`,
    description: `Read our insights on ${slug.replace(/-/g, ' ')}`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Insights
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <div className="flex items-center space-x-4 mb-10 text-slate-500 text-sm">
          <span>By Engineering Team</span>
          <span>&bull;</span>
          <span>5 min read</span>
        </div>
        
        <div className="prose prose-lg text-slate-600 max-w-none">
          <p className="text-xl mb-8 leading-relaxed">
            This is a dummy blog post for the <strong>{slug}</strong> article. 
            In a production environment, this content will be populated dynamically from Markdown files (MDX) or a Headless CMS.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Implementation Details</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </main>
  );
}
