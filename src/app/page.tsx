import Hero from '../components/Hero';
import GeoBlock from '../components/GeoBlock';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <GeoBlock />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <Contact />
    </main>
  );
}
