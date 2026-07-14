import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Headphones, FileText, BarChart3, Bot, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';

const videoDemos = [
  {
    id: 'recording',
    title: 'Recording Demo',
    icon: <Headphones className="h-6 w-6" />,
    blurb: 'Enterprise call capture with metadata, retention policies, and fast retrieval.',
    accent: 'from-voiceup-skyblue to-voiceup-periwinkle',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=506&fit=crop',
  },
  {
    id: 'transcriptions',
    title: 'Transcriptions Demo',
    icon: <FileText className="h-6 w-6" />,
    blurb: 'Live multilingual speech-to-text streaming with interim and final results.',
    accent: 'from-voiceup-periwinkle to-voiceup-chartblue',
    thumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&h=506&fit=crop',
  },
  {
    id: 'analytics',
    title: 'Analytics Demo',
    icon: <BarChart3 className="h-6 w-6" />,
    blurb: 'AI-powered summaries, sentiment, emotion, topics, and resolution status.',
    accent: 'from-voiceup-navy to-voiceup-skyblue',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=506&fit=crop',
  },
  {
    id: 'voicebot',
    title: 'Voice Bot Demo',
    icon: <Bot className="h-6 w-6" />,
    blurb: 'End-to-end natural voice dialogue with intent detection and handoff.',
    accent: 'from-voiceup-chartblue to-voiceup-skyblue',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&h=506&fit=crop',
  },
];

const Demos = () => {
  const location = useLocation();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const target = sectionRefs.current[hash];
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SectionIndicator eyebrow="Explore AI capabilities" triggerRef={eyebrowRef} />

      {/* Hero — matches the dark-navy hero pattern used across About, Pricing, Customers, and RequestDemo */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p ref={eyebrowRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Explore AI capabilities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-balance">
            See VoiceUp in action
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 text-pretty max-w-3xl mb-8">
            Walk through the products that power enterprise voice automation &mdash; or tell us about your use case and we&apos;ll tailor a session for your team.
          </p>
          {/* Primary CTA — same styling as the homepage hero button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-voiceup-skyblue hover:bg-voiceup-navy hover:text-white px-7 py-5 text-base rounded-full shadow-xl shadow-voiceup-navy/20 font-semibold"
          >
            <Link to="/request-demo">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Video Demos */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">Product walkthroughs</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty">Short demos showing how each product behaves in production environments.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {videoDemos.map((demo) => (
              <div
                key={demo.id}
                id={demo.id}
                ref={(el) => { sectionRefs.current[demo.id] = el; }}
                className="scroll-mt-24 group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                  {/* Real photo thumbnail */}
                  <img
                    src={demo.thumbnail}
                    alt={`${demo.title} thumbnail`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Color wash to match each demo's theme */}
                  <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${demo.accent} opacity-60 mix-blend-multiply`} />
                  {/* Dark bottom gradient for legibility of the badge/play button */}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <button
                    type="button"
                    className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/95 hover:bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    aria-label={`Play ${demo.title}`}
                  >
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-voiceup-navy ml-1" fill="currentColor" />
                  </button>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 text-white text-[11px] tracking-wide uppercase backdrop-blur-sm">
                    Video &bull; Coming soon
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-voiceup-skyblue/10 text-voiceup-skyblue">
                      {demo.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-voiceup-navy">{demo.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{demo.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demos;
