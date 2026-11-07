import { MetadataRoute } from 'next';
import { siteConfig } from '../config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/services',
    '/services/web-development',
    '/services/mobile-app-development',
    '/services/software-development',
    '/services/ai-solutions',
    '/blog',
    '/case-studies',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === '/privacy' || route === '/terms' ? 'yearly' : 'weekly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route === '' ? 1.0 : (route === '/privacy' || route === '/terms' ? 0.5 : 0.8),
  }));

  const blogSlugs = [
    'future-of-enterprise-ai',
    'nextjs-vs-vite-performance',
    'scaling-crm-hubs',
  ];

  const caseStudySlugs = [
    'global-logistics-erp',
    'fintech-predictive-ai',
  ];

  const dynamicRoutes = [
    ...blogSlugs.map((slug) => ({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${siteConfig.url}/case-studies/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [...routes, ...dynamicRoutes];
}
