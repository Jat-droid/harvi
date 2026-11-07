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
  title: 'AI Automation Services | Generative AI Integration | Harvi',
  description: 'Global AI automation services for modern businesses. We provide generative AI integration, custom LLMs, and machine learning to automate complex workflows.',
  alternates: {
    canonical: `${siteConfig.url}/services/ai-solutions`,
  },
};

const aiSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Solutions & Neural Intelligence",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "AI Automation & LLM Integration",
      description: "Global AI automation services for modern businesses. We provide generative AI integration, custom LLMs, and machine learning to automate complex workflows.",
      url: `${siteConfig.url}/services/ai-solutions`,
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
          name: "AI Solutions",
          item: `${siteConfig.url}/services/ai-solutions`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI automation for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI automation involves integrating Machine Learning and Generative AI models (like custom LLMs) into your existing workflows to automate repetitive tasks, generate content dynamically, and synthesize complex data instantly.",
          },
        },
        {
          "@type": "Question",
          name: "How much do AI automation services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our custom AI automation and integration services start from 20k. The final architecture is tailored specifically to your enterprise data and security compliance requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to integrate AI into my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilizing our rapid deployment models, we can build, train, and integrate your initial AI automation workflows in just 10 to 15 days.",
          },
        },
      ],
    },
  ],
};

const aiFaqs = [
  {
    question: "What is AI automation for businesses?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          AI automation involves integrating Machine Learning and Generative AI models (like custom LLMs) into your existing workflows to automate repetitive tasks, generate content dynamically, and synthesize complex data instantly.
        </p>
        <p>For modern enterprises, this can take many forms:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Deploying intelligent customer support agents that resolve complex queries without human intervention.</li>
          <li>Utilizing Computer Vision to automate quality assurance on manufacturing lines or process scanned PDF documents.</li>
          <li>Using predictive analytics to automatically adjust inventory forecasting based on hundreds of variables.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How much do AI automation services cost?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Our custom AI automation and integration services start from 20k. The final architecture is tailored specifically to your enterprise data and security compliance requirements.
        </p>
        <p>Unlike off-the-shelf AI wrappers, we build proprietary AI integrations. This means the models are trained securely on your company's private data, without leaking proprietary information back to public models (like ChatGPT). The cost scales based on the complexity of the data pipelines, the size of the neural networks required, and the level of security architecture needed.</p>
      </div>
    )
  },
  {
    question: "How long does it take to integrate AI into my business?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-800">
          Utilizing our rapid deployment models, we can build, train, and integrate your initial AI automation workflows in just 10 to 15 days.
        </p>
        <p>The speed of AI integration relies heavily on the quality of your existing data. In our initial 10 to 15 day sprint, we focus on high-impact, low-friction workflows—such as automating internal HR queries or drafting templated sales responses. Once these initial models are validated and deployed, we move on to more complex, cross-departmental AI workflows.</p>
      </div>
    )
  }
];

const aiFeatures = [
  { title: "Custom LLM Integration", description: "Securely fine-tune and integrate Large Language Models (like OpenAI or Llama) with your proprietary business data." },
  { title: "Predictive Analytics", description: "Utilize historical data and machine learning to forecast trends, inventory needs, and customer behaviors." },
  { title: "Automated Customer Support", description: "Deploy highly intelligent, context-aware AI agents that can handle complex customer queries instantly." },
  { title: "Computer Vision & OCR", description: "Automate document processing and visual quality control using advanced neural networks." }
];

const aiTech = [
  { name: "Python" }, { name: "PyTorch" }, { name: "TensorFlow" }, { name: "OpenAI API" }, { name: "LangChain" }, { name: "Hugging Face" }, { name: "Pinecone (Vector DB)" }, { name: "AWS SageMaker" }
];

const aiProcess = [
  { title: "Data Audit & Strategy", description: "Assessing your current data infrastructure and identifying high-ROI automation opportunities." },
  { title: "Model Selection & Training", description: "Choosing the right foundational models and fine-tuning them on your secure proprietary data." },
  { title: "Integration Engineering", description: "Building the middleware APIs to connect the AI models seamlessly to your existing software systems." },
  { title: "Validation & Tuning", description: "Rigorous testing to prevent hallucinations, ensure security, and optimize response latency." }
];

export default function AISolutionsPage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <JsonLd data={aiSchemas} />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/services" className="text-primary-600 hover:underline font-medium text-sm">
            &larr; Back to all Services
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">AI Solutions & Neural Intelligence</h1>
        
        {/* 40-to-60-word factual summary */}
        <p className="text-lg text-slate-700 leading-relaxed font-medium bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-12 shadow-sm">
          Harvi delivers enterprise AI solutions by integrating custom LLMs, predictive neural networks, and automated workflow agents directly into your software. Built using Python, PyTorch, LangChain, OpenAI APIs, and vector databases, our secure proprietary models achieve production deployment within a rapid 10-to-15-day sprint.
        </p>

        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
          <p className="text-xl leading-relaxed mb-8">
            Leverage the power of Artificial Intelligence. We implement predictive models, machine learning, and generative AI directly into your enterprise workflows.
          </p>
          <p className="leading-relaxed">
            The AI revolution is here. We help forward-thinking organizations harness Generative AI and custom neural networks to automate the mundane, unlock deep insights from massive datasets, and create entirely new product experiences. We prioritize data privacy and security in every implementation.
          </p>
        </div>
        
        <ServiceFeatures 
          title="What We Provide" 
          subtitle="Next-generation AI capabilities tailored to your business." 
          features={aiFeatures} 
        />
        
        <TechStack technologies={aiTech} />
        
        <ProcessTimeline steps={aiProcess} />
        
        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to automate your enterprise?</h2>
          <p className="text-lg text-slate-600 mb-8">Discover how AI can streamline your operations and drive unprecedented growth.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/30">
            Explore AI Capabilities
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
        <FAQ faqs={aiFaqs} />
      </div>
    </main>
  );
}
