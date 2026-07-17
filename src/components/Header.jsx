import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Menu, Search, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandMark from '@/components/site/BrandMark';
import { SERVICE_GROUPS } from '@/data/serviceDetails';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services', mega: true },
  { to: '/projects', label: 'Our Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const MOBILE_NAV_LINKS = NAV_LINKS.filter((link) => !link.mega);

const SERVICE_CATEGORY_META = {
  'Quick Commerce': {
    icon: '⚡',
    description: 'Fast-commerce setup, catalog readiness, ranking, offers, and real sales movement.',
  },
  'Marketing': {
    icon: '📣',
    description: 'Digital marketing, influencer campaigns, paid media, social content, analytics, and conversion growth.',
  },
  'Software Engineering': {
    icon: '💻',
    description: 'Custom software, web platforms, mobile apps, and scalable product engineering.',
  },
  'AI & Automation': {
    icon: '🤖',
    description: 'AI assistants, data systems, workflows, dashboards, and automation layers.',
  },
  'Cloud & DevOps': {
    icon: '☁️',
    description: 'Cloud infrastructure, CI/CD, monitoring, security foundations, and deployment reliability.',
  },
  'Growth Services': {
    icon: '📈',
    description: 'SEO, product strategy, team support, content, analytics, and conversion growth systems.',
  },
  'Marketplace Management': {
    icon: '🛒',
    description: 'Marketplace store management, catalog quality, offers, ads, and performance tracking.',
  },
  'Marketplace Onboarding': {
    icon: '🏪',
    description: 'Seller setup, product uploads, compliance checks, and clean marketplace launch support.',
  },
};

const POPULAR_SERVICE_SLUGS = ['digital-marketing', 'influencer-marketing', 'blinkit-zepto-setup'];

const SEARCH_DATA = [
  { type: 'page', icon: '🏠', title: 'Home', desc: 'AndroInfraMind — intelligent software and AI solutions', url: '/', keywords: 'home main landing' },
  { type: 'page', icon: '🛠️', title: 'Services', desc: 'Full list of technology services we offer', url: '/services', keywords: 'services technology solutions' },
  { type: 'page', icon: '📁', title: 'Our Work', desc: 'Portfolio of completed enterprise work and delivered outcomes', url: '/projects', keywords: 'our work portfolio projects case studies' },
  { type: 'page', icon: '👥', title: 'About Us', desc: 'Our mission, team, and engineering philosophy', url: '/about', keywords: 'about team mission company' },
  { type: 'page', icon: '✉️', title: 'Contact', desc: 'Start your project and get a quote in 24 hours', url: '/contact', keywords: 'contact quote inquiry get in touch' },
  { type: 'page', icon: '💳', title: 'Payments', desc: 'Secure B2B invoice payment and consultation booking', url: '/payments', keywords: 'payment invoice checkout razorpay' },
  { type: 'service', icon: '💻', title: 'Custom Software Engineering', desc: 'Tailored microservices, databases, and data pipelines', url: '/services', keywords: 'java go postgresql custom software microservices' },
  { type: 'service', icon: '🤖', title: 'AI & Machine Learning', desc: 'Intelligent ML pipelines, NLP, and predictive analytics', url: '/services', keywords: 'ai ml machine learning nlp python tensorflow analytics' },
  { type: 'service', icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, GCP, Azure infrastructure with CI/CD pipelines', url: '/services', keywords: 'cloud devops aws gcp azure docker kubernetes terraform' },
  { type: 'project', icon: '💳', title: 'FinPay — Digital Banking Platform', desc: 'Fintech · KYC automation, fraud detection, AWS, ML', url: '/projects', keywords: 'fintech banking finpay aws react node ml kyc fraud' },
  { type: 'project', icon: '🏥', title: 'MediTrack — Healthcare Analytics', desc: 'Healthcare · HIPAA-compliant predictive patient analytics', url: '/projects', keywords: 'healthcare meditrack analytics python tensorflow gcp hipaa' },
  { type: 'project', icon: '🛒', title: 'SwiftCart — E-Commerce Ecosystem', desc: 'Retail · Multi-vendor marketplace, recommendations, Stripe', url: '/projects', keywords: 'retail ecommerce marketplace swiftcart next.js redis stripe postgresql' },
  { type: 'project', icon: '🎓', title: 'LearnHub — EdTech Platform', desc: 'Education · LMS, live classes, personalized learning paths', url: '/projects', keywords: 'education edtech learnhub lms webrtc firebase python' },
];

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function getCategoryIcon(group) {
  return SERVICE_CATEGORY_META[group.title]?.icon || group.links?.[0]?.icon || '•';
}

function getCategoryDescription(group) {
  return SERVICE_CATEGORY_META[group.title]?.description || group.links?.[0]?.heroDescription || 'Explore focused services for this business goal.';
}

function groupMatchesQuery(group, query) {
  if (!query) return true;

  const categoryText = normalizeText(`${group.title} ${getCategoryDescription(group)}`);
  const itemMatches = group.links.some((item) => normalizeText(`${item.label} ${item.focus}`).includes(query));

  return categoryText.includes(query) || itemMatches;
}

function getVisibleServiceLinks(group, query) {
  if (!group) return [];
  if (!query) return group.links;

  const categoryText = normalizeText(`${group.title} ${getCategoryDescription(group)}`);
  if (categoryText.includes(query)) return group.links;

  return group.links.filter((item) => normalizeText(`${item.label} ${item.focus}`).includes(query));
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceMegaQuery, setServiceMegaQuery] = useState('');
  const [activeServiceCategory, setActiveServiceCategory] = useState(SERVICE_GROUPS[0]?.title || '');
  const [expandedMobileServiceCategory, setExpandedMobileServiceCategory] = useState(SERVICE_GROUPS[0]?.title || '');
  const [scrolled, setScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const normalizedServiceMegaQuery = serviceMegaQuery.trim().toLowerCase();

  const filteredServiceGroups = useMemo(
    () => SERVICE_GROUPS.filter((group) => groupMatchesQuery(group, normalizedServiceMegaQuery)),
    [normalizedServiceMegaQuery],
  );

  const activeServiceGroup = useMemo(
    () => filteredServiceGroups.find((group) => group.title === activeServiceCategory) || filteredServiceGroups[0] || null,
    [activeServiceCategory, filteredServiceGroups],
  );

  const activeServiceLinks = useMemo(
    () => getVisibleServiceLinks(activeServiceGroup, normalizedServiceMegaQuery),
    [activeServiceGroup, normalizedServiceMegaQuery],
  );

  const popularMegaServices = useMemo(() => {
    const allServices = SERVICE_GROUPS.flatMap((group) => group.links);
    return POPULAR_SERVICE_SLUGS.map((slug) => allServices.find((service) => service.slug === slug)).filter(Boolean);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setFocusedIndex(-1);
  };
  const handleNavigate = () => {
    closeMenu();
    closeSearch();
    setActiveDropdown(null);
    setServiceMegaQuery('');
  };

  const handleMegaMenuWheel = (event) => {
    const menu = event.currentTarget.querySelector('.nav-mega-menu');
    if (!menu) return;

    event.preventDefault();
    event.stopPropagation();
    menu.scrollTop += event.deltaY;
  };

  const handleCategoryKeyDown = (event, groupTitle) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key) || !filteredServiceGroups.length) return;

    event.preventDefault();
    const currentIndex = filteredServiceGroups.findIndex((group) => group.title === groupTitle);
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex = (currentIndex + direction + filteredServiceGroups.length) % filteredServiceGroups.length;
    setActiveServiceCategory(filteredServiceGroups[nextIndex].title);
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      closeMenu();
      closeSearch();
      setActiveDropdown(null);
      setServiceMegaQuery('');
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname]);

  useEffect(() => {
    let frameId = null;

    const updateScrolled = () => {
      frameId = null;
      setScrolled(window.scrollY > 12);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
    if (searchOpen) {
      window.setTimeout(() => searchInputRef.current?.focus(), 40);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeSearch();
        closeMenu();
        setActiveDropdown(null);
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (searchOpen) {
          closeSearch();
        } else {
          setSearchOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  const filteredResults = searchQuery.trim()
    ? SEARCH_DATA.filter((item) => `${item.title} ${item.desc} ${item.keywords}`.toLowerCase().includes(searchQuery.toLowerCase()))
    : SEARCH_DATA.filter((item) => item.type !== 'page').slice(0, 6);

  const handleSearchKeyDown = (event) => {
    if (!filteredResults.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === 'Enter' && focusedIndex >= 0) {
      event.preventDefault();
      navigate(filteredResults[focusedIndex].url);
      handleNavigate();
    }
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={`${part}-${index}`} className="search-highlight">
              {part}
            </mark>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/index.html';
    return location.pathname === path;
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header-wrap">
          <div className="site-header-inner">
            <BrandMark className="site-header-brand" />

            <nav className="site-nav" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                if (link.mega) {
                  return (
                    <div
                      key={link.label}
                      className="nav-dropdown-wrapper nav-mega-wrapper"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onWheel={handleMegaMenuWheel}
                    >
                      <Link
                        to={link.to}
                        className={`site-nav-link ${isLinkActive(link.to) ? 'active' : ''}`}
                        onClick={handleNavigate}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === link.label}
                      >
                        {link.label} <ChevronDown className="dropdown-arrow-icon" style={{ width: 12, height: 12, display: 'inline-block', marginLeft: 4, verticalAlign: 'middle', transition: 'transform 0.2s ease' }} />
                      </Link>
                      {activeDropdown === link.label && (
                        <div className="nav-mega-menu" role="menu" aria-label="Services menu">
                          <aside className="nav-mega-sidebar" aria-label="Service categories">
                            <label className="nav-mega-search">
                              <Search className="w-4 h-4" aria-hidden="true" />
                              <input
                                type="search"
                                value={serviceMegaQuery}
                                onChange={(event) => setServiceMegaQuery(event.target.value)}
                                placeholder="Search services..."
                                autoComplete="off"
                              />
                            </label>

                            <div className="nav-mega-category-list" role="tablist" aria-label="Service categories">
                              {filteredServiceGroups.length ? (
                                filteredServiceGroups.map((group) => {
                                  const isActiveCategory = activeServiceGroup?.title === group.title;

                                  return (
                                    <button
                                      key={group.title}
                                      type="button"
                                      role="tab"
                                      aria-selected={isActiveCategory}
                                      className={`nav-mega-category ${isActiveCategory ? 'active' : ''}`}
                                      onMouseEnter={() => setActiveServiceCategory(group.title)}
                                      onClick={() => setActiveServiceCategory(group.title)}
                                      onKeyDown={(event) => handleCategoryKeyDown(event, group.title)}
                                    >
                                      <span className="nav-mega-category-icon" aria-hidden="true">{getCategoryIcon(group)}</span>
                                      <span className="nav-mega-category-copy">
                                        <strong>{group.title}</strong>
                                        <small>{getVisibleServiceLinks(group, normalizedServiceMegaQuery).length} services</small>
                                      </span>
                                    </button>
                                  );
                                })
                              ) : (
                                <div className="nav-mega-empty">No service matches found.</div>
                              )}
                            </div>
                          </aside>

                          <section key={activeServiceGroup?.title || 'empty-services'} className="nav-mega-detail" aria-live="polite">
                            {activeServiceGroup ? (
                              <>
                                <div className="nav-mega-detail-header">
                                  <span className="nav-mega-detail-icon" aria-hidden="true">{getCategoryIcon(activeServiceGroup)}</span>
                                  <div>
                                    <span className="nav-mega-eyebrow">Selected category</span>
                                    <h3>{activeServiceGroup.title}</h3>
                                    <p>{getCategoryDescription(activeServiceGroup)}</p>
                                  </div>
                                </div>

                                <div className="nav-mega-service-list">
                                  {activeServiceLinks.length ? (
                                    activeServiceLinks.map((sub) => (
                                      <Link
                                        key={`${activeServiceGroup.title}-${sub.label}`}
                                        to={sub.to}
                                        className="nav-mega-service-link"
                                        onClick={handleNavigate}
                                      >
                                        <span className="nav-mega-icon" aria-hidden="true">{sub.icon}</span>
                                        <span className="nav-mega-service-copy">
                                          <strong>{sub.label}</strong>
                                          {sub.focus ? <small>{sub.focus}</small> : null}
                                        </span>
                                        <ArrowRight className="nav-mega-service-arrow w-4 h-4" aria-hidden="true" />
                                      </Link>
                                    ))
                                  ) : (
                                    <div className="nav-mega-empty">No links inside this category match your search.</div>
                                  )}
                                </div>
                              </>
                            ) : (
                              <div className="nav-mega-empty nav-mega-empty-large">Try another search term or view all services.</div>
                            )}
                          </section>

                          <aside className="nav-mega-rail" aria-label="Popular services">
                            <span className="nav-mega-eyebrow">Popular this month</span>
                            <div className="nav-mega-popular-list">
                              {popularMegaServices.map((service) => (
                                <Link key={service.slug} to={service.to} className="nav-mega-popular-link" onClick={handleNavigate}>
                                  <span className="nav-mega-icon" aria-hidden="true">{service.icon}</span>
                                  <span>{service.label}</span>
                                </Link>
                              ))}
                            </div>
                            <Link to="/services" className="nav-mega-view-all" onClick={handleNavigate}>
                              View all services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                          </aside>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link key={link.to} to={link.to} className={`site-nav-link ${isLinkActive(link.to) ? 'active' : ''}`} onClick={handleNavigate}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="site-header-actions">
              <button type="button" className="icon-button nav-icon-button" onClick={() => setSearchOpen(true)} aria-label="Open search">
                <Search className="w-4 h-4" />
              </button>
              <button type="button" className="icon-button mobile-nav-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-panel ${menuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav-shell">
          <div className="mobile-nav-links">
            {MOBILE_NAV_LINKS.map((link) => (
              <Link key={`${link.to}-${link.label}`} to={link.to} className={`mobile-nav-link ${isLinkActive(link.to) ? 'active' : ''}`} onClick={handleNavigate}>
                {link.label}
              </Link>
            ))}
            <div className="mobile-services-menu">
              <span className="mobile-services-title">Services</span>
              {SERVICE_GROUPS.map((group) => {
                const isExpanded = expandedMobileServiceCategory === group.title;

                return (
                  <div key={group.title} className={`mobile-services-group ${group.featured ? 'mobile-services-group-featured' : ''} ${isExpanded ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="mobile-services-group-toggle"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedMobileServiceCategory((current) => (current === group.title ? '' : group.title))}
                    >
                      <span>
                        <span className="nav-mega-icon" aria-hidden="true">{getCategoryIcon(group)}</span>
                        <strong>{group.title}</strong>
                      </span>
                      <ChevronDown className="mobile-services-chevron w-4 h-4" aria-hidden="true" />
                    </button>

                    {isExpanded ? (
                      <div className="mobile-services-links">
                        {group.links.map((sub) => (
                          <Link key={`${group.title}-${sub.label}`} to={sub.to} className="mobile-service-link" onClick={handleNavigate}>
                            <span className="nav-mega-icon" aria-hidden="true">{sub.icon}</span>
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {searchOpen ? (
        <div className="search-overlay open" role="dialog" aria-modal="true" aria-label="Search site" onClick={(event) => event.target === event.currentTarget && closeSearch()}>
          <button type="button" className="search-close-btn" onClick={closeSearch} aria-label="Close search">
            ×
          </button>
          <div className="search-panel">
            <div className="search-input-wrapper">
              <Search className="w-5 h-5" />
              <input
                ref={searchInputRef}
                type="text"
                className="search-input-field"
                placeholder="Search services, projects, and resources..."
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setFocusedIndex(-1);
                }}
                onKeyDown={handleSearchKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
              <div className="search-kbd-hint">
                <kbd>ESC</kbd>
              </div>
            </div>

            <div className="search-results-container">
              <div className="search-results-label">
                {searchQuery.trim() ? `${filteredResults.length} result${filteredResults.length === 1 ? '' : 's'}` : 'Popular searches'}
              </div>

              {filteredResults.length ? (
                <div className="search-results-grid">
                  {filteredResults.map((item, index) => (
                    <Link
                      key={`${item.url}-${item.title}`}
                      to={item.url}
                      onClick={handleNavigate}
                      className={`search-result-card ${focusedIndex === index ? 'focused' : ''}`}
                    >
                      <div className="search-result-icon">{item.icon}</div>
                      <div className="search-result-body">
                        <div className="search-result-title">{highlightText(item.title, searchQuery)}</div>
                        <div className="search-result-desc">{highlightText(item.desc, searchQuery)}</div>
                      </div>
                      <span className="search-result-badge">{item.type}</span>
                      <ArrowRight className="search-result-arrow w-4 h-4" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="search-no-results">
                  <div className="no-results-icon">🔍</div>
                  <p>No results found for “{searchQuery}”.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
