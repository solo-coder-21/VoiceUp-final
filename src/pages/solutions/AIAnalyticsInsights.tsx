import { BrainCircuit } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const AIAnalyticsInsights = () => (
  <ProductPage
    eyebrow="VoiceUp AI Analytics & Insights"
    title="Understand every conversation. Act with confidence."
    tagline="Turn customer and agent interactions into clear, measurable intelligence. VoiceUp AI Analytics & Insights applies advanced AI to voice and text conversations — surfacing sentiment, outcomes, themes, and trends so your teams can improve experience, quality, and performance at scale."
    heroIcon={<BrainCircuit />}
    overview={[
      'Every call, voicebot session, and recorded interaction holds valuable data. VoiceUp AI Analytics & Insights transforms that raw conversation data into structured, actionable insight — automatically and at scale.',
      'The platform analyzes transcripts and metadata from your contact center, voicebots, and recording systems. It delivers summaries, emotional signals, resolution status, keywords, and topics you can use for quality assurance, customer experience management, compliance, and executive reporting. Built for enterprise environments, it supports multi-tenant operation, selective analysis, API-first delivery, and deployment on your infrastructure or cloud.',
    ]}
    features={[
      {
        title: 'AI-powered conversation intelligence',
        items: [
          'Automated summaries — brief recaps or detailed narratives',
          'Sentiment analysis — measure positivity, negativity, and shifts',
          'Emotion detection — identify dominant emotional tones',
          'Resolution tracking — resolved, pending, escalated, or unresolved',
          'Keywords & topics — extract important terms and themes',
        ],
      },
      {
        title: 'Insights on demand',
        items: [
          'Request only the analytics you need for each workflow',
          'Lite and full analysis modes for speed, depth, and cost control',
          'Configurable prompts and models per tenant or business unit',
          'Structured JSON outputs ready for CRM, dashboards, and automation',
        ],
      },
      {
        title: 'From conversation to business insight',
        items: [
          'Connect analysis to calls, voicebots, recordings, and agent workflows',
          'Correlate insights across conversation IDs, campaigns, queues, and agents',
          'Track recurring contact drivers, escalation patterns, and unresolved issues',
          'Support QA sampling, coaching, and supervisory review with AI-generated highlights',
        ],
      },
      {
        title: 'Experience & performance analytics',
        items: [
          'Monitor customer sentiment and resolution trends over time',
          'Compare performance across teams, channels, campaigns, and regions',
          'Identify friction points in voicebot and IVR journeys',
          'Feed insight into NPS, CSAT, and customer experience programs',
        ],
      },
      {
        title: 'Operational dashboards & reporting',
        items: [
          'Trend views for sentiment, topics, and resolution rates',
          'Drill-down from aggregate metrics to individual conversations',
          'Export data for BI tools, spreadsheets, and leadership reporting',
          'Near-real-time and post-call analysis workflows',
        ],
      },
      {
        title: 'Enterprise-ready architecture',
        items: [
          'Multi-tenant isolation with per-tenant AI and analytics configuration',
          'API-first integration with transcription, voicebot, and recording platforms',
          'Pluggable LLM providers with tenant-specific endpoints and models',
          'Durable storage of analytics results linked to transcripts and call metadata',
        ],
      },
      {
        title: 'Security & governance',
        items: [
          'Deploy on-premises or in private cloud for data residency',
          'Role-based access to insights and underlying conversation data',
          'Audit trails for analysis requests and result access',
          'Tenant-scoped retention aligned with compliance requirements',
        ],
      },
      {
        title: 'Integrations',
        items: [
          'REST APIs for emotion, summary, and full transcript analytics',
          'Webhooks for post-call enrichment pipelines',
          'Push structured insights to CRM, ticketing, WFM, and data warehouses',
          'OpenTelemetry support for production observability',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Contact center QA', helps: 'Auto-summarize calls and prioritize low-sentiment interactions for review' },
      { useCase: 'Customer experience', helps: 'Track sentiment and resolution trends across queues and campaigns' },
      { useCase: 'Voicebot optimization', helps: 'Analyze bot conversations to improve intents, flows, and fallbacks' },
      { useCase: 'Compliance & disputes', helps: 'Produce structured summaries and topic tags for investigations' },
      { useCase: 'Sales & collections', helps: 'Detect objections, commitments, and outcome patterns' },
      { useCase: 'Executive reporting', helps: 'Roll up themes, volumes, and satisfaction drivers across the business' },
      { useCase: 'Agent coaching', helps: 'Deliver concise call highlights and emotional context for 1:1 sessions' },
    ]}
    insightsTable={{
      left: 'Insight',
      right: 'Business value',
      rows: [
        { left: 'Summary', right: 'Fast understanding without listening to full calls' },
        { left: 'Sentiment', right: 'Measure customer experience and agent impact' },
        { left: 'Emotion', right: 'Spot frustration, satisfaction, and escalation risk early' },
        { left: 'Resolution status', right: 'Track first-contact resolution and open issues' },
        { left: 'Keywords', right: 'Improve search, categorization, and routing' },
        { left: 'Topics', right: 'Identify trends, product issues, and demand drivers' },
      ],
    }}
    why={[
      {
        title: 'Insights built on real voice data',
        body: 'VoiceUp analyzes conversations captured through your telephony and AI stack — not disconnected text files or generic chat logs.',
      },
      {
        title: 'Actionable, not just descriptive',
        body: 'Structured outputs feed QA workflows, CRM fields, dashboards, and automation — not just static reports.',
      },
      {
        title: 'Insight on your terms',
        body: 'Select the analytics you need per use case, keeping cost predictable and responses fast.',
      },
      {
        title: 'Enterprise from day one',
        body: 'Multi-tenant configuration, private deployment, and API integration for production environments.',
      },
    ]}
    ctaTitle="Ready to turn conversations into competitive insight?"
    ctaBody="Request a demo or architecture review tailored to your contact center, voicebot, or compliance workflows."
  />
);

export default AIAnalyticsInsights;
