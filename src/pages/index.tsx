import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/utils/Card';

interface PricingTierProps {
  image: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface WorkshopCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, description, imageUrl }) => (
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
          Everything you need from idea to launch
        </h4>
        <div className="flex flex-col space-y-5 pt-5 leading-relaxed text-foreground sm:text-lg sm:leading-relaxed md:pt-8 lg:text-2xl lg:leading-relaxed">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const PricingTier: React.FC<PricingTierProps> = ({ image, title, price, description, features, recommended }) => (
  <div className={`transition hover:opacity-100 ${recommended ? 'origin-top lg:scale-105' : 'origin-top-left opacity-80 lg:mt-28 lg:scale-90'}`}>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img src={image} alt={title} className="w-[200px] h-[200px] mx-auto rounded-full" />
        <CardTitle>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="mt-4">
            <sup className="text-sm">US</sup>
            <span className="text-4xl font-bold">${price}</span>
          </div>
        </CardTitle>
        <p className="text-sm text-gray-400">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full rounded bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90">
          Buy Now
        </button>
      </CardContent>
    </Card>
  </div>
);

const SaaSLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 text-foreground antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b dark:bg-slate-950 dark:border-b-slate-500 pl-4 pr-3">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-semibold dark:text-white font-gentium">SaaS from Scratch</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:text-primary dark:text-white">FAQ</a>
            <a href="#" className="text-sm hover:text-primary dark:text-white">Login</a>
            <a href="#pricing" className="rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground dark:text-white hover:bg-primary/90">
              Get Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center px-5 pt-32">
        <div className="relative z-10 flex w-full max-w-screen-lg flex-col-reverse items-center text-center lg:flex-row lg:text-left">
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center lg:items-start">
            <h1 className="mt-16 w-full max-w-[14ch] font-heading text-6xl font-normal leading-[1.25] sm:text-5xl lg:text-6xl dark:text-white">
              Become the <strong className="font-black">Solo SaaS Founder</strong> You Were Meant to Be
            </h1>
            <h2 className="mt-3 max-w-[35ch] bg-gradient-to-bl from-teal-100 to-cyan-500 bg-clip-text pb-8 text-lg font-normal text-transparent sm:text-3xl">
              Master the complete journey from idea to profitable software as a service (SaaS) with a proven frameworks and step-by-step guide
            </h2>
            <div className="flex items-center gap-3 sm:text-lg dark:text-white">
              <img src="/img/chris.png" alt="Chris Frewin, the instructor of SaaS from Scratch" className="w-10 rounded-full sm:w-16" />
              <span>Chris Frewin</span>
            </div>
          </div>
          <div className="pointer-events-none flex-shrink-0 select-none m-3">
            <img 
              src="/img/splash.jpeg" 
              alt=""
              className="w-full max-w-md lg:max-w-lg rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-x-hidden my-12 dark:text-white">
        <article className="max-w-[672px] mx-auto flex flex-col gap-20 pb-24">
          <h2 className="text-center text-3xl font-semibold my-12">
            You're <span className='font-bold text-cyan-500'>good at coding</span>, but building every part of a SaaS product feels <span className='font-bold text-cyan-500'>overwhelming</span>
          </h2>
          
          <p className='text-2xl'>You start building your product: the idea is great, you even have interested customers.</p>
                    
          <p className='text-2xl'>Soon you're pulling in all sorts of frameworks for authentication, authorization, payments, and data persistence...</p>
          
          <p className='text-2xl'>It's not long before you've stacked up too many modules, libraries, and packages to count...</p>

          <p className='text-2xl'>Before you know it, you get hung up on some error or bug and the ability to bring your product to any sort of launch falls apart</p>

          <h2 className="text-center text-3xl font-semibold mb-10 my-12">
            <span className='font-bold font-gentium'>Sound <span className='font-bold text-cyan-500'>familiar?</span><br/><br/>...then SaaS from Scratch</span> is exactly the course you've been looking for
          </h2>

          <p className='text-2xl'>The course is 100% focused on building a SaaS in a way that is sustainable for a solo founder. No gimmicks or snake oil: 100% technically focused lessons designed for the technical solo founder.</p>

          <p className='text-2xl'>We focus on speed, elegance, and efficiency. We focus on solutions that are robust, yet easy to maintain and scale as a single developer.</p>

          <p className='text-2xl'>We concentrate on the core parts of a SaaS product that you need to build, and we teach you how to build them in a way that is maintainable and scalable.</p>

          <p className='text-2xl'>By the end of the course, you'll have a crystal clear picture of all the essential parts of a SaaS product, how they interact, and you'll have built them all yourself.</p>

          <h2 className="text-center text-3xl font-semibold mt-20">
            What you'll learn
          </h2>

          {/* Workshops Section */}
          <section id="workshops" className="bg-gradient-to-b mt-16 pb-16 from-background to-black/40 border-b border-white/5 w-full">
            <div className="flex flex-col gap-28 pb-24">
              <WorkshopCard
                title="Rapid Prototyping"
                description="Learn how to build your MVP quickly and efficiently, from idea to launch in just a few weeks."
                imageUrl="/img/proto.jpeg"
              />
              <WorkshopCard
                title="Technical Architecture & Implementation"
                description="Master the essential technical patterns for building scalable SaaS applications, from auth to billing to deployment."
                imageUrl="/img/proto2.jpeg"
              />
              <WorkshopCard
                title="Maintenance, Feature Development, Monitoring"
                description="Learn how to maintain and grow your SaaS product, from adding new features to monitoring performance."
                imageUrl="/img/proto3.jpeg"
              />
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20">
            <h2 className="text-center text-4xl font-bold mb-16">Start Your SaaS Journey Today</h2>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              <PricingTier
              image="/img/essentials.jpeg"
                title="Launcher"
                price="250"
                description="Complete access to core curriculum"
                features={[
                  "Technical Architecture Workshop",
                  "Interactive Exercises",
                  "Community Access",
                  "Project Templates",
                  "Certificate of Completion"
                ]}
              />
              <PricingTier
              image="/img/complete.jpeg"
                title="Founder"
                price="500"
                description="Everything you need to succeed"
                features={[
                  "All Launcher features",
                  "Technical Architecture Workshop",
                  "Growth & Marketing Workshop",
                  "1-on-1 Office Hours",
                  "Private Discord Access",
                  "Lifetime Updates"
                ]}
                recommended
              />
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="not-prose mx-auto mb-0 flex w-full flex-col items-center justify-center bg-transparent px-5">
            <h2 className="font-text text-lg text-foreground opacity-75">Trusted by developers from</h2>
            <div className="mt-10 grid w-full max-w-screen-lg grid-cols-3 place-items-center gap-8 sm:flex sm:flex-wrap sm:justify-center">
              {/* Replace with actual company logos */}
              <img src="/api/placeholder/120/40" alt="Company 1" className="h-8 opacity-50 hover:opacity-100" />
              <img src="/api/placeholder/120/40" alt="Company 2" className="h-8 opacity-50 hover:opacity-100" />
              <img src="/api/placeholder/120/40" alt="Company 3" className="h-8 opacity-50 hover:opacity-100" />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-gradient-to-b from-black relative to-background w-full sm:pb-24 pb-5 mt-40">
            <h2 className="text-center text-4xl font-bold my-16">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8 px-5">
              {[1, 2, 3, 4].map((i) => (
                <blockquote key={i} className="relative flex h-full flex-col justify-between bg-gray-800/20 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    "This course gave me the confidence and framework I needed to finally launch my SaaS. Within 3 months of completing it, I had my first paying customers."
                  </p>
                  <footer className="flex items-center gap-4">
                    <img src="/api/placeholder/40/40" alt="Student" className="w-10 h-10 rounded-full" />
                    <cite className="not-italic">John Doe, Founder of SaaSProduct</cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 py-12 dark:text-white">
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Curriculum</a></li>
                <li><a href="#" className="hover:text-primary">Resources</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Discord</a></li>
                <li><a href="#" className="hover:text-primary">Bluesky</a></li>
                <li><a href="#" className="hover:text-primary">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSLanding;