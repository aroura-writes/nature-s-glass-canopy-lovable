# Nature's Symphony 🌿

A vibrant, dark-themed nature site — forests, oceans, deserts, waterfalls, plus a flower blog and nature-literacy essays. All content is authored in **Markdown**, so publishing a new post is just adding a `.md` file and pushing to GitHub.

Built with **Vite + React + TypeScript**, styled with **Tailwind v4**, animated with **motion**. Deploys to **GitHub Pages** with one workflow.

---

## ✍️ Add a new post (the whole workflow)

Every nav-bar page is powered by the markdown files inside a matching folder under [`content/`](./content). Adding a post is just creating a new `.md` file in the right folder.

| Nav bar | Folder | What goes here |
| ------- | ------ | -------------- |
| **Gallery** | `content/gallery/` | Photo posts — one image + short story per file. |
| **Flower Blog** | `content/blog/` | Flower articles — history, symbolism, habitat, field notes. |
| **Nature Literacy** | `content/literacy/` | Educational essays — ecosystems, biodiversity, climate, conservation. |

### 1. Add a new Gallery post

Create `content/gallery/my-forest-spot.md`:

```markdown
---
title: Morning fog in the redwoods
date: 2026-07-22
cover: https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80
excerpt: Fog rolls through thousand-year trunks along the northern California coast.
---

The redwood canopy behaves like a second sky. On damp mornings the fog condenses on needles two hundred feet above the forest floor and drips down for hours.

## Where to see it

- **Redwood National Park**, California
- **Muir Woods**, just north of San Francisco
```

Push the file. It will appear on the **Gallery** page at `/#/gallery/morning-fog-in-the-redwoods`.

### 2. Add a new Flower Blog post

Create `content/blog/my-flower.md`:

```markdown
---
title: Cherry Blossom
date: 2026-07-22
cover: https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1600&q=80
excerpt: A fleeting pink storm that has shaped poetry and philosophy.
---

## History

Sakura have been cultivated in Japan for more than a thousand years.

## Symbolism

In Japan they embody *mono no aware* — the bittersweet awareness of transience.

## Habitat

Native to the temperate forests of Japan, Korea, and parts of China.

## Field notes

- Peak bloom lasts only about a week.
```

Push the file. It will appear on the **Flower Blog** page at `/#/blog/cherry-blossom`.

### 3. Add a new Nature Literacy post

Create `content/literacy/my-topic.md`:

```markdown
---
title: Variety is resilience
date: 2026-07-22
cover: https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80
excerpt: Biodiversity is the planet's insurance policy.
---

The more variants a system holds — of genes, species, and habitats — the better it survives shocks.

## Why it matters

- Tropical rainforests cover 6% of Earth's land surface yet shelter more than half of all terrestrial species.
- Coral reefs cover less than 0.1% of the ocean and host a quarter of all marine life.
```

Push the file. It will appear on the **Nature Literacy** page at `/#/literacy/variety-is-resilience`.

### Important rules

- The **file name becomes the URL**. Use lowercase letters, numbers, and hyphens only. Example: `my-new-post.md` → URL `/#/blog/my-new-post`.
- The **folder name decides which nav bar** the post appears under. Put gallery posts in `content/gallery/`, blog posts in `content/blog/`, and literacy posts in `content/literacy/`.
- Posts are sorted by `date` (newest first). Use `YYYY-MM-DD` format.
- After you push, GitHub Actions rebuilds the site and the new post appears automatically.

**Front-matter fields** (all optional except `title`):

| Field     | Purpose                                            |
| --------- | -------------------------------------------------- |
| `title`   | Post title (required)                              |
| `date`    | `YYYY-MM-DD` — newest posts show first             |
| `cover`   | Full URL of the cover image                        |
| `excerpt` | Short teaser shown on the section listing page     |

---

## 🧭 Add a new nav-bar section

1. Create a new folder inside `content/`, e.g. `content/journal/`.
2. Open `src/lib/content.ts` and add an entry to the `sections` array:

   ```ts
   {
     slug: "journal",
     label: "Journal",
     eyebrow: "The Journal",
     title: "Field journal entries",
     tagline: "Short notes from long walks.",
   }
   ```

3. Push. The nav-bar link, list page, and post pages all wire themselves up automatically.

---

## 🚀 Deploy to GitHub Pages

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages → Build and deployment**, and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

Routing uses `HashRouter`, so deep links like `.../#/blog/cherry-blossom` work everywhere on GitHub Pages — no 404 handling required.

---

## 🛠 Local development

```bash
bun install
bun run dev       # http://localhost:8080
bun run build     # outputs to dist/
bun run preview   # preview the production build
```

## Project layout

```
content/
  gallery/*.md          ← photo posts
  blog/*.md             ← flower stories
  literacy/*.md         ← nature-literacy essays
src/
  pages/                ← Home, About, SectionIndex, SectionPost, NotFound
  components/           ← Navbar, Footer, AuroraBackground, UI kit
  lib/content.ts        ← markdown loader + section registry
  styles.css            ← design tokens + glassmorphism + prose styles
.github/workflows/
  deploy.yml            ← GitHub Pages deploy
```

Made with reverence. 🌲
