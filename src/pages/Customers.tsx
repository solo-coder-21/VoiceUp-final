import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Building2, Quote, TrendingUp, ShieldCheck, Handshake, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const customerStories = [
  {
    id: 'vis',
    name: 'VIS',
    industry: 'Credit ratings & financial services',
    logo: 'VIS',
    headline: 'Modernizing customer outreach with AI voice automation',
    metrics: [
      { value: '65%', label: 'reduction in average call handling time' },
      { value: '3x', label: 'more outbound campaigns per quarter' },
      { value: '24×7', label: 'multilingual coverage across regions' },
    ],
    quote:
      'VoiceUp lets us run high-volume outbound voice campaigns with the compliance controls our industry demands — without expanding our contact center headcount.',
    attribution: 'VP, Customer Operations — VIS',
    bullets: [
      'Deployed VoiceUp Outbound Voicebot for renewals, surveys, and proactive customer notifications.',
      'Integrated with the existing CRM and core systems via APIs and webhooks.',
      'On-prem deployment to meet data residency and audit requirements.',
    ],
    accent: 'from-voiceup-navy to-voiceup-skyblue',
  },
  {
    id: 'yes-bank',
    name: 'Yes Bank',
    industry: 'Banking & financial services',
    logo: 'YB',
    headline: 'Voice-first agent assist for high-volume contact center',
    metrics: [
      { value: '40%', label: 'lift in first-contact resolution' },
      { value: '2.1×', label: 'faster QA review cycles' },
      { value: '99.95%', label: 'platform availability over 12 months' },
    ],
    quote:
      'Real-time transcription and AI summaries changed how our supervisors coach agents and how compliance teams audit interactions. VoiceUp made voice a usable dataset.',
    attribution: 'Head of Contact Center Operations — Yes Bank',
    bullets: [
      'VoiceUp Transcription streams live call audio into agent desktops with low-latency captions.',
      'AI Analytics surfaces sentiment, topics, and resolution status for every recorded interaction.',
      'Tenant-isolated configuration aligned with banking compliance policies.',
    ],
    accent: 'from-voiceup-periwinkle to-voiceup-chartblue',
  },
];

const partnerCategories = [
  {
    icon: <Handshake className="h-5 w-5" />,
    title: 'Channel partners',
    body: 'Resell, distribute, and implement VoiceUp across regulated industries with co-marketing support and enablement.',
    perks: ['Tiered margins', 'Joint account planning', 'Lead routing'],
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Solution partners',
    body: 'Build vertical or process-specific solutions on VoiceUp APIs — contact centers, BPOs, and CX integrators.',
    perks: ['Reference architectures', 'Sandbox environments', 'Technical certification'],
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: 'Telephony & CPaaS partners',
    body: 'Integrate VoiceUp Connector with carrier networks, SBCs, and CPaaS platforms to enable AI voice on existing trunks.',
    perks: ['Interoperability labs', 'Co-engineered media flows', 'Joint go-to-market'],
  },
];

const partnerLogos = [
  'TelcoOne',
  'SignalSIP',
  'NorthBPO',
  'CXForge',
  'CallStream',
  'OmniCloud',
  'VoiceMesh',
  'PinePoint',
];

const Customers = () => {
  const location = useLocation();
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const el = refs.current[hash];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Customers &amp; Partners
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Trusted by regulated, high-volume voice operations
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl">
            Financial services, BPOs, and enterprise contact centers run mission-critical voice workloads on VoiceUp. Explore how teams use the platform — and how our partner ecosystem extends it.
          </p>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {customerStories.map((c, idx) => (
            <div
              key={c.id}
              id={c.id}
              ref={(el) => { refs.current[c.id] = el; }}
              className="scroll-mt-24 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${c.accent} p-8 sm:p-10 text-white overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center font-bold text-lg backdrop-blur-md">
                      {c.logo}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{c.name}</div>
                      <div className="text-sm text-white/80">{c.industry}</div>
                    </div>
                  </div>
                  <Quote className="h-7 w-7 text-white/40 mb-3" />
                  <p className="text-base sm:text-lg leading-relaxed mb-4 italic">"{c.quote}"</p>
                  <p className="text-sm text-white/80">— {c.attribution}</p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-white/10 border border-white/15 p-3">
                        <div className="text-2xl sm:text-3xl font-bold">{m.value}</div>
                        <div className="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-sm font-semibold text-voiceup-skyblue uppercase tracking-wide mb-2">Customer story</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-voiceup-navy mb-4">{c.headline}</h2>
                <ul className="space-y-3 text-base text-gray-700 leading-relaxed">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-voiceup-skyblue mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-voiceup-blush/60 text-voiceup-navy">Enterprise voice</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-voiceup-blush/60 text-voiceup-navy">Regulated industry</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-voiceup-blush/60 text-voiceup-navy">Multi-language</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner ecosystem */}
      <section id="partners" ref={(el) => { refs.current['partners'] = el; }} className="scroll-mt-24 py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-voiceup-skyblue uppercase tracking-wide mb-2">Partner ecosystem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">
              Built and deployed with our partners
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              VoiceUp works with channel partners, solution integrators, and telephony providers to deliver production voice AI across geographies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-8 mb-12">
            {partnerCategories.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-lg bg-voiceup-skyblue/10 text-voiceup-skyblue flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-voiceup-navy mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.perks.map((perk) => (
                    <span key={perk} className="text-[11px] px-2 py-1 rounded-full bg-voiceup-blush/50 text-voiceup-navy font-medium">
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Partner logo strip */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold text-center mb-5">
              A few of the partners we work with
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {partnerLogos.map((p) => (
                <div
                  key={p}
                  className="h-14 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center text-voiceup-navy font-semibold text-sm tracking-wide"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-16 sm:py-20 bg-voiceup-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-10 w-10 text-voiceup-skyblue mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Looking to become a VoiceUp partner?
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8">
            Resell, build on, or integrate with VoiceUp. Tell us about your business and we'll set up an enablement call.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-voiceup-skyblue hover:bg-white hover:text-voiceup-navy text-white rounded-full px-6">
              <Link to="/pricing">Partner with VoiceUp</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-voiceup-navy rounded-full px-6">
              <Link to="/demos#request">Book a discovery call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;
