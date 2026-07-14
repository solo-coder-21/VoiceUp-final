import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Mic,
  FileText,
  Bot,
  Headphones,
  BarChart3,
  Cable,
  BrainCircuit,
  ShieldCheck,
  Globe2,
  Cpu,
  Server,
  Check,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cardAccents } from '@/lib/cardAccents';

type Capability = {
  id: number;
  to: string;
  badge: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  content: string;
  /** Tailwind gradient classes used as a tinted color wash over the background image */
  color: string;
  /** Unsplash card background — appears subtly on inactive cards, full on active */
  backgroundImage: string;
  /** Larger hero image used in the sticky preview pane */
  image: string;
  /** Short feature tags shown as pills in the preview pane */
  highlights: string[];
};

const products: Capability[] = [
  {
    id: 1,
    to: '/products/outbound',
    badge: 'Product',
    title: 'Outbound Voicebot',
    tagline: 'Reach customers proactively at scale',
    icon: <Mic className="h-7 w-7" />,
    content: 'Automate reminders, surveys, collections, and lead qualification at scale — with multi-language dialogue, retry rules, and full audit trails.',
    color: 'from-voiceup-skyblue/85 to-voiceup-periwinkle/95',
    backgroundImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop',
    highlights: ['Multilingual dialogue', 'Campaign orchestration', 'Compliance-ready'],
  },
  {
    id: 2,
    to: '/products/transcriptions',
    badge: 'Product',
    title: 'Transcriptions',
    tagline: 'Real-time, accurate speech-to-text',
    icon: <FileText className="h-7 w-7" />,
    content: 'Real-time, multilingual speech-to-text for contact centers, voicebots, and compliance — streamed over secure WebSockets with interim and final results.',
    color: 'from-voiceup-periwinkle/85 to-voiceup-chartblue/95',
    backgroundImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&h=600&fit=crop',
    highlights: ['Streaming STT', 'Multilingual', 'WebSocket API'],
  },
  {
    id: 3,
    to: '/products/voicebots',
    badge: 'Product',
    title: 'Voice Bots',
    tagline: 'Natural dialogue, automated at scale',
    icon: <Bot className="h-7 w-7" />,
    content: 'Inbound and outbound voice assistants with intent detection, dialogue management, and seamless agent handoff — built for production telephony.',
    color: 'from-voiceup-navy/90 to-voiceup-skyblue/85',
    backgroundImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&h=600&fit=crop',
    highlights: ['Inbound & outbound', 'Intent detection', 'Agent handoff'],
  },
  {
    id: 4,
    to: '/products/recording',
    badge: 'Product',
    title: 'Call Recording',
    tagline: 'Capture, store, and govern every call',
    icon: <Headphones className="h-7 w-7" />,
    content: 'Enterprise-grade call capture with encrypted storage, retention policies, role-based access, and fast retrieval for QA, audit, and disputes.',
    color: 'from-voiceup-chartblue/85 to-voiceup-skyblue/90',
    backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop',
    highlights: ['Encrypted storage', 'Fast retrieval', 'Audit trails'],
  },
  {
    id: 5,
    to: '/products/analytics',
    badge: 'Product',
    title: 'Analytics',
    tagline: 'AI insight on every conversation',
    icon: <BarChart3 className="h-7 w-7" />,
    content: 'AI-powered conversation intelligence: summaries, sentiment, emotion, resolution status, keywords, and topics — delivered via API.',
    color: 'from-voiceup-skyblue/85 to-voiceup-navy/90',
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
    highlights: ['Sentiment & emotion', 'Topic extraction', 'On-demand insights'],
  },
];

const solutions: Capability[] = [
  {
    id: 6,
    to: '/solutions/ai-voice-connector',
    badge: 'Solution',
    title: 'AI Voice Connector',
    tagline: 'Bridge telephony and AI in real time',
    icon: <Cable className="h-7 w-7" />,
    content: 'Bridge your PSTN, SBC, and CPaaS to AI in real time. Stream audio, route messages, and synchronize sessions — without replacing your telephony stack.',
    color: 'from-voiceup-navy/90 to-voiceup-periwinkle/85',
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop',
    highlights: ['Low-latency audio', 'Multi-tenant', 'Resilient connectivity'],
  },
  {
    id: 7,
    to: '/solutions/ai-analytics-insights',
    badge: 'Solution',
    title: 'AI Analytics & Insights',
    tagline: 'From conversations to action',
    icon: <BrainCircuit className="h-7 w-7" />,
    content: 'Turn every conversation into structured intelligence: trends, themes, sentiment, and outcomes for operations, QA, and leadership reporting.',
    color: 'from-voiceup-periwinkle/85 to-voiceup-skyblue/90',
    backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    highlights: ['Resolution tracking', 'Custom prompts', 'API-first'],
  },
];

