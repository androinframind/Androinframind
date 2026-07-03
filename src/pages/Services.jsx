import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { AppWindow, ArrowRight, Cloud, Code, Cpu, Database, Globe, Layers, Megaphone, PenTool, Search, Share2, Shield, Target, Video, CheckCircle2, HeartHandshake, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/site/CTASection';
import FeatureCard from '@/components/site/FeatureCard';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { useScrollReveal } from '@/hooks/useGsap';

const CORE_SERVICES = [
  {
    icon: <Code className="w-6 h-6" />,
    kicker: 'Custom Software Development',
    title: 'Bespoke Software & API Solutions',
    desc: 'Robust backend systems and software solutions built to withstand heavy traffic and complex business flows. We design clean REST/GraphQL APIs, microservices architectures, custom databases, and automated workflows tailored to your requirements.',
    techs: ['Java', 'Go', 'Python', 'Docker', 'PostgreSQL', 'Kubernetes']
  },
  {
    icon: <Globe className="w-6 h-6" />,
    kicker: 'Web Application Development',
    title: 'High-Performance Web Platforms',
    desc: 'We build responsive, fast, and secure web applications designed to deliver outstanding user experiences. From complex portals to public-facing platforms, we focus on clean code, speed, accessibility, and modern SEO-friendly structures.',
    techs: ['React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS']
  },
  {
    icon: <AppWindow className="w-6 h-6" />,
    kicker: 'Mobile App Development',
    title: 'Native & Cross-Platform Mobile Apps',
    desc: 'Creating fluid, high-performance mobile experiences for iOS and Android. Whether leveraging React Native or Flutter for unified codebases, or native Swift and Kotlin for extreme performance, we focus on speed, reliability, and modern design.',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    icon: <Search className="w-6 h-6" />,
    kicker: 'Search Engine Optimization (SEO)',
    title: 'Technical & On-Page SEO Optimization',
    desc: 'Ensure maximum visibility on search engines with our advanced SEO solutions. We perform deep keyword research, technical site audits, code optimization, performance tuning, and schema integration to drive high-intent organic traffic.',
    techs: ['Technical SEO', 'Keyword Strategy', 'Schema Markup', 'PageSpeed Opt.']
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    kicker: 'Digital Marketing',
    title: 'Data-Driven Growth Campaigns',
    desc: 'Scale your user acquisition and maximize ROI. We design and manage target campaigns, search engine marketing (SEM), content strategy, social media campaigns, and conversion rate optimization (CRO) backed by clear analytics.',
    techs: ['Google Ads', 'Meta Ads', 'Content Strategy', 'Analytics', 'Conversion Opt.']
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    kicker: 'Social Media Marketing (SMM)',
    title: 'Social Media Growth & Brand Engagement',
    desc: 'Build a stronger brand presence across social platforms with content planning, profile optimization, creative campaigns, audience engagement, and performance tracking designed to grow reach and generate qualified leads.',
    techs: ['Instagram', 'Facebook', 'LinkedIn', 'Content Calendar', 'Analytics']
  },
  {
    icon: <Layers className="w-6 h-6" />,
    kicker: 'SaaS & MVP Engineering',
    title: 'SaaS Platforms & MVP Delivery',
    desc: 'Launch your SaaS product on a clean, scalable foundation. We design multi-tenant database models, implement subscription billing (Stripe/Razorpay), manage user roles and permissions, and build comprehensive admin workflows.',
    techs: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis', 'Auth0']
  }
];

const SUPPORT_SERVICES = [
  { icon: <Cpu className="w-6 h-6" />, title: 'AI & Machine Learning', desc: 'Production deployment for predictive models, custom LLMs, NLP pipelines, and data intelligence workflows integrated into your apps.' },
  { icon: <Cloud className="w-6 h-6" />, title: 'Cloud & DevOps Solutions', desc: 'Secure cloud architecture (AWS, GCP), continuous integration and deployment (CI/CD), auto-scaling, and system-wide monitoring.' },
  { icon: <Shield className="w-6 h-6" />, title: 'UI/UX Interface Design', desc: 'Wireframes, detailed interaction design, design systems, and responsive layouts built with a developer-handover focus.' },
  { icon: <Database className="w-6 h-6" />, title: 'Data Analytics & ETL', desc: 'Real-time dashboards, custom reporting, data pipelines, and decision-support systems that convert raw data into product insights.' },
];

const QUICK_COMMERCE_SERVICES = [
  {
    icon: <AppWindow className="w-6 h-6" />,
    title: 'Quick Commerce Onboarding',
    desc: 'We help onboard your products on quick commerce and marketplace channels with account setup, documentation, category mapping, and launch readiness.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Catalog & Ranking Optimization',
    desc: 'We optimize titles, keywords, images, pricing, category placement, and listing quality so your products can move toward stronger visibility and top search positions.',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Offers, Ads & Conversion Push',
    desc: 'We plan sponsored campaigns, platform offers, coupons, and conversion experiments designed to turn visibility into actual buyer actions and real orders.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Real Sales Growth Tracking',
    desc: 'We track impressions, clicks, conversion, stock readiness, best-selling SKUs, and weekly sales movement so growth stays measurable, practical, and revenue-focused.',
  },
];

const QUICK_COMMERCE_STEPS = [
  'Store or seller account setup with documentation and onboarding support.',
  'Product catalog creation with titles, images, keywords, pricing, and category mapping.',
  'Inventory, offer, delivery-zone, and stock availability readiness before promotion.',
  'Ranking improvement through search terms, sponsored listings, offers, and conversion optimization.',
  'Weekly reporting on visibility, clicks, orders, best sellers, and next improvement actions.',
];

const QUICK_COMMERCE_CHANNELS = ['Blinkit', 'Zepto', 'Swiggy Instamart', 'Amazon', 'Flipkart', 'Meesho', 'Shopify'];

const SERVICE_DETAIL_LINKS = {
  'Bespoke Software & API Solutions': '/services/custom-software',
  'High-Performance Web Platforms': '/services/web-applications',
  'Native & Cross-Platform Mobile Apps': '/services/mobile-apps',
  'Technical & On-Page SEO Optimization': '/services/seo-digital-marketing',
  'Data-Driven Growth Campaigns': '/services/seo-digital-marketing',
  'Quick Commerce Onboarding': '/services/blinkit-zepto-setup',
  'Catalog & Ranking Optimization': '/services/catalog-listing-support',
  'Offers, Ads & Conversion Push': '/services/seo-digital-marketing',
  'Real Sales Growth Tracking': '/services/inventory-catalog-sync',
};

const FEATURED_SERVICE_CARDS = [
  {
    icon: <AppWindow className="w-6 h-6" />,
    title: 'Quick Commerce Onboarding',
    desc: 'Launch products on Blinkit, Zepto, Instamart, and similar fast-commerce channels with clean setup and catalog readiness.',
    to: '/services/blinkit-zepto-setup',
    accent: 'blue',
    metric: 'Launch-ready',
    tags: ['Blinkit', 'Zepto', 'Instamart'],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Marketplace Store Management',
    desc: 'Manage Amazon, Flipkart, Meesho, and marketplace stores with listing hygiene, offers, inventory checks, and reporting.',
    to: '/services/flipkart-store-management',
    accent: 'violet',
    metric: 'Managed ops',
    tags: ['Amazon', 'Flipkart', 'Meesho'],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Product Ranking Optimization',
    desc: 'Improve titles, keywords, images, pricing, and categories so priority products move toward stronger visibility.',
    to: '/services/catalog-listing-support',
    accent: 'orange',
    metric: 'More visibility',
    tags: ['SEO', 'Keywords', 'Catalog'],
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Real Sales Growth Tracking',
    desc: 'Track clicks, orders, stock movement, best sellers, and weekly actions that keep growth measurable and practical.',
    to: '/services/inventory-catalog-sync',
    accent: 'green',
    metric: 'Sales focused',
    tags: ['Orders', 'Stock', 'Revenue'],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Web & App Development',
    desc: 'Build fast websites, apps, portals, SaaS products, and custom systems with clean UX and scalable engineering.',
    to: '/services/web-applications',
    accent: 'slate',
    metric: 'Built to scale',
    tags: ['React', 'Mobile', 'SaaS'],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI, Cloud & Data Systems',
    desc: 'Connect automation, analytics, AI workflows, cloud infrastructure, and dashboards into real business operations.',
    to: '/services/ai-ml-solutions',
    accent: 'cyan',
    metric: 'Automation ready',
    tags: ['AI', 'Cloud', 'Data'],
  },
];

const PARTNERSHIP_MODELS = [
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Partnership Outreach',
    desc: 'Collaborate with us as a trusted technology partner to jointly deliver projects, expand service offerings, and support business growth.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Staff Augmentation',
    desc: 'Quickly extend your existing team with experienced developers, designers, QA engineers, and technology specialists who integrate seamlessly into your workflows.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'White Label Development',
    desc: 'Deliver high-quality software solutions under your own brand while we handle the complete development lifecycle behind the scenes.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Offshore Development',
    desc: 'Reduce development costs and accelerate project delivery through our dedicated offshore development teams and proven delivery processes.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Hire Dedicated Developers',
    desc: 'Hire full-time or part-time developers dedicated exclusively to your projects with complete transparency and direct communication.',
  },
];

