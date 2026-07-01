import { ArrowRight, BarChart3, CheckCircle2, Megaphone, MessageSquare, PackageCheck, ShieldCheck, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/site/CTASection';
import FeatureCard from '@/components/site/FeatureCard';
import VideoHero from '@/components/site/VideoHero';
import SectionHeading from '@/components/site/SectionHeading';
import StatCard from '@/components/site/StatCard';
import { useMetricCounters, useScrollReveal } from '@/hooks/useGsap';

const PROMO_SERVICES = [
  {
    icon: <PackageCheck className="w-7 h-7" />,
    emoji: '⚡',
    title: 'Quick Commerce Onboarding',
    description: 'Launch products on Blinkit, Zepto, and Instamart with account setup, catalog readiness, and launch support.',
    to: '/services/blinkit-zepto-setup',
    accent: 'blue',
    visualLabel: 'Blinkit · Zepto · Instamart',
    visualMetric: 'Launch-ready catalog',
  },
  {
    icon: <Store className="w-7 h-7" />,
    emoji: '🛍️',
    title: 'Marketplace Store Management',
    description: 'Manage Amazon, Flipkart, and marketplace stores with better catalog quality, offers, and operational support.',
    to: '/services/flipkart-store-management',
    accent: 'violet',
    visualLabel: 'Amazon · Flipkart · Meesho',
    visualMetric: 'Store ops dashboard',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    emoji: '🚀',
    title: 'Product Ranking Optimization',
    description: 'Improve product titles, keywords, images, pricing, and promotions to push listings toward stronger visibility.',
    to: '/services/catalog-listing-support',
    accent: 'orange',
    visualLabel: 'SEO · Ads · Offers',
    visualMetric: 'Top-search visibility',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    emoji: '📈',
    title: 'Real Sales Growth',
    description: 'Track impressions, clicks, orders, best sellers, and weekly actions focused on actual revenue movement.',
    to: '/services/inventory-catalog-sync',
    accent: 'green',
    visualLabel: 'Orders · Stock · Revenue',
    visualMetric: '+ weekly growth actions',
  },
];

export default function Home() {
  useScrollReveal();
  useMetricCounters();

  return (
    <>
      <VideoHero />

      <div className="marquee-container">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="marquee-group">
              {['AI & Machine Learning', 'Cloud Infrastructure', 'Web Applications', 'Mobile Development', 'Digital Strategy', 'Enterprise Systems', 'Quick Commerce Onboarding', 'Marketplace Store Management', 'Product Ranking Optimization', 'Real Sales Growth'].map((item) => (
                <div key={item} className="marquee-item">
                  <span className="marquee-separator">◆</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section quick-commerce-showcase">
        <div className="container">
          <SectionHeading
            eyebrow="Quick commerce growth"
            title="Launch, manage, rank, and grow your marketplace sales"
            description="Attractive quick commerce support for onboarding, store operations, product visibility, and real sales growth across the channels your customers already use."
            align="center"
          />

          <div className="promo-card-grid">
            {PROMO_SERVICES.map((service, index) => (
              <Link
                key={service.title}
                to={service.to}
                className={`promo-card promo-card--${service.accent} scroll-reveal stagger-${Math.min(index + 1, 4)}`}
              >
                <div className="promo-card__visual" aria-hidden="true">
                  <div className="promo-card__halo" />
                  <div className="promo-card__emoji">{service.emoji}</div>
                  <div className="promo-card__mini promo-card__mini--top">
                    <span />
                    <strong>{service.visualLabel}</strong>
                  </div>
                  <div className="promo-card__chart">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="promo-card__mini promo-card__mini--bottom">
                    <span>{service.visualMetric}</span>
                  </div>
                </div>

                <div className="promo-card__body">
                  <div className="promo-card__icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="promo-card__cta">
                    Explore service <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core capabilities"
            title="A clean, senior-led team for product, platform, and scale work"
            description="We build modern applications and connected systems that feel dependable to your users and maintainable for your team."
            align="center"
          />
          <div className="grid-three">
            <FeatureCard
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Custom software engineering"
              description="Robust product architecture, web applications, multi-tenant SaaS systems, and secure backend foundations built for long-term scale."
              footer={<Link to="/services" className="site-button site-button-secondary site-button-sm">Learn more</Link>}
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="AI, cloud, and data systems"
              description="Production-focused AI pipelines, cloud infrastructure, and analytics layers designed to integrate cleanly into real business workflows."
              footer={<Link to="/services" className="site-button site-button-secondary site-button-sm">View stacks</Link>}
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Strategic delivery partnership"
              description="Senior communication, structured delivery, and implementation discipline that helps founders and enterprise teams move faster with less noise."
              footer={<Link to="/about" className="site-button site-button-secondary site-button-sm">Why AndroInfraMind</Link>}
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Selected outcomes"
            title="Proven track record of digital delivery"
            description="Our achievements speak for themselves. We deliver projects on time, on budget, and built to withstand high demands."
            align="center"
          />
          <div className="stats-grid">
            <StatCard value="0+" target={125} label="Projects delivered" detail="Across software, AI, and digital platform engagements." />
            <StatCard value="0%" target={98} label="Client retention" detail="Built on strong delivery discipline and clear communication." />
            <StatCard value="0+" target={75} label="Expert engineers" detail="Senior practitioners across architecture, design, and delivery." />
            <StatCard value="0+" target={18} label="Industries served" detail="Including fintech, healthcare, education, retail, and logistics." />
          </div>
        </div>
      </section>


      <CTASection
        eyebrow="Ready to talk?"
        title="Bring structure, polish, and confidence to your next build"
        description="Whether you are modernizing a platform, launching a new product, or tightening an existing digital experience, we can help map the next step."
        actions={
          <>
            <Link to="/contact" className="site-button site-button-secondary">
              Contact us
            </Link>
            <a href="https://wa.me/919783223676" target="_blank" rel="noreferrer" className="site-button site-button-ghost">
              Chat on WhatsApp
            </a>
          </>
        }
      />
    </>
  );
}
