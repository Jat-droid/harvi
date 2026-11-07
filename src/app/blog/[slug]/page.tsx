import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import { siteConfig } from '../../../config/site';
import { prisma } from '@/lib/prisma';

const fallbackSlugs = [
  'future-of-enterprise-ai',
  'nextjs-vs-vite-performance',
  'scaling-crm-hubs',
];

export async function generateStaticParams() {
  if (process.env.DATABASE_URL) {
    try {
      const posts = await prisma.blogPost.findMany({
        where: { published: true },
        select: { slug: true },
      });

      if (posts && posts.length > 0) {
        return posts.map((post) => ({ slug: post.slug }));
      }
    } catch {
      // Fallback if database is unavailable during build
    }
  }

  return fallbackSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const title = `${formattedTitle} | Harvi Technical Blog`;
  const description = `In-depth technical architecture breakdown and engineering insights on ${slug.replace(/-/g, ' ')}.`;
  const canonical = `${siteConfig.url}/blog/${slug}`;

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
      authors: [`${siteConfig.name} Engineering Team`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  let postData: { title?: string; content?: string | null; createdAt?: Date; updatedAt?: Date } | null = null;
  if (process.env.DATABASE_URL) {
    try {
      postData = await prisma.blogPost.findUnique({
        where: { slug },
        select: { title: true, content: true, createdAt: true, updatedAt: true },
      });
    } catch {
      // Graceful fallback for static generation or offline DB
    }
  }

  const publishedDate = postData?.createdAt ? postData.createdAt.toISOString() : '2026-09-20T00:00:00.000Z';
  const modifiedDate = postData?.updatedAt ? postData.updatedAt.toISOString() : publishedDate;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: postData?.title || formattedTitle,
    description: `In-depth technical architecture breakdown and engineering insights on ${slug.replace(/-/g, ' ')}.`,
    url: `${siteConfig.url}/blog/${slug}`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} Engineering Team`,
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
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
  };

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={articleSchema} />
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Insights
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 capitalize">
          {postData?.title || slug.replace(/-/g, ' ')}
        </h1>
        <div className="flex items-center space-x-4 mb-10 text-slate-500 text-sm">
          <span>By Harvi Engineering Team</span>
          <span>&bull;</span>
          <span>5 min read</span>
          <span>&bull;</span>
          <time dateTime={publishedDate}>Sept 20, 2026</time>
        </div>
        
        <div className="prose prose-lg text-slate-600 max-w-none">
          <p className="text-xl mb-8 leading-relaxed">
            {postData?.content || `This is an engineering insight for the ${slug} architecture. In a production environment, this content is populated dynamically from Markdown files (MDX) or your headless CMS.`}
          </p>
          <p>
            Enterprise software systems require resilient design patterns. Whether managing microservices, state management, or neural networks, our architecture prioritizes uptime, zero-downtime deployments, and strict type safety.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Implementation & Performance Metrics</h2>
          <p>
            By decoupling client-side rendering from backend database operations using Next.js static prerendering, time-to-first-byte (TTFB) is reduced by over 70%, with sub-100ms response latencies across global edge CDN points of presence.
          </p>
        </div>
      </div>
    </main>
  );
}
