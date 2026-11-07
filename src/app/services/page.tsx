import { Metadata } from 'next';
import Services from '../../components/Services';

export const metadata: Metadata = {
  title: 'Our Services | Harvi IT Solutions',
  description: 'Explore our comprehensive IT solutions including Custom App Development, Web Architecture, Enterprise CRM Hubs, and AI Solutions.',
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <h1 className="sr-only">Our IT Services</h1>
      <Services />
    </main>
  );
}
