import LegalPage from '@/components/site/LegalPage';

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Terms"
      title={<>Terms of Service</>}
      description="Core terms that apply when using the site, engaging the team, or making payments through the portal."
      updatedLabel="Last updated: June 12, 2026"
      sections={[
        {
          title: 'Overview',
          body: (
            <p>
              Welcome to AndroInfraMind. By accessing or using our website, services, staff augmentation models, or secure B2B invoice portals, you agree to comply with and be bound by the following terms of service. These terms govern all online portals and digital transactions handled by AndroInfraMind.
            </p>
          ),
        },
        {
          title: '1. Scope of service',
          body: (
            <p>
              AndroInfraMind provides software design, development deliverables, mobile application building, custom AI integration, and dedicated developer teams. All custom project engagements are subject to separate Master Services Agreements (MSAs) and Statements of Work (SOWs) which outline specific deliverables and timelines.
            </p>
          ),
        },
        {
          title: '2. Payments and invoices',
          body: (
            <p>
              Client invoice settlements and consultation deposits processed through the portal are handled securely via Razorpay Checkout. Standard invoice payment terms are Net 15 days unless defined otherwise in your agreement. All digital deposits for initial consultations or scoping workshops are non-refundable once scheduled.
            </p>
          ),
        },
        {
          title: '3. Intellectual property ownership',
          body: (
            <p>
              Upon complete settlement of all outstanding invoices related to a project, AndroInfraMind guarantees the full transfer of all intellectual property, source code, deployment assets, and project deliverables to the client organization. Until full payment is received, proprietary libraries, scoping blueprints, and draft codebases remain the property of AndroInfraMind.
            </p>
          ),
        },
        {
          title: '4. Limitation of liability',
          body: (
            <p>
              In no event shall AndroInfraMind, its directors, or its employees be liable for any indirect, incidental, special, or consequential damages arising out of the use of our scoping documents, delivered software, or services. Our maximum liability is strictly limited to the direct amounts paid by the client for the specific service in dispute.
            </p>
          ),
        },
        {
          title: '5. B2C consumer terms & EULA',
          body: (
            <>
              <p>
                For individual consumers downloading our mobile apps or strategy games (such as XO Arena) from the Apple App Store, usage is governed by the standard Apple Licensed Application End User License Agreement (EULA). Users agree not to engage in cheating, modding, reverse-engineering, or hosting unauthorized servers for multiplayer matchups. Any behavior that compromises fair play will result in immediate account termination.
              </p>
              <p style={{ marginTop: '10px' }}>
                All in-game progress, XP points, achievements, and leaderboard rankings are virtual, mock achievements that hold no cash value and cannot be redeemed, transferred, or sold for real-world currency. Accounts are subject to suspension if usernames contain profane, offensive, or infringing terms.
              </p>
            </>
          ),
        },
        {
          title: '6. Governing law & jurisdiction',
          body: (
            <p>
              These terms of service and any disputes arising from website interactions, consumer app store installations, or secure portal payments shall be governed by and construed in accordance with the laws of Rajasthan, India, and shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan, India.
            </p>
          ),
        },
      ]}
    />
  );
}
