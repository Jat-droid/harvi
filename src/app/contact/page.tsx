import { Metadata } from 'next';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Harvi IT Solutions',
  description: 'Get in touch with Harvi IT Solutions to discuss your next big project. We build enterprise-grade software with startup speed.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <h1 className="sr-only">Contact Harvi IT Solutions</h1>
      <Contact />
    </main>
  );
}
