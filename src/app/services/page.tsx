import { Metadata } from 'next';
import Services from '../../components/Services';
import JsonLd from '../../components/JsonLd';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
  title: 'Our Services | Harvi IT Solutions',
  description: 'Explore our comprehensive IT solutions including Custom App Development, Web Architecture, Enterprise CRM Hubs, and AI Solutions.',
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Harvi IT Solutions Services",
  description: "Enterprise IT solutions, custom software, mobile app development, and AI engineering.",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "AI Solutions & Neural Intelligence",
      url: `${siteConfig.url}/services/ai-solutions`,
    },
    {
      "@type": "Service",
      position: 2,
      name: "Web Development & Cloud Architecture",
      url: `${siteConfig.url}/services/web-development`,
    },
    {
      "@type": "Service",
      position: 3,
      name: "Mobile App Development",
      url: `${siteConfig.url}/services/mobile-app-development`,
    },
    {
      "@type": "Service",
      position: 4,
      name: "Custom Software & ERP Engineering",
      url: `${siteConfig.url}/services/software-development`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <JsonLd data={servicesSchema} />
      <h1 className="sr-only">Our IT Services</h1>
      <Services />
    </main>
  );
}
