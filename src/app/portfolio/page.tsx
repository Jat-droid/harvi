import { Metadata } from 'next';
import Portfolio from '../../components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Harvi IT Solutions',
  description: 'Discover our portfolio of enterprise-grade software solutions, mobile apps, and high-performance digital ecosystems.',
};

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <h1 className="sr-only">Our Portfolio & Case Studies</h1>
      <Portfolio />
    </main>
  );
}
