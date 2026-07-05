import { Headphones } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const Recording = () => (
  <ProductPage
    eyebrow="VoiceUp Recording Solution"
    title="VoiceUp Call Recording — Capture, store, and govern every conversation"
    tagline="Record customer and agent calls with enterprise-grade reliability. VoiceUp Call Recording gives you secure storage, fast retrieval, and rich metadata — so compliance, quality, and operations teams can trust what was said, when it was said, and who was involved."
    heroIcon={<Headphones />}
    overview={[
      'VoiceUp Call Recording captures voice interactions across your contact center, voicebot, and telephony channels. Calls are recorded in line with your policies, indexed with conversation metadata, and made available for playback, search, transcription, and downstream analytics.',
      'Built for regulated and high-volume environments, the platform supports multi-tenant operation, flexible deployment on your infrastructure or cloud, and integration with your existing telephony, CRM, and workforce systems. From capture to archive, VoiceUp helps you meet retention requirements while turning recorded calls into actionable business data.',
    ]}
    features={[
      {
        title: 'Reliable call capture',
        items: [
          'Record inbound, outbound, and transferred calls across channels',
          'Mono and stereo recording (agent/customer separation where required)',
          'Capture aligned with telephony events: connect, hold, transfer, conference, disconnect',
          'Resilient ingestion designed for production call volumes',
        ],
      },
      {
        title: 'Secure storage & retention',
        items: [
          'Encrypted storage at rest and in transit',
          'Configurable retention policies by tenant, queue, or interaction type',
          'Legal hold and extended retention for investigations and disputes',
          'On-premises or private cloud deployment for data residency requirements',
        ],
      },
      {
        title: 'Fast search & retrieval',
        items: [
          'Find recordings by date, agent, customer, queue, campaign, or disposition',
          'Search by conversation ID, correlation ID, or custom metadata tags',
          'Time-based playback with seek and speed controls',
          'Bulk export for audits, disputes, and regulatory requests',
        ],
      },
      {
        title: 'Transcription & conversation intelligence',
        items: [
          'Optional automatic speech-to-text for every recorded call',
          'Full transcripts with speaker attribution where supported',
          'AI-powered summaries, sentiment, topics, and resolution status',
          'Link recordings to transcripts and analytics in a single view',
        ],
      },
      {
        title: 'Multi-party & omnichannel context',
        items: [
          'Record and correlate multi-leg and transferred calls',
          'Party- and role-aware metadata (caller, agent, bot, supervisor)',
          'Associate recordings with voicebot sessions, IVR paths, and agent desktop events',
        ],
      },
      {
        title: 'Quality assurance & coaching',
        items: [
          'Playback for QA scoring, script adherence, and coaching workflows',
          'Flag, annotate, and share recordings for review teams',
          'Sample-based or rules-based selection for quality monitoring',
          'Integration with WFM and QA platforms via APIs',
        ],
      },
      {
        title: 'Compliance & governance',
        items: [
          'Role-based access control and audit trails for every playback and export',
          'Tamper-evident storage and access logging for regulatory review',
          'Consent and policy controls aligned with local recording regulations',
          'Tenant isolation for BPO, multi-brand, and shared-infrastructure deployments',
        ],
      },
      {
        title: 'Integrations',
        items: [
          'APIs and webhooks for CRM, ticketing, core banking, and ERP',
          'Telephony and relay integration for seamless capture in live call flows',
          'Push metadata and recording references to your systems of record post-call',
          'OpenTelemetry and operational health endpoints for production monitoring',
        ],
      },
      {
        title: 'Enterprise operations',
        items: [
          'Multi-tenant configuration with per-tenant storage and retention rules',
          'High-availability architecture with graceful handling of storage or DB outages',
          'Health, readiness, and drain controls for safe upgrades and maintenance',
          'Scalable from hundreds to thousands of concurrent calls',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Regulatory compliance', helps: 'Maintain provable records of customer interactions for audits and disputes' },
      { useCase: 'Dispute resolution', helps: 'Retrieve exact call audio and metadata when questions arise' },
      { useCase: 'Quality assurance', helps: 'Review agent performance, script adherence, and customer experience' },
      { useCase: 'Agent coaching', helps: 'Use real calls to train, mentor, and improve team performance' },
      { useCase: 'Fraud & security', helps: 'Investigate suspicious interactions with full playback and search' },
      { useCase: 'Voicebot & IVR review', helps: 'Analyze automated conversations alongside human-handled calls' },
      { useCase: 'Analytics & insights', helps: 'Combine recordings with transcripts and AI analytics for operational trends' },
    ]}
    why={[
      {
        title: 'Recording built for enterprise voice',
        body: 'Designed around real telephony flows — streaming audio, relay integration, multi-party calls, and production-scale reliability — not ad-hoc desktop capture.',
      },
      {
        title: 'Capture once, use everywhere',
        body: 'The same recording can power compliance, QA, coaching, transcription, and analytics without duplicate systems.',
      },
      {
        title: 'Your data, your deployment',
        body: 'Run in your environment with your retention policies, access controls, and compliance requirements.',
      },
      {
        title: 'From audio to insight',
        body: 'Pair recordings with VoiceUp transcription and conversation intelligence to move from storage to actionable outcomes.',
      },
    ]}
    ctaTitle="Ready to record calls with enterprise confidence?"
    ctaBody="Request a demo or architecture review tailored to your call volumes, retention rules, and deployment model."
  />
);

export default Recording;
