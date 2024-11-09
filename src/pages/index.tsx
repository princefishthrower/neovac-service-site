import React from 'react';
import PricingTier from '../components/PricingTier';
import FAQSection from '../components/FaqSection';
import { Link } from 'gatsby';

interface WorkshopCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, subtitle, description, imageUrl }) => (
  <div className="not-prose">
    <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center gap-5 md:flex-row md:items-start">
      <a className="flex flex-shrink-0 items-center justify-center md:items-start">
        <img alt={title} src={imageUrl} className="w-[250px] h-[250px] rounded-full" />
      </a>
      <div className="px-5 md:pt-5">
        <h3 className="text-balance text-center font-text text-3xl font-semibold sm:text-4xl md:text-left">
          {title}
        </h3>
        <h4 className="text-balance pt-2 text-center text-lg font-normal text-primary sm:text-2xl sm:font-medium md:pt-3 md:text-left lg:text-2xl">
          {subtitle}
        </h4>
        <div className="flex flex-col space-y-5 pt-5 leading-relaxed text-foreground sm:text-lg sm:leading-relaxed md:pt-8 lg:text-lg lg:leading-relaxed">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = ({ quote, name, role, imageId }: { quote: string, name: string, role: string, imageId: string }) => (
  <blockquote className="relative flex h-full flex-col justify-between bg-gray-800/20 p-6 rounded-lg backdrop-blur-sm">
    <p className="text-lg mb-4 leading-relaxed">{quote}</p>
    <footer className="flex items-center gap-4">
      <img
        src={`https://thispersondoesnotexist.xyz/img/${imageId}`}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <cite className="not-italic">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-400">{role}</div>
      </cite>
    </footer>
  </blockquote>
);

const GitRecallLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b border-gray-200 bg-white pl-4 pr-3">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-semibold text-foreground font-gentium">GitRecall</span>
          <div className="flex items-center gap-4">
            <a href="#faq" className="text-sm hover:text-primary dark:text-white">FAQ</a>
            <Link to="/login" className="text-sm hover:text-primary dark:text-white">Login</Link>
            <a href="#pricing" className="rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground dark:text-white hover:bg-primary/90">
              Get Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center px-5 pt-32">          <div className="relative z-10 flex w-full max-w-screen-lg flex-col items-center text-center">
            <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
              <h1 className="mt-16 w-full max-w-[14ch] font-heading text-[4rem] font-normal leading-[1.25] sm:text-[4rem] lg:text-[4rem] text-black">
                Understand Your <strong className="font-black text-primary">Git History</strong> Like Never Before
              </h1>
              <h2 className="mt-3 max-w-[35ch] pb-8 text-lg font-normal text-black sm:text-3xl">
                Powerful LLM-based analysis of your repositories' commit messages and diffs to help you track changes, find regressions, and understand your codebase evolution.
              </h2>
            </div>
          </div>
      </header>

      {/* Main Content */}
      <main className="overflow-x-hidden my-12 dark:text-white">
        <article className="max-w-[672px] mx-auto flex flex-col gap-20 pb-24 px-6">
          <h2 className="text-center text-3xl font-semibold my-12 text-black">
            Enterprise-Grade Git History Analysis
          </h2>

          <p className='text-2xl text-black'>Track the evolution of your codebase with precision and insight.</p>

          <p className='text-2xl text-black'>Quickly identify when major changes occurred, locate potential regression points, and understand the context of historical decisions.</p>

          <p className='text-2xl text-black'>Use natural language queries to search through your entire git history, finding exactly when and why specific changes were made.</p>

          <p className='text-2xl text-black'>Reduce debugging time by up to 60% with instant access to historical context around code changes, helping your team quickly identify and resolve issues.</p>

          <p className='text-2xl text-black'>Preserve institutional knowledge and improve team collaboration by making your entire development history searchable and accessible to all team members.</p>

          {/* Pricing Section */}
          <section id="pricing" className="py-20">
            <h2 className="text-center text-4xl font-bold mb-16">Unlock the Power of GitRecall</h2>
            <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center items-center lg:items-start px-6">
              <PricingTier
                image="/img/essentials.jpeg"
                title="Enterprise License"
                price="500"
                description="Complete access to GitRecall"
                features={[
                  "Unlimited repositories",
                  "Unlimited queries",
                  "Unlimited users",
                  "Advanced search capabilities",
                  "Repository insights",
                  "Commit analysis",
                  "Customizable dashboards"
                ]}
                recommended={true}
              />
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="not-prose mx-auto mb-0 flex w-full flex-col items-center justify-center bg-transparent px-5">
            <h2 className="font-text text-lg text-foreground opacity-75">Trusted by developers, engineers, and devops professionals from</h2>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
              <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" className="h-8 opacity-50 hover:opacity-100 brightness-0" />
              <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="Amazon" className="h-8 opacity-50 hover:opacity-100 brightness-0" />
              <img src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" alt="Apple" className="h-8 opacity-50 hover:opacity-100 brightness-0" />
              <img src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg" alt="Netflix" className="h-8 opacity-50 hover:opacity-100 brightness-0" />
              <img src="https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg" alt="Meta (Facebook)" className="h-8 opacity-50 hover:opacity-100 brightness-0" />
            </div>
          </section>
        </article>
      </main>

      {/* FAQs */}
      <FAQSection/>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 py-12">
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-black">Product</h3>
              <ul className="space-y-2">
                <li><a href="#pricing" className="text-black hover:text-primary">Enterprise License</a></li>
                <li><a href="#faq" className="text-black hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-black">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://bitbucket.org/princefishthrower/gitrecall" className="text-black hover:text-primary">Bitbucket</a></li>
                <li><a href="/docs" className="text-black hover:text-primary">Documentation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GitRecallLanding;