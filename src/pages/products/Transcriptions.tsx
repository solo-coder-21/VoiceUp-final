import { FileText } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const Transcriptions = () => (
  <ProductPage
    eyebrow="VoiceUp Transcription Solution"
    title="Enterprise Speech Transcription — Real-time, accurate, and built for scale"
    tagline="Turn live and recorded audio into reliable text — instantly. VoiceUp Transcription delivers low-latency speech-to-text for contact centers, voicebots, meetings, and compliance workflows, with the security and control enterprises require."
    heroIcon={<FileText />}
    overview={[
      'VoiceUp Transcription converts spoken audio into structured, searchable text in real time or batch. The platform streams audio over secure WebSocket connections, returns interim and final transcripts as speech is detected, and persists conversation history for search, analytics, and downstream automation.',
      'Designed for high-volume and regulated environments, VoiceUp supports multiple speech engines, multilingual recognition, tenant-level configuration, and flexible deployment — on your infrastructure or in your cloud. Integrate with telephony relays, CRM systems, and analytics pipelines through APIs and webhooks, without rebuilding your voice stack.',
    ]}
    features={[
      {
        title: 'Real-time speech-to-text',
        items: [
          'Streaming transcription with interim (partial) and final results',
          'Low-latency delivery suitable for live agent assist and voicebots',
          'WebSocket-based audio ingestion for telephony and custom clients',
        ],
      },
      {
        title: 'Multilingual recognition',
        items: [
          'Support for major languages and regional variants (English, Hindi, and other Indian languages)',
          'Automatic language detection with configurable candidate languages',
          'Optional real-time translation for cross-language workflows',
        ],
      },
      {
        title: 'Telephony-ready audio',
        items: [
          'Optimized for phone-quality audio (8 kHz–48 kHz, PCM and common codecs)',
          'Tuned silence timeouts for hold music, IVR, and natural pauses',
          'Custom phrase boosting for brand names, product terms, and industry vocabulary',
        ],
      },
      {
        title: 'Accuracy & enrichment',
        items: [
          'Automatic punctuation and capitalization',
          'Optional speaker diarization (who spoke when)',
          'Profanity filtering where required by policy',
          'Confidence scores on final utterances',
        ],
      },
      {
        title: 'Transcript management',
        items: [
          'Durable storage of conversation transcripts with metadata',
          'Retrieve transcripts by conversation, call, or correlation ID',
          'Pagination and pattern search across conversation archives',
          'Party- and role-aware logging for multi-participant calls',
        ],
      },
      {
        title: 'AI-powered transcript analytics',
        items: [
          'Automated call summaries and key-point extraction',
          'Sentiment and emotion insights from conversation text',
          'Configurable analytics prompts for industry-specific use cases',
          'Structured outputs for CRM, QA, and reporting systems',
        ],
      },
      {
        title: 'Enterprise architecture',
        items: [
          'Multi-tenant isolation with per-tenant provider and language settings',
          'Buffered persistence with retry queues and dead-letter handling for DB outages',
          'Health, readiness, and operational controls for production deployments',
        ],
      },
      {
        title: 'Security & compliance',
        items: [
          'Deploy on-premises or in private cloud for data residency',
          'Tenant-scoped configuration and access controls',
          'Audit-friendly logging and correlation across call legs',
          'Integration with enterprise identity and secrets management',
        ],
      },
      {
        title: 'Integrations',
        items: [
          'REST APIs for transcript retrieval, health, and analytics',
          'Relay-compatible message flow for telephony and voice platforms',
          'Webhook-ready architecture for post-call processing',
          'OpenTelemetry support for observability in your monitoring stack',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Contact center QA', helps: 'Transcribe every call for quality review, coaching, and compliance' },
      { useCase: 'Agent assist', helps: 'Deliver live captions and suggested responses during active calls' },
      { useCase: 'Voicebot & IVR', helps: 'Feed speech recognition into dialogue flows and backend systems' },
      { useCase: 'Meeting & collaboration', helps: 'Capture spoken content for notes, search, and follow-ups' },
      { useCase: 'Regulatory & legal', helps: 'Maintain searchable records of customer interactions' },
      { useCase: 'Analytics & BI', helps: 'Turn voice data into trends, intents, and operational insights' },
    ]}
    why={[
      {
        title: 'Built for production voice',
        body: 'Streaming STT, relay integration, multi-tenant config, and resilience patterns designed for real call volumes — not batch-only lab setups.',
      },
      {
        title: 'Provider choice, your rules',
        body: 'Use leading cloud speech engines (Azure, Google Cloud) with tenant-specific settings, failover, and regional control.',
      },
      {
        title: 'From audio to action',
        body: 'Transcripts are stored, searchable, and enrichable with AI analytics — so speech becomes a durable business asset.',
      },
    ]}
    ctaTitle="Ready to transcribe voice at enterprise scale?"
    ctaBody="Request a demo or architecture review tailored to your call volumes, languages, and deployment requirements."
  />
);

export default Transcriptions;
