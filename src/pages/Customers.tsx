import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';

type Story = {
  id: string;
  name: string;
  /** Fallback initials rendered if `logoImage` fails to load. */
  logo: string;
  /** Logo image URL (local or remote). */
  logoImage?: string;
  label: string;
  body: string;
};

const customerStories: Story[] = [
  {
    id: 'vis',
    name: 'VIS Networks',
    logo: 'VIS',
    logoImage: '/project-uploads/VIS%20logo.png',
    label: 'Partner story',
    body:
      'VoiceUp AI and VIS Networks have formed a global strategic partnership to bring world-class AI-powered contact center solutions to enterprises across international markets. Together, we enable organizations to modernize customer engagement through intelligent automation, real-time conversation intelligence, and secure, scalable deployments — helping businesses deliver exceptional customer experiences with confidence.',
  },
  {
    id: 'yes-bank',
    name: 'YES BANK',
    logo: 'YB',
    logoImage: '/project-uploads/Yes_Bank_SVG_Logo.svg',
    label: 'Customer story',
    body:
      'For YES BANK, VoiceUp AI deployed a mission-critical, AI-powered real-time transcription platform that transforms customer conversations into actionable insights for contact center agents. Featuring carrier-grade SIP connectivity, seamless Microsoft Azure AI integration, high availability, disaster recovery, and complex enterprise integrations, the solution demonstrates our ability to deliver secure, scalable, and resilient AI solutions for the financial services industry.',
  },
];

const Customers = () => {
  const location = useLocation();
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

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

  const renderLogo = (c: Story) => (
    <div className="flex items-center justify-center py-6 lg:py-0">
      {c.logoImage ? (
        <>
          <img
            src={c.logoImage}
            alt={`${c.name} logo`}
            loading="lazy"
            decoding="async"
            className="h-24 sm:h-28 lg:h-32 w-auto max-w-full object-contain"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = 'inline';
            }}
          />
          <span className="hidden text-4xl sm:text-5xl font-bold tracking-tight text-voiceup-navy">
            {c.logo}
          </span>
        </>
      ) : (
        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-voiceup-navy">
          {c.logo}
        </span>
      )}
    </div>
  );

  const renderContent = (c: Story) => (
    <div>
      {/* Wide-tracked small caps eyebrow — editorial magazine style */}
      <p className="text-xs uppercase tracking-[0.25em] text-voiceup-skyblue font-semibold mb-4">
        {c.label}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-voiceup-navy leading-[1.05] mb-6 text-balance">
        {c.name}
      </h2>
      {/* Thin hairline divider — the only decorative element */}
      <div aria-hidden="true" className="mb-8 h-px w-16 bg-voiceup-skyblue" />
      <p className="text-base sm:text-lg text-gray-700 leading-[1.75] text-pretty">
        {c.body}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SectionIndicator eyebrow="Customers & Partners" triggerRef={eyebrowRef} />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p ref={eyebrowRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Customers &amp; Partners
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-balance">
            Trusted by regulated, high-volume voice operations
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 text-pretty">
            Financial services and enterprise contact centers run mission-critical voice workloads on VoiceUp. Here&apos;s how a few of them work with us.
          </p>
        </div>
      </section>

      {/*
        Customer / Partner Stories — editorial layout on plain white.
        No card frames, no accent strips, no highlight pills. Stories are separated
        only by a hairline divider (`divide-y`). The visual quality comes from
        typography, spacing, and the alternating logo/content grid.
      */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-gray-200">
          {customerStories.map((c, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={c.id}
                id={c.id}
                ref={(el) => { refs.current[c.id] = el; }}
                className="py-14 sm:py-20 lg:py-24 first:pt-0 last:pb-0 scroll-mt-24"
              >
                <div
                  className={`grid gap-10 lg:gap-16 items-center ${
                    isReversed
                      ? 'lg:grid-cols-[1fr_240px]'
                      : 'lg:grid-cols-[240px_1fr]'
                  }`}
                >
                  {isReversed ? (
                    <>
                      {renderContent(c)}
                      {renderLogo(c)}
                    </>
                  ) : (
                    <>
                      {renderLogo(c)}
                      {renderContent(c)}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;
