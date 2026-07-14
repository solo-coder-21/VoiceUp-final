import React, { useEffect, useState } from 'react';

type Props = {
  /** The label shown inside the floating pill (usually the page eyebrow text). */
  eyebrow: string;
  /**
   * Ref to the element that acts as the visibility trigger — typically the hero's eyebrow chip.
   * When this element scrolls above the viewport, the floating indicator appears.
   */
  triggerRef: React.RefObject<HTMLElement>;
};

/**
 * A fixed, top-centered pill that fades in once the user scrolls past the hero eyebrow.
 * Shared across all product / solution / About / Pricing / Demos / Customers pages so the site
 * always tells the visitor which section they're currently reading.
 *
 * Not used on the homepage — the homepage doesn't have a single "you're reading X" concept.
 */
const SectionIndicator: React.FC<Props> = ({ eyebrow, triggerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed top-[68px] left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-voiceup-navy/90 backdrop-blur-lg border border-white/20 shadow-xl text-[11px] sm:text-xs uppercase tracking-wider text-white font-semibold whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-voiceup-skyblue opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-voiceup-skyblue" />
        </span>
        {eyebrow}
      </p>
    </div>
  );
};

export default SectionIndicator;
