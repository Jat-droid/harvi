import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import CookieBanner from './components/CookieBanner';

// Pages
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-primary-500 selection:text-white pb-16 md:pb-0 relative">
      <CustomCursor />
      <StickyCTA />
      <CookieBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
