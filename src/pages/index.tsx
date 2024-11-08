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

const SaaSLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 text-foreground antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b dark:bg-slate-950 dark:border-b-slate-500 pl-4 pr-3">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-semibold dark:text-white font-gentium">SaaS from Scratch™</span>
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
      <header className="relative flex flex-col items-center justify-center px-5 pt-32">
        <div className="relative z-10 flex w-full max-w-screen-lg flex-col-reverse items-center text-center lg:flex-row lg:text-left">
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center lg:items-start">
            <h1 className="mt-16 w-full max-w-[14ch] font-heading text-[4rem] font-normal leading-[1.25] sm:text-[4rem] lg:text-[4rem] dark:text-white">
              Become the <strong className="font-black">Solo SaaS Founder</strong> You Were Meant to Be
            </h1>
            <h2 className="mt-3 max-w-[35ch] bg-gradient-to-bl from-teal-400 to-cyan-500 bg-clip-text pb-8 text-lg font-normal text-transparent sm:text-3xl">
              Master the complete journey from idea to profitable software as a service (SaaS) with a proven frameworks and step-by-step guide
            </h2>
            <div className="flex items-center gap-3 sm:text-lg dark:text-white">
              <a href="https://chrisfrew.in" target="_blank" className='flex items-center gap-3 sm:text-lg dark:text-white'>
                <img src="/img/chris.png" alt="Chris Frewin, the instructor of SaaS from Scratch™" className="w-10 rounded-full sm:w-16" />
                <span>Chris Frewin</span>
              </a>
            </div>
          </div>
          <div className="relative flex-shrink-0 select-none m-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 blur-lg group-hover:opacity-100 animate-pulse"></div>
            <img
              src="/img/splash.jpeg"
              alt=""
              className="relative w-full max-w-md lg:max-w-lg rounded-full"
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

          <p className='text-2xl'>Before you know it, you get hung up on some error or bug and the ability to bring your product to any sort of launch falls apart.</p>

          <h2 className="text-center text-3xl font-semibold mb-10 my-12">
            <span className='font-bold'>Sound <span className='font-bold text-cyan-500'>familiar?</span><br /><br />...then <span className='font-gentium'>SaaS from Scratch™</span> is exactly the course you've been looking for.</span>
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
                title="1. Modern Frontend Architecture"
                subtitle='Gatsby, TypeScript, and Redux for production-ready front ends.'
                description="Master Gatsby, TypeScript, and Redux while building a production-ready frontend. Learn advanced component design, state management, and API integration patterns used by top SaaS companies."
                imageUrl="/img/proto.jpeg"
              />
              <WorkshopCard
                title="2. Full-Stack Infrastructure & DevOps"
                subtitle='Backend with .NET Core, CI/CD pipelines, and Digital Ocean deployment.'
                description="Build a robust backend with .NET Core, set up CI/CD pipelines, and deploy to Digital Ocean. Learn professional-grade DevOps practices including SSL certification, NGINX configuration, and multi-environment management."
                imageUrl="/img/proto2.jpeg"
              />
              <WorkshopCard
                title="3. Advanced API Development"
                subtitle='API design, TypeScript compiler integration, authentication, and microservices.'
                description="Create sophisticated API endpoints with TypeScript compiler integration, implement secure authentication, and build scalable microservices. Master contract-based API design and robust error handling."
                imageUrl="/img/proto3.jpeg"
              />
              <WorkshopCard
                title="4. Production-Ready Features & Integration"
                subtitle='Payments, authentication, user management, and email systems.'
                description="Implement essential SaaS features including Stripe payments, Supabase user management, and custom email systems. Learn to build professional features that users expect from modern SaaS products."
                imageUrl="/img/proto4.jpeg"
              />
              <WorkshopCard
                title="5. Testing & Quality Assurance"
                subtitle="Unit, integration, and end-to-end testing, staging environments, and application-wide logging."
                description="Develop comprehensive testing suites using Cypress and xUnit, set up staging environments, and implement application-wide logging. Master the practices that ensure your SaaS runs reliably at scale."
                imageUrl="/img/proto5.jpeg"
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
                recommended={false}
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
                recommended={true}
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
              <Testimonial
                quote="The TypeScript and Redux implementation was game-changing. I rebuilt our entire frontend following the course patterns, and our codebase is now so much more maintainable. The section on API contract testing saved us countless hours of debugging."
                name="Sarah Chen"
                role="Senior Frontend Developer"
                imageId="1"
              />
              <Testimonial
                quote="Finally, a course that covers real DevOps! Setting up CI/CD with Bitbucket Pipelines, managing staging environments, and implementing SSL certs with Certbot - it's all the stuff we actually need in production. Worth every penny."
                name="Marcus Rodriguez"
                role="DevOps Engineer"
                imageId="2"
              />
              <Testimonial
                quote="The integration of Stripe and Supabase was exactly what I needed. Launched my SaaS in 6 weeks and got to 50 paying customers in the first month. The authentication and payment sections alone saved me weeks of research."
                name="Lisa Patel"
                role="SaaS Founder"
                imageId="3"
              />
              <Testimonial
                quote="As a backend developer, I struggled with modern frontend architectures. The Gatsby and React components sections were incredibly well-explained. Now I'm confidently building full-stack applications with proper testing and monitoring."
                name="Michael Thompson"
                role="Full Stack Developer"
                imageId="4"
              />
            </div>
          </section>
        </article>
      </main>

      {/* FAQs */}
      <FAQSection/>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 py-12 dark:text-white">
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li><Link to="/curriculum" className="hover:text-primary">Curriculum</Link></li>
                <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
                {/* <li><a href="#" className="hover:text-primary">Blog</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                {/* <li><a href="#" className="hover:text-primary">Discord</a></li> */}
                <li><a href="https://bsky.app/profile/chrisfrewin.com" className="hover:text-primary">Bluesky</a></li>
                <li><a href="https://github.com/princefishthrower/saasfromscratch" className="hover:text-primary">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSLanding;