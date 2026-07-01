# Nature's Symphony 🌿

A vibrant, dark-themed nature site — forests, oceans, deserts, waterfalls, plus a flower blog and nature-literacy essays. All content is authored in **Markdown**, so publishing a new post is just adding a `.md` file and pushing to GitHub.

Built with **Vite + React + TypeScript**, styled with **Tailwind v4**, animated with **motion**. Deploys to **GitHub Pages** with one workflow.

---

## ✍️ Add a new post (the whole workflow)

1. Pick a section folder inside [`content/`](./content):
   - `content/gallery/` — photo posts
   - `content/blog/` — flower stories
   - `content/literacy/` — nature-literacy essays
2. Create a new file, e.g. `content/blog/my-new-flower.md`.
3. Fill in the front matter and body:

   ```markdown
   ---
   title: My New Flower
   date: 2026-07-01
   cover: https://example.com/photo.jpg
   excerpt: A one-line teaser shown on the list page.
   ---

   Write the article body in normal **Markdown**.

   ## Subheading

   - Bullet lists work
   - _Italics_, **bold**, [links](https://example.com), images, blockquotes, tables — all supported (GFM).
   ```

4. Commit and push. GitHub Actions rebuilds the site and the post appears automatically.

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
