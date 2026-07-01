import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Megaphone,
  PackageCheck,
  Search,
  Sparkles,
  Store,
  TrendingUp,
} from 'lucide-react';

const HERO_VIDEO = '/hero.mp4';
const HERO_POSTER = '/hero-poster.png';
const PHONE_MEDIA_QUERY = '(max-width: 640px)';
const HERO_BANNER_PAUSE = 5000;
const HERO_BANNER_TRANSITION = 700;

const heroBanners = [
  {
    eyebrow: 'Quick commerce launch team',
    title: 'Launch Products on',
    accent: 'Blinkit, Zepto & Instamart.',
    description:
      'Account setup, documentation, category mapping, catalog upload, and launch readiness for fast-moving quick commerce channels.',
    primary: { label: 'Start onboarding', to: '/contact' },
    secondary: { label: 'View quick commerce', to: '/services/blinkit-zepto-setup' },
    proofs: ['Blinkit · Zepto · Instamart', 'Catalog ready', 'Launch support'],
    rgb: '14, 165, 233',
    icon: PackageCheck,
    emoji: '⚡',
    label: 'Launch-ready catalog',
    stat: '3+ channels',
    platforms: ['Blinkit', 'Zepto', 'Instamart'],
    cards: ['Documents verified', 'SKU catalog mapped', 'Pricing checked'],
  },
  {
    eyebrow: 'Marketplace store operations',
    title: 'Manage Your Store on',
    accent: 'Amazon & Flipkart.',
    description:
      'Run marketplace stores with better listing hygiene, pricing, inventory checks, offer planning, reviews, and weekly performance reporting.',
    primary: { label: 'Manage my store', to: '/contact' },
    secondary: { label: 'Store management', to: '/services/flipkart-store-management' },
    proofs: ['Amazon · Flipkart · Meesho', 'Offer planning', 'Store hygiene'],
    rgb: '124, 58, 237',
    icon: Store,
    emoji: '🛍️',
    label: 'Store ops dashboard',
    stat: 'Weekly ops',
    platforms: ['Amazon', 'Flipkart', 'Meesho'],
    cards: ['Listings cleaned', 'Offers scheduled', 'Stock monitored'],
  },
  {
    eyebrow: 'Ranking optimization',
    title: 'Move Products Toward',
    accent: 'Top Search Visibility.',
    description:
      'Improve product titles, keywords, images, categories, pricing, and conversion signals to push listings toward stronger marketplace ranking.',
    primary: { label: 'Improve ranking', to: '/contact' },
    secondary: { label: 'Catalog support', to: '/services/catalog-listing-support' },
    proofs: ['Keyword planning', 'Listing quality', 'Image optimization'],
    rgb: '249, 115, 22',
    icon: Search,
    emoji: '🔎',
    label: 'Ranking boost',
    stat: 'Top visibility',
    platforms: ['Keywords', 'Images', 'Titles'],
    cards: ['Search terms mapped', 'Content improved', 'Ranking actions'],
  },
  {
    eyebrow: 'Offers, ads & conversion',
    title: 'Turn Visibility Into',
    accent: 'Buyer Action.',
    description:
      'Plan sponsored campaigns, coupons, platform offers, pricing experiments, and conversion pushes that help products get real buyer attention.',
    primary: { label: 'Plan campaigns', to: '/contact' },
    secondary: { label: 'Growth services', to: '/services/seo-digital-marketing' },
    proofs: ['Sponsored ads', 'Coupons & offers', 'Conversion push'],
    rgb: '236, 72, 153',
    icon: Megaphone,
    emoji: '🚀',
    label: 'Campaign engine',
    stat: 'More orders',
    platforms: ['Ads', 'Offers', 'Coupons'],
    cards: ['Campaign planned', 'Offer live', 'Buyer action tracked'],
  },
  {
    eyebrow: 'Real sales growth tracking',
    title: 'Track Orders and',
    accent: 'Grow Revenue.',
    description:
      'Monitor impressions, clicks, orders, best sellers, stock movement, and weekly improvement actions so growth stays measurable and sales-focused.',
    primary: { label: 'Grow my sales', to: '/contact' },
    secondary: { label: 'Sales tracking', to: '/services/inventory-catalog-sync' },
    proofs: ['Orders tracked', 'Stock readiness', 'Weekly growth actions'],
    rgb: '16, 185, 129',
    icon: BarChart3,
    emoji: '📈',
    label: 'Revenue tracker',
    stat: 'Weekly growth',
    platforms: ['Orders', 'Stock', 'Revenue'],
    cards: ['Clicks measured', 'Best sellers found', 'Next actions shared'],
  },
];

const heroLoopBanners = [...heroBanners, heroBanners[0]];

