import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { flowers } from "@/content/flowers";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Flower Blog — Nature's Symphony" },
      {
        name: "description",
        content:
          "Histories, symbolism and habitats of the flowers we love most — from sakura to the Himalayan blue poppy.",
      },
      { property: "og:title", content: "Flower Blog — Nature's Symphony" },
      {
        property: "og:description",
        content: "Stories of petals: cherry blossoms, lotus, edelweiss & more.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            The Flower Blog
          </span>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            STORIES OF{" "}
            <span className="text-gradient-aurora">PETALS &amp; PEOPLE</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Every flower is also a history. Here are the legends, science and
            symbolism behind a few of our favorites.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {flowers.map((f, i) => (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: f.slug }}
                className="glass group relative block h-full overflow-hidden rounded-3xl p-2 transition-transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-50 mix-blend-overlay"
                    style={{
                      background: `linear-gradient(135deg, ${f.accent}, transparent 70%)`,
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground/60">
                    <span>{f.origin}</span>
                    <span className="italic">{f.scientific}</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl tracking-wider">
                    {f.name}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/75">{f.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-foreground">
                    Read the story{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
