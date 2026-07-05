import React, { useState } from 'react';
import { CheckCircle2, Send, Shield, Server, Cloud, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const Pricing = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: productOptions[0],
    deployment: deploymentOptions[0],
    volume: '',
    message: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = form.product || 'Not specified';
    const subject = `Pricing request: ${product}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Product / interest: ${product}`,
      `Preferred deployment: ${form.deployment}`,
      `Expected call volume: ${form.volume || 'Not specified'}`,
      '',
      'Message:',
      form.message,
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-skyblue" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Pricing built around <span className="bg-gradient-to-r from-voiceup-skyblue to-white bg-clip-text text-transparent">your deployment</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl">
            Every VoiceUp deployment differs — call volumes, languages, residency, and integrations all shape the right plan. Tell us about your environment and our team will reply with a tailored quote.
          </p>
        </div>
      </section>

      {/* What shapes pricing */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-voiceup-navy mb-3 text-center">What shapes your VoiceUp price</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We price for production voice — so call volume, deployment model, and integrations matter more than seat counts.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Server className="h-5 w-5" />, title: 'Deployment model', body: 'SaaS, private cloud, on-prem, or hybrid — choose what fits your data residency rules.' },
              { icon: <Cloud className="h-5 w-5" />, title: 'Concurrent call volume', body: 'Sized for the peak number of simultaneous calls and channels you need to support.' },
              { icon: <Cog className="h-5 w-5" />, title: 'Integrations & languages', body: 'CRM, ticketing, telephony bridges, and multilingual STT/TTS factor into setup.' },
              { icon: <Shield className="h-5 w-5" />, title: 'Compliance scope', body: 'Retention, audit, recording, and identity integrations for regulated workloads.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-5 hover:shadow-lg transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-voiceup-skyblue/10 text-voiceup-skyblue flex items-center justify-center mb-3">
                  {c.icon}
                </div>
                <h3 className="text-base font-semibold text-voiceup-navy mb-1">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales Form */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.3fr]">
              <div className="bg-gradient-to-br from-voiceup-navy to-voiceup-periwinkle text-white p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Contact sales</h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  Send us the details below and our enterprise team will reply within 1 business day with a quote tailored to your call volumes and deployment.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Custom pricing per product or bundle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Pilot / proof-of-concept options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-voiceup-skyblue mt-0.5" />
                    <span>Architecture review with a VoiceUp engineer</span>
                  </li>
                </ul>
                <p className="mt-8 text-xs text-white/70">
                  Prefer email? Write to{' '}
                  <a href="mailto:info@voiceup.ai" className="text-voiceup-skyblue hover:underline">info@voiceup.ai</a>.
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="mx-auto h-14 w-14 rounded-full bg-voiceup-skyblue/15 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-7 w-7 text-voiceup-skyblue" />
                    </div>
                    <h3 className="text-xl font-semibold text-voiceup-navy mb-2">Email composer opened</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Send the prefilled email to <a href="mailto:info@voiceup.ai" className="text-voiceup-skyblue hover:underline">info@voiceup.ai</a> and a sales engineer will reply within 1 business day.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => { setSubmitted(false); setForm({ ...form, message: '', volume: '' }); }}
                      className="rounded-full border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white"
                    >
                      Submit another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="p-name" className="block text-sm font-medium text-voiceup-navy mb-1.5">Full name</label>
                        <input id="p-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                          placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="p-email" className="block text-sm font-medium text-voiceup-navy mb-1.5">Work email</label>
                        <input id="p-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                          placeholder="jane@company.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="p-company" className="block text-sm font-medium text-voiceup-navy mb-1.5">Company</label>
                      <input id="p-company" type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="Acme Corp" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="p-product" className="block text-sm font-medium text-voiceup-navy mb-1.5">Product / interest</label>
                        <select id="p-product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue">
                          {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="p-deploy" className="block text-sm font-medium text-voiceup-navy mb-1.5">Preferred deployment</label>
                        <select id="p-deploy" value={form.deployment} onChange={(e) => setForm({ ...form, deployment: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue">
                          {deploymentOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="p-volume" className="block text-sm font-medium text-voiceup-navy mb-1.5">Expected call volume (optional)</label>
                      <input id="p-volume" type="text" value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue"
                        placeholder="e.g. 500 concurrent calls, ~2M minutes/month" />
                    </div>
                    <div>
                      <label htmlFor="p-message" className="block text-sm font-medium text-voiceup-navy mb-1.5">Tell us about your use case</label>
                      <textarea id="p-message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue focus:border-voiceup-skyblue resize-none"
                        placeholder="Industry, languages, integrations, compliance requirements, target go-live…" />
                    </div>
                    <Button type="submit" className="w-full bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send to info@voiceup.ai
                    </Button>
                    <p className="text-xs text-gray-500 text-center">Submitting opens your email client with a prefilled message to info@voiceup.ai.</p>
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

export default Pricing;
