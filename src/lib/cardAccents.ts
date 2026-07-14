/**
 * Six cycling visual variants used across all "placard grids" on the site
 * (About "What guides our work", Pricing "What drives pricing", Homepage "Platform highlights",
 * ProductPage "Key features", etc.).
 *
 * Keeps VoiceUp's primary cyan as the dominant color while sprinkling chart-blue, deeper cyan,
 * navy, and the warm pastel accents for visual rhythm — no card looks identical to its neighbor.
 */

export type CardAccent = {
  /** Top-of-card colored strip */
  strip: string;
  /** Icon badge background + text color */
  badge: string;
  /** Bullet-dot / accent color */
  dot: string;
  /** Decorative hover blob color */
  blob: string;
};

export const cardAccents: CardAccent[] = [
  {
    strip: 'bg-voiceup-skyblue',
    badge: 'bg-voiceup-skyblue text-white',
    dot: 'bg-voiceup-skyblue',
    blob: 'bg-voiceup-skyblue',
  },
  {
    strip: 'bg-voiceup-chartblue',
    badge: 'bg-voiceup-chartblue text-white',
    dot: 'bg-voiceup-chartblue',
    blob: 'bg-voiceup-chartblue',
  },
  {
    strip: 'bg-voiceup-periwinkle',
    badge: 'bg-voiceup-periwinkle text-white',
    dot: 'bg-voiceup-periwinkle',
    blob: 'bg-voiceup-periwinkle',
  },
  {
    strip: 'bg-voiceup-lavender',
    badge: 'bg-voiceup-lavender text-voiceup-navy',
    dot: 'bg-voiceup-chartblue',
    blob: 'bg-voiceup-chartblue',
  },
  {
    strip: 'bg-voiceup-navy',
    badge: 'bg-voiceup-navy text-white',
    dot: 'bg-voiceup-navy',
    blob: 'bg-voiceup-navy',
  },
  {
    strip: 'bg-voiceup-blush',
    badge: 'bg-voiceup-blush text-voiceup-navy',
    dot: 'bg-voiceup-skyblue',
    blob: 'bg-voiceup-skyblue',
  },
];
