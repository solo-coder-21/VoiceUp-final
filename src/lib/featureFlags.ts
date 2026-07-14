/**
 * Site-wide feature flags.
 *
 * ─── HOW TO USE ────────────────────────────────────────────────────────────────
 *
 * There are TWO ways to toggle a section:
 *
 *   1. Edit the default below (fastest — just change the number):
 *        pricing: 1  → visible
 *        pricing: 0  → hidden site-wide (route + navbar + footer + inline CTAs)
 *
 *   2. Or override via an environment variable at build/dev time:
 *        // .env  (create at project root if it doesn't exist)
 *        VITE_ENABLE_PRICING=0
 *
 *   The .env override always wins over the default below.
 *
 * When a section is hidden (0):
 *   • Its route redirects to home
 *   • It's removed from the Navbar's desktop dropdown menu and mobile menu
 *   • It's removed from the Footer link columns
 *   • "Talk to sales" / "Contact sales" buttons that link to it are hidden across the site
 *     so visitors never see a dead-end link
 *
 * To add another toggle later, follow the same pattern:
 *   1. Add a key to `FLAG_DEFAULTS` below
 *   2. Add a matching `resolveFlag()` line
 *   3. Import the boolean where you need it
 */

const FLAG_DEFAULTS = {
  /** Pricing page (/pricing). Includes the "Contact sales" form. */
  pricing: 0,
} as const;

/**
 * Reads a boolean feature flag with priority: .env override > code default.
 * Any value other than "0" in the env is treated as enabled.
 */
function resolveFlag(envName: string, defaultValue: 0 | 1): boolean {
  const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
  const envValue = env?.[envName];
  if (envValue !== undefined && envValue !== '') {
    return envValue !== '0';
  }
  return defaultValue === 1;
}

export const isPricingEnabled = resolveFlag('VITE_ENABLE_PRICING', FLAG_DEFAULTS.pricing);
