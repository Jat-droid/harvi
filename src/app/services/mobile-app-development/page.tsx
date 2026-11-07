import { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '../../../components/FAQ';
import ServiceFeatures from '../../../components/ServiceFeatures';
import TechStack from '../../../components/TechStack';
import ProcessTimeline from '../../../components/ProcessTimeline';
import Portfolio from '../../../components/Portfolio';
import GeoBlock from '../../../components/GeoBlock';
import JsonLd from '../../../components/JsonLd';
import { siteConfig } from '../../../config/site';

export const metadata: Metadata = {
  title: 'Global Mobile App Development Company | iOS & Android Apps | Harvi',
  description: 'Top-tier mobile app development company. We deliver high-performance cross-platform app development services for iOS and Android using React Native and Flutter.',
  alternates: {
    canonical: `${siteConfig.url}/services/mobile-app-development`,
  },
};

const mobileSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "Mobile Application Development",
      description: "Top-tier mobile app development company. We deliver high-performance cross-platform app development services for iOS and Android using React Native and Flutter.",
      url: `${siteConfig.url}/services/mobile-app-development`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mobile App Development",
          item: `${siteConfig.url}/services/mobile-app-development`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a mobile app cost to develop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our enterprise mobile app development services start from 20k. This investment covers complete cross-platform development for both iOS and Android.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a mobile app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We focus on rapid, agile development and can deliver a fully functional cross-platform MVP (Minimum Viable Product) in 10 to 15 days.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop for both iOS and Android?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we use advanced cross-platform technologies like React Native and Flutter to simultaneously build for both platforms from a single codebase.",
          },
        },
      ],
    },
  ],
};

const mobileFaqs = [
  {
    question: "How much does a mobile app cost to develop?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Our enterprise mobile app development services start from 20k. This investment covers complete cross-platform development for both iOS and Android.
        </p>
        <p>The total cost of your application depends on the complexity of the features you require. Common cost drivers include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>User Authentication & Security:</strong> Implementing biometrics, two-factor authentication, or enterprise SSO.</li>
          <li><strong>Backend Infrastructure:</strong> Custom APIs, cloud databases, and real-time syncing mechanisms.</li>
          <li><strong>Hardware Integration:</strong> Utilizing Bluetooth, GPS, ARKit, or complex camera functionalities.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          We focus on rapid, agile development and can deliver a fully functional cross-platform MVP (Minimum Viable Product) in 10 to 15 days.
        </p>
        <p>This aggressive timeline is designed to get your app into the hands of real users as quickly as possible so you can start gathering feedback and generating ROI. After the initial MVP launch, we transition into iterative sprint cycles to add secondary features, refine the UI based on user data, and continuously scale the application architecture.</p>
      </div>
    )
  },
  {
    question: "Do you develop for both iOS and Android?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Yes, we use advanced cross-platform technologies like React Native and Flutter to simultaneously build for both platforms from a single codebase.
        </p>
        <p>This approach provides several massive advantages over traditional native development (where you have to write code twice in Swift and Kotlin):</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cost Efficiency:</strong> Development costs are nearly cut in half since we are maintaining one unified codebase.</li>
          <li><strong>Feature Parity:</strong> iOS and Android users always receive new features and bug fixes at the exact same time.</li>
          <li><strong>Native Performance:</strong> Modern cross-platform frameworks compile down to native code, meaning the app runs just as fast and smooth as a traditionally built app.</li>
        </ul>
      </div>
    )
  }
];

const mobileFeatures = [
  { title: "Cross-Platform Development", description: "Write once, deploy everywhere. We build seamless apps for both iOS and Android simultaneously." },
  { title: "Native Mobile Apps", description: "High-fidelity native experiences using Swift and Kotlin for maximum performance." },
  { title: "App Prototyping & UX", description: "Interactive wireframes and user journeys to validate your app concept before coding." },
  { title: "Enterprise Mobility", description: "Secure mobile portals integrated directly with your corporate infrastructure and active directories." }
];

const mobileTech = [
  { name: "React Native" }, { name: "Flutter" }, { name: "Swift (iOS)" }, { name: "Kotlin (Android)" }, { name: "Firebase" }, { name: "GraphQL" }, { name: "Redux" }, { name: "Appium" }
];

const mobileProcess = [
  { title: "Requirement Gathering", description: "Defining the core features, target audience, and platform strategy (iOS/Android/Both)." },
  { title: "UI/UX & Prototyping", description: "Designing intuitive mobile interfaces that adhere to Apple HIG and Google Material guidelines." },
  { title: "Sprint Development", description: "Agile cross-platform coding with continuous integration and weekly demo builds." },
  { title: "App Store Deployment", description: "Navigating the complex submission processes for both the App Store and Google Play." }
];

export default function MobileAppDevelopmentPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={mobileSchemas} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/services" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Services
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mobile App Development</h1>
        
        {/* 40-to-60-word factual summary */}
        <p className="text-lg text-slate-700 leading-relaxed font-medium bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-12 shadow-sm">
          Harvi builds high-performance iOS and Android mobile applications engineered for native responsiveness, offline sync, and fluid animations. Powered by React Native, Flutter, Swift, Kotlin, and Firebase, our mobile engineering squads deliver market-ready, store-compliant MVP applications in an accelerated 10-to-15-day development sprint.
        </p>

        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
          <p className="text-xl leading-relaxed mb-8">
            Native and cross-platform mobile app development tailored for startups and global enterprises. We create intuitive, high-performance mobile experiences for iOS and Android.
          </p>
          <p className="leading-relaxed">
            Whether you need a consumer-facing application designed for viral growth, or a highly secure internal corporate mobility tool, our mobile engineering team delivers flawless apps. We leverage frameworks like React Native to cut development times in half without sacrificing native performance or feel.
          </p>
        </div>
        
        <ServiceFeatures 
          title="What We Provide" 
          subtitle="End-to-end mobile engineering from concept to app store." 
          features={mobileFeatures} 
        />
        
        <TechStack technologies={mobileTech} />
        
        <ProcessTimeline steps={mobileProcess} />
        
        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have an app idea?</h2>
          <p className="text-lg text-slate-600 mb-8">Let's bring it to life on iOS and Android.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/30">
            Start Mobile Project
          </Link>
        </div>
      </div>
      
      <div className="mt-24">
        <Portfolio />
      </div>

      <div className="mt-20">
        <GeoBlock />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <FAQ faqs={mobileFaqs} />
      </div>
    </main>
  );
}
