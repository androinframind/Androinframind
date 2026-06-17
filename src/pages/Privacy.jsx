import LegalPage from '@/components/site/LegalPage';

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title={<>Privacy Policy</>}
      description="How AndroInfraMind collects, uses, and protects information shared through the website and inquiry flows."
      updatedLabel="Last updated: June 12, 2026"
      sections={[
        {
          title: 'Overview',
          body: (
            <p>
              At AndroInfraMind, we value and respect your privacy. This policy outlines the types of personal information collected through our website, inquiry flows, and services, and how that information may be processed, secured, and managed in compliance with global standards.
            </p>
          ),
        },
        {
          title: '1. Information we collect',
          body: (
            <p>
              When you contact us using project inquiry forms, chatbot prompts, or B2B channels, we may request details including your full name, work email address, phone number, company name, service interest, budget range, and project requirements. We also collect non-identifiable browser details, IP addresses, and page interaction maps automatically to optimize our site performance.
            </p>
          ),
        },
        {
          title: '2. NDA and data safeguards',
          body: (
            <p>
              We implement appropriate physical, technical, and administrative safeguards to protect personal data and project details. We operate under strict Non-Disclosure Agreements (NDAs) by default for all business partnerships. We do not sell, rent, or share inquiry information with unverified third parties under any circumstances.
            </p>
          ),
        },
        {
          title: '3. Analytics and tracking',
          body: (
            <p>
              We use session cookies and local storage tokens to maintain user navigation preferences, security states, and custom preferences (such as chatbot state). We also utilize light technical analytics tools to track website speed, response times, and general responsiveness across viewport sizes.
            </p>
          ),
        },
        {
          title: '4. Data retention and deletion',
          body: (
            <p>
              Contact form details and initial requirements are kept in our secure databases for a maximum of 24 months, or until a formal business engagement begins. You retain the absolute right to request access to, correction of, or immediate deletion of any personal or project details shared with us by sending an email to our support team.
            </p>
          ),
        },
        {
          title: '5. B2C consumer & children\'s privacy',
          body: (
            <>
              <p>
                For users of our consumer-facing mobile applications and strategy games (such as XO Arena), we collect basic operational telemetry, including device model, OS version, gameplay statistics, and advertising identifiers (such as IDFA or GAID) solely to support in-game match matching, save state restoration, and performance tuning.
              </p>
              <p style={{ marginTop: '10px' }}>
                We comply strictly with COPPA (Children\'s Online Privacy Protection Act) guidelines. Our games and consumer apps are built with safety in mind and do not knowingly collect, store, or share identifiable personal details from children under the age of 13. Any such data discovered will be deleted immediately.
              </p>
            </>
          ),
        },
        {
          title: '6. Compliance & contact',
          body: (
            <p>
              Our workflows are designed with GDPR, HIPAA, and consumer privacy guidelines in mind to support secure handling of data. For questions regarding this policy or to request data removal, please contact our Data Protection Officer at <strong>privacy@androinframind.com</strong>.
            </p>
          ),
        },
      ]}
    />
  );
}
