import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Mic,
  Workflow,
  BrainCircuit,
  Globe2,
  ArrowRightLeft,
  Cable,
  ShieldCheck,
  BarChart3,
  Award,
  Database,
  Zap,
  Headphones,
  Lock,
  Layers,
  FileText,
  Bot,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Heuristic: pick a relevant icon for each feature card based on keywords in its title.
// Falls back to Sparkles for anything unmatched.
const iconForTitle = (title: string): React.ReactNode => {
  const t = title.toLowerCase();
  if (/conversation|dialogue|natural|real-?time/.test(t)) return <Mic className="h-5 w-5" />;
  if (/campaign|orchestration|schedule/.test(t)) return <Workflow className="h-5 w-5" />;
  if (/intelligent|management|conversation management/.test(t)) return <BrainCircuit className="h-5 w-5" />;
  if (/multilingual|regional|language/.test(t)) return <Globe2 className="h-5 w-5" />;
  if (/handoff|escalation|transfer/.test(t)) return <ArrowRightLeft className="h-5 w-5" />;
  if (/integration|api|data flow|connect/.test(t)) return <Cable className="h-5 w-5" />;
  if (/compliance|governance/.test(t)) return <ShieldCheck className="h-5 w-5" />;
  if (/security|access|tenant/.test(t)) return <Lock className="h-5 w-5" />;
  if (/analytics|insight|quality|reporting|dashboard/.test(t)) return <BarChart3 className="h-5 w-5" />;
  if (/reliability|enterprise|operations|architecture/.test(t)) return <Award className="h-5 w-5" />;
  if (/transcript|speech|recognition|accuracy|enrichment/.test(t)) return <FileText className="h-5 w-5" />;
  if (/storage|retention|database|durable/.test(t)) return <Database className="h-5 w-5" />;
  if (/search|retrieval|fast/.test(t)) return <Zap className="h-5 w-5" />;
  if (/audio|telephony|recording|capture/.test(t)) return <Headphones className="h-5 w-5" />;
  if (/bot|voicebot/.test(t)) return <Bot className="h-5 w-5" />;
  if (/resilient|connectivity|protocol|session/.test(t)) return <Cpu className="h-5 w-5" />;
  if (/multi-?party|omnichannel|context/.test(t)) return <Layers className="h-5 w-5" />;
  if (/observability|monitoring/.test(t)) return <BarChart3 className="h-5 w-5" />;
  return <Sparkles className="h-5 w-5" />;
};

// Six visual variants that cycle across feature cards. Keeps cyan as primary while sprinkling
// chart-blue, deep-cyan, and warmer pastels for variety — the same palette philosophy the
// user asked for: vibrant primary + occasional warm accent.
const featureAccents: Array<{
  strip: string;
  badge: string;
  dot: string;
  blob: string;
}> = [
  { strip: 'bg-voiceup-skyblue', badge: 'bg-voiceup-skyblue text-white', dot: 'bg-voiceup-skyblue', blob: 'bg-voiceup-skyblue' },
  { strip: 'bg-voiceup-chartblue', badge: 'bg-voiceup-chartblue text-white', dot: 'bg-voiceup-chartblue', blob: 'bg-voiceup-chartblue' },
  { strip: 'bg-voiceup-periwinkle', badge: 'bg-voiceup-periwinkle text-white', dot: 'bg-voiceup-periwinkle', blob: 'bg-voiceup-periwinkle' },
  { strip: 'bg-voiceup-lavender', badge: 'bg-voiceup-lavender text-voiceup-navy', dot: 'bg-voiceup-chartblue', blob: 'bg-voiceup-chartblue' },
  { strip: 'bg-voiceup-navy', badge: 'bg-voiceup-navy text-white', dot: 'bg-voiceup-navy', blob: 'bg-voiceup-navy' },
  { strip: 'bg-voiceup-blush', badge: 'bg-voiceup-blush text-voiceup-navy', dot: 'bg-voiceup-skyblue', blob: 'bg-voiceup-skyblue' },
];

export type FeatureGroup = {
  title: string;
  items: string[];
};

export type UseCase = {
  useCase: string;
  helps: string;
};

export type WhyItem = {
  title: string;
  body: string;
};

export type ProductPageProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  heroIcon: React.ReactNode;
  overview: string[];
  features: FeatureGroup[];
  useCasesHeading?: string;
  useCases: UseCase[];
  why?: WhyItem[];
  insightsTable?: { left: string; right: string; rows: { left: string; right: string }[] };
  ctaTitle?: string;
  ctaBody?: string;
};

