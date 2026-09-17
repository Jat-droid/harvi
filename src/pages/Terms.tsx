import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>Terms & Conditions | Harvi IT Solutions</title>
        <meta name="description" content="Terms and Conditions for Harvi IT Solutions." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 prose prose-slate prose-a:text-primary-600 max-w-none">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Terms & Conditions</h1>
        <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

        <h2>2. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, Harvi IT Solutions and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>using this Website in any way that is or may be damaging to this Website;</li>
          <li>using this Website in any way that impacts user access to this Website.</li>
        </ul>

        <h2>4. No warranties</h2>
        <p>This Website is provided "as is," with all faults, and Harvi IT Solutions express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>

        <h2>5. Governing Law & Jurisdiction</h2>
        <p>These Terms will be governed by and interpreted in accordance with the laws of the State/Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.</p>
      </div>
    </div>
  );
};

export default Terms;
