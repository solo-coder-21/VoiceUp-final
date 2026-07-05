import { BarChart3 } from 'lucide-react';
import ProductPage from '@/components/ProductPage';

const Analytics = () => (
  <ProductPage
    eyebrow="VoiceUp Analytics Solution"
    title="VoiceUp Analytics — Turn every conversation into actionable insight"
    tagline="Move beyond raw transcripts. VoiceUp Analytics applies AI to customer and agent interactions — delivering summaries, sentiment, topics, and outcomes which operations, QA, and leadership teams can act on."
    heroIcon={<BarChart3 />}
    overview={[
      'VoiceUp Analytics transforms voice and text conversations into structured intelligence. It works on call transcripts, voicebot dialogues, and chat logs — extracting meaning, measuring experience, and surfacing patterns at scale.',
      'Designed for contact centers and regulated industries, the platform supports selective, on-demand analysis: request only the insights you need, from a quick emotion check to a full conversation review. Multi-tenant configuration, API-first delivery, and flexible deployment let you embed analytics into QA workflows, CRM updates, dashboards, and compliance processes — without building a separate AI stack.',
    ]}
    features={[
      {
        title: 'AI-powered conversation analysis',
        items: [
          'Automated summaries — brief overviews or detailed narrative recaps',
          'Dominant emotion detection across the interaction',
          'Sentiment scoring on a continuous positive-to-negative scale',
          'Resolution status classification (resolved, pending, escalated, unresolved)',
          'Keyword and topic extraction for search, tagging, and trend analysis',
        ],
      },
      {
        title: 'Selective, cost-efficient insights',
        items: [
          'Request only the analytics you need per call or batch',
          'Lite and full analysis modes for speed vs. depth',
          'Configurable prompt templates per tenant or use case',
          'Structured JSON outputs for easy integration with downstream systems',
        ],
      },
      {
        title: 'Transcript-centric intelligence',
        items: [
          'Analyze full conversation transcripts from calls, bots, and recordings',
          'Multi-party interactions with party and role context',
          'Correlation across call legs and sessions via conversation and correlation IDs',
          'Post-call and near-real-time analysis workflows',
        ],
      },
      {
        title: 'Emotion & experience measurement',
        items: [
          'Detect customer frustration, satisfaction, neutrality, and other emotional signals',
          'Track sentiment shifts across the conversation lifecycle',
          'Flag interactions that may need supervisor review or callback',
          'Feed experience metrics into NPS, CSAT, and quality programs',
        ],
      },
      {
        title: 'Operational & QA analytics',
        items: [
          'Identify recurring issues, intents, and contact drivers',
          'Surface escalation patterns and unresolved outcomes',
          'Support sample-based and rules-based QA selection',
          'Enable coaching with summarized call highlights and key moments',
        ],
      },
      {
        title: 'Dashboards & reporting',
        items: [
          'Trend views for sentiment, resolution rate, and topic volume',
          'Agent, queue, campaign, and time-period comparisons',
          'Drill-down from aggregate metrics to individual conversations',
          'Export for BI tools, spreadsheets, and executive reporting',
        ],
      },
      {
        title: 'Enterprise architecture',
        items: [
          'Multi-tenant isolation with per-tenant LLM and analytics configuration',
          'API-first design for CRM, ticketing, WFM, and custom portals',
          'Pluggable LLM providers with tenant-specific models and endpoints',
          'Durable storage of analytics results linked to transcripts and recordings',
        ],
      },
      {
        title: 'Security & governance',
        items: [
          'Deploy on-premises or in private cloud for data residency',
          'Role-based access to analytics and underlying conversations',
          'Audit trails for analysis requests and result retrieval',
          'Tenant-scoped retention aligned with your compliance policies',
        ],
      },
      {
        title: 'Integrations',
        items: [
          'REST APIs for emotion, summary, and full transcript analytics',
          'Webhook-ready post-call pipelines for automated enrichment',
          'Push structured insights to CRM, case management, and data warehouses',
          'OpenTelemetry support for production observability',
        ],
      },
    ]}
    useCases={[
      { useCase: 'Contact center QA', helps: 'Auto-summarize calls and flag low sentiment for review' },
      { useCase: 'Customer experience', helps: 'Track sentiment and resolution trends across queues and campaigns' },
      { useCase: 'Voicebot optimization', helps: 'Analyze bot conversations to improve intents and fallbacks' },
      { useCase: 'Compliance & disputes', helps: 'Produce structured summaries and topic tags for investigations' },
      { useCase: 'Sales & collections', helps: 'Identify commitment language, objections, and outcome patterns' },
      { useCase: 'Executive reporting', helps: 'Roll up themes, volumes, and satisfaction drivers across the operation' },
      { useCase: 'Agent coaching', helps: 'Deliver concise call summaries and emotional context for 1:1 sessions' },
    ]}
    insightsTable={{
      left: 'Insight',
      right: 'Description',
      rows: [
        { left: 'Summary', right: 'Concise or detailed recap of what was discussed and concluded' },
        { left: 'Dominant emotion', right: 'Primary emotional tone of the customer or interaction' },
        { left: 'Sentiment score', right: 'Numeric measure of overall positivity or negativity' },
        { left: 'Resolution status', right: 'Whether the issue was resolved, escalated, or left open' },
        { left: 'Keywords', right: 'Important terms and phrases for search and categorization' },
        { left: 'Topics', right: 'High-level themes discussed during the conversation' },
      ],
    }}
    why={[
      {
        title: 'Analytics built on real voice data',
        body: 'VoiceUp Analytics sits on the same platform that captures and transcribes live conversations — not a generic text tool disconnected from your telephony stack.',
      },
      {
        title: 'Insight on demand',
        body: 'Select only the analytics you need per workflow, keeping costs predictable and responses fast.',
      },
      {
        title: 'Structured outputs, not just prose',
        body: 'Results are returned in machine-readable formats ready for CRM fields, dashboards, and automation.',
      },
      {
        title: 'Enterprise-ready from day one',
        body: 'Multi-tenant configuration, private deployment options, and API integration for production environments.',
      },
    ]}
    ctaTitle="Ready to unlock insight from every conversation?"
    ctaBody="Request a demo or architecture review tailored to your contact center, voicebot, or compliance workflows."
  />
);

export default Analytics;
