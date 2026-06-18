import PageHero from '@/components/site/PageHero';

export default function Terms() {
  return (
    <main>
      <PageHero
        eyebrow="Terms"
        title="Terms of Service"
        description="Core terms that apply when using the site, requesting consultations, engaging the team, or using our professional services."
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
                <h2>1. Introduction</h2>
                <p>Welcome to AndroInfraMind.</p>
                <p style={{ marginTop: '12px' }}>
                  These Terms of Service ("Terms") govern access to and use of the website, products, services, consultations, communications, software solutions, and professional engagements provided by AndroInfraMind.
                </p>
                <p style={{ marginTop: '12px' }}>
                  By accessing our website, requesting information, engaging our services, entering into a project discussion, or participating in any business relationship with AndroInfraMind, you agree to comply with these Terms.
                </p>
                <p style={{ marginTop: '12px' }}>
                  If you do not agree with these Terms, you should discontinue use of our website and services.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>2. About AndroInfraMind</h2>
                <p>AndroInfraMind is a technology and digital solutions company providing professional services to startups, agencies, businesses, entrepreneurs, organizations, and enterprises.</p>
                <p style={{ marginTop: '12px' }}>Our services may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Custom Software Development</li>
                  <li style={{ marginBottom: '6px' }}>Web Application Development</li>
                  <li style={{ marginBottom: '6px' }}>Mobile Application Development</li>
                  <li style={{ marginBottom: '6px' }}>SaaS Product Development</li>
                  <li style={{ marginBottom: '6px' }}>AI Solutions and Integrations</li>
                  <li style={{ marginBottom: '6px' }}>Business Process Automation</li>
                  <li style={{ marginBottom: '6px' }}>Cloud Solutions</li>
                  <li style={{ marginBottom: '6px' }}>UI/UX Design</li>
                  <li style={{ marginBottom: '6px' }}>Digital Marketing</li>
                  <li style={{ marginBottom: '6px' }}>SEO Services</li>
                  <li style={{ marginBottom: '6px' }}>Technical Consulting</li>
                  <li style={{ marginBottom: '6px' }}>White-Label Development</li>
                  <li style={{ marginBottom: '6px' }}>Product Strategy</li>
                  <li style={{ marginBottom: '6px' }}>Maintenance and Support Services</li>
                  <li style={{ marginBottom: '6px' }}>API Integrations</li>
                  <li style={{ marginBottom: '6px' }}>Enterprise Software Solutions</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  The exact scope of services depends on the specific engagement agreed upon between AndroInfraMind and the client.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>3. Service Engagement</h2>
                <p>Services may begin after mutual agreement through:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Proposals</li>
                  <li style={{ marginBottom: '6px' }}>Contracts</li>
                  <li style={{ marginBottom: '6px' }}>Statements of Work</li>
                  <li style={{ marginBottom: '6px' }}>Service Agreements</li>
                  <li style={{ marginBottom: '6px' }}>Project Documentation</li>
                  <li style={{ marginBottom: '6px' }}>Written Communications</li>
                  <li style={{ marginBottom: '6px' }}>Purchase Orders</li>
                  <li style={{ marginBottom: '6px' }}>NDA Agreements</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Project timelines, deliverables, responsibilities, and payment structures may vary depending on project requirements. Nothing on our website shall be interpreted as a guarantee of service availability for every request.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>4. Professional Relationship</h2>
                <p>AndroInfraMind operates as an independent service provider.</p>
                <p style={{ marginTop: '12px' }}>Unless explicitly stated in writing:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>No employment relationship is created.</li>
                  <li style={{ marginBottom: '6px' }}>No partnership is created.</li>
                  <li style={{ marginBottom: '6px' }}>No joint venture is created.</li>
                  <li style={{ marginBottom: '6px' }}>No agency relationship is created.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Each engagement remains an independent business relationship governed by the applicable agreements.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>5. Project Discovery and Consultation</h2>
                <p>Before project execution, AndroInfraMind may conduct discovery sessions, consultations, technical evaluations, planning discussions, and strategy meetings.</p>
                <p style={{ marginTop: '12px' }}>These activities help:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Understand business objectives.</li>
                  <li style={{ marginBottom: '6px' }}>Assess technical requirements.</li>
                  <li style={{ marginBottom: '6px' }}>Evaluate project feasibility.</li>
                  <li style={{ marginBottom: '6px' }}>Define project scope.</li>
                  <li style={{ marginBottom: '6px' }}>Estimate timelines.</li>
                  <li style={{ marginBottom: '6px' }}>Identify risks and dependencies.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Recommendations provided during consultations are based on available information and professional judgment.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>6. Client Responsibilities</h2>
                <p>To ensure successful project delivery, clients agree to:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Provide accurate information.</li>
                  <li style={{ marginBottom: '6px' }}>Communicate requirements clearly.</li>
                  <li style={{ marginBottom: '6px' }}>Respond within reasonable timeframes.</li>
                  <li style={{ marginBottom: '6px' }}>Supply necessary assets and materials.</li>
                  <li style={{ marginBottom: '6px' }}>Review deliverables promptly.</li>
                  <li style={{ marginBottom: '6px' }}>Provide approvals when required.</li>
                  <li style={{ marginBottom: '6px' }}>Cooperate during project execution.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Delays in communication, approvals, or required inputs may impact project schedules and delivery timelines.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>7. White-Label Development Services</h2>
                <p>AndroInfraMind provides white-label development services for agencies, consultants, and service providers.</p>
                <p style={{ marginTop: '12px' }}>Under white-label engagements:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Client confidentiality is respected.</li>
                  <li style={{ marginBottom: '6px' }}>Partner relationships remain private.</li>
                  <li style={{ marginBottom: '6px' }}>Internal business structures remain confidential.</li>
                  <li style={{ marginBottom: '6px' }}>Project ownership is governed by contractual agreements.</li>
                  <li style={{ marginBottom: '6px' }}>Public disclosure requires authorization where applicable.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  We recognize the importance of trust in white-label partnerships and strive to maintain long-term professional relationships.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>8. Confidentiality</h2>
                <p>Confidentiality is a fundamental component of our business operations. Both parties agree to respect confidential information exchanged during:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Project discussions, consultations and planning sessions.</li>
                  <li style={{ marginBottom: '6px' }}>Development activities and testing phases.</li>
                  <li style={{ marginBottom: '6px' }}>Deployment processes and ongoing support.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>Confidential information may include:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Business plans, product concepts and source code.</li>
                  <li style={{ marginBottom: '6px' }}>Technical documentation and software specifications.</li>
                  <li style={{ marginBottom: '6px' }}>Marketing strategies, financial information and operational processes.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Confidential information shall not be disclosed without authorization except where required by law.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>9. Non-Disclosure Agreements (NDAs)</h2>
                <p>Many projects involve Non-Disclosure Agreements.</p>
                <p style={{ marginTop: '12px' }}>When an NDA exists:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>NDA provisions take precedence where applicable.</li>
                  <li style={{ marginBottom: '6px' }}>Confidential information must be protected.</li>
                  <li style={{ marginBottom: '6px' }}>Unauthorized disclosure is prohibited.</li>
                  <li style={{ marginBottom: '6px' }}>Intellectual property remains protected.</li>
                  <li style={{ marginBottom: '6px' }}>Access may be limited to authorized individuals.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind respects and supports NDA-based engagements.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>10. Intellectual Property Rights</h2>
                <p>Intellectual property rights are governed by the applicable agreement executed between the parties.</p>
                <p style={{ marginTop: '12px' }}>Unless otherwise agreed:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Clients retain ownership of assets supplied by them.</li>
                  <li style={{ marginBottom: '6px' }}>Branding materials remain the property of their respective owners.</li>
                  <li style={{ marginBottom: '6px' }}>Proprietary client resources remain protected.</li>
                  <li style={{ marginBottom: '6px' }}>Ownership transfer conditions shall be defined in writing where applicable.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Project-specific ownership terms may vary depending on the nature of the engagement.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>11. Source Code Ownership</h2>
                <p>Source code ownership may vary depending on:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Project agreements and custom development contracts.</li>
                  <li style={{ marginBottom: '6px' }}>Licensing structures and usage rights.</li>
                  <li style={{ marginBottom: '6px' }}>White-label arrangements and subscription models.</li>
                  <li style={{ marginBottom: '6px' }}>SaaS products.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Ownership, licensing rights, usage rights, and transfer conditions should be defined within the applicable service agreement.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>12. Third-Party Software and Integrations</h2>
                <p>Projects may include integrations involving payment gateways, hosting providers, analytics platforms, CRM systems, marketing tools, AI platforms, external APIs, and cloud infrastructure providers.</p>
                <p style={{ marginTop: '12px' }}>AndroInfraMind does not control third-party platforms and cannot guarantee:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Service availability or platform uptime.</li>
                  <li style={{ marginBottom: '6px' }}>Pricing changes or policy updates.</li>
                  <li style={{ marginBottom: '6px' }}>Feature continuity.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Clients acknowledge the inherent risks associated with third-party dependencies.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>13. Website Usage</h2>
                <p>Visitors agree to use the website responsibly and lawfully.</p>
                <p style={{ marginTop: '12px' }}>Users shall not:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Attempt unauthorized access.</li>
                  <li style={{ marginBottom: '6px' }}>Disrupt website functionality or interfere with services.</li>
                  <li style={{ marginBottom: '6px' }}>Introduce malicious software or conduct fraudulent activities.</li>
                  <li style={{ marginBottom: '6px' }}>Misrepresent identities or violate applicable laws.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Improper use may result in restricted access or legal action where appropriate.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>14. Acceptable Use Policy</h2>
                <p>Users must not use AndroInfraMind services for illegal activities, fraudulent schemes, malicious software distribution, unauthorized data collection, intellectual property infringement, harassment, abuse, or security exploitation.</p>
                <p style={{ marginTop: '12px' }}>
                  We reserve the right to refuse or discontinue services that violate these principles.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>15. SEO Services</h2>
                <p>SEO services are provided according to industry best practices and strategic methodologies.</p>
                <p style={{ marginTop: '12px' }}>Because search engines continuously evolve:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Rankings cannot be guaranteed.</li>
                  <li style={{ marginBottom: '6px' }}>Traffic increases cannot be guaranteed.</li>
                  <li style={{ marginBottom: '6px' }}>Revenue outcomes cannot be guaranteed.</li>
                  <li style={{ marginBottom: '6px' }}>Business growth cannot be guaranteed.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Our commitment is to provide professional optimization services based on experience, analysis, and industry standards.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>16. Digital Marketing Services</h2>
                <p>Digital marketing performance may depend on numerous external factors, including competition, budget allocation, market conditions, audience behavior, platform algorithms, and creative effectiveness.</p>
                <p style={{ marginTop: '12px' }}>
                  While we strive for positive outcomes, specific business results cannot be guaranteed.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>17. AI Solutions and Automation</h2>
                <p>AndroInfraMind develops and integrates AI-powered systems and automation solutions.</p>
                <p style={{ marginTop: '12px' }}>Clients acknowledge that:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>AI-generated outputs may vary.</li>
                  <li style={{ marginBottom: '6px' }}>Automated systems may require monitoring.</li>
                  <li style={{ marginBottom: '6px' }}>Third-party AI providers may influence performance.</li>
                  <li style={{ marginBottom: '6px' }}>Results depend on implementation quality and available data.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  AI services should be evaluated within the context of their intended use cases.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>18. Project Timelines</h2>
                <p>Estimated timelines are based on information available during project planning.</p>
                <p style={{ marginTop: '12px' }}>Timelines may be affected by scope changes, delayed approvals, third-party dependencies, infrastructure limitations, technical challenges, and resource availability.</p>
                <p style={{ marginTop: '12px' }}>
                  Reasonable efforts will be made to communicate timeline changes when necessary.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>19. Revisions and Modifications</h2>
                <p>Projects may include revision cycles as defined within the applicable agreement.</p>
                <p style={{ marginTop: '12px' }}>Additional requests beyond the agreed scope may require:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Scope adjustments.</li>
                  <li style={{ marginBottom: '6px' }}>Additional timelines.</li>
                  <li style={{ marginBottom: '6px' }}>Revised pricing.</li>
                  <li style={{ marginBottom: '6px' }}>New project agreements.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Change requests should be documented and approved before implementation.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>20. Payments and Billing</h2>
                <p>Payment terms are defined within project proposals, invoices, contracts, or service agreements.</p>
                <p style={{ marginTop: '12px' }}>Clients agree to:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '6px' }}>Make payments according to agreed schedules.</li>
                  <li style={{ marginBottom: '6px' }}>Provide accurate billing information.</li>
                  <li style={{ marginBottom: '6px' }}>Address payment-related issues promptly.</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  Failure to fulfill payment obligations may result in project suspension or service interruption.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>21. Refund Policy</h2>
                <p>Refund eligibility depends on service type, project stage, work completed, contractual obligations, and applicable agreements.</p>
                <p style={{ marginTop: '12px' }}>
                  Custom development and consulting services often involve resource allocation and may not be eligible for full refunds after work has commenced. Specific refund provisions should be reviewed within the applicable agreement.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>22. Maintenance and Support</h2>
                <p>Maintenance and support services may be offered separately or as part of specific service packages.</p>
                <p style={{ marginTop: '12px' }}>Support availability may vary based on service plans, project agreements, resource availability, and operational requirements.</p>
                <p style={{ marginTop: '12px' }}>
                  Response times are not guaranteed unless specified in writing.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>23. Service Availability</h2>
                <p>While we strive to maintain uninterrupted service availability, we cannot guarantee continuous website access, uninterrupted communication channels, third-party service uptime, or platform availability at all times.</p>
                <p style={{ marginTop: '12px' }}>
                  Temporary interruptions may occur due to maintenance, updates, technical issues, or circumstances beyond our control.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>24. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, AndroInfraMind shall not be liable for indirect, incidental, or consequential damages, business interruption, revenue loss, data loss, loss of opportunities, or reputational impacts.</p>
                <p style={{ marginTop: '12px' }}>
                  Any liability shall be limited to the extent permitted under applicable agreements and governing laws.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>25. Indemnification</h2>
                <p>Clients agree to indemnify and hold harmless AndroInfraMind, its team members, contractors, partners, and affiliates from claims arising from client-provided content, misuse of services, intellectual property disputes, regulatory violations, or unauthorized activities.</p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>26. Force Majeure</h2>
                <p>AndroInfraMind shall not be responsible for delays or failures resulting from circumstances beyond reasonable control, including natural disasters, government actions, internet disruptions, infrastructure failures, cybersecurity incidents, labor disputes, or utility outages.</p>
                <p style={{ marginTop: '12px' }}>
                  Project schedules may be adjusted where such events occur.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>27. Suspension and Termination</h2>
                <p>We reserve the right to suspend or terminate services where terms are violated, fraudulent activity is suspected, payments remain outstanding, legal obligations require action, or client conduct becomes abusive or harmful.</p>
                <p style={{ marginTop: '12px' }}>
                  Termination shall not affect obligations that survive termination under applicable agreements.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>28. Governing Law</h2>
                <p>These Terms shall be interpreted in accordance with applicable laws and regulations governing the jurisdiction in which AndroInfraMind operates.</p>
                <p style={{ marginTop: '12px' }}>
                  Disputes shall be addressed through good-faith discussions before pursuing formal legal remedies where possible.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>29. Modifications to These Terms</h2>
                <p>AndroInfraMind may update these Terms periodically to reflect business changes, service improvements, legal requirements, industry developments, or operational adjustments.</p>
                <p style={{ marginTop: '12px' }}>
                  Updated versions will be published on this page with a revised effective date. Continued use of our services after updates constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <h2>30. Contact Information</h2>
                <p>For questions regarding these Terms of Service, project engagements, confidentiality matters, white-label partnerships, or legal inquiries, please contact:</p>
                <p style={{ marginTop: '12px', lineHeight: '1.8' }}>
                  <strong>AndroInfraMind</strong><br />
                  Website: <a href="https://androinframind.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>https://androinframind.com</a><br />
                  Email: <a href="mailto:androinframind@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>androinframind@gmail.com</a>
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <h2>Final Statement</h2>
                <p>
                  At AndroInfraMind, we are committed to building long-term relationships based on trust, professionalism, confidentiality, technical excellence, and mutual respect.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Whether we are developing a custom software platform, delivering SEO strategies, building AI-powered systems, supporting a white-label agency, or working under a strict NDA, our goal remains the same: to provide reliable, high-quality solutions while protecting the interests of our clients and partners.
                </p>
                <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--copy-muted)' }}>
                  Thank you for choosing AndroInfraMind.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
