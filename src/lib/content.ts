// Auto-loads every markdown file under /content/<section>/*.md at build time.
// Add a new .md file to a section folder and it appears on the site automatically.

export type PostFrontmatter = {
  title: string;
  date?: string;
  cover?: string;
  excerpt?: string;
  [key: string]: string | undefined;
};

export type Post = {
  slug: string;
  section: string;
  frontmatter: PostFrontmatter;
  body: string; // markdown body (front matter stripped)
};

export type Section = {
  slug: string; // URL segment, e.g. "gallery"
  label: string; // Nav label
  title: string; // Page hero title
  eyebrow: string;
  tagline: string;
};

// Nav-bar sections. Adding a new one? Create a folder /content/<slug>/
// and add a matching entry here — the loader below will pick it up.
export const sections: Section[] = [
  {
    slug: "gallery",
    label: "Gallery",
    eyebrow: "The Gallery",
    title: "Wild places, caught mid-breath",
    tagline:
      "Forests, oceans, deserts, waterfalls — a rolling gallery of the wild.",
  },
  {
    slug: "blog",
    label: "Flower Blog",
    eyebrow: "The Flower Blog",
    title: "Stories of petals & people",
    tagline:
      "Histories, symbolism, and habitats of the flowers we love most.",
  },
  {
    slug: "literacy",
    label: "Nature Literacy",
    eyebrow: "Nature Literacy",
    title: "Learn the wild back",
    tagline:
      "Ecosystems, biodiversity, climate, and small acts that scale.",
  },
];

// Minimal YAML-ish front matter parser (browser-safe, no Node deps).
// Supports: --- delimiters, "key: value" pairs, optional quotes, lists via
// "key:" then "- item" lines. Values are trimmed.
function parseFrontmatter(raw: string): { data: PostFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: { title: "Untitled" }, body: raw };

  const [, block, body] = match;
  const data: Record<string, string> = {};
  const lines = block.split(/\r?\n/);
  let currentListKey: string | null = null;
  const lists: Record<string, string[]> = {};

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");
    if (!line.trim()) continue;

    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentListKey) {
      lists[currentListKey].push(stripQuotes(listItem[1].trim()));
      continue;
    }

    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (kv) {
      const [, key, value] = kv;
      const trimmed = value.trim();
      if (trimmed === "") {
        currentListKey = key;
        lists[key] = [];
      } else {
        data[key] = stripQuotes(trimmed);
        currentListKey = null;
      }
    }
  }

  // Merge list-typed values as a comma-joined string so PostFrontmatter stays
  // string-typed; consumers can .split(",") when needed. Simplest for now.
  for (const [k, v] of Object.entries(lists)) {
    data[k] = v.join(", ");
  }

  if (!data.title) data.title = "Untitled";
  return { data: data as PostFrontmatter, body: body.trim() };
}

function stripQuotes(v: string): string {
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  return v;
}

// Grab every markdown file under /content/**/*.md as a raw string.
// Vite bundles these at build time, so a git push with a new .md file
// = new post on the site after the next build.
const rawFiles = import.meta.glob("/content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const allPosts: Post[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    // path looks like "/content/blog/lotus.md"
    const m = path.match(/^\/content\/([^/]+)\/([^/]+)\.md$/);
    if (!m) return null;
    const [, section, slug] = m;
    const { data, body } = parseFrontmatter(raw);
    return { slug, section, frontmatter: data, body };
  })
  .filter((p): p is Post => p !== null);

export function getPostsForSection(sectionSlug: string): Post[] {
  return allPosts
    .filter((p) => p.section === sectionSlug)
    .sort((a, b) => {
      const da = a.frontmatter.date ?? "";
      const db = b.frontmatter.date ?? "";
      return db.localeCompare(da); // newest first
    });
}

export function getPost(sectionSlug: string, postSlug: string): Post | null {
  return (
    allPosts.find((p) => p.section === sectionSlug && p.slug === postSlug) ??
    null
  );
}
