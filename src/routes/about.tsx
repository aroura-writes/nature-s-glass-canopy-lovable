import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nature's Symphony" },
      {
        name: "description",
        content:
          "Nature's Symphony is a love letter to wild places — built for forest lovers, photographers, and the merely curious.",
      },
      { property: "og:title", content: "About — Nature's Symphony" },
      {
        property: "og:description",
        content: "A love letter to wild places.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Wonder first",
    body:
      "We start from awe. Facts and conservation follow, but the door is always beauty.",
  },
  {
    title: "Quiet design",
    body:
      "The photographs are the loudest thing here. Everything else gets out of the way.",
  },
  {
    title: "Open & free",
    body:
      "No paywalls, no logins. Just a place to come back to when the city gets too much.",
  },
];

function About() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-10 md:p-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            About
          </span>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            A LOVE LETTER TO{" "}
            <span className="text-gradient-aurora">WILD PLACES</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Nature&apos;s Symphony is a small, public field guide for anyone
            who has ever stood under a redwood, in a tide pool, or in front of
            a single absurd flower and felt grateful.
          </p>
          <p className="mt-4 max-w-2xl text-foreground/75">
            We collect imagery from across the world&apos;s biomes, write
            stories about the flowers our cultures have loved for centuries,
            and quietly teach the science of how it all hangs together. No
            advertising. No tracking. Just a place to come back to.
          </p>
        </motion.header>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="font-display text-2xl tracking-wider">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/75">{v.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass mt-10 rounded-3xl p-8 text-center md:p-12">
          <h2 className="font-display text-3xl tracking-wider md:text-5xl">
            COME <span className="text-gradient-aurora">WANDER.</span>
          </h2>
          <p className="mt-3 text-foreground/70">
            Start with the gallery, then meet a flower.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/gallery"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-violet"
            >
              Open the Gallery
            </Link>
            <Link
              to="/blog"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-foreground hover:bg-white/10"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
