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
    changeFrequency: (route === '/privacy' || route === '/terms' ? 'yearly' : 'weekly') as const,
    priority: route === '' ? 1.0 : (route === '/privacy' || route === '/terms' ? 0.5 : 0.8),
  }));

  return [...routes];
}
