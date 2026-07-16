import { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useFloatingBlobs, useMagneticButtons, useCardTilt, useCustomCursor, useTextReveal, usePageTransition, useSmoothScroll } from './hooks/useGsap';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Payments = lazy(() => import('./pages/Payments'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Careers = lazy(() => import('./pages/Careers'));
const ChatbotWidget = lazy(() => import('./components/site/ChatbotWidget'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent browser from trying to restore previous scroll position
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // Force instant scroll to top on layout and window level
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Secondary backup deferred scroll to top in case of rendering lags
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      Loading…
    </div>
  );
}

function MainAppLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);

  useFloatingBlobs();
  useMagneticButtons(pathname);
  useCardTilt(pathname);
  useCustomCursor();
  useTextReveal(pathname);
  usePageTransition(pathname);
  useSmoothScroll(pathname);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'A') {
        e.preventDefault();
        navigate('/dashboard');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const revealChatbot = () => setShowChatbot(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(revealChatbot, { timeout: 3200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(revealChatbot, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient-orb orb-one" aria-hidden="true" />
      <div className="ambient-orb orb-two" aria-hidden="true" />
      <Header />
      <div className="app-main">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/androinframaind/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
      {showChatbot ? (
        <Suspense fallback={null}>
          <ChatbotWidget />
        </Suspense>
      ) : null}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainAppLayout />
    </Router>
  );
}
