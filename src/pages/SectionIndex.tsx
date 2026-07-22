import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getPostsForSection, type Section } from "@/lib/content";
import { useEffect, useMemo } from "react";

const PAGE_SIZE = 6;

export function SectionIndex({ section }: { section: Section }) {
  const posts = getPostsForSection(section.slug);
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const rawPage = parseInt(searchParams.get("page") ?? "1", 10);
  const page = Math.min(Math.max(1, isNaN(rawPage) ? 1 : rawPage), totalPages);

  const visible = useMemo(
    () => posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [posts, page]
  );

  useEffect(() => {
    document.title = `${section.label} — Nature's Symphony`;
  }, [section]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goTo = (p: number) => {
    const next = new URLSearchParams(searchParams);
    if (p <= 1) next.delete("page");
    else next.set("page", String(p));
    setSearchParams(next);
  };

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
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {visible.map((p, i) => (
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

            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-12 flex items-center justify-center gap-2"
              >
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  className="glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => goTo(n)}
                    aria-current={n === page ? "page" : undefined}
                    className={`glass h-10 w-10 rounded-full text-sm transition hover:-translate-y-0.5 ${
                      n === page
                        ? "text-gradient-aurora font-bold ring-1 ring-white/30"
                        : "text-foreground/70"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                  className="glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Next <ChevronRight size={16} />
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
