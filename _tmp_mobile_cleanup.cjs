const fs = require('fs');
const path = 'c:/Users/andro/OneDrive/Desktop/androinframaind-website/src/index.css';
let text = fs.readFileSync(path, 'utf8');

const ranges = [
  ['/* Global dark video background readability */', '/* Global responsive hardening */'],
  ['/* Light video palette override */', '/* Phone-first optimization layer */'],
  ['/* Hero-only video override */', '/* Final light palette + hero parallax cleanup */'],
  ['/* Mobile hero poster-only mode */', null],
];

for (const [startMarker, endMarker] of ranges) {
  const start = text.indexOf(startMarker);
  if (start === -1) continue;
  const end = endMarker ? text.indexOf(endMarker, start) : text.length;
  if (end === -1) continue;
  text = text.slice(0, start).trimEnd() + '\n\n' + text.slice(end).trimStart();
}

const marker = '/* Mobile performance and layout stabilization */';
const block = `

/* Mobile performance and layout stabilization */
.video-hero__video {
  --hero-video-y: 0px;
  transform: translate3d(0, var(--hero-video-y), 0) scale(1.12);
}

@media (max-width: 640px) {
  .video-hero__media {
    background: #050a18 url('/hero-poster.png') center / cover no-repeat;
  }

  .video-hero__video {
    display: none !important;
  }
}

@media (max-width: 768px) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }

  .surface-card:hover,
  .surface-panel:hover,
  .timeline-card:hover,
  .info-card:hover,
  .contact-card:hover,
  .site-button:hover,
  .video-hero__button:hover {
    transform: none !important;
  }

  .ambient-orb,
  .orb-one,
  .orb-two,
  .video-hero__panel-glow {
    display: none !important;
  }

  .section:not(.section-dark),
  .page-hero:not(.video-hero),
  .section-muted,
  .surface-card,
  .surface-panel,
  .legal-shell,
  .timeline-card,
  .payment-summary-card,
  .info-card,
  .contact-card,
  .dashboard-metric,
  .dashboard-chart,
  .logo-chip,
  .apple-footer-shell,
  .marquee-container {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  .site-header,
  .site-header.is-scrolled {
    background: rgba(255, 255, 255, 0.94) !important;
    color: var(--text-primary);
  }

  .container,
  .site-header-wrap {
    width: min(100% - 24px, var(--container));
  }

  .section,
  .section-muted,
  .section-tight {
    padding-block: 36px;
  }

  .section-heading,
  .section-heading-center {
    margin-bottom: 22px;
  }

  .section-title,
  .hero-title,
  .cta-title,
  .legal-content h2 {
    font-size: clamp(1.65rem, 7.8vw, 2.25rem) !important;
    line-height: 1.1;
  }

  .section-copy,
  .hero-copy,
  .cta-description,
  .card-copy,
  .testimonial-quote,
  .legal-content p,
  .legal-content li,
  .contact-side-note,
  .stat-detail {
    font-size: 0.92rem !important;
    line-height: 1.58;
  }

  .video-hero__content {
    padding: 28px 0 42px;
  }

  .video-hero__container {
    min-height: auto;
    grid-template-columns: 1fr !important;
    gap: 22px;
    padding-top: 18px;
    padding-bottom: 28px;
  }

  .video-hero__copy {
    text-align: center;
  }

  .video-hero__title {
    font-size: clamp(1.95rem, 12vw, 3.1rem) !important;
    line-height: 1;
  }

  .video-hero__description {
    font-size: 0.9rem !important;
    line-height: 1.56;
  }

  .video-hero__panel,
  .surface-card,
  .surface-panel,
  .cta-panel,
  .legal-shell,
  .timeline-card,
  .payment-summary-card,
  .info-card,
  .contact-card,
  .video-hero__metric,
  .video-hero__capability-card,
  .video-hero__timeline {
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
  }

  .grid-two,
  .grid-three,
  .grid-four,
  .stats-grid,
  .case-study-grid,
  .testimonial-grid,
  .logo-row,
  .contact-layout,
  .footer-grid,
  .process-grid,
  .dual-panel,
  .video-hero__metrics,
  .video-hero__capability-grid,
  .video-hero__steps,
  .form-split,
  .apple-footer-grid,
  .apple-footer-links-columns {
    grid-template-columns: 1fr !important;
  }

  .site-button,
  .video-hero__button,
  .cta-actions .site-button,
  .hero-actions .site-button,
  .footer-newsletter-form .site-button,
  .mobile-nav-cta {
    width: 100%;
    min-height: 46px;
  }

  .site-input,
  .site-select,
  .site-textarea,
  .footer-newsletter-form input,
  .search-input-field {
    font-size: 16px !important;
  }

  .search-results-grid {
    max-height: calc(100svh - 170px);
  }

  .marquee-container {
    padding: 10px 0;
  }

  .marquee-track,
  .marquee-group,
  .marquee-item {
    gap: 16px;
  }

  .marquee-item {
    white-space: nowrap;
    font-size: 0.74rem;
  }
}

@media (max-width: 420px) {
  .container,
  .site-header-wrap {
    width: min(100% - 18px, var(--container));
  }

  .brand-text {
    max-width: 38vw;
  }

  .video-hero__title {
    font-size: clamp(1.75rem, 13vw, 2.55rem) !important;
    line-height: 1.02;
  }

  .video-hero__description {
    font-size: 0.88rem !important;
  }

  .search-kbd-hint,
  .search-result-badge,
  .search-result-arrow {
    display: none !important;
  }

  .search-result-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
`;
const index = text.indexOf(marker);
if (index !== -1) {
  text = text.slice(0, index - 2) + block;
} else {
  text += block;
}
fs.writeFileSync(path, text, 'utf8');
