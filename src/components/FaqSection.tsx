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
        <span className="text-xl font-medium text-black">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-primary" />
        ) : (
          <ChevronDown className="h-6 w-6 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does GitRecall's repository analysis work?",
      answer: "GitRecall uses advanced LLM embeddings to analyze your git commit messages and diffs. This creates a searchable context that helps you quickly locate changes, understand code evolution, and identify potential regression points in your repository history."
    },
    {
      question: "What's included in the Enterprise license?",
      answer: "The Enterprise license costs $500 per year and includes unlimited repositories and unlimited queries. This gives you full access to GitRecall's commit analysis, search capabilities, and repository insights across all your projects."
    },
    {
      question: "How does GitRecall handle large repositories?",
      answer: "GitRecall is optimized for enterprise-scale repositories. Our embedding system efficiently processes large commit histories and diffs, providing fast search results even across extensive git histories and large codebases."
    },
    {
      question: "Can I use GitRecall with private repositories?",
      answer: "Yes, GitRecall works with both public and private repositories. All analysis is performed locally on your machine, ensuring your code and commit history remain secure and private."
    },
    {
      question: "What types of insights can GitRecall provide?",
      answer: "GitRecall can help you track major refactors, identify when specific features were implemented, locate bug fixes, understand code evolution patterns, and pinpoint potential regression sources. The LLM-based analysis understands natural language queries about your codebase history."
    },
    {
      question: "Is there a trial version available?",
      answer: "Yes, you can try GitRecall with public repositories for free to experience its capabilities. The Enterprise license is required for private repositories and unlimited usage."
    },
    {
      question: "What operating systems does GitRecall support?",
      answer: "GitRecall is available as a desktop application for Windows, macOS, and Linux. The application runs locally on your machine, ensuring fast performance and data privacy."
    },
    {
      question: "Do you offer enterprise-wide licenses for teams?",
      answer: "Yes, we offer custom enterprise-wide licensing for development teams. Contact us for pricing and deployment options for your organization."
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