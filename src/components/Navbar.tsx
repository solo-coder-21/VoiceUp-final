import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Mic, FileText, Bot, Headphones, BarChart3, Cable, BrainCircuit, Building2 } from 'lucide-react';
import { isPricingEnabled } from '@/lib/featureFlags';

type DropdownKey = 'products' | 'solutions' | 'demos' | 'customers' | null;

const productLinks = [
  { to: '/products/outbound', label: 'Outbound', icon: <Mic className="h-4 w-4" />, blurb: 'Outbound voicebot for reminders, surveys & collections' },
  { to: '/products/transcriptions', label: 'Transcriptions', icon: <FileText className="h-4 w-4" />, blurb: 'Real-time, multilingual speech-to-text at scale' },
  { to: '/products/voicebots', label: 'Voice Bots', icon: <Bot className="h-4 w-4" />, blurb: 'Inbound & outbound conversational AI for telephony' },
  { to: '/products/recording', label: 'Recording', icon: <Headphones className="h-4 w-4" />, blurb: 'Compliance-grade call capture, storage & retrieval' },
  { to: '/products/analytics', label: 'Analytics', icon: <BarChart3 className="h-4 w-4" />, blurb: 'AI summaries, sentiment, topics & resolution insights' },
];

const solutionLinks = [
  { to: '/solutions/ai-voice-connector', label: 'AI Voice Connector', icon: <Cable className="h-4 w-4" />, blurb: 'Bridge telephony and AI in real time' },
  { to: '/solutions/ai-analytics-insights', label: 'AI Analytics & Insights', icon: <BrainCircuit className="h-4 w-4" />, blurb: 'Turn every conversation into action' },
];

const demoLinks = [
  { to: '/demos#recording', label: 'Recording Demo', icon: <Headphones className="h-4 w-4" />, blurb: 'See enterprise call capture in action' },
  { to: '/demos#transcriptions', label: 'Transcriptions Demo', icon: <FileText className="h-4 w-4" />, blurb: 'Live multilingual speech-to-text' },
  { to: '/demos#analytics', label: 'Analytics Demo', icon: <BarChart3 className="h-4 w-4" />, blurb: 'AI insights on real conversations' },
  { to: '/demos#voicebot', label: 'Voice Bot Demo', icon: <Bot className="h-4 w-4" />, blurb: 'Natural voice dialogue end to end' },
];

const customerLinks = [
  { to: '/customers#vis', label: 'VIS Networks', icon: <Building2 className="h-4 w-4" />, blurb: 'Global strategic partnership' },
  { to: '/customers#yes-bank', label: 'YES BANK', icon: <Building2 className="h-4 w-4" />, blurb: 'Customer deployment' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const location = useLocation();
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-hide on scroll-down, reveal on scroll-up. Always visible near the top.
  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;

      setIsScrolled(y > 50);

      // Always visible at the very top
      if (y < 80) {
        setIsHidden(false);
      } else if (delta > 6) {
        // Scrolling down — hide
        setIsHidden(true);
      } else if (delta < -6) {
        // Scrolling up — reveal
        setIsHidden(false);
      }
      lastY = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hidden when scrolling down (slides up), visible when scrolling up. Override hide-state if
  // any dropdown or the mobile menu is open so the nav doesn't disappear under the user.
  const isMenuActive = activeDropdown !== null || isMobileMenuOpen;
  const shouldHide = isHidden && !isMenuActive;

  // At the top of the page, the navbar is transparent so it blends into the hero gradient
  // (all hero sections in the site have a dark navy → cyan background). Once the user scrolls,
  // it swaps to the white/blur look with navy text. Force the white look whenever a dropdown
  // is open so the panels below the nav read on a solid surface.
  const useSolidChrome = isScrolled || isMenuActive;
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    useSolidChrome
      ? 'navbar-blur border-b border-gray-200 shadow-md'
      : 'bg-transparent border-b border-transparent'
  } ${shouldHide ? '-translate-y-full' : 'translate-y-0'}`;

  const textClasses = `transition-colors duration-300 ${
    useSolidChrome ? 'text-voiceup-navy' : 'text-white'
  }`;

  const dropdownButtonClass = (key: DropdownKey) =>
    `flex items-center space-x-1 hover:text-voiceup-skyblue transition-colors ${textClasses} ${
      activeDropdown === key ? 'text-voiceup-skyblue' : ''
    }`;

  const renderDropdownPanel = (
    key: DropdownKey,
    items: typeof productLinks,
    width: string = 'w-[min(28rem,calc(100vw-2rem))]'
  ) => (
    <div
      className={`absolute top-full left-0 mt-2 ${width} bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transition-all duration-200 ${
        activeDropdown === key ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
      }`}
    >
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-voiceup-blush/40 transition-colors group"
            >
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-voiceup-skyblue/10 text-voiceup-skyblue group-hover:bg-voiceup-skyblue group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold text-voiceup-navy">{item.label}</span>
                <span className="block text-xs text-gray-500 mt-0.5">{item.blurb}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className={navbarClasses} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo — the PNG is a cyan waveform with dark navy accents on a transparent background,
              which is invisible on the dark hero. At top state we wrap it in a white pill so the
              full logo (both cyan and dark bars) reads clearly regardless of what's behind. */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
            aria-label="VoiceUp home"
          >
            <span
              className={`inline-flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-300 ${
                useSolidChrome ? '' : 'bg-white shadow-md'
              }`}
            >
              <img
                src="/voiceup-logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
                decoding="async"
              />
            </span>
            <span className={`text-xl font-bold ${textClasses}`}>VoiceUp</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={dropdownButtonClass('products')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'products'}
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {renderDropdownPanel('products', productLinks)}
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={dropdownButtonClass('solutions')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {renderDropdownPanel('solutions', solutionLinks, 'w-[min(26rem,calc(100vw-2rem))]')}
            </div>

            {/* Demos */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('demos')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={dropdownButtonClass('demos')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'demos'}
              >
                <span>Demos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {renderDropdownPanel('demos', demoLinks)}
            </div>

            {/* Pricing — gated behind the feature flag so it hides everywhere at once */}
            {isPricingEnabled && (
              <Link
                to="/pricing"
                className={`hover:text-voiceup-skyblue transition-colors ${textClasses}`}
              >
                Pricing
              </Link>
            )}

            {/* Customers & Partners */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('customers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={dropdownButtonClass('customers')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'customers'}
              >
                <span>Customers &amp; Partners</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {renderDropdownPanel('customers', customerLinks, 'w-[min(24rem,calc(100vw-2rem))]')}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              className={`hover:text-voiceup-skyblue transition-colors ${textClasses}`}
            >
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            type="button"
            className={`lg:hidden p-2 ${textClasses}`}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-5">
              <MobileGroup label="Products" items={productLinks} />
              <MobileGroup label="Solutions" items={solutionLinks} />
              <MobileGroup label="Demos" items={demoLinks} />
              {isPricingEnabled && (
                <Link to="/pricing" className="block text-voiceup-navy font-semibold py-1">Pricing</Link>
              )}
              <MobileGroup label="Customers & Partners" items={customerLinks} />
              <Link to="/about" className="block text-voiceup-navy font-semibold py-1">About Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const MobileGroup = ({ label, items }: { label: string; items: { to: string; label: string }[] }) => (
  <div className="space-y-2">
    <span className="block text-voiceup-navy font-semibold">{label}</span>
    {items.map((it) => (
      <Link key={it.to} to={it.to} className="block text-gray-600 hover:text-voiceup-skyblue ml-4 text-sm">
        {it.label}
      </Link>
    ))}
  </div>
);

export default Navbar;
