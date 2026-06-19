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
                <h2>6. Project Delivery & Revisions</h2>
                <p>
                  AndroInfraMind will make every reasonable effort to meet agreed project timelines. However, delays caused by factors beyond our control, including but not limited to third-party service outages, deployment issues, communication delays, client feedback delays, resource unavailability, force majeure events, or technical bottlenecks, shall not be considered a breach of contract.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Clients are provided opportunities to review project progress during development and after project completion. A revision period of seven (7) calendar days is provided following delivery. If no feedback or revision request is received within this period, the project shall be deemed approved and accepted by the client.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>7. Intellectual Property & Copyright</h2>
                <p>
                  All logos, trademarks, content, files, images, and other materials supplied by the client remain the property of the client. The client grants AndroInfraMind permission to use, modify, and incorporate such materials into the project as necessary.
                </p>
                <p style={{ marginTop: '12px' }}>
                  The client is solely responsible for obtaining all required licenses, permissions, and copyrights for any third-party materials provided. AndroInfraMind shall not be liable for any claims, disputes, damages, or legal actions arising from copyright infringement, unauthorized use, or intellectual property violations related to materials supplied by the client.
                </p>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind reserves the right to request proof of ownership, licensing, or authorization for any materials supplied by the client.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>8. Changes Made by Third Parties</h2>
                <p>
                  AndroInfraMind shall not be responsible for issues, errors, data loss, or performance problems resulting from modifications, deletions, additions, or alterations made by the client or any third party after project delivery. Any corrective work requested will be billed separately at applicable rates.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>9. Payment Terms</h2>
                <p>
                  We accept payments through bank transfer, UPI, online payment gateways, and other approved payment methods. AndroInfraMind reserves the right to modify accepted payment methods without prior notice.
                </p>
                <p style={{ marginTop: '12px' }}>
                  A non-refundable advance payment, typically ranging from 30% to 50% of the total project cost, is required before project commencement.
                </p>
                <p style={{ marginTop: '12px' }}>
                  If a project is canceled, paused indefinitely, or terminated by the client after work has begun, the client shall be responsible for payment of all completed work and expenses incurred up to the cancellation date.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Failure to pay outstanding invoices may result in suspension of services, withholding of deliverables, and legal recovery actions where applicable.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>10. Support & Maintenance</h2>
                <p>
                  AndroInfraMind provides complimentary bug-fix support for thirty (30) days following project launch unless otherwise specified in writing.
                </p>
                <p style={{ marginTop: '12px' }}>
                  After the support period expires, maintenance, enhancements, upgrades, content changes, feature additions, redesign requests, and technical support services will be billed separately according to the applicable support plan or hourly rate.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Third-party services, hosting providers, APIs, payment gateways, software licenses, plugins, and subscription-based products remain the responsibility of the client unless explicitly included in the project agreement.
                </p>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind does not provide warranties or guarantees for third-party products or services.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>11. Additional Work, Enhancements & Revisions</h2>
                <p>
                  Any work requested beyond the agreed project scope shall be considered additional work and may result in additional charges and revised delivery timelines.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Minor adjustments may be completed at no additional charge at AndroInfraMind's discretion. However, excessive revision requests or requests outside the original scope may be billed separately.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Once a project phase has been approved, any subsequent modifications, redesigns, or rework requests shall be treated as additional services.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>12. Liability Limitation</h2>
                <p>
                  AndroInfraMind provides services using reasonable care, skill, and professional standards. However, all services are provided on an “as-is” basis without warranties of any kind, whether express or implied.
                </p>
                <p style={{ marginTop: '12px' }}>
                  To the maximum extent permitted by law, AndroInfraMind shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, profits, business opportunities, data, goodwill, or business interruption.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Our total liability under any agreement shall not exceed the amount paid by the client for the specific project giving rise to the claim.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>13. Project Ownership & Delivery</h2>
                <p>
                  Ownership of source code, design files, content, and project deliverables shall transfer to the client only after full and final payment has been received.
                </p>
                <p style={{ marginTop: '12px' }}>
                  AndroInfraMind reserves the right to withhold delivery, deployment, source files, credentials, and project assets until all outstanding payments are cleared.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>14. Portfolio Rights</h2>
                <p>
                  Unless otherwise agreed in writing, AndroInfraMind reserves the right to display completed projects, screenshots, company names, logos, and project descriptions in its portfolio, marketing materials, presentations, and promotional content.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Clients who wish to restrict such usage must provide written notice before project completion.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>15. Project Timeline</h2>
                <p>
                  Project timelines are estimates and may vary depending on project complexity, client responsiveness, revision requests, third-party dependencies, and unforeseen circumstances.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Any delay in providing required content, approvals, credentials, or feedback may result in corresponding adjustments to the project schedule.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>16. Governing Law & Jurisdiction</h2>
                <p>
                  These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan, India.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px' }}>
                <h2>17. Severability</h2>
                <p>
                  If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the original intent.
                </p>
              </section>

              <section className="legal-section" style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <h2>Contact Information</h2>
                <p>For questions regarding these Terms of Service, project engagements, confidentiality matters, or white-label partnerships, please contact:</p>
                <p style={{ marginTop: '12px', lineHeight: '1.8' }}>
                  <strong>AndroInfraMind</strong><br />
                  Website: <a href="https://androinframind.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>https://androinframind.com</a><br />
                  Email: <a href="mailto:androinframind@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>androinframind@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
