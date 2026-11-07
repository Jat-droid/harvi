import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url || 'https://harviitsolutions.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/services',
    '/services/ai-solutions',
    '/services/mobile-app-development',
    '/services/software-development',
    '/services/web-development',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : route === '/privacy' || route === '/terms' ? 'yearly' : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.7,
  }));

  // Default fallback slugs in case database has no entries or is offline during build
  const defaultBlogSlugs = [
    'future-of-enterprise-ai',
    'nextjs-vs-vite-performance',
    'scaling-crm-hubs',
  ];
  const defaultCaseStudySlugs = [
    'global-logistics-erp',
    'fintech-predictive-ai',
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  let caseStudyRoutes: MetadataRoute.Sitemap = [];

  try {
    // Dynamically fetch published blog posts from Prisma
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    if (posts && posts.length > 0) {
      blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    } else {
      blogRoutes = defaultBlogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.warn('Prisma blog post fetch for sitemap failed, using static fallback:', error);
    blogRoutes = defaultBlogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  }

  try {
    // Dynamically fetch published case studies from Prisma
    const cases = await prisma.caseStudy.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    if (cases && cases.length > 0) {
      caseStudyRoutes = cases.map((item) => ({
        url: `${baseUrl}/case-studies/${item.slug}`,
        lastModified: item.updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
    } else {
      caseStudyRoutes = defaultCaseStudySlugs.map((slug) => ({
        url: `${baseUrl}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.warn('Prisma case study fetch for sitemap failed, using static fallback:', error);
    caseStudyRoutes = defaultCaseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  }

  const llmsRoute: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...llmsRoute];
}
