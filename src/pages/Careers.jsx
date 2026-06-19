import { useState, useEffect } from 'react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import CTASection from '@/components/site/CTASection';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { fetchJobs, saveJobApplication } from '@/lib/supabaseClient';

const JOBS = [
  {
    title: 'Senior Software Engineer (Full-Stack)',
    department: 'Engineering',
    location: 'Jaipur, Rajasthan (On-site / Hybrid)',
    type: 'Full-time',
    description: 'We are looking for a Full-Stack Engineer experienced in React, Node.js, and Supabase to design, build, and maintain scalable web architectures.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Product Design',
    location: 'Remote (India)',
    type: 'Full-time',
    description: 'Create premium, intuitive visual systems, layouts, and interactive flows for SaaS platforms, mobile applications, and high-end agency websites.',
  },
  {
    title: 'Digital Marketing & SEO Expert',
    department: 'Growth & Strategy',
    location: 'Jaipur, Rajasthan (On-site)',
    type: 'Full-time',
    description: 'Lead content strategies, execute technical search engine optimization (SEO) audits, and manage conversions across digital platforms.',
  },
];

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Apply form modal states
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyForm, setApplyForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    portfolio_link: '',
    cover_letter: '',
  });
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetchJobs();
        if (res.success && res.data) {
          setJobs(res.data);
        } else {
          setJobs(JOBS);
        }
      } catch (err) {
        console.error('Failed to load jobs:', err);
        setJobs(JOBS);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedJob]);

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setApplyForm({
      full_name: '',
      email: '',
      phone: '',
      portfolio_link: '',
      cover_letter: '',
    });
    setApplySuccess(false);
    setApplyError('');
  };

  const closeApplyModal = () => {
    setSelectedJob(null);
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setApplyError('');
    
    const payload = {
      job_id: selectedJob.id || null,
      job_title: selectedJob.title,
      full_name: applyForm.full_name.trim(),
      email: applyForm.email.trim(),
      phone: applyForm.phone.trim() || null,
      portfolio_link: applyForm.portfolio_link.trim() || null,
      cover_letter: applyForm.cover_letter.trim(),
    };

    const res = await saveJobApplication(payload);
    if (res.success) {
      setApplySuccess(true);
      setTimeout(() => {
        closeApplyModal();
      }, 2500);
    } else {
      setApplyError(res.error || 'Failed to submit application. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title={<>Build the future of technology with us</>}
        description="Explore open engineering, design, and growth positions at AndroInfraMind and join a collaborative team of creators."
        centered
      />

      <section className="section section-muted">
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionHeading
            eyebrow="Open roles"
            title="Explore our active job openings"
            description="We look for independent thinkers, strong communicators, and builders who take pride in crafting high-quality software."
            align="center"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
            {loading ? (
              <div className="surface-panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
                <p className="card-copy">Loading open roles...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="surface-panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
                <p className="card-copy">No active openings at the moment. Please check back later!</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id || job.title} className="surface-panel" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)', paddingBottom: 16, marginBottom: 16 }}>
                    <h3 className="card-title" style={{ fontSize: 18, margin: 0 }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--copy-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="card-copy" style={{ fontSize: 14, marginBottom: 16, whiteSpace: 'pre-wrap' }}>{job.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div className="card-kicker" style={{ display: 'inline-block', margin: 0 }}>
                      {job.department}
                    </div>
                    <button 
                      onClick={() => openApplyModal(job)} 
                      className="site-button site-button-secondary"
                      style={{ padding: '8px 16px', fontSize: 13, height: 'auto' }}
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" style={{ marginLeft: 6 }} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Don't see your role?"
        title="We are always looking for exceptional talent"
        description="If you are passionate about software engineering, AI automation, digital marketing, or design, share your CV with our team."
        actions={
          <a href="mailto:info@androinframind.com" className="site-button site-button-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Apply via Email <ArrowRight className="w-4 h-4" />
          </a>
        }
      />

      {/* JOB APPLICATION MODAL OVERLAY */}
      {selectedJob && (
        <div 
          className="search-overlay open" 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', zIndex: 1000 }}
          onClick={(e) => e.target === e.currentTarget && closeApplyModal()}
        >
          <div className="surface-panel" style={{ width: '100%', maxWidth: '500px', margin: 'auto', position: 'relative', overflowY: 'auto', maxHeight: '90vh', padding: 24 }}>
            <button 
              type="button" 
              onClick={closeApplyModal} 
              style={{ position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: 24, cursor: 'pointer', lineHeight: 1 }}
              aria-label="Close modal"
            >
              &times;
            </button>

            {applySuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 className="card-title" style={{ fontSize: 22, marginBottom: 12 }}>Application Submitted!</h3>
                <p className="card-copy" style={{ fontSize: 14 }}>
                  Thank you for applying to AndroInfraMind. Our HR team will review your profile and get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <span className="card-kicker" style={{ marginBottom: 4 }}>Apply Online</span>
                <h3 className="card-title" style={{ fontSize: 20, marginBottom: 4, paddingRight: 24 }}>{selectedJob.title}</h3>
                <p className="card-copy" style={{ fontSize: 13, marginBottom: 20 }}>{selectedJob.department} · {selectedJob.location}</p>

                <form onSubmit={handleApplySubmit} className="lead-form-grid">
                  {applyError && (
                    <div style={{ padding: 12, backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 8, color: '#ef4444', fontSize: 13, marginBottom: 16 }}>
                      {applyError}
                    </div>
                  )}

                  <div className="form-field">
                    <label>Full Name*</label>
                    <input 
                      type="text" 
                      className="site-input" 
                      value={applyForm.full_name} 
                      onChange={e => setApplyForm(prev => ({ ...prev, full_name: e.target.value }))}
                      required 
                      placeholder="Ankit Sharma"
                    />
                  </div>

                  <div className="form-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="form-field">
                      <label>Email Address*</label>
                      <input 
                        type="email" 
                        className="site-input" 
                        value={applyForm.email} 
                        onChange={e => setApplyForm(prev => ({ ...prev, email: e.target.value }))}
                        required 
                        placeholder="ankit@example.com"
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        className="site-input" 
                        value={applyForm.phone} 
                        onChange={e => setApplyForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Resume / Portfolio Link (Drive or PDF URL)</label>
                    <input 
                      type="url" 
                      className="site-input" 
                      value={applyForm.portfolio_link} 
                      onChange={e => setApplyForm(prev => ({ ...prev, portfolio_link: e.target.value }))}
                      placeholder="https://drive.google.com/... or https://linkedin.com/in/..."
                    />
                  </div>

                  <div className="form-field">
                    <label>Cover Letter & Experience Summary*</label>
                    <textarea 
                      rows={4} 
                      className="site-textarea" 
                      value={applyForm.cover_letter} 
                      onChange={e => setApplyForm(prev => ({ ...prev, cover_letter: e.target.value }))}
                      required 
                      placeholder="Why do you want to join us? Tell us about your relevant projects..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="site-button site-button-primary" 
                    style={{ width: '100%', marginTop: 8, display: 'block' }}
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