const PARTNERSHIP_FEATURES = [
  'Flexible Engagement Models',
  'Rapid Team Scaling',
  'NDA & Confidentiality Compliance',
  'Agile Development Process',
  'Transparent Communication',
  'Cost-Effective Delivery',
  'Proven Technical Expertise',
  'Long-Term Partnership Focus',
];

const FAQS = [
  { q: 'What is your primary development focus?', a: 'Our primary focus is full-stack web application development, native/cross-platform mobile app development, and scalable SaaS platform engineering.' },
  { q: 'What technology stacks do you recommend?', a: 'We typically build frontends with React, Next.js, and TypeScript, and backends with Node.js, Go, or Java. For mobile apps, we recommend React Native, Flutter, Swift, or Kotlin.' },
  { q: 'How does your engagement process work?', a: 'We begin with discovery and architecture planning, define clear delivery milestones, and then execute in sprints with regular reviews and handover support.' },
  { q: 'Do you offer post-launch maintenance?', a: 'Yes. We offer long-term support and maintenance models to keep your application stable, secure, and ready for future updates.' },
];


export default function Services() {
  useScrollReveal();

  useEffect(() => {
    gsap.fromTo('.chart-line', 
      { width: '0%' }, 
      { 
        width: (index) => index === 0 ? '100%' : index === 1 ? '78%' : '64%', 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power2.out',
        delay: 0.5 
      }
    );
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Primary Focus"
        title={<>Web & Mobile Application Development Built for Scale</>}
        description="We design, engineer, and deploy high-performance custom applications, SaaS platforms, and mobile apps with senior-led precision."
        actions={
          <>
            <Link to="/contact" className="site-button site-button-primary">
              Book a Consultation
            </Link>
            <a href="#core-services" className="site-button site-button-secondary">
              Explore Services
            </a>
          </>
        }
        aside={
          <div className="hero-visual scroll-reveal stagger-2">
            <div className="dashboard-frame">
              <div className="dashboard-topbar">
                <div>
                  <span className="dashboard-label">Platform Metrics</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#2563eb', boxShadow: '0 0 8px #2563eb', animation: 'pulse 2s infinite' }} />
                    <strong>Engineering Excellence</strong>
                  </div>
                </div>
                <span className="dashboard-pill">99.9% Uptime</span>
              </div>
              <div className="dashboard-grid">
                <div className="dashboard-metric">
                  <span>API Response</span>
                  <strong>&lt; 140ms</strong>
                </div>
                <div className="dashboard-metric">
                  <span>Tech Experts</span>
                  <strong>45+ Active</strong>
                </div>
              </div>
              <div className="dashboard-chart">
                <span className="dashboard-label">System Performance Index</span>
                <div className="chart-lines">
                  <div className="chart-line" />
                  <div className="chart-line line-two" />
                  <div className="chart-line line-three" />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="section section-muted section-first services-featured-section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Services"
            title="Choose the growth or technology service you need"
            description="Start with a clickable service path — from quick commerce onboarding and marketplace management to web, app, AI, and cloud delivery."
            align="center"
          />

          <div className="services-featured-grid">
            {FEATURED_SERVICE_CARDS.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className={`services-featured-card services-featured-card--${service.accent} scroll-reveal`}
                aria-label={`View details for ${service.title}`}
              >
                <div className="services-featured-card__top">
                  <span className="services-featured-card__icon">{service.icon}</span>
                  <span className="services-featured-card__arrow">
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="services-featured-card__body">
                  <span className="services-featured-card__metric">{service.metric}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="services-featured-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="services-featured-card__cta">
                  View details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="core-services" className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="Premium Web & Mobile Application Engineering"
            description="Our primary focus is building scalable applications that feel reliable, load fast, and are easy to maintain."
            align="center"
          />
          <div className="grid-two">
            {CORE_SERVICES.map((service) => (
              <FeatureCard 
                key={service.title} 
                icon={service.icon} 
                kicker={service.kicker} 
                title={service.title} 
                description={service.desc} 
                footer={
                  <>
                    <div className="stack-row" style={{ marginTop: '14px' }}>
                      {service.techs.map((tech) => (
                        <span key={tech} className="stack-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {SERVICE_DETAIL_LINKS[service.title] ? (
                      <Link to={SERVICE_DETAIL_LINKS[service.title]} className="site-button site-button-secondary site-button-sm">
                        View details
                      </Link>
                    ) : null}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Quick Commerce & Marketplace Growth"
            title="We onboard your products, improve visibility, and drive real sales"
            description="From Blinkit, Zepto, Instamart, Amazon, and Flipkart onboarding to catalog optimization, ranking improvements, offers, and weekly sales tracking — we help your products move from listing to actual orders."
            align="center"
          />

          <div className="grid-four">
            {QUICK_COMMERCE_SERVICES.map((service) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                footer={
                  SERVICE_DETAIL_LINKS[service.title] ? (
                    <Link to={SERVICE_DETAIL_LINKS[service.title]} className="site-button site-button-secondary site-button-sm">
                      View details
                    </Link>
                  ) : null
                }
              />
            ))}
          </div>

          <div className="dual-panel" style={{ marginTop: 'var(--spacing-xl)' }}>
            <div className="surface-panel scroll-reveal">
              <h3 className="card-title">How we take your products forward</h3>
              <div className="info-list" style={{ marginTop: 18 }}>
                {QUICK_COMMERCE_STEPS.map((step) => (
                  <div key={step} className="contact-point">
                    <div className="contact-icon"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="card-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel scroll-reveal stagger-2">
              <h3 className="card-title">Channels we can support</h3>
              <p className="card-copy" style={{ marginTop: 10 }}>
                We prepare the catalog, listing quality, offer structure, and performance tracking for platforms where your buyers already search.
              </p>
              <div className="pill-row" style={{ marginTop: 18 }}>
                {QUICK_COMMERCE_CHANNELS.map((channel) => (
                  <span key={channel} className="stack-pill">{channel}</span>
                ))}
              </div>
              <div className="cta-actions" style={{ marginTop: 24 }}>
                <Link to="/contact" className="site-button site-button-primary">
                  Start marketplace growth
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="B2B Capacity & Teams"
            title="Scale Your Delivery Capacity with Our Expert Teams"
            description="We help agencies, software companies, and digital businesses expand their delivery capabilities without increasing operational overhead."
            align="center"
          />
          <div className="grid-three">
            {PARTNERSHIP_MODELS.map((model) => (
              <FeatureCard key={model.title} icon={model.icon} title={model.title} description={model.desc} />
            ))}
          </div>

          <div className="dual-panel" style={{ marginTop: 'var(--spacing-xl)' }}>
            <div className="scroll-reveal">
              <SectionHeading
                eyebrow="Why Partner With Us"
                title="A seamless extension of your development team"
                description="We align with your tools, communication channels, and quality standards to ensure frictionless project execution."
                align="left"
              />
            </div>
            <div className="surface-panel scroll-reveal stagger-2">
              <h3 className="card-title">Value Features</h3>
              <div className="info-list" style={{ marginTop: 18 }}>
                {PARTNERSHIP_FEATURES.map((feature) => (
                  <div key={feature} className="contact-point">
                    <div className="contact-icon"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="card-copy">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Integrated Capabilities"
            title="Supporting technology services to power your platforms"
            description="Complementary systems engineering to ensure your core applications have the intelligence, scalability, and design they need."
            align="center"
          />
          <div className="grid-three">
            {SUPPORT_SERVICES.map((service) => (
              <FeatureCard key={service.title} icon={service.icon} title={service.title} description={service.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="From strategy through implementation"
            description="Our work typically spans architecture thinking, product execution, launch support, and the operational layer that keeps systems healthy."
            align="center"
          />
          <div className="dual-panel">
            <div className="surface-panel scroll-reveal">
              <h3 className="card-title">What clients usually need</h3>
              <div className="info-list" style={{ marginTop: 18 }}>
                {[
                  'A cleaner product foundation for new builds or modernization efforts.',
                  'Support turning technical complexity into a clearer user-facing experience.',
                  'Infrastructure, AI, or integration work that connects properly to the product layer.',
                  'A delivery partner who can move with more structure and less noise.',
                ].map((item) => (
                  <div key={item} className="contact-point">
                    <div className="contact-icon"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="card-copy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-panel scroll-reveal stagger-2">
              <h3 className="card-title">How we frame the work</h3>
              <div className="info-list" style={{ marginTop: 18 }}>
                {[
                  'Discovery and roadmap alignment before implementation starts.',
                  'Design and build decisions grounded in usability, maintainability, and growth.',
                  'Delivery phases that remain easy for business stakeholders to follow.',
                  'Post-launch support and handover thinking for long-term confidence.',
                ].map((item) => (
                  <div key={item} className="contact-point">
                    <div className="contact-icon"><CheckCircle2 className="w-5 h-5" /></div>
                    <p className="card-copy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container container-narrow">
          <SectionHeading eyebrow="FAQ" title="Common questions" description="Key questions answered in a simpler, cleaner layout." align="center" />
          <div className="timeline-grid">
            {FAQS.map((faq) => (
              <div key={faq.q} className="surface-card scroll-reveal">
                <h3 className="card-title">{faq.q}</h3>
                <p className="card-copy" style={{ marginTop: 12 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="If you already know the direction, we can help shape the execution"
        description="Talk to the team about a product, platform, or modernization initiative and we’ll help map the next phase."
        actions={<Link to="/contact" className="site-button site-button-secondary">Discuss your project</Link>}
      />
    </main>
  );
}
