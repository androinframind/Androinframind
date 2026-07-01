import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CTASection from '@/components/site/CTASection';
import FeatureCard from '@/components/site/FeatureCard';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { getServiceDetail, getServicesByGroup } from '@/data/serviceDetails';
import { useScrollReveal } from '@/hooks/useGsap';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = getServiceDetail(serviceSlug);
  useScrollReveal(serviceSlug);

  if (!service) {
    return (
      <main>
        <PageHero
          eyebrow="Service not found"
          title="This service page is not available"
          description="The service you are looking for may have moved. Explore all services or contact us and we will guide you to the right solution."
          centered
          actions={
            <>
              <Link to="/services" className="site-button site-button-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="site-button site-button-secondary">
                Contact us
              </Link>
            </>
          }
        />
      </main>
    );
  }

  const relatedServices = getServicesByGroup(service.group).filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow={service.group}
        title={<>{service.icon} {service.heroTitle}</>}
        description={service.heroDescription}
        actions={
          <>
            <Link to="/contact" className="site-button site-button-primary">
              Start this service
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="site-button site-button-secondary">
              View all services
            </Link>
          </>
        }
      />

      <section className="section section-muted section-first">
        <div className="container dual-panel">
          <div className="scroll-reveal">
            <SectionHeading
              eyebrow="Overview"
              title={`How we help with ${service.label}`}
              description={service.overview}
              align="left"
            />
            <div className="pill-row">
              {service.platforms.map((platform) => (
                <span key={platform} className="stack-pill">{platform}</span>
              ))}
            </div>
          </div>

          <div className="surface-panel scroll-reveal stagger-2">
            <h3 className="card-title">Expected outcomes</h3>
            <div className="info-list" style={{ marginTop: 18 }}>
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="contact-point">
                  <div className="contact-icon"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="card-copy">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery process"
            title="A clear path from setup to measurable progress"
            description="Every engagement is structured so you know what is being prepared, launched, optimized, and measured."
            align="center"
          />
          <div className="process-grid">
            {service.process.map((step, index) => (
              <FeatureCard
                key={step.title}
                kicker={`Step ${String(index + 1).padStart(2, '0')}`}
                title={step.title}
                description={step.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length ? (
        <section className="section section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="Related services"
              title={`More from ${service.group}`}
              description="Explore connected services that can support the same business goal."
              align="center"
            />
            <div className="grid-three">
              {relatedServices.map((item) => (
                <FeatureCard
                  key={item.slug}
                  icon={<span aria-hidden="true" style={{ fontSize: '1.35rem' }}>{item.icon}</span>}
                  title={item.label}
                  description={item.overview}
                  footer={
                    <Link to={item.to} className="site-button site-button-secondary site-button-sm">
                      View details
                    </Link>
                  }
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        eyebrow="Ready to move forward?"
        title={`Start ${service.label} with a clear execution plan`}
        description="Share your products, platform target, current status, and growth goal. We will help map the next step and execution path."
        actions={
          <Link to="/contact" className="site-button site-button-secondary">
            Contact the team
          </Link>
        }
      />
    </main>
  );
}
