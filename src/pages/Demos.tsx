import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Headphones, FileText, BarChart3, Bot, Play, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const videoDemos = [
  { id: 'recording', title: 'Recording Demo', icon: <Headphones className="h-6 w-6" />, blurb: 'Enterprise call capture with metadata, retention policies, and fast retrieval.', accent: 'from-voiceup-skyblue to-voiceup-periwinkle' },
  { id: 'transcriptions', title: 'Transcriptions Demo', icon: <FileText className="h-6 w-6" />, blurb: 'Live multilingual speech-to-text streaming with interim and final results.', accent: 'from-voiceup-periwinkle to-voiceup-chartblue' },
  { id: 'analytics', title: 'Analytics Demo', icon: <BarChart3 className="h-6 w-6" />, blurb: 'AI-powered summaries, sentiment, emotion, topics, and resolution status.', accent: 'from-voiceup-navy to-voiceup-skyblue' },
  { id: 'voicebot', title: 'Voice Bot Demo', icon: <Bot className="h-6 w-6" />, blurb: 'End-to-end natural voice dialogue with intent detection and handoff.', accent: 'from-voiceup-chartblue to-voiceup-skyblue' },
];

const Demos = () => {
  const location = useLocation();
  const requestRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', useCase: '' });

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const target = hash === 'request' ? requestRef.current : sectionRefs.current[hash];
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demo: ${form.useCase.slice(0, 80) || 'Request from VoiceUp website'}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      '',
      'Use case / requirements:',
      form.useCase,
    ].join('\n');
    const href = `mailto:info@voiceup.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Explore AI capabilities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            See VoiceUp in action
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl">
            Walk through the products that power enterprise voice automation — or tell us about your use case and we'll tailor a session for your team.
          </p>
        </div>
      </section>

      {/* Request a Demo */}
      <section ref={requestRef} id="request" className="py-16 sm:py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-semibold text-voiceup-skyblue uppercase tracking-wide mb-2">Request a Demo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-4">
                Tell us what you'd like to see
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Share a quick note about your industry, call volumes, and the outcome you're targeting. We'll set up a 30-minute walkthrough with a VoiceUp engineer — no slideware, just the product.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-voiceup-skyblue mt-0.5 flex-shrink-0" />
                  <span>Live look at outbound voicebots, transcription, and analytics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-voiceup-skyblue mt-0.5 flex-shrink-0" />
                  <span>Deployment options for on-prem, private cloud, or SaaS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-voiceup-skyblue mt-0.5 flex-shrink-0" />
                  <span>Architecture review with our solutions team.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl shadow-lg p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto h-14 w-14 rounded-full bg-voiceup-skyblue/15 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-7 w-7 text-voiceup-skyblue" />
                  </div>
                  <h3 className="text-xl font-semibold text-voiceup-navy mb-2">Email composer opened</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We've prefilled an email to <a href="mailto:info@voiceup.ai" className="text-voiceup-skyblue hover:underline">info@voiceup.ai</a>. Hit send and we'll be in touch within 1 business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', useCase: '' }); }}
                    className="rounded-full border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white"
                  >
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-voiceup-navy mb-1.5">Full name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-voiceup-navy mb-1.5">Work email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-voiceup-navy mb-1.5">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-voiceup-navy mb-1.5">What would you like to see?</label>
                    <textarea
                      id="useCase"
                      required
                      rows={5}
                      value={form.useCase}
                      onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue resize-none"
                      placeholder="E.g. outbound collections in Hindi + English at 500 concurrent calls, on-prem deployment, integration with our CRM."
                    />
                    <p className="mt-1.5 text-xs text-gray-500">This message becomes the subject and body of an email to info@voiceup.ai.</p>
                  </div>
                  <Button type="submit" className="w-full bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demos */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-voiceup-navy mb-3">Product walkthroughs</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Short demos showing how each product behaves in production environments.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {videoDemos.map((demo) => (
              <div
                key={demo.id}
                id={demo.id}
                ref={(el) => { sectionRefs.current[demo.id] = el; }}
                className="scroll-mt-24 group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative aspect-video bg-gradient-to-br ${demo.accent} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
                  <button
                    type="button"
                    className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/95 hover:bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    aria-label={`Play ${demo.title}`}
                  >
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 text-voiceup-navy ml-1" fill="currentColor" />
                  </button>
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 text-white text-[11px] tracking-wide uppercase backdrop-blur-sm">
                    Video • Coming soon
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
