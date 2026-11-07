import { Metadata } from 'next';
import GeoBlock from '../../components/GeoBlock';
import WhyUs from '../../components/WhyUs';

export const metadata: Metadata = {
  title: 'About Us | Harvi IT Solutions',
  description: 'Learn about Harvi IT Solutions, our mission, and why we are the preferred partner for enterprise-grade AI and Web Architecture.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <h1 className="sr-only">About Harvi IT Solutions</h1>
      <GeoBlock />
      <WhyUs />
    </main>
  );
}
