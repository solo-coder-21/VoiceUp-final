import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Cable, Cpu, Layers, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-skyblue" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            About us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-4xl">
            Enterprise voice, AI-native — built where telephony meets intelligence.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl leading-relaxed">
            VoiceUp is an enterprise technology company specializing in the integration of telephony and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">Who we are</h2>
              <p className="text-sm uppercase tracking-wide text-voiceup-skyblue font-semibold">100+ years of collective experience</p>
            </div>
            <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
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
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">What guides our work</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              VoiceUp is built around four convictions about enterprise voice and AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-lg bg-voiceup-skyblue/10 text-voiceup-skyblue flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-voiceup-navy mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-chartblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-9 w-9 mx-auto mb-4 text-white" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Build voice AI you can take to production
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Talk to our team about how VoiceUp can fit into your contact center, voicebot, or compliance workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-white text-voiceup-navy hover:bg-voiceup-navy hover:text-white rounded-full px-6">
              <Link to="/demos#request">Request a demo</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-voiceup-navy rounded-full px-6">
              <Link to="/pricing">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
