import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 dark:text-white">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-primary" />
        ) : (
          <ChevronDown className="h-6 w-6 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What technical prerequisites do I need for this course?",
      answer: "You should have intermediate experience with JavaScript/TypeScript and be comfortable with React basics. Some familiarity with backend development concepts is helpful but not required. The course starts with fundamentals and progressively builds to advanced concepts."
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course is self-paced and consists of 100+ lessons across 5 comprehensive chapters. Most students complete it in 8-12 weeks while building their own SaaS product alongside the lessons. Each major section (Frontend, Backend, Testing, etc.) takes about 2-3 weeks to complete thoroughly."
    },
    {
      question: "What tech stack does the course use and why?",
      answer: "We use Gatsby/React/TypeScript for the frontend and .NET Core for the backend, deployed on Digital Ocean. This stack is chosen for its reliability, scalability, and maintainability as a solo founder. We also integrate industry-standard tools like Stripe, Netlify, and Supabase for various functionalities."
    },
    {
      question: "Will this course help me build my specific SaaS idea?",
      answer: "Yes! While we build a specific example product throughout the course, the patterns, architectures, and integrations taught are applicable to any SaaS product. You'll learn how to implement authentication, payments, user management, API design, and testing - core components of any SaaS application."
    },
    {
      question: "What's included in the Founder tier vs the Launcher tier?",
      answer: "The Founder tier includes everything in Launcher plus 1-on-1 office hours, private Discord access for direct support, lifetime updates to the course content, and additional workshops on growth and marketing. It's recommended for those who want more personalized guidance and ongoing support."
    },
    {
      question: "How is the course content delivered?",
      answer: "The course includes video lessons, written tutorials, code examples, and practical exercises. You'll have access to complete source code, project templates, and a step-by-step guide for implementing each feature. The content is constantly updated to reflect the latest best practices and technologies."
    },
    {
      question: "Do you offer support if I get stuck?",
      answer: "Yes! All students have access to our community forum where you can ask questions and get help. Founder tier members also get private Discord access and 1-on-1 office hours for more personalized support when needed."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course content or find it's not the right fit, we'll provide a full refund - no questions asked."
    }
  ];

  return (
    <section id="faq" className="py-20 px-5">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-bold mb-16 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;