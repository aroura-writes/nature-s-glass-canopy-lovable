import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getPostsForSection, type Section } from "@/lib/content";
import { useEffect } from "react";

export function SectionIndex({ section }: { section: Section }) {
  const posts = getPostsForSection(section.slug);

  useEffect(() => {
    document.title = `${section.label} — Nature's Symphony`;
  }, [section]);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            {section.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            {section.title.split(" ").slice(0, -2).join(" ").toUpperCase()}{" "}
            <span className="text-gradient-aurora">
              {section.title.split(" ").slice(-2).join(" ").toUpperCase()}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">{section.tagline}</p>
        </header>

        {posts.length === 0 ? (
          <div className="glass rounded-3xl p-10 text-center">
            <h2 className="font-display text-2xl tracking-wider">
              NOTHING HERE YET
            </h2>
            <p className="mt-3 text-sm text-foreground/70">
              Add a markdown file to{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5">
                content/{section.slug}/
              </code>{" "}
              and it will appear here on the next build.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <Link
                  to={`/${section.slug}/${p.slug}`}
                  className="glass group relative block h-full overflow-hidden rounded-3xl p-2 transition-transform hover:-translate-y-1"
                >
                  {p.frontmatter.cover && (
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={p.frontmatter.cover}
                        alt={p.frontmatter.title}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {p.frontmatter.date && (
                      <div className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                        {p.frontmatter.date}
                      </div>
                    )}
                    <h2 className="mt-2 font-display text-3xl tracking-wider">
                      {p.frontmatter.title}
                    </h2>
                    {p.frontmatter.excerpt && (
                      <p className="mt-2 text-sm text-foreground/75">
                        {p.frontmatter.excerpt}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-foreground">
                      Read more{" "}
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
        )}
      </div>
    </section>
  );
}
