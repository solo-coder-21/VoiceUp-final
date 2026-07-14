import { useRef } from 'react';
import { ShieldCheck, Cable, Cpu, Layers, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';
import { cardAccents } from '@/lib/cardAccents';

const About = () => {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SectionIndicator eyebrow="About us" triggerRef={eyebrowRef} />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-skyblue" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p ref={eyebrowRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            About us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-balance">
            Enterprise voice, AI-native — built where telephony meets intelligence.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed text-pretty">
            VoiceUp is an enterprise technology company specializing in the integration of telephony and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Who we are — editorial single-column layout on white, matching the Product Overview pattern.
          Header block (eyebrow + heading + hairline) is centered; body stays wide. */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-voiceup-skyblue font-semibold mb-4">
              100+ years of collective experience
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-voiceup-navy leading-[1.05] text-balance">
              Who we are
            </h2>
            <div aria-hidden="true" className="mx-auto mt-8 h-px w-20 bg-voiceup-skyblue" />
          </div>
          <div className="space-y-6 text-lg sm:text-xl text-gray-700 leading-[1.75] text-pretty">
            <p>
              Drawing on more than 100 years of collective industry experience, we serve organizations in regulated and high-volume sectors where reliability, compliance, and scale are essential.
            </p>
            <p>
              We design solutions for production-grade contact center and voice environments, with a focus on security, data governance, and seamless integration with existing enterprise infrastructure.
            </p>
            <p>
              Our mission is to enable organizations to adopt AI-enabled voice capabilities with the confidence that operational and regulatory requirements will be met.
            </p>
          </div>
        </div>
      </section>

      {/* What guides our work — creative placards matching the ProductPage feature-card style */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">What guides our work</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty">
              VoiceUp is built around four convictions about enterprise voice and AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              {
                icon: <Cable className="h-5 w-5" />,
                title: 'Voice-first, not retrofitted',
                body: 'Streaming audio, telephony relays, and production call volumes — not text chatbots adapted for phone lines.',
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: 'Compliance is a feature',
                body: 'Tenant isolation, audit trails, retention controls, and data residency by design — not added later.',
              },
              {
                icon: <Cpu className="h-5 w-5" />,
                title: 'Pluggable AI',
                body: 'Tenant-specific speech engines, LLM providers, and language models with failover and regional control.',
              },
              {
                icon: <Layers className="h-5 w-5" />,
                title: 'One platform, many outcomes',
                body: 'Transcription, voicebots, recording, analytics — under one tenant-aware architecture, not stitched apps.',
              },
            ].map((p, i) => {
              const a = cardAccents[i % cardAccents.length];
              const number = String(i + 1).padStart(2, '0');
              return (
                <div
                  key={p.title}
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
                      {p.icon}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                      Principle {number}
                    </p>
                    <h3 className="text-base sm:text-[17px] font-bold text-voiceup-navy leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 sm:py-14 bg-voiceup-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { v: '100+', l: 'Years of collective industry experience' },
            { v: '7', l: 'Products & solutions in the VoiceUp stack' },
            { v: 'Multi-tenant', l: 'Isolated configuration per customer' },
            { v: 'On-prem / Cloud', l: 'Deploy where your data must live' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl sm:text-4xl font-bold text-voiceup-skyblue">{s.v}</div>
              <div className="text-xs sm:text-sm text-white/75 mt-2 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Building2 className="h-9 w-9 text-voiceup-skyblue mx-auto mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">Where VoiceUp is deployed</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty">
              Sectors where voice is mission-critical and compliance, reliability, and scale are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Banking & financial services',
              'Insurance',
              'Healthcare',
              'BPO / contact center',
              'Telecom & CPaaS',
              'Government & public sector',
              'Logistics & delivery',
              'Retail & ecommerce',
            ].map((i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 px-4 py-4 text-sm font-medium text-voiceup-navy text-center hover:border-voiceup-skyblue hover:text-voiceup-skyblue transition-colors">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
