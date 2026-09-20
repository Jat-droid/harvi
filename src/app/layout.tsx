import type { Metadata } from 'next';
import '../index.css';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import CookieBanner from '../components/CookieBanner';

export const metadata: Metadata = {
  title: 'Harvi IT Solutions | Enterprise AI & Web Architecture',
  description: 'We build enterprise-grade software with startup speed. Elevate your business with scalable, futuristic IT solutions including CRM, ERP, and Web Architecture.',
  icons: {
    icon: '/favicon.png',
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
