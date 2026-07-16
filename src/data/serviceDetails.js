const GROUP_DEFAULTS = {
  'Quick Commerce': {
    heroDescription: 'We help brands launch and grow on fast-moving quick commerce channels with onboarding, catalog readiness, ranking optimization, offers, and measurable real sales tracking.',
    overview: 'Our quick commerce team prepares your products for high-intent buying moments. We support setup, documentation, catalog quality, category placement, stock readiness, offer planning, and performance tracking so your products can move from listing to real orders.',
    outcomes: [
      'Platform-ready onboarding with correct catalog, documents, pricing, and category mapping.',
      'Improved product visibility through keyword, title, image, offer, and listing optimization.',
      'Weekly sales movement tracking with clear actions for ranking, stock, and conversion improvement.',
    ],
    process: [
      { title: 'Platform readiness', desc: 'We review your product category, documents, pricing, SKU data, and platform-fit requirements.' },
      { title: 'Catalog setup', desc: 'We prepare titles, descriptions, keywords, images, attributes, and upload-ready product information.' },
      { title: 'Launch optimization', desc: 'We align offers, stock status, serviceability, and listing quality so products can compete from day one.' },
      { title: 'Visibility push', desc: 'We improve search terms, promotions, and listing quality to help products move toward stronger positions.' },
      { title: 'Sales tracking', desc: 'We monitor clicks, orders, stock movement, best sellers, and weekly actions for real sales growth.' },
    ],
    platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'Amazon', 'Flipkart', 'Meesho', 'Shopify'],
  },
  'Software Engineering': {
    heroDescription: 'We design, build, and scale robust digital products with clean architecture, reliable engineering, and long-term maintainability.',
    overview: 'Our software engineering services cover planning, UX-ready implementation, backend/API systems, integrations, testing, deployment, and handover. We focus on systems that are fast, secure, maintainable, and easy for teams to operate.',
    outcomes: [
      'Clean product architecture that supports future features and business growth.',
      'Reliable frontend, backend, API, and database implementation with performance in mind.',
      'Production-ready delivery with deployment, documentation, and handover support.',
    ],
    process: [
      { title: 'Discovery', desc: 'We map product goals, users, workflows, data needs, and technical constraints.' },
      { title: 'Architecture', desc: 'We define screens, APIs, database models, integrations, and delivery milestones.' },
      { title: 'Build', desc: 'We implement the product with clean code, reusable components, and structured reviews.' },
      { title: 'QA & launch', desc: 'We test critical flows, performance, responsiveness, and production readiness.' },
      { title: 'Support', desc: 'We provide handover, documentation, monitoring guidance, and iteration support.' },
    ],
    platforms: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Vite', 'AWS', 'Firebase'],
  },
  'AI & Automation': {
    heroDescription: 'We build practical AI, data, and automation systems that reduce manual work and improve decision-making inside real business workflows.',
    overview: 'We identify repetitive tasks, data bottlenecks, decision points, and workflow gaps, then build AI and automation layers that connect with your existing product, CRM, admin panel, or operations process.',
    outcomes: [
      'Reduced manual operations through reliable automation and workflow triggers.',
      'Smarter decisions with structured data, dashboards, predictions, or AI assistance.',
      'Integrated AI systems that fit business workflows instead of staying as disconnected demos.',
    ],
    process: [
      { title: 'Workflow audit', desc: 'We identify repetitive steps, decision points, and data sources that can be automated.' },
      { title: 'Solution design', desc: 'We define the AI/data/automation flow, inputs, outputs, and integrations.' },
      { title: 'Implementation', desc: 'We build pipelines, prompts, models, APIs, dashboards, or automation logic.' },
      { title: 'Validation', desc: 'We test outputs, edge cases, operational fit, and failure handling.' },
      { title: 'Iteration', desc: 'We improve accuracy, speed, and workflow adoption based on real usage.' },
    ],
    platforms: ['Python', 'OpenAI/Claude APIs', 'Supabase', 'PostgreSQL', 'n8n', 'Zapier', 'Dashboards'],
  },
  'Cloud & DevOps': {
    heroDescription: 'We set up secure, scalable, and observable cloud foundations so your applications deploy faster and operate with confidence.',
    overview: 'We help teams move from fragile deployment processes to structured cloud, CI/CD, monitoring, backup, and security foundations. The result is a more stable production environment and easier release cycle.',
    outcomes: [
      'Reliable deployment pipelines with fewer manual release issues.',
      'Cloud infrastructure that supports scaling, backups, security, and monitoring.',
      'Operational visibility through logs, metrics, uptime checks, and alerts.',
    ],
    process: [
      { title: 'Infrastructure review', desc: 'We assess current hosting, deployment, storage, security, and scaling requirements.' },
      { title: 'Cloud design', desc: 'We define environments, services, CI/CD flow, secrets, backups, and monitoring.' },
      { title: 'Implementation', desc: 'We configure infrastructure, pipelines, domains, SSL, storage, and deployment automation.' },
      { title: 'Hardening', desc: 'We improve security, access control, logging, recovery, and failure handling.' },
      { title: 'Handover', desc: 'We document deployment processes and support the team during production rollout.' },
    ],
    platforms: ['AWS', 'GCP', 'Azure', 'Docker', 'GitHub Actions', 'Vercel', 'Cloudflare'],
  },
  'Growth Services': {
    heroDescription: 'We combine technical execution, marketing systems, paid media, social growth, creator campaigns, and conversion thinking to help brands attract, convert, and retain better customers.',
    overview: 'Our growth services connect positioning, search visibility, paid campaigns, social content, influencer collaborations, analytics, and conversion improvements. We focus on measurable movement, not vanity metrics.',
    outcomes: [
      'Improved visibility through SEO, paid ads, social content, creator partnerships, and platform optimization.',
      'Better conversion through landing pages, messaging, analytics, audience targeting, and funnel improvements.',
      'Clear reporting around traffic, leads, campaign performance, sales movement, and next growth actions.',
    ],
    process: [
      { title: 'Growth audit', desc: 'We review traffic sources, audience segments, conversion paths, offers, content, and analytics setup.' },
      { title: 'Plan', desc: 'We prioritize SEO, paid campaigns, creator partnerships, content, landing pages, or team support based on goals.' },
      { title: 'Execution', desc: 'We implement campaigns, content, tracking, creator briefs, technical fixes, or growth workflows.' },
      { title: 'Optimization', desc: 'We improve targeting, messaging, offers, creators, and conversion paths using performance data.' },
      { title: 'Reporting', desc: 'We provide clear updates on results, blockers, spend, reach, leads, and next actions.' },
    ],
    platforms: ['Google Ads', 'Meta Ads', 'Instagram', 'YouTube', 'Search Console', 'GA4', 'LinkedIn', 'CRM'],
  },
  'Marketplace Management': {
    heroDescription: 'We manage marketplace stores, catalogs, offers, and performance actions to improve visibility, buyer trust, and real sales outcomes.',
    overview: 'We help brands operate marketplace channels with better catalog quality, pricing, listing hygiene, offer planning, inventory checks, review monitoring, and sales reporting.',
    outcomes: [
      'Cleaner marketplace presence with improved listings, images, titles, and categories.',
      'Stronger product discovery through offer planning, keyword optimization, and performance checks.',
      'Actionable reporting around orders, ranking, stock, reviews, and conversion improvements.',
    ],
    process: [
      { title: 'Store audit', desc: 'We review account health, catalog issues, listing quality, pricing, and category placement.' },
      { title: 'Catalog improvement', desc: 'We fix titles, attributes, descriptions, images, keywords, and upload quality.' },
      { title: 'Growth actions', desc: 'We plan offers, ads, search terms, and ranking improvements for priority products.' },
      { title: 'Operations support', desc: 'We monitor stock, order movement, listing errors, and platform requirements.' },
      { title: 'Reporting', desc: 'We track real sales, conversion, best sellers, and weekly improvement actions.' },
    ],
    platforms: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Shopify', 'Seller Panels'],
  },
  'Marketplace Onboarding': {
    heroDescription: 'We help sellers and brands get marketplace-ready with account setup, documentation, product uploads, compliance, and launch support.',
    overview: 'Marketplace onboarding can be confusing because every platform has different document, catalog, and compliance requirements. We simplify the process and prepare your account and products for a clean launch.',
    outcomes: [
      'Faster seller account setup with required documents and correct business information.',
      'Upload-ready product catalogs with platform-friendly attributes and categories.',
      'Launch support that reduces errors, rejections, and operational confusion.',
    ],
    process: [
      { title: 'Requirement checklist', desc: 'We identify the platform documents, business details, and product data required.' },
      { title: 'Account setup', desc: 'We support seller account creation, profile completion, and compliance alignment.' },
      { title: 'Catalog preparation', desc: 'We prepare product sheets, images, descriptions, attributes, pricing, and category mapping.' },
      { title: 'Upload & review', desc: 'We upload products, check listing errors, and resolve common platform objections.' },
      { title: 'Launch handover', desc: 'We guide initial operations, order readiness, and next steps for sales growth.' },
    ],
    platforms: ['Amazon Seller', 'Flipkart Seller', 'Meesho', 'Blinkit', 'Zepto', 'Instamart'],
  },
};

