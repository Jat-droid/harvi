import type { Metadata } from 'next';
import '../index.css';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import CookieBanner from '../components/CookieBanner';
import { siteConfig } from '../config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Enterprise IT Solutions | Harvi IT Solutions | Global Bespoke Tech Agency',
  description: 'Harvi IT Solutions is your startup agility IT partner. We deliver bespoke enterprise IT solutions, custom software, and AI automation for global businesses.',
  icons: {
    icon: '/favicon.png',
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
        url: '/logo.png',
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
    images: ['/logo.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "logo": siteConfig.logoUrl,
              "description": siteConfig.description,
              "contactPoint": {
                "@type": "ContactPoint",
                "email": siteConfig.contact.email,
                "telephone": siteConfig.contact.phone,
                "contactType": "customer service"
              },
              "sameAs": siteConfig.socials
            })
          }}
        />
        <CustomCursor />
        <StickyCTA />
        <CookieBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
