import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const footerCols = [
  {
    heading: 'Products',
    links: [
      { to: '/products/outbound', label: 'Outbound' },
      { to: '/products/transcriptions', label: 'Transcriptions' },
      { to: '/products/voicebots', label: 'Voice Bots' },
      { to: '/products/recording', label: 'Recording' },
      { to: '/products/analytics', label: 'Analytics' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { to: '/solutions/ai-voice-connector', label: 'AI Voice Connector' },
      { to: '/solutions/ai-analytics-insights', label: 'AI Analytics & Insights' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/demos', label: 'Demos' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/customers', label: 'Customers & Partners' },
      { to: '/about', label: 'About Us' },
    ],
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-voiceup-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-[1.3fr_2fr] gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center space-x-2 cursor-pointer">
              <img
                src="/voiceup-logo.png"
                alt="VoiceUp Logo"
                width={36}
                height={36}
                className="h-9 w-9"
                loading="lazy"
                decoding="async"
              />
              <span className="text-2xl font-bold">VoiceUp</span>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Enterprise voice + AI — transcription, recording, voicebots, and analytics under one tenant-aware platform.
            </p>

            <div className="space-y-2 text-sm">
              <a href="mailto:info@voiceup.ai" className="flex items-center gap-2 text-white/85 hover:text-voiceup-skyblue transition-colors">
                <Mail className="h-4 w-4" />
                info@voiceup.ai
              </a>
              <div className="flex items-start gap-2 text-white/75">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-lg border border-white/15 flex items-center justify-center hover:bg-white hover:text-voiceup-navy transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-lg border border-white/15 flex items-center justify-center hover:bg-white hover:text-voiceup-navy transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="h-9 w-9 rounded-lg border border-white/15 flex items-center justify-center hover:bg-white hover:text-voiceup-navy transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">{col.heading}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-white/70 hover:text-voiceup-skyblue transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} VoiceUp. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="mailto:info@voiceup.ai" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
