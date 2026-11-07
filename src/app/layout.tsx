import type { Metadata } from 'next';
import '../index.css';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import CookieBanner from '../components/CookieBanner';
import JsonLd from '../components/JsonLd';
import { siteConfig } from '../config/site';

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logoUrl,
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
      },
      sameAs: siteConfig.socials,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Enterprise IT Solutions | Harvi IT Solutions | Global Bespoke Tech Agency',
  description: 'Harvi IT Solutions is your startup agility IT partner. We deliver bespoke enterprise IT solutions, custom software, and AI automation for global businesses.',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 min-h-screen font-sans selection:bg-primary-500 selection:text-white pb-16 md:pb-0 relative">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary-600 focus:text-white focus:font-medium focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
        >
          Skip to main content
        </a>
        <JsonLd data={websiteSchema} />
        <CustomCursor />
        <StickyCTA />
        <CookieBanner />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