const ProductPage: React.FC<ProductPageProps> = ({
  eyebrow,
  title,
  tagline,
  heroIcon,
  overview,
  features,
  useCasesHeading = 'Typical use cases',
  useCases,
  why,
  insightsTable,
  ctaTitle = 'Ready to see it in action?',
  ctaBody = 'Request a demo, pilot deployment, or architecture review tailored to your industry and compliance requirements.',
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-voiceup-navy via-voiceup-navy to-voiceup-periwinkle" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,168,224,0.4),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(91,123,216,0.22),transparent_55%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-wide uppercase mb-5">
                {eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl leading-relaxed">
                {tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-voiceup-skyblue hover:bg-white hover:text-voiceup-navy text-white rounded-full px-6">
                  <Link to="/demos#request">Request a demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-voiceup-navy rounded-full px-6">
                  <Link to="/pricing">Talk to sales</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex h-48 w-48 items-center justify-center rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-voiceup-skyblue [&_svg]:h-24 [&_svg]:w-24 [&_svg]:text-white">
              {heroIcon}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-voiceup-navy mb-6">Product overview</h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            {overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features — creative variant: icon + colored top strip + number badge + colored bullets */}
      <section className="py-16 sm:py-20 bg-voiceup-cloud relative overflow-hidden">
        {/* Soft decorative blobs */}
        <div aria-hidden="true" className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-voiceup-skyblue/8 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-voiceup-lavender/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs sm:text-sm tracking-wide uppercase text-voiceup-slate mb-3">
              <Sparkles className="h-3.5 w-3.5 text-voiceup-skyblue" />
              Key features
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-voiceup-navy mb-3">
              Everything you need, in one platform
            </h2>
            <p className="text-base sm:text-lg text-voiceup-slate max-w-2xl mx-auto">
              Production-grade capabilities designed for regulated, high-volume enterprise voice environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {features.map((group, i) => {
              const a = featureAccents[i % featureAccents.length];
              const icon = iconForTitle(group.title);
              const number = String(i + 1).padStart(2, '0');
              return (
                <div
                  key={group.title}
                  className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top colored strip — varies per card */}
                  <div className={`h-1 ${a.strip}`} />

                  {/* Decorative blob on hover */}
                  <div
                    aria-hidden="true"
                    className={`absolute -top-12 -right-12 h-32 w-32 rounded-full ${a.blob} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />

                  <div className="relative p-5 sm:p-6">
                    {/* Header: icon badge + number + title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`flex-shrink-0 h-11 w-11 rounded-xl ${a.badge} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                      >
                        {icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">
                          Feature {number}
                        </p>
                        <h3 className="text-base sm:text-[17px] font-bold text-voiceup-navy leading-snug">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    {/* Bullets with colored dots (no generic check icons) */}
                    <ul className="space-y-2.5 pl-1">
                      {group.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases table */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-voiceup-navy mb-3 text-center">{useCasesHeading}</h2>
          <p className="text-base text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Common workflows already running on VoiceUp deployments.
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-voiceup-navy text-white text-sm">
                <tr>
                  <th className="px-5 py-3 font-semibold w-1/3">Use case</th>
                  <th className="px-5 py-3 font-semibold">What it does</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {useCases.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-voiceup-blush/30'}>
                    <td className="px-5 py-3 text-sm font-medium text-voiceup-navy align-top">{row.useCase}</td>
                    <td className="px-5 py-3 text-sm text-gray-700 align-top">{row.helps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {insightsTable && (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-voiceup-navy mb-10 text-center">
              Capabilities at a glance
            </h2>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-voiceup-skyblue text-white text-sm">
                  <tr>
                    <th className="px-5 py-3 font-semibold w-1/3">{insightsTable.left}</th>
                    <th className="px-5 py-3 font-semibold">{insightsTable.right}</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {insightsTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-voiceup-blush/30'}>
                      <td className="px-5 py-3 text-sm font-medium text-voiceup-navy align-top">{row.left}</td>
                      <td className="px-5 py-3 text-sm text-gray-700 align-top">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Why VoiceUp */}
      {why && why.length > 0 && (
        <section className="py-16 sm:py-20 bg-voiceup-navy text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center">Why VoiceUp</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {why.map((w, i) => (
                <div key={i} className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-voiceup-skyblue mb-2">{w.title}</h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-chartblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">{ctaBody}</p>
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

export default ProductPage;
