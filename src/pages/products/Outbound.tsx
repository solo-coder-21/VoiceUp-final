import { Mic } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const Outbound = () => (
  <ProductPage
    eyebrow="VoiceUp Outbound Solution"
    title="Outbound Voicebot — Intelligent calls at scale"
    tagline="Reach customers proactively with natural, two-way voice conversations. VoiceUp Outbound Voicebot automates reminders, follow-ups, surveys, and outreach — while keeping every interaction compliant, measurable, and easy to integrate with existing systems."
    heroIcon={<Mic />}
    overview={[
      'VoiceUp Outbound Voicebot places and manages automated outbound calls on your behalf. It listens, understands, and responds in real time — handling routine conversations end to end and escalating to a human agent when needed.',
      'Built for regulated and high-volume environments, the platform supports multi-language conversations, tenant-specific configuration, and deployment on your infrastructure or cloud. Whether you are confirming appointments, collecting feedback, or running targeted campaigns, VoiceUp helps you scale outbound voice without scaling your contact center headcount.',
    ]}
    features={[
      {
        title: 'Natural, real-time conversations',
        items: [
          'Two-way voice dialogue with low-latency speech recognition and synthesis',
          'Handles interruptions, pauses, and common telephony conditions',
          'Configurable voice, tone, and persona per campaign or brand',
        ],
      },
      {
        title: 'Campaign & call orchestration',
        items: [
          'Schedule and launch campaigns by list, segment, or trigger',
          'Retry logic, time-window rules, and per-destination calling limits',
          'Reminders, confirmations, surveys, collections, and lead qualification',
        ],
      },
      {
        title: 'Intelligent dialogue management',
        items: [
          'Script and flow design with dynamic branching based on caller responses',
          'Intent detection and slot filling for structured data capture (dates, amounts, preferences)',
          'Context-aware follow-up questions and confirmation steps',
        ],
      },
      {
        title: 'Multilingual & regional support',
        items: [
          'Speech recognition and synthesis across multiple languages and accents',
          'Optional real-time translation for cross-language outreach',
          'Region-specific telephony and provider configuration',
        ],
      },
      {
        title: 'Human handoff & escalation',
        items: [
          'Seamless transfer to live agents with conversation context if needed',
          'Fallback paths when the bot cannot resolve the request',
        ],
      },
      {
        title: 'Integrations & data flow',
        items: [
          'Connect to CRM, ticketing, and core banking / ERP via APIs and webhooks',
          'Post-call transcripts, summaries, and disposition codes pushed to your systems of record',
          'Correlation of multi-party and multi-leg calls for end-to-end visibility',
        ],
      },
      {
        title: 'Compliance & governance',
        items: [
          'Call recording and audit trails (where permitted by policy)',
          'Do-not-call and consent list enforcement',
          'Role-based access, tenant isolation, and configurable data retention',
          'Deploy on-prem or in private cloud for data residency; SaaS also available',
        ],
      },
      {
        title: 'Analytics & quality insights',
        items: [
          'Real-time and historical dashboards: connect rates, completion rates, intent distribution',
          'Full conversation transcripts with searchable metadata',
          'AI-powered call summaries, sentiment, and outcome classification',
          'Quality monitoring for script adherence and customer experience',
        ],
      },
      {
        title: 'Enterprise reliability',
        items: [
          'High-availability architecture, circuit breakers and resilient persistence',
          'Health monitoring, readiness probes, and operational drain controls for safe deployments',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Candidate reach out', helps: 'Initial candidate screening and JD fitment' },
      { useCase: 'Payment & collections', helps: 'Sends polite payment reminders and captures commitment dates' },
      { useCase: 'Customer surveys (NPS/CSAT)', helps: 'Conducts short voice surveys and logs structured responses' },
      { useCase: 'Lead qualification', helps: 'Reaches prospects, asks qualifying questions, and books callbacks' },
      { useCase: 'Service notifications', helps: 'Delivers proactive updates (delivery, account, policy changes)' },
      { useCase: 'Renewals & upsell', helps: 'Reminds customers of renewals and captures interest for sales follow-up' },
    ]}
    why={[
      {
        title: 'Built for enterprise voice, not generic chatbots',
        body: 'Designed around real telephony: streaming audio, relay integration, multi-tenant configuration, and production-grade resilience — not bolted-on IVR scripts.',
      },
      {
        title: 'Your data, your deployment',
        body: 'Run in your environment with your providers, your policies, and your compliance controls.',
      },
      {
        title: 'From call to insight',
        body: 'Every conversation can feed transcripts, analytics, and downstream automation — so outbound voice becomes a data source, not a black box.',
      },
    ]}
    ctaTitle="Ready to automate outbound voice at scale?"
    ctaBody="Contact us for a demo, pilot deployment, or architecture review tailored to your industry and compliance requirements."
  />
);

export default Outbound;
