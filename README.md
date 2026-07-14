# VoiceUp Automation Hub

Marketing site for VoiceUp — an AI-powered voice automation platform for contact centers.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/) for client-side routing
- [TanStack Query](https://tanstack.com/query) for data fetching
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

---

## For new contributors — a quick tour in plain language

You don't need to know React to make simple changes here. Almost every "change the text" or "change the color of this button" edit is a one-line change. This section walks through the most common tasks.

### Where things live

```
src/
  pages/            ← One file per page (Index, Demos, RequestDemo, Pricing, Customers, About, ...)
  pages/products/   ← Individual product pages (Outbound, Transcriptions, VoiceBots, Recording, Analytics)
  pages/solutions/  ← Individual solution pages (AI Voice Connector, AI Analytics & Insights)
  components/       ← Reusable pieces used across pages (Navbar, Footer, ProductPage template)
  lib/              ← Small utilities:
    featureFlags.ts   ← Toggle whole sections on/off (Pricing today, more later)
    formSubmit.ts     ← Where form submissions get sent (Web3Forms → email)
    cardAccents.ts    ← Shared cycling colors used on card grids
  index.css         ← Global styles + animations + Tailwind directives
public/
  project-uploads/  ← Static images shipped with the site (logos, etc.)
  voiceup-logo.png  ← Site logo used in the navbar and tab icon
```

If you can find the section on the live site, you can find the file that owns it — the file names match what the section is called (e.g. "Pricing" section → `src/pages/Pricing.tsx`).

### 1. Turn a section on or off (feature flags)

The Pricing page is currently hidden site-wide. You can toggle it back on without a rebuild.

**Option A — edit one number in the code (fastest):**

Open [`src/lib/featureFlags.ts`](src/lib/featureFlags.ts):

```ts
const FLAG_DEFAULTS = {
  pricing: 0,   // ← change to 1 to enable, 0 to disable
} as const;
```

- `1` → Pricing page, navbar link, footer link, and all "Contact Sales" buttons appear
- `0` → Everything Pricing-related is hidden site-wide. The `/pricing` URL redirects to home.

Save the file and refresh the browser — the change is live.

**Option B — override via an environment variable (no code change):**

Create a `.env` file at the project root (same folder as `package.json`) if one doesn't exist yet, and add:

```
VITE_ENABLE_PRICING=1
```

Restart `npm run dev` and the flag is picked up. Setting it to `0` disables Pricing even if the code default is `1`. The `.env` value always wins.

**To add a new toggle** (e.g. hide the Customers page):

1. Add a new key in `FLAG_DEFAULTS` in `src/lib/featureFlags.ts`:
   ```ts
   const FLAG_DEFAULTS = {
     pricing: 0,
     customers: 1,   // new toggle
   } as const;
   ```
2. Export a resolved boolean below it:
   ```ts
   export const isCustomersEnabled = resolveFlag('VITE_ENABLE_CUSTOMERS', FLAG_DEFAULTS.customers);
   ```
3. Import `isCustomersEnabled` where you want to hide things (Navbar, Footer, route in `src/App.tsx`).

### 2. Change the recipient email for form submissions

When someone fills the "Request a Demo" or "Contact Sales" forms, the message is sent by [Web3Forms](https://web3forms.com/) to a configured inbox. Two things drive this:

- **`src/lib/formSubmit.ts`** holds the Web3Forms access key (`WEB3FORMS_ACCESS_KEY`) and a display email (`TO_EMAIL`).
- The **inbox that actually receives the email** is whichever address the access key was created against on [web3forms.com](https://web3forms.com/) — not the string in the code.

To switch the recipient inbox:

1. Log in to [web3forms.com](https://web3forms.com/) with the current owner's email
2. Either add a new access key for a different email, or update the access key's forwarding address
3. Paste the new access key into `WEB3FORMS_ACCESS_KEY` in `src/lib/formSubmit.ts`
4. Update `TO_EMAIL` in the same file to match (this is only used for the mailto fallback and any UI copy)

The Web3Forms free tier allows 250 submissions/month. See `src/lib/formSubmit.ts` for the full request payload if you need to add fields to what gets emailed.

### 3. Edit the text on a page

Every headline, paragraph, and CTA lives directly in the page's `.tsx` file as JSX text. To change wording:

1. Find the page file (e.g. `src/pages/About.tsx`, `src/pages/Index.tsx`, `src/pages/products/Outbound.tsx`)
2. Search for the exact text you want to change (Ctrl+F / Cmd+F in your editor)
3. Edit the string, save the file, refresh the browser

**Example** — changing the homepage headline in `src/pages/Index.tsx`:

```tsx
<h1 className="...">
  Don&apos;t miss
  <br />
  <span>any call.</span>
</h1>
```

Change `Don't miss any call.` to whatever you want.

### 4. Add a new product or solution page

The product/solution pages all share a single template so a new page is mostly data:

1. Copy an existing one, e.g. `src/pages/products/Outbound.tsx` → `src/pages/products/NewProduct.tsx`
2. Update the `eyebrow`, `title`, `tagline`, `overview` (paragraphs), `features`, `useCases`, and `why` fields
3. Register the route in `src/App.tsx`:
   ```tsx
   import NewProduct from "./pages/products/NewProduct";
   ...
   <Route path="/products/new-product" element={<NewProduct />} />
   ```
4. Add it to the navbar dropdown in `src/components/Navbar.tsx` inside the `productLinks` array
5. Add a card for it on the homepage in `src/pages/Index.tsx` inside the `products` array

### 5. Change colors

Brand colors live in [`tailwind.config.ts`](tailwind.config.ts) under `voiceup-*`. If you want the primary cyan a little darker, edit `voiceup-skyblue`. All components that use `text-voiceup-skyblue`, `bg-voiceup-skyblue`, etc. pick up the change automatically.

### 6. Change the site logo or favicon

- Site logo: replace `public/voiceup-logo.png`
- Browser tab icon: same file (referenced from `index.html`)
- Image assets used inside pages (customer logos, etc.): drop into `public/project-uploads/` and reference as `/project-uploads/your-file.png` in the code

### 7. Common tasks — where to look

| I want to… | Edit this file |
|---|---|
| Change the homepage hero text | `src/pages/Index.tsx` |
| Change the "About VoiceUp" copy | `src/pages/About.tsx` |
| Change what a product page says | `src/pages/products/<Product>.tsx` |
| Add/remove a nav menu item | `src/components/Navbar.tsx` |
| Add/remove a footer link | `src/components/Footer.tsx` |
| Toggle the Pricing section on or off | `src/lib/featureFlags.ts` |
| Change the recipient email for forms | `src/lib/formSubmit.ts` + Web3Forms dashboard |
| Add a customer story | `src/pages/Customers.tsx` (`customerStories` array) |
| Change the video demo thumbnails | `src/pages/Demos.tsx` (`videoDemos` array) |
| Add a new page (e.g. Blog) | Create `src/pages/Blog.tsx`, register route in `src/App.tsx`, add link in `Navbar.tsx`/`Footer.tsx` |
| Change brand colors | `tailwind.config.ts` |
| Change global styles or animations | `src/index.css` |

### 8. Deploying to Vercel

The site is a plain Vite build. On Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables are strictly required, but you can set `VITE_ENABLE_PRICING=0`/`1` to control the Pricing flag per environment.

`vercel.json` already contains SPA rewrites so client-side routes (`/pricing`, `/customers`, etc.) resolve correctly on refresh.

### 9. Before pushing changes

Always run one quick sanity check locally:

```bash
npm run build
```

If the build succeeds (`✓ built in ...`), your changes are ready to commit and push. If it fails, the error message will point at the file and line — usually a typo or a missing import.

---

## Support

Questions? Email **info@voiceup.ai**.