const RAW_SERVICE_GROUPS = [
  {
    title: 'Quick Commerce',
    featured: true,
    links: [
      { slug: 'blinkit-zepto-setup', label: 'Blinkit / Zepto Setup', icon: '⚡', focus: 'fast onboarding for Blinkit and Zepto product launches' },
      { slug: 'instamart-onboarding', label: 'Instamart Onboarding', icon: '🛵', focus: 'Swiggy Instamart account, catalog, and launch readiness' },
      { slug: 'inventory-catalog-sync', label: 'Inventory & Catalog Sync', icon: '📦', focus: 'inventory accuracy, catalog hygiene, and SKU-level readiness' },
      { slug: 'hyperlocal-delivery-flow', label: 'Hyperlocal Delivery Flow', icon: '📍', focus: 'hyperlocal product availability, delivery-zone readiness, and operational flow' },
    ],
  },
  {
    title: 'Software Engineering',
    links: [
      { slug: 'custom-software', label: 'Custom Software', icon: '💻', focus: 'custom backend, workflow, dashboard, and API solutions' },
      { slug: 'web-applications', label: 'Web Applications', icon: '🌐', focus: 'high-performance web platforms, portals, and product interfaces' },
      { slug: 'mobile-apps', label: 'Mobile Apps', icon: '📱', focus: 'native and cross-platform mobile apps for iOS and Android' },
    ],
  },
  {
    title: 'AI & Automation',
    links: [
      { slug: 'ai-ml-solutions', label: 'AI & ML Solutions', icon: '🤖', focus: 'AI models, assistants, predictions, and ML workflows' },
      { slug: 'data-systems', label: 'Data Systems', icon: '📊', focus: 'data pipelines, reporting, dashboards, and analytics systems' },
      { slug: 'workflow-automation', label: 'Workflow Automation', icon: '⚙️', focus: 'automation for repetitive operations, CRM flows, and internal processes' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    links: [
      { slug: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: '☁️', focus: 'secure cloud hosting, storage, domains, scaling, and monitoring' },
      { slug: 'devops-ci-cd', label: 'DevOps & CI/CD', icon: '🚀', focus: 'automated deployment pipelines and release workflows' },
      { slug: 'security-foundations', label: 'Security Foundations', icon: '🛡️', focus: 'access control, backups, secrets, monitoring, and production hardening' },
    ],
  },
  {
    title: 'Growth Services',
    links: [
      { slug: 'digital-marketing', label: 'Digital Marketing', icon: '📣', focus: 'paid ads, SEO, social campaigns, analytics, conversion optimization, and full-funnel digital growth' },
      { slug: 'influencer-marketing', label: 'Influencer Marketing', icon: '🤝', focus: 'creator discovery, influencer outreach, campaign briefs, content coordination, and performance tracking' },
      { slug: 'seo-digital-marketing', label: 'SEO & Digital Marketing', icon: '🔎', focus: 'SEO, paid campaigns, content, and conversion-driven growth systems' },
      { slug: 'product-strategy', label: 'Product Strategy', icon: '🎯', focus: 'positioning, roadmap, user journeys, and launch planning' },
      { slug: 'staff-augmentation', label: 'Staff Augmentation', icon: '👥', focus: 'dedicated developers, designers, and delivery specialists for your team' },
    ],
  },
  {
    title: 'Marketplace Management',
    links: [
      { slug: 'amazon-store-management', label: 'Amazon Store Management', icon: '🛒', focus: 'Amazon seller store, catalog, ads, offers, and performance management' },
      { slug: 'flipkart-store-management', label: 'Flipkart Store Management', icon: '🛍️', focus: 'Flipkart seller catalog, listing, pricing, promotion, and growth management' },
      { slug: 'catalog-listing-support', label: 'Catalog & Listing Support', icon: '📦', focus: 'product listing quality, images, titles, attributes, and category accuracy' },
    ],
  },
  {
    title: 'Marketplace Onboarding',
    links: [
      { slug: 'seller-account-setup', label: 'Seller Account Setup', icon: '🏪', focus: 'seller account creation, business details, and platform profile completion' },
      { slug: 'product-upload-support', label: 'Product Upload Support', icon: '⬆️', focus: 'bulk product upload, catalog sheets, image checks, and listing validation' },
      { slug: 'compliance-assistance', label: 'Compliance Assistance', icon: '✅', focus: 'document checks, category compliance, and platform approval support' },
    ],
  },
];

function buildService(group, item) {
  const defaults = GROUP_DEFAULTS[group.title];

  return {
    ...item,
    group: group.title,
    featured: group.featured || false,
    to: `/services/${item.slug}`,
    heroTitle: item.label,
    heroDescription: defaults.heroDescription,
    overview: `${defaults.overview} For ${item.label}, our focus is ${item.focus}.`,
    outcomes: defaults.outcomes,
    process: defaults.process,
    platforms: defaults.platforms,
  };
}

export const SERVICE_GROUPS = RAW_SERVICE_GROUPS.map((group) => ({
  ...group,
  links: group.links.map((item) => buildService(group, item)),
}));

export const SERVICE_DETAILS = SERVICE_GROUPS.flatMap((group) => group.links);

export function getServiceDetail(slug) {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}

export function getServicesByGroup(groupTitle) {
  return SERVICE_DETAILS.filter((service) => service.group === groupTitle);
}
