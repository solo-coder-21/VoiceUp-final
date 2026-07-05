import { Cable } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const AIVoiceConnector = () => (
  <ProductPage
    eyebrow="VoiceUp AI Voice Connector"
    title="Bridge telephony and AI, in real time"
    tagline="Connect your phone network, contact center, and CPaaS platforms to modern voice AI — without replacing your telephony stack. VoiceUp AI Voice Connector streams live audio, routes messages, and synchronizes sessions so speech recognition, voicebots, and analytics work seamlessly on every call."
    heroIcon={<Cable />}
    overview={[
      'Enterprise voice runs on telephony infrastructure; AI runs on APIs, models, and cloud services. VoiceUp AI Voice Connector sits between them — a purpose-built integration layer that links call media and signaling to your AI platform in real time.',
      'It accepts audio and control events from telephony systems, forwards them to VoiceUp speech and dialogue services, and returns transcripts, bot responses, and analytics back to the call path. Whether you are enabling live transcription, deploying a voicebot, or enriching agent desktops, the connector gives you a stable, scalable bridge from the PSTN / SIP world to the AI world.',
    ]}
    features={[
      {
        title: 'Real-time audio bridging',
        items: [
          'Stream live call audio from telephony to AI services with low latency',
          'Support for phone-quality formats (PCM, common telephony codecs)',
          'Configurable chunking and buffering for stable delivery over variable networks',
          'Mono and stereo handling where agent/customer separation is required',
        ],
      },
      {
        title: 'Protocol & session orchestration',
        items: [
          'WebSocket-based session model for streaming audio and control messages',
          'Standard message flow: connect → start stream → audio chunks → stop/end',
          'Conversation and correlation IDs to track calls, transfers, and multi-party sessions',
          'Participant metadata (caller, agent, bot roles) passed through to AI services',
        ],
      },
      {
        title: 'Telephony-to-AI message routing',
        items: [
          'Forward start_audio_stream, audio_chunk, and stop_audio_stream events to AI',
          'Return stream_ready, transcripts, errors, and stream_ended to the telephony side',
          'Enhance or normalize payloads for downstream STT, voicebot, and analytics APIs',
          'ACK and status messaging for reliable handshakes with media gateways',
        ],
      },
      {
        title: 'Resilient connectivity',
        items: [
          'Automatic reconnect with backoff on transient network or AI service blips',
          'Optional audio ring buffer to replay recent audio after reconnect',
          'Stale-session handling when calls reconnect with the same conversation ID',
          'Circuit-breaker awareness for upstream speech and AI provider health',
        ],
      },
      {
        title: 'Multi-tenant & multi-environment',
        items: [
          'Tenant-scoped routing and configuration per customer or business unit',
          'Per-tenant AI provider, language, and endpoint settings',
          'Support for shared infrastructure with strict tenant isolation',
          'Configurable relay endpoints, TLS, and certificate pinning',
        ],
      },
      {
        title: 'Security & enterprise readiness',
        items: [
          'TLS-encrypted connections between telephony edge and AI platform',
          'Certificate and fingerprint validation for mutual trust',
          'Integration with enterprise identity and secrets management',
          'Deploy on-premises, in private cloud, or at the network edge',
        ],
      },
      {
        title: 'Pluggable AI services',
        items: [
          'Connect to VoiceUp Speech Transcription, VoiceBot, and Analytics',
          'Route to multiple speech engines with failover at session start',
          'Pass through LLM, translation, and enrichment services post-call or in-stream',
          'API-first design for custom AI pipelines beyond the VoiceUp stack',
        ],
      },
      {
        title: 'Observability & operations',
        items: [
          'Health endpoints for load balancers and orchestrators',
          'Session and connection monitoring (active calls, relay-to-AI links)',
          'Structured logging with conversation and tenant context',
          'Drain and readiness controls for zero-downtime upgrades',
        ],
      },
      {
        title: 'Integrations',
        items: [
          'Works with contact center platforms, SBCs, media servers, and CPaaS providers',
          'Compatible with VoiceUp relay and telephony media session services (TMSS)',
          'Webhook and API hooks for CRM, ticketing, and workforce systems',
          'OpenTelemetry support for enterprise monitoring stacks',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Live transcription', helps: 'Stream call audio to STT; return captions to agents or dashboards' },
      { useCase: 'VoiceBot on PSTN', helps: 'Run AI dialogue on inbound/outbound phone calls without new trunking' },
      { useCase: 'Agent assist', helps: 'Feed real-time transcripts and insights to the agent desktop during live calls' },
      { useCase: 'IVR modernization', helps: 'Replace rigid menus with AI-driven voice flows behind existing numbers' },
      { useCase: 'Call recording enrichment', helps: 'Pair captured audio with live or post-call AI analysis' },
      { useCase: 'Multi-tenant BPO', helps: 'Route many clients through one connector with isolated AI configuration' },
    ]}
    why={[
      {
        title: 'Built for telephony reality',
        body: 'Handles holds, reconnects, telephony pauses, and production call volumes — not lab-only API demos.',
      },
      {
        title: 'The missing layer between phone and AI',
        body: 'You keep your switches, trunks, and contact center; VoiceUp connects them to speech, bots, and analytics.',
      },
      {
        title: 'One connector, many AI outcomes',
        body: 'The same bridge powers transcription, voicebots, recording enrichment, and analytics pipelines.',
      },
      {
        title: 'Enterprise deployment on your terms',
        body: 'On-premises, private cloud, TLS, tenant isolation, and operational controls for regulated industries.',
      },
    ]}
    ctaTitle="Ready to connect your telephony stack to AI?"
    ctaBody="Request a demo or architecture review for your contact center, CPaaS, or on-premises voice environment."
  />
);

export default AIVoiceConnector;
