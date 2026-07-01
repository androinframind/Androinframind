import { Globe, Code, Layers, HeartHandshake, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/site/CTASection';
import FeatureCard from '@/components/site/FeatureCard';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { useScrollReveal } from '@/hooks/useGsap';

const COLLABORATION_MODELS = [
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Partnership Outreach',
    desc: 'Collaborate with us as a trusted technology partner to jointly deliver complex software projects, expand your service offerings, and support mutual business growth.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Staff Augmentation',
    desc: 'Quickly extend your existing team with experienced developers, designers, QA engineers, and technology specialists who integrate seamlessly into your workflows, daily standups, and codebase standards.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'White Label Development',
    desc: 'Deliver high-quality software solutions under your own brand while we handle the complete design, engineering, and development lifecycle behind the scenes.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Offshore Development',
    desc: 'Reduce development costs and accelerate project delivery through our dedicated offshore development teams and proven, standardized software delivery processes.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Hire Dedicated Developers',
    desc: 'Hire full-time or part-time developers dedicated exclusively to your projects, maintaining complete operational transparency and direct developer communication channels.',
  },
];

const VALUE_POINTS = [
  'Flexible Engagement Models',
  'Rapid Team Scaling',
  'NDA & Confidentiality Compliance',
  'Agile Development Process',
  'Transparent Communication',
  'Cost-Effective Delivery',
  'Proven Technical Expertise',
  'Long-Term Partnership Focus',
];

export default function Partnership() {
  useScrollReveal();

  return (
    <main>
      <PageHero
        eyebrow="B2B Capacity & Collaboration"
        title={<>Scale Your Delivery Capacity with Our Expert Teams</>}
        description="We help agencies, software companies, and digital businesses expand their delivery capabilities and accelerate roadmaps without increasing operational overhead."
        actions={
          <Link to="/contact" className="site-button site-button-primary">
            Discuss a partnership <ArrowRight className="w-4 h-4" />
          </Link>
        }
        centered
      />

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Flexible ways to expand your engineering capacity"
            description="Whether you need behind-the-scenes engineering, on-demand staff augmentation, or a long-term dedicated team, we have a model that fits."
            align="center"
          />
          <div className="grid-three">
            {COLLABORATION_MODELS.map((model) => (
              <FeatureCard
                key={model.title}
                icon={model.icon}
                title={model.title}
                description={model.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dual-panel">
            <div className="surface-panel scroll-reveal">
              <SectionHeading
                eyebrow="Value Proposition"
                title="Why Partner With Us?"
                description="We align with your project constraints, communication styles, and quality benchmarks to ensure a seamless extension of your business."
              />
              <p className="card-copy" style={{ marginTop: 16 }}>
                AndroInfraMind operates as a friction-free B2B software delivery engine. We respect client boundaries, secure intellectual property, and focus on clean code.
              </p>
            </div>
            <div className="surface-panel scroll-reveal stagger-2">
              <h3 className="card-title">Key Safeguards & Standards</h3>
              <div className="info-list" style={{ marginTop: 20 }}>
                {VALUE_POINTS.map((point) => (
                  <div key={point} className="contact-point">
                    <div className="contact-icon">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="card-copy" style={{ fontWeight: 600 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let's build together"
        title="Ready to expand your delivery capabilities?"
        description="Talk to our partnership team today to review availability, developer profiles, and past white-label engagement case studies."
      />
    </main>
  );
}