const capabilities = [...products, ...solutions];

const platformHighlights = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Compliance-first', body: 'Tenant isolation, audit trails, retention policy, and data residency built into every product.' },
  { icon: <Server className="h-5 w-5" />, title: 'Your deployment', body: 'On-premises, private cloud, or SaaS — same product, same APIs, your control plane.' },
  { icon: <Globe2 className="h-5 w-5" />, title: 'Multilingual', body: 'English, Hindi, and other Indian and global languages with automatic detection and translation.' },
  { icon: <Cpu className="h-5 w-5" />, title: 'Pluggable AI', body: 'Tenant-level speech engines and LLM providers with failover and regional routing.' },
];

const Index = () => {
  const [activeId, setActiveId] = useState<number>(capabilities[0].id);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to gate decorative animations when the placards section is on-screen.
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const selected = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  // The rich preview panel used in TWO places:
  //   1. Desktop: the sticky right-hand column (uses `selected`).
  //   2. Mobile: inline right below whichever placard is currently active — so users
  //      don't have to scroll to the bottom of the placard list to see product details.
  const renderPreview = (capability: Capability) => (
    <div
      key={capability.id}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in"
    >
      {/* Hero image with layered overlays */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={capability.image}
          alt={capability.title}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover ${sectionInView ? 'animate-slow-zoom' : ''}`}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-55 mix-blend-multiply`}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-voiceup-navy via-voiceup-navy/30 to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.25),transparent_55%)]" />

        <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] uppercase tracking-wider font-semibold">
          <span className="font-mono text-white/80">{String(capability.id).padStart(2, '0')}</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span>{capability.badge}</span>
        </span>

        <div aria-hidden="true" className="absolute top-4 right-4 flex items-end gap-[3px] h-5">
          {[...Array(7)].map((_, i) => {
            const h = 4 + Math.abs(Math.sin(i * 0.7)) * 16;
            return (
              <span
                key={`pv-wave-${i}`}
                className="block w-[3px] rounded-t-sm bg-white/80"
                style={{
                  height: `${h}px`,
                  animation: sectionInView ? `wave-pulse ${1.2 + (i % 3) * 0.2}s ease-in-out infinite` : undefined,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            );
          })}
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-white flex items-end gap-3">
          <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg [&_svg]:h-7 [&_svg]:w-7">
            {capability.icon}
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1 inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" />
              {capability.tagline}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-md leading-tight">{capability.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">{capability.content}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {capability.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-voiceup-skyblue/10 text-voiceup-skyblue text-xs font-medium"
            >
              <Check className="h-3 w-3" />
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full">
            <Link to={capability.to}>Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full">
            <Link to="/request-demo">See a demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — dark navy with cyan radial accents, matching the AI Voice Connector hero gradient */}
      <section className="relative min-h-screen overflow-hidden pt-16 flex items-center">
        {/* Base: dark navy → deeper navy → cyan (bottom-right) */}
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        {/* Cyan glow at top-right — main accent */}
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        {/* Chart-blue glow at bottom-left — secondary accent */}
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(91,123,216,0.25),transparent_55%)]" />
        {/* Subtle grid pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow blobs — cyan-tinted for the dark canvas */}
        <div aria-hidden="true" className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-voiceup-skyblue/20 blur-3xl animate-float-soft" />
        <div aria-hidden="true" className="absolute bottom-1/4 -right-24 h-80 w-80 rounded-full bg-voiceup-chartblue/25 blur-3xl animate-float-soft" style={{ animationDelay: '2s' }} />

        {/* Animated waveform along the bottom */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 flex items-end justify-center gap-[3px] px-2 opacity-50">
          {[...Array(72)].map((_, i) => {
            const h = 8 + Math.abs(Math.sin(i * 0.32)) * 92;
            return (
              <span
                key={`hero-wave-${i}`}
                className="block w-1 rounded-t-sm bg-gradient-to-t from-white to-white/40"
                style={{
                  height: `${h}px`,
                  animation: `wave-pulse ${1.4 + (i % 6) * 0.14}s ease-in-out infinite`,
                  animationDelay: `${i * 0.025}s`,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Hero copy */}
            <div className="text-white">
              <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs sm:text-sm tracking-wide uppercase mb-6 animate-fade-in">
                <Sparkles className="h-3.5 w-3.5" />
                Enterprise voice + AI
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-6 animate-fade-in">
                Don&apos;t miss
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">any call.</span>
                  {/* Hand-drawn underline accent in white */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 320 14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 4 9 Q 80 1 160 8 T 316 7"
                      stroke="white"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                    />
                  </svg>
                </span>
              </h1>

              <p
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-9 max-w-xl animate-fade-in"
                style={{ animationDelay: '0.15s' }}
              >
                Monitor calls in real time, capture every insight, and turn every conversation into data — transcription, recording, voicebots, and analytics under one tenant-aware platform.
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-voiceup-skyblue hover:bg-voiceup-navy hover:text-white px-7 py-5 text-base rounded-full shadow-xl shadow-voiceup-navy/20 font-semibold"
                >
                  <Link to="/request-demo">
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-voiceup-skyblue px-7 py-5 text-base rounded-full"
                >
                  <Link to="/products/transcriptions">Explore products</Link>
                </Button>
              </div>

              <div
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-white/85 animate-fade-in"
                style={{ animationDelay: '0.45s' }}
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Compliance-first
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4" /> Multilingual
                </span>
                <span className="inline-flex items-center gap-2">
                  <Server className="h-4 w-4" /> On-prem or cloud
                </span>
              </div>
            </div>

            {/* Floating glassmorphic preview card */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: '0.25s' }}
            >
              {/* Soft white halo behind the card */}
              <div aria-hidden="true" className="absolute inset-4 rounded-3xl bg-white/20 blur-2xl" />

              <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                    <span className="text-sm font-semibold text-white">Live conversation</span>
                  </div>
                  <span className="text-xs text-white/70 font-mono">02:14</span>
                </div>

                {/* Transcript turns */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/25 border border-white/30 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      A
                    </div>
                    <div className="flex-1 text-sm text-white/95 leading-relaxed">Hi, I&apos;m calling about my policy renewal…</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-voiceup-navy/35 border border-white/30 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      B
                    </div>
                    <div className="flex-1 text-sm text-white/95 leading-relaxed">Sure — could you verify your policy number please?</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/25 border border-white/30 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      A
                    </div>
                    <div className="flex-1 text-sm text-white/95 leading-relaxed">
                      It&apos;s 4471 2890
                      <span className="inline-block w-0.5 h-4 bg-white ml-1 align-middle animate-pulse" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Footer stats */}
                <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/85">
                  <div className="flex items-center gap-3">
                    <span>
                      <span className="font-semibold text-white">Positive</span> sentiment
                    </span>
                    <span className="h-3 w-px bg-white/30" />
                    <span>English (US)</span>
                  </div>
                  <Globe2 className="h-3.5 w-3.5 text-white" />
                </div>
              </div>

              {/* Floating mini data card — top-right (bright cyan to pop on the dark canvas) */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -right-3 sm:-right-5 bg-voiceup-skyblue/95 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2 shadow-xl shadow-voiceup-skyblue/30 animate-float-soft"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-3.5 w-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">Sentiment +0.82</span>
                </div>
              </div>

              {/* Floating mini data card — bottom-left (glassy white) */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl px-3 py-2 shadow-xl animate-float-soft"
                style={{ animationDelay: '1.4s' }}
              >
                <div className="flex items-center gap-2">
                  <Mic className="h-3.5 w-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">Real-time STT</span>
                </div>
              </div>

              {/* Floating mini data card — middle-right (deep cyan / saturated) */}
              <div
                aria-hidden="true"
                className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-voiceup-periwinkle/90 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 shadow-xl animate-float-soft hidden md:block"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-center gap-2">
                  <Headphones className="h-3.5 w-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">Recording</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — white pill, navy/cyan icon */}
        <a
          href="#capabilities"
          aria-label="Scroll down"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-xl text-voiceup-skyblue animate-bounce-down border border-white/50"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* Platform Capabilities (scrolljacking placards) */}
      <section
        ref={sectionRef}
        className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white"
        data-active={sectionInView ? 'true' : 'false'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-voiceup-skyblue/10 text-voiceup-skyblue text-xs sm:text-sm tracking-wide uppercase mb-3 font-semibold">
              Platform capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Five products. Two solutions. One platform.
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hover the cards to explore each part of the VoiceUp stack — and dive into any product or solution for the full feature set.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-start">
            {/* Left: creative placards with background images + per-card identity */}
            <div className="space-y-4">
              {capabilities.map((c) => {
                const isActive = c.id === activeId;
                const numberLabel = String(c.id).padStart(2, '0');
                return (
                <React.Fragment key={c.id}>
                  <button
                    type="button"
                    aria-label={`Preview ${c.title} — ${c.tagline}`}
                    aria-pressed={isActive}
                    className={`group relative block w-full text-left rounded-2xl overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-voiceup-skyblue ${
                      isActive
                        ? 'shadow-[0_20px_60px_-15px_rgba(0,168,224,0.45)] scale-[1.015]'
                        : 'shadow-sm hover:shadow-xl hover:-translate-y-1'
                    }`}
                    onMouseEnter={() => setActiveId(c.id)}
                    onFocus={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                  >
                    {/* Background image — visible on active, faded on inactive */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                        isActive ? 'scale-110 animate-slow-zoom' : 'scale-100 group-hover:scale-105'
                      }`}
                      style={{
                        backgroundImage: `url(${c.backgroundImage})`,
                        opacity: isActive ? 1 : 0.18,
                      }}
                    />

                    {/* Color tint overlay — full on active, light on inactive */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-opacity duration-500 ${
                        isActive ? 'opacity-95' : 'opacity-0'
                      }`}
                    />
                    {/* Inactive: clean white surface with subtle warmth */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                        isActive ? 'opacity-0' : 'opacity-90'
                      }`}
                    />

                    {/* Active accent ring */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-2xl ring-2 transition-all duration-500 ${
                        isActive ? 'ring-voiceup-skyblue/60' : 'ring-transparent group-hover:ring-voiceup-skyblue/25'
                      }`}
                    />

                    {/* Content */}
                    <div className={`relative z-10 p-5 sm:p-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-voiceup-navy'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className={`flex-shrink-0 rounded-xl transition-all duration-300 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 ${
                              isActive
                                ? 'bg-white/20 backdrop-blur-md shadow-lg scale-110 text-white'
                                : 'bg-voiceup-skyblue/10 text-voiceup-skyblue group-hover:scale-105'
                            }`}
                          >
                            {c.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span
                                className={`text-xs font-mono font-bold transition-colors duration-300 ${
                                  isActive ? 'text-white/70' : 'text-voiceup-skyblue'
                                }`}
                              >
                                {numberLabel}
                              </span>
                              <span
                                className={`text-[11px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                                  isActive ? 'text-white/70' : 'text-gray-400'
                                }`}
                              >
                                {c.badge}
                              </span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold truncate">{c.title}</h3>
                          </div>
                        </div>
                        <ArrowRight
                          className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'translate-x-1 text-white'
                              : 'text-gray-400 group-hover:translate-x-1 group-hover:text-voiceup-skyblue'
                          }`}
                        />
                      </div>

                      {/* Tagline — slides in when active */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? 'max-h-16 mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 pl-[60px] sm:pl-[72px]">
                          {c.tagline}
                        </p>
                      </div>

                      {/* Live indicator on active — only renders when section is on-screen */}
                      {isActive && sectionInView && (
                        <div className="absolute top-4 right-12 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-white/60 animate-ping" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                          </span>
                          Live
                        </div>
                      )}
                    </div>
                  </button>

                  {/* MOBILE ONLY: inline preview shown right below the active card so users
                       don't have to scroll to the bottom of the list to see product details. */}
                  {isActive && (
                    <div className="lg:hidden">
                      {renderPreview(c)}
                    </div>
                  )}
                </React.Fragment>
                );
              })}
            </div>

            {/* DESKTOP ONLY: rich sticky preview pane */}
            <div className="hidden lg:block lg:sticky lg:top-24">
              {renderPreview(selected)}

              {/* Progress indicator under the preview */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="font-mono">
                  {String(capabilities.findIndex((c) => c.id === activeId) + 1).padStart(2, '0')} / {String(capabilities.length).padStart(2, '0')}
                </span>
                <div className="flex-1 mx-4 h-1 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-voiceup-skyblue transition-all duration-500"
                    style={{ width: `${((capabilities.findIndex((c) => c.id === activeId) + 1) / capabilities.length) * 100}%` }}
                  />
                </div>
                <span className="uppercase tracking-wider text-gray-400">Capabilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">Built for enterprise voice, not generic chatbots</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty">
              VoiceUp is designed around real telephony: streaming audio, relay integration, multi-tenant configuration, and production-grade resilience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {platformHighlights.map((h, i) => {
              const a = cardAccents[i % cardAccents.length];
              const number = String(i + 1).padStart(2, '0');
              return (
                <div
                  key={h.title}
                  className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`h-1 ${a.strip}`} />
                  <div
                    aria-hidden="true"
                    className={`absolute -top-12 -right-12 h-32 w-32 rounded-full ${a.blob} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />
                  <div className="relative p-5 sm:p-6 flex flex-col items-center text-center">
                    <div
                      className={`h-12 w-12 rounded-xl ${a.badge} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mb-3`}
                    >
                      {h.icon}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                      Highlight {number}
                    </p>
                    <h3 className="text-base sm:text-[17px] font-bold text-voiceup-navy leading-snug mb-2">
                      {h.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{h.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About teaser — cyan gradient panel with a floating white card so it doesn't merge with the navy footer */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-skyblue relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_55%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.15),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12 grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-wide text-voiceup-skyblue font-semibold mb-2">About VoiceUp</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy">
                  100+ years of voice &amp; enterprise experience
                </h2>
              </div>
              <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  VoiceUp is an enterprise technology company specializing in the integration of telephony and artificial intelligence. We serve organizations in regulated and high-volume sectors where reliability, compliance, and scale are essential.
                </p>
                <Button asChild className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full px-6">
                  <Link to="/about">More about us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
