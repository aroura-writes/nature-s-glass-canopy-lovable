## Nature's Symphony — Build Plan

A vibrant, glassmorphic 5-page nature site built on this project's TanStack Start stack, deployable to Netlify.

### Pages (file-based routes under `src/routes/`)
1. `index.tsx` — **Home**: full-bleed cinematic hero with animated aurora/blob background, tagline "Nature's Symphony — where every leaf sings", dual CTAs (Explore Gallery, Read the Blog), featured glass-card teasers for Gallery, Flower Blog, and Literacy.
2. `gallery.tsx` — **Gallery**: category tabs (Forests, Oceans, Deserts, Waterfalls) over a masonry grid of Unsplash nature photos in frosted-glass frames with hover zoom and a lightbox dialog.
3. `blog.tsx` — **Flower Blog** index: glass cards (hero image, title, excerpt) linking to articles.
4. `blog.$slug.tsx` — individual flower article (history, symbolism, habitat, fun facts) with dynamic `head()` for SEO.
5. `literacy.tsx` — **Nature Literacy**: educational sections on ecosystems, biodiversity, conservation, climate facts as alternating glass panels + stat cards.
6. `about.tsx` — **About**: mission, story, values.

Shared `__root.tsx` provides the persistent glass navbar (Home, Gallery, Flower Blog, Nature Literacy, About), aurora background layer, and footer. Each route defines its own `head()` (title, description, og tags).

### Design system (`src/styles.css`)
Liquid aurora glassmorphism via semantic oklch tokens:
- Background: deep indigo `#0D0A1E` → forest dark `#0A1628` gradient
- Accents: electric violet, coral, teal, vivid emerald — `--accent-violet`, `--accent-coral`, `--accent-teal`, `--accent-green`
- Glass tokens: `--glass-bg`, `--glass-border`, `--glass-blur`, `--shadow-glow`
- Gradients: `--gradient-aurora`, `--gradient-hero`
- Type: **Bebas Neue / Archivo Black** condensed display + **Inter** body (Google Fonts via `__root.tsx`)
- Shared `<GlassCard>` and `<AuroraBackground>` components

### Motion
Framer Motion for hero reveal, slow blob drift, scroll-triggered fade-ups, and lightbox transitions.

### Content
- Images: Unsplash hotlinks (`images.unsplash.com/...`) by category — keeps the build light, no asset generation
- Editable copy lives in `src/content/flowers.ts` and `src/content/literacy.ts` so it's trivial to swap to markdown / a Git-based CMS later

### Netlify + future CMS
- Add `netlify.toml` (`command = "bun run build"`, `publish = "dist"`)
- TinaCMS proper needs a Next.js-style backend and isn't a clean fit here. For a Netlify-friendly WYSIWYG dashboard later, **Decap CMS** is the recommended path — Git-based, drop-in `/admin` route. I'll structure content so this is a small follow-up, not a rewrite. (No CMS wiring this pass.)

### Out of scope (this pass)
- No auth, database, or Lovable Cloud
- No CMS wiring
- No AI image generation (Unsplash only)

### Deliverable
A polished, deployable site you can push to GitHub and connect to Netlify, ready for a Decap CMS follow-up.
