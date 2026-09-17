import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Harvi IT Solutions | Enterprise AI & Web Architecture</title>
        <meta name="description" content="We build enterprise-grade software with startup speed. Elevate your business with scalable, futuristic IT solutions including CRM, ERP, and Web Architecture." />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default Home;