export default function VideoHero() {
  const videoRef = useRef(null);
  const resetFrameRef = useRef(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const [isResettingBanner, setIsResettingBanner] = useState(false);
  const [isPhone, setIsPhone] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(PHONE_MEDIA_QUERY).matches : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const timeoutId = window.setTimeout(() => {
      setActiveBanner((banner) => banner + 1);
    }, HERO_BANNER_PAUSE + HERO_BANNER_TRANSITION);

    return () => window.clearTimeout(timeoutId);
  }, [activeBanner]);

  useEffect(() => {
    if (typeof window === 'undefined' || activeBanner !== heroBanners.length) return undefined;

    const resetTimeout = window.setTimeout(() => {
      setIsResettingBanner(true);
      setActiveBanner(0);
      resetFrameRef.current = window.requestAnimationFrame(() => {
        setIsResettingBanner(false);
        resetFrameRef.current = null;
      });
    }, HERO_BANNER_TRANSITION);

    return () => {
      window.clearTimeout(resetTimeout);
      if (resetFrameRef.current) {
        window.cancelAnimationFrame(resetFrameRef.current);
        resetFrameRef.current = null;
      }
    };
  }, [activeBanner]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const phoneQuery = window.matchMedia(PHONE_MEDIA_QUERY);
    const updatePhoneMatch = () => setIsPhone(phoneQuery.matches);

    updatePhoneMatch();

    if (phoneQuery.addEventListener) {
      phoneQuery.addEventListener('change', updatePhoneMatch);
      return () => phoneQuery.removeEventListener('change', updatePhoneMatch);
    }

    phoneQuery.addListener(updatePhoneMatch);
    return () => phoneQuery.removeListener(updatePhoneMatch);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const video = videoRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!video || reduceMotion) {
      video?.pause();
      return undefined;
    }

    const playVideo = () => video.play().catch(() => {});
    playVideo();

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
          }
        },
        { threshold: 0.08 },
      );
      observer.observe(video);
    }

    if (isPhone) {
      return () => observer?.disconnect();
    }

    let rafId;
    const updateParallax = () => {
      rafId = undefined;
      const hero = video.closest('.video-hero');
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const translateY = (clampedProgress - 0.5) * 90;

      video.style.setProperty('--hero-video-y', `${translateY}px`);
    };

    const requestUpdate = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
      video.style.removeProperty('--hero-video-y');
    };
  }, [isPhone]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.video-hero + *');
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="video-hero ecommerce-full-hero" aria-labelledby="home-hero-title">
      <div className="video-hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="video-hero__video"
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="video-hero__overlay" />
      </div>

      <div className="video-hero__content ecommerce-full-hero__content">
        <div className="ecommerce-full-hero__viewport">
          <div
            className={`ecommerce-full-hero__track ${isResettingBanner ? 'is-resetting' : ''}`.trim()}
            style={{ transform: `translateX(-${activeBanner * 100}vw)` }}
          >
            {heroLoopBanners.map(({ icon: Icon, ...banner }, index) => {
              const isDuplicate = index >= heroBanners.length;
              const isActive = index === activeBanner;
              const HeadingTag = index === 0 ? 'h1' : 'h2';

              return (
                <article
                  key={`${banner.title}-${index}`}
                  className="ecommerce-full-hero__slide"
                  style={{ '--banner-rgb': banner.rgb }}
                  aria-hidden={!isActive || isDuplicate ? 'true' : undefined}
                >
                  <div className="container ecommerce-full-hero__slide-inner">
                    <div className="ecommerce-full-hero__copy">
                      <p className="video-hero__eyebrow ecommerce-full-hero__eyebrow">
                        <span className="video-hero__eyebrow-dot" aria-hidden="true" />
                        {banner.eyebrow}
                      </p>

                      <HeadingTag
                        id={index === 0 ? 'home-hero-title' : undefined}
                        className="video-hero__title ecommerce-full-hero__title"
                      >
                        {banner.title} <span className="video-hero__title-accent">{banner.accent}</span>
                      </HeadingTag>

                      <p className="video-hero__description ecommerce-full-hero__description">{banner.description}</p>

                      <div className="video-hero__actions" aria-label="Hero actions">
                        <Link
                          to={banner.primary.to}
                          className="video-hero__button video-hero__button--primary"
                          tabIndex={!isActive || isDuplicate ? -1 : undefined}
                        >
                          {banner.primary.label}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        <Link
                          to={banner.secondary.to}
                          className="video-hero__button video-hero__button--secondary"
                          tabIndex={!isActive || isDuplicate ? -1 : undefined}
                        >
                          {banner.secondary.label}
                        </Link>
                      </div>

                      <div className="video-hero__proof" aria-label="Marketplace highlights">
                        {banner.proofs.map((item) => (
                          <span key={item} className="video-hero__proof-item">
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="ecommerce-full-hero__visual" aria-label={`${banner.label} visual card`}>
                      <div className="ecommerce-full-hero__visual-header">
                        <div>
                          <span>{banner.label}</span>
                          <strong>{banner.stat}</strong>
                        </div>
                        <span className="ecommerce-full-hero__visual-icon">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      </div>

                      <div className="ecommerce-full-hero__product-card">
                        <div className="ecommerce-full-hero__product-emoji">{banner.emoji}</div>
                        <div>
                          <small>Marketplace product desk</small>
                          <strong>{banner.accent.replace('.', '')}</strong>
                        </div>
                        <div className="ecommerce-full-hero__product-bars" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>

                      <div className="ecommerce-full-hero__platforms">
                        {banner.platforms.map((platform) => (
                          <span key={platform}>{platform}</span>
                        ))}
                      </div>

                      <div className="ecommerce-full-hero__task-list">
                        {banner.cards.map((card, cardIndex) => (
                          <div key={card}>
                            <span>{String(cardIndex + 1).padStart(2, '0')}</span>
                            <strong>{card}</strong>
                          </div>
                        ))}
                      </div>

                      <div className="ecommerce-full-hero__visual-footer">
                        <Sparkles className="w-4 h-4" aria-hidden="true" />
                        <span>5-second pause, then slide</span>
                        <TrendingUp className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <button
        className="video-hero__scroll-cue"
        type="button"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5" aria-hidden="true" />
      </button>
    </section>
  );
}
