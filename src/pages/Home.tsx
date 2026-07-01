import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Camera, Flower2, Sprout } from "lucide-react";

const featured = [
  {
    to: "/gallery",
    icon: Camera,
    eyebrow: "Gallery",
    title: "Wild places",
    text: "Forests, oceans, deserts and waterfalls captured at the moment they sing.",
    accent: "var(--accent-teal)",
  },
  {
    to: "/blog",
    icon: Flower2,
    eyebrow: "Flower Blog",
    title: "Stories of petals",
    text: "Histories, symbolism and habitats of the flowers we love most.",
    accent: "var(--accent-violet)",
  },
  {
    to: "/literacy",
    icon: Sprout,
    eyebrow: "Nature Literacy",
    title: "Learn the wild",
    text: "Ecosystems, biodiversity and small acts of stewardship that scale.",
    accent: "var(--accent-green)",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative px-4 pb-24 pt-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 md:p-16"
          >
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)]" />
                A field guide for the wonderstruck
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-wider md:text-8xl">
                NATURE&apos;S{" "}
                <span className="text-gradient-aurora">SYMPHONY</span>
                <br />
                <span className="text-foreground/85">WHERE EVERY LEAF SINGS.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
                A vibrant gallery, a flower blog, and a place to learn the wild
                back — from old-growth forests and coral reefs to the histories
                of the petals at your feet.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/gallery"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 glow-violet"
                >
                  Explore the Gallery
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10"
                >
                  Read the Flower Blog
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-10 hidden h-[120%] w-[55%] md:block">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl tracking-wider md:text-5xl">
              THREE WAYS IN
            </h2>
            <p className="hidden max-w-sm text-sm text-foreground/60 md:block">
              Wander the imagery, read the histories, or learn how the whole
              thing breathes together.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.to}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link
                    to={f.to}
                    className="glass group relative block h-full overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
                  >
                    <div
                      className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity group-hover:opacity-80"
                      style={{ background: f.accent, opacity: 0.4 }}
                    />
                    <div className="relative">
                      <Icon className="mb-6" style={{ color: f.accent }} />
                      <div className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                        {f.eyebrow}
                      </div>
                      <h3 className="mt-2 font-display text-3xl tracking-wider">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm text-foreground/70">{f.text}</p>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm text-foreground/80">
                        Enter <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl leading-tight tracking-wide md:text-5xl"
          >
            &ldquo;In every walk with nature, one receives{" "}
            <span className="text-gradient-aurora">far more</span> than they
            seek.&rdquo;
          </motion.blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/50">
            — John Muir
          </p>
        </div>
      </section>
    </>
  );
}
