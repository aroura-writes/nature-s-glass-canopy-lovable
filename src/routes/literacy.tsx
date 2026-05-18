import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { literacySections } from "@/content/literacy";

export const Route = createFileRoute("/literacy")({
  head: () => ({
    meta: [
      { title: "Nature Literacy — Nature's Symphony" },
      {
        name: "description",
        content:
          "Ecosystems, biodiversity, climate, and small acts of stewardship — learn the wild back.",
      },
      { property: "og:title", content: "Nature Literacy — Nature's Symphony" },
      {
        property: "og:description",
        content: "Learn how ecosystems breathe together.",
      },
      { property: "og:url", content: "/literacy" },
    ],
    links: [{ rel: "canonical", href: "/literacy" }],
  }),
  component: Literacy,
});

function Literacy() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            Nature Literacy
          </span>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            LEARN THE WILD{" "}
            <span className="text-gradient-aurora">BACK</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A short curriculum for the curious — how ecosystems breathe, why
            variety is resilience, and what we can do about it.
          </p>
        </header>

        <div className="space-y-16">
          {literacySections.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid gap-6 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="glass overflow-hidden rounded-3xl p-2">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="glass rounded-3xl p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {s.eyebrow}
                </div>
                <h2 className="mt-3 font-display text-3xl tracking-wider md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-foreground/80">{s.body}</p>
                {s.stats && (
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {s.stats.map((st) => (
                      <div
                        key={st.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3"
                      >
                        <div className="font-display text-2xl text-gradient-aurora">
                          {st.value}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-foreground/60">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
