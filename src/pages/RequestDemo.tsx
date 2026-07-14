import React, { useRef, useState } from 'react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';
import { sendDirectEmail, openMailtoFallback, isDirectEmailConfigured } from '@/lib/formSubmit';

const productOptions = [
  'Outbound Voicebot',
  'Transcriptions',
  'Voice Bots',
  'Call Recording',
  'Analytics',
  'AI Voice Connector',
  'AI Analytics & Insights',
  'Bundle / not sure yet',
];

const deploymentOptions = ['SaaS', 'Private cloud', 'On-premises', 'Hybrid'];

const RequestDemo = () => {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: productOptions[0],
    deployment: deploymentOptions[0],
    volume: '',
    useCase: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const product = form.product || 'Not specified';
    const subject = `Demo request: ${product}`;
    const bodyText = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Product / interest: ${product}`,
      `Preferred deployment: ${form.deployment}`,
      `Expected call volume: ${form.volume || 'Not specified'}`,
      '',
      'Use case / requirements:',
      form.useCase,
    ].join('\n');

    if (isDirectEmailConfigured) {
      setSubmitting(true);
      const ok = await sendDirectEmail({
        subject,
        fromName: form.name,
        fromEmail: form.email,
        fields: {
          Company: form.company,
          'Product / interest': product,
          'Preferred deployment': form.deployment,
          'Expected call volume': form.volume || 'Not specified',
          'Use case': form.useCase,
        },
      });
      setSubmitting(false);
      if (ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("We couldn't submit your request just now. Please email info@voiceup.ai directly.");
      }
    } else {
      openMailtoFallback(subject, bodyText);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SectionIndicator eyebrow="Request a Demo" triggerRef={eyebrowRef} />

      {/* Compact hero — the split-card form below acts as the main visual, so this stays short */}
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p ref={eyebrowRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Request a Demo
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
            Let&apos;s set up a walkthrough
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 text-pretty max-w-3xl">
            Tell us about your industry, call volumes, and the outcome you&apos;re targeting. A VoiceUp engineer will reply within 1 business day.
          </p>
        </div>
      </section>

      {/* Request a Demo form — same split-card layout that used to live on /demos */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.3fr]">
              {/* Left: dark navy pane with copy + checklist */}
              <div className="bg-gradient-to-br from-voiceup-navy to-voiceup-periwinkle text-white p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">What to expect</h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  A short intro call, then a 30-minute product walkthrough with a VoiceUp engineer &mdash; no slideware, just the product.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Live look at outbound voicebots, transcription, and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Deployment options for on-prem, private cloud, or SaaS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Architecture review with our solutions team</span>
                  </li>
                </ul>
                <p className="mt-8 text-xs text-white/70">
                  Prefer email? Write to{' '}
                  <a href="mailto:info@voiceup.ai" className="text-voiceup-skyblue hover:underline">info@voiceup.ai</a>.
                </p>
              </div>

              {/* Right: form */}
              <div className="p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="mx-auto h-14 w-14 rounded-full bg-voiceup-skyblue/15 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-7 w-7 text-voiceup-skyblue" />
                    </div>
                    <h3 className="text-xl font-semibold text-voiceup-navy mb-2">
                      {isDirectEmailConfigured ? 'Request sent' : 'Email composer opened'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {isDirectEmailConfigured
                        ? "Thanks — your message is on its way to our team. We'll get back to you within 1 business day."
                        : (
                          <>
                            Send the prefilled email to{' '}
                            <a href="mailto:info@voiceup.ai" className="text-voiceup-skyblue hover:underline">info@voiceup.ai</a> and we&apos;ll be in touch within 1 business day.
                          </>
                        )}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMsg(null);
                        setForm({
                          name: '',
                          email: '',
                          company: '',
                          product: productOptions[0],
                          deployment: deploymentOptions[0],
                          volume: '',
                          useCase: '',
                        });
                      }}
                      className="rounded-full border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white"
                    >
                      Submit another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="d-name" className="block text-sm font-medium text-voiceup-navy mb-1.5">Full name</label>
                        <input id="d-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                          placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="d-email" className="block text-sm font-medium text-voiceup-navy mb-1.5">Work email</label>
                        <input id="d-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                          placeholder="jane@company.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="d-company" className="block text-sm font-medium text-voiceup-navy mb-1.5">Company</label>
                      <input id="d-company" type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="Acme Corp" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="d-product" className="block text-sm font-medium text-voiceup-navy mb-1.5">Product / interest</label>
                        <select id="d-product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue">
                          {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="d-deploy" className="block text-sm font-medium text-voiceup-navy mb-1.5">Preferred deployment</label>
                        <select id="d-deploy" value={form.deployment} onChange={(e) => setForm({ ...form, deployment: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue">
                          {deploymentOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="d-volume" className="block text-sm font-medium text-voiceup-navy mb-1.5">Expected call volume (optional)</label>
                      <input id="d-volume" type="text" value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="e.g. 500 concurrent calls, ~2M minutes/month" />
                    </div>
                    <div>
                      <label htmlFor="d-useCase" className="block text-sm font-medium text-voiceup-navy mb-1.5">What would you like to see?</label>
                      <textarea id="d-useCase" required rows={4} value={form.useCase} onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue resize-none"
                        placeholder="E.g. outbound collections in Hindi + English at 500 concurrent calls, on-prem deployment, integration with our CRM." />
                    </div>
                    {errorMsg && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        {errorMsg}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending&hellip;</>
                      ) : (
                        <><Send className="h-4 w-4 mr-2" /> Send to info@voiceup.ai</>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      {isDirectEmailConfigured
                        ? 'Your message is sent directly to info@voiceup.ai — no email client required.'
                        : 'Submitting opens your email client with a prefilled message to info@voiceup.ai.'}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo;
