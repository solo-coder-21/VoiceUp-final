import { Bot } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const VoiceBots = () => (
  <ProductPage
    eyebrow="VoiceUp VoiceBot Solution"
    title="Enterprise VoiceBot — Natural conversations, automated at scale"
    tagline="Deploy intelligent voice assistants that listen, understand, and respond in real time. VoiceUp VoiceBot powers inbound support, outbound outreach, and IVR modernization — with the security, language support, and control enterprises need."
    heroIcon={<Bot />}
    overview={[
      'VoiceUp VoiceBot enables two-way voice conversations between your customers and an AI-powered assistant. It combines real-time speech recognition, natural language understanding, dialogue management, and text-to-speech into a single platform you can integrate with your telephony stack, CRM, and backend systems.',
      'Whether callers are checking a balance, booking an appointment, or receiving a proactive reminder, VoiceUp handles the dialogue flow, captures structured outcomes, and escalates to a human agent when needed. Built for regulated and high-volume environments, it supports multiple languages, tenant-specific configuration, and flexible deployment on your infrastructure or cloud.',
    ]}
    features={[
      {
        title: 'Natural, real-time dialogue',
        items: [
          'Low-latency speech-to-text and text-to-speech for fluid conversations',
          'Handles interruptions, pauses, and typical telephony conditions',
          'Configurable voice persona, tone, and brand experience per tenant or campaign',
        ],
      },
      {
        title: 'Intelligent conversation management',
        items: [
          'Visual or API-driven dialogue flows with dynamic branching',
          'Intent detection and entity extraction (dates, amounts, account details, preferences)',
          'Context retention across turns for coherent multi-step interactions',
          'Confirmation, validation, and error-recovery steps built into flows',
        ],
      },
      {
        title: 'Inbound & outbound ready',
        items: [
          'Inbound: customer service, FAQs, self-service, and smart IVR replacement',
          'Outbound: reminders, surveys, collections, lead qualification, and notifications',
          'Campaign scheduling, retry rules, and time-window controls for outbound use cases',
        ],
      },
      {
        title: 'Multilingual support',
        items: [
          'Speech recognition and synthesis across multiple languages and accents',
          'Automatic language detection with configurable candidate languages',
          'Optional real-time translation for cross-language customer engagement',
        ],
      },
      {
        title: 'Human handoff & escalation',
        items: [
          'Seamless transfer to live agents with full conversation context',
          'Warm transfer, queue routing, and fallback when the bot cannot resolve',
          'Configurable escalation triggers (intent, sentiment, failed retries, explicit request)',
        ],
      },
      {
        title: 'Transcription & conversation intelligence',
        items: [
          'Full call transcription with interim and final results',
          'AI-powered summaries, sentiment, emotion, and resolution status',
          'Keyword and topic extraction for search, QA, and analytics',
          'Searchable conversation history linked by call and correlation ID',
        ],
      },
      {
        title: 'Integrations & automation',
        items: [
          'APIs and webhooks for CRM, ticketing, core banking, and ERP systems',
          'Post-call disposition codes, transcripts, and structured data pushed to your systems',
          'Pluggable speech, language, and voice-bot provider configuration per tenant',
        ],
      },
      {
        title: 'Enterprise architecture',
        items: [
          'Multi-tenant isolation with per-tenant provider, language, and flow settings',
          'Provider failover and circuit breakers for resilient speech and AI connectivity',
          'Durable transcript persistence with retry and recovery during infrastructure outages',
          'Health monitoring, readiness probes, and safe deployment controls',
        ],
      },
      {
        title: 'Security & compliance',
        items: [
          'On-premises or private cloud deployment for data residency',
          'Role-based access, audit logging, and tenant-scoped configuration',
          'Call recording support where permitted by policy',
          'Integration with enterprise identity and secrets management',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Customer self-service', helps: 'Answers FAQs, checks status, and completes simple requests without an agent' },
      { useCase: 'Smart IVR', helps: 'Replaces rigid menu trees with natural spoken dialogue' },
      { useCase: 'Appointment management', helps: 'Books, confirms, reschedules, or cancels appointments by voice' },
      { useCase: 'Payment reminders', helps: 'Sends outbound reminders and captures payment commitments' },
      { useCase: 'Lead qualification', helps: 'Qualifies prospects and schedules sales callbacks' },
      { useCase: 'Surveys & feedback', helps: 'Runs short voice surveys and logs structured responses' },
      { useCase: 'Agent assist', helps: 'Provides live transcription and context before or during handoff' },
    ]}
    why={[
      {
        title: 'Voice-first, not chatbot retrofitted',
        body: 'Built around streaming audio, telephony relays, and production call volumes — not text chat adapted for phone lines.',
      },
      {
        title: 'One platform for the full voice stack',
        body: 'Speech recognition, dialogue, transcription, translation, and AI analytics work together under a single tenant-aware architecture.',
      },
      {
        title: 'Your deployment, your policies',
        body: 'Run in your environment with your providers, compliance rules, and data residency requirements.',
      },
      {
        title: 'From conversation to insight',
        body: 'Every interaction can produce transcripts, analytics, and structured outcomes for operations, QA, and compliance.',
      },
    ]}
    ctaTitle="Ready to deploy enterprise VoiceBot at scale?"
    ctaBody="Contact us for a demo, pilot, or architecture review tailored to your industry and call volumes."
  />
);

export default VoiceBots;
