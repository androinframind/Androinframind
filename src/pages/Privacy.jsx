import PageHero from '@/components/site/PageHero';

export default function Privacy() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How AndroInfraMind collects, uses, and protects information shared through our website, inquiry flows, and professional services."
        centered
      />
      <section className="section section-first">
        <div className="container container-narrow">
          <div className="legal-shell">
            <div className="legal-meta" style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--copy-muted)', fontWeight: '600' }}>
              Effective Date: June 18, 2026
            </div>

            <div className="legal-content">
              <section className="legal-section">
                <h2>Introduction</h2>
                <p>Welcome to AndroInfraMind.</p>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind is a technology-driven company specializing in software development, web applications, mobile applications, AI solutions, automation systems, digital marketing, SEO services, SaaS development, cloud solutions, consulting, and white-label technology partnerships.
                </p>
                <p style={{ marginTop: '12px' }}>
                  We believe that trust is the foundation of every successful business relationship. Many of our clients share confidential business information, innovative concepts, proprietary strategies, technical documentation, and operational requirements with us. We understand the importance of protecting such information and maintaining professional confidentiality throughout every stage of engagement.
                </p>
                <p style={{ marginTop: '12px' }}>
                  This Privacy Policy describes the principles that govern how information is handled when visitors access our website, communicate with our team, request services, participate in consultations, or engage AndroInfraMind for professional services.
                </p>
                <p style={{ marginTop: '12px' }}>
                  By accessing our website or using our services, you acknowledge and accept the practices described in this Privacy Policy.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Our Privacy Principles</h2>
                <p>At AndroInfraMind, our privacy practices are guided by several core principles:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Transparency in communication.</li>
                  <li style={{ marginBottom: '6px' }}>Respect for client confidentiality.</li>
                  <li style={{ marginBottom: '6px' }}>Responsible handling of information.</li>
                  <li style={{ marginBottom: '6px' }}>Protection of proprietary business assets.</li>
                  <li style={{ marginBottom: '6px' }}>Secure operational practices.</li>
                  <li style={{ marginBottom: '6px' }}>Professional conduct across all engagements.</li>
                  <li style={{ marginBottom: '6px' }}>Respect for intellectual property rights.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  These principles apply to individual clients, startups, agencies, enterprises, and white-label partners.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Scope of This Policy</h2>
                <p>This Privacy Policy applies to:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Our official website.</li>
                  <li style={{ marginBottom: '6px' }}>Contact forms and inquiry forms.</li>
                  <li style={{ marginBottom: '6px' }}>Consultation requests.</li>
                  <li style={{ marginBottom: '6px' }}>Service requests.</li>
                  <li style={{ marginBottom: '6px' }}>Project discussions.</li>
                  <li style={{ marginBottom: '6px' }}>Business communications.</li>
                  <li style={{ marginBottom: '6px' }}>White-label partnerships.</li>
                  <li style={{ marginBottom: '6px' }}>NDA-based engagements.</li>
                  <li style={{ marginBottom: '6px' }}>Ongoing client relationships.</li>
                  <li style={{ marginBottom: '6px' }}>Support communications.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  This policy applies regardless of the country from which users access our services.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Information Shared During Business Interactions</h2>
                <p>When individuals or organizations contact AndroInfraMind, information may be voluntarily provided to help us understand project requirements and business objectives.</p>
                <p style={{ marginTop: '12px' }}>Such information may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Names and business identities.</li>
                  <li style={{ marginBottom: '6px' }}>Professional contact details.</li>
                  <li style={{ marginBottom: '6px' }}>Company information.</li>
                  <li style={{ marginBottom: '6px' }}>Project requirements.</li>
                  <li style={{ marginBottom: '6px' }}>Service requests.</li>
                  <li style={{ marginBottom: '6px' }}>Technical specifications.</li>
                  <li style={{ marginBottom: '6px' }}>Communication preferences.</li>
                  <li style={{ marginBottom: '6px' }}>Business objectives.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  This information is used solely for legitimate business purposes and to facilitate professional communication.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Project Consultation and Discovery Information</h2>
                <p>During consultations, discovery sessions, project planning discussions, strategy meetings, and technical evaluations, clients may share business-related information.</p>
                <p style={{ marginTop: '12px' }}>Such information may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Existing business workflows.</li>
                  <li style={{ marginBottom: '6px' }}>Software requirements.</li>
                  <li style={{ marginBottom: '6px' }}>Product ideas.</li>
                  <li style={{ marginBottom: '6px' }}>Technical documentation.</li>
                  <li style={{ marginBottom: '6px' }}>Project roadmaps.</li>
                  <li style={{ marginBottom: '6px' }}>Market objectives.</li>
                  <li style={{ marginBottom: '6px' }}>Growth strategies.</li>
                  <li style={{ marginBottom: '6px' }}>Operational requirements.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind treats such information professionally and uses it exclusively to evaluate, plan, and deliver requested services.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>NDA-Based Engagements</h2>
                <p>Many clients choose to engage AndroInfraMind under Non-Disclosure Agreements (NDAs).</p>
                <p style={{ marginTop: '12px' }}>When an NDA is executed:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Confidential information is handled according to agreed terms.</li>
                  <li style={{ marginBottom: '6px' }}>Proprietary concepts remain protected.</li>
                  <li style={{ marginBottom: '6px' }}>Internal business processes remain confidential.</li>
                  <li style={{ marginBottom: '6px' }}>Sensitive project information is not disclosed without authorization.</li>
                  <li style={{ marginBottom: '6px' }}>Discussions remain restricted to authorized personnel where applicable.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  We recognize that confidentiality is often critical to business success and treat NDA obligations seriously.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>White-Label Development Confidentiality</h2>
                <p>AndroInfraMind provides white-label development services for agencies, consultants, technology firms, and digital service providers.</p>
                <p style={{ marginTop: '12px' }}>White-label relationships often involve confidential collaboration structures.</p>
                <p style={{ marginTop: '12px' }}>Accordingly:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Partner relationships remain confidential.</li>
                  <li style={{ marginBottom: '6px' }}>Client ownership is respected.</li>
                  <li style={{ marginBottom: '6px' }}>Project attribution is not disclosed without permission.</li>
                  <li style={{ marginBottom: '6px' }}>Internal processes remain protected.</li>
                  <li style={{ marginBottom: '6px' }}>Strategic information remains confidential.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  We understand the trust required in white-label partnerships and strive to maintain long-term professional relationships.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Website Performance and Functionality</h2>
                <p>To provide a smooth and reliable browsing experience, certain technical processes may operate automatically in the background.</p>
                <p style={{ marginTop: '12px' }}>These processes help:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Improve website performance.</li>
                  <li style={{ marginBottom: '6px' }}>Enhance responsiveness.</li>
                  <li style={{ marginBottom: '6px' }}>Support website security.</li>
                  <li style={{ marginBottom: '6px' }}>Maintain service reliability.</li>
                  <li style={{ marginBottom: '6px' }}>Optimize user experience.</li>
                  <li style={{ marginBottom: '6px' }}>Diagnose technical issues.</li>
                  <li style={{ marginBottom: '6px' }}>Improve platform functionality.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Such processes are implemented solely to improve service quality and operational performance.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Communications</h2>
                <p>When users communicate with AndroInfraMind through email, forms, consultation requests, project discussions, or support channels, communications may be retained as part of normal business operations.</p>
                <p style={{ marginTop: '12px' }}>This helps us:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Respond accurately.</li>
                  <li style={{ marginBottom: '6px' }}>Maintain continuity.</li>
                  <li style={{ marginBottom: '6px' }}>Deliver requested services.</li>
                  <li style={{ marginBottom: '6px' }}>Improve support quality.</li>
                  <li style={{ marginBottom: '6px' }}>Manage ongoing projects effectively.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Communication records are maintained responsibly and professionally.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Security Practices</h2>
                <p>Protecting business information is a priority for AndroInfraMind.</p>
                <p style={{ marginTop: '12px' }}>We maintain safeguards designed to support:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Confidentiality.</li>
                  <li style={{ marginBottom: '6px' }}>Integrity.</li>
                  <li style={{ marginBottom: '6px' }}>Reliability.</li>
                  <li style={{ marginBottom: '6px' }}>Operational security.</li>
                  <li style={{ marginBottom: '6px' }}>Responsible information handling.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Security practices are reviewed and improved periodically to align with evolving technologies and business requirements.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Intellectual Property Protection</h2>
                <p>Many projects involve proprietary assets belonging to our clients.</p>
                <p style={{ marginTop: '12px' }}>These may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Business concepts.</li>
                  <li style={{ marginBottom: '6px' }}>Product strategies.</li>
                  <li style={{ marginBottom: '6px' }}>Source materials.</li>
                  <li style={{ marginBottom: '6px' }}>Branding assets.</li>
                  <li style={{ marginBottom: '6px' }}>Design systems.</li>
                  <li style={{ marginBottom: '6px' }}>Software specifications.</li>
                  <li style={{ marginBottom: '6px' }}>Technical documentation.</li>
                  <li style={{ marginBottom: '6px' }}>Internal workflows.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind respects the ownership rights associated with such assets and uses them solely for approved business purposes.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Third-Party Service Providers</h2>
                <p>To support professional operations, we may utilize trusted service providers for:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Website hosting.</li>
                  <li style={{ marginBottom: '6px' }}>Cloud infrastructure.</li>
                  <li style={{ marginBottom: '6px' }}>Project management.</li>
                  <li style={{ marginBottom: '6px' }}>Communication services.</li>
                  <li style={{ marginBottom: '6px' }}>Analytics.</li>
                  <li style={{ marginBottom: '6px' }}>Development workflows.</li>
                  <li style={{ marginBottom: '6px' }}>Payment processing.</li>
                  <li style={{ marginBottom: '6px' }}>Productivity systems.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  These providers are selected based on reliability, functionality, and professional standards.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>International Clients</h2>
                <p>
                  AndroInfraMind works with clients across different regions and countries.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Because our services are provided globally, information may be exchanged across international boundaries as part of normal project execution and communication processes. We strive to maintain professional standards regardless of client location.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Data Retention</h2>
                <p>Information is retained only for legitimate business purposes, including:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Project continuity.</li>
                  <li style={{ marginBottom: '6px' }}>Client support.</li>
                  <li style={{ marginBottom: '6px' }}>Legal compliance.</li>
                  <li style={{ marginBottom: '6px' }}>Operational requirements.</li>
                  <li style={{ marginBottom: '6px' }}>Service improvement.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Retention periods may vary depending on project type, service requirements, contractual obligations, and applicable regulations.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>User Rights</h2>
                <p>Depending on applicable laws and regulations, users may have certain rights regarding information shared with AndroInfraMind.</p>
                <p style={{ marginTop: '12px' }}>These rights may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Requesting access.</li>
                  <li style={{ marginBottom: '6px' }}>Requesting corrections.</li>
                  <li style={{ marginBottom: '6px' }}>Requesting updates.</li>
                  <li style={{ marginBottom: '6px' }}>Requesting clarification.</li>
                  <li style={{ marginBottom: '6px' }}>Requesting deletion where legally permissible.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Requests may be submitted through our contact channels.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>External Resources</h2>
                <p>
                  Our website may reference external resources, platforms, tools, and third-party websites. AndroInfraMind does not control the content, practices, or policies of external websites and encourages users to review their respective terms and privacy practices.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>Policy Updates</h2>
                <p>
                  As technology, legal frameworks, and business operations evolve, this Privacy Policy may be updated periodically. Updated versions will be published on this page with a revised effective date. Continued use of our website or services following updates indicates acceptance of the revised policy.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <h2>Contact Information</h2>
                <p>For privacy-related inquiries, business questions, confidentiality concerns, or policy-related requests, please contact:</p>
                <p style={{ marginTop: '12px', lineHeight: '1.8' }}>
                  <strong>AndroInfraMind</strong><br />
                  Website: <a href="https://androinframind.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>https://androinframind.com</a><br />
                  Email: <a href="mailto:androinframind@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>androinframind@gmail.com</a>
                </p>
                <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--copy-muted)' }}>
                  We appreciate the trust placed in us by our clients, partners, and visitors and remain committed to maintaining professional standards of confidentiality, integrity, and responsible business conduct.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
