import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { getFlower } from "@/content/flowers";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const flower = getFlower(params.slug);
    if (!flower) throw notFound();
    return { flower };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Flower not found" }] };
    const f = loaderData.flower;
    return {
      meta: [
        { title: `${f.name} — Nature's Symphony` },
        { name: "description", content: f.excerpt },
        { property: "og:title", content: f.name },
        { property: "og:description", content: f.excerpt },
        { property: "og:image", content: f.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:image", content: f.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: f.name,
            image: f.image,
            description: f.excerpt,
          }),
        },
      ],
    };
  },
  component: FlowerArticle,
  notFoundComponent: () => (
    <div className="px-4 py-20 text-center">
      <h1 className="font-display text-4xl">Flower not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">
        Back to the blog
      </Link>
    </div>
  ),
});

function FlowerArticle() {
  const { flower: f } = Route.useLoaderData();

  return (
    <article className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
        >
          <ArrowLeft size={14} /> All flowers
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
            <span>{f.origin}</span>
            <span>•</span>
            <span className="italic">{f.scientific}</span>
          </div>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            {f.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            {f.excerpt}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass mt-8 overflow-hidden rounded-3xl p-2"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={f.image}
              alt={f.name}
              className="aspect-[21/10] w-full object-cover"
            />
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                background: `linear-gradient(135deg, ${f.accent}, transparent 70%)`,
              }}
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Section title="History" body={f.history} accent={f.accent} />
          <Section title="Symbolism" body={f.symbolism} accent={f.accent} />
          <Section title="Habitat" body={f.habitat} accent={f.accent} />
        </div>

        <div className="glass mt-8 rounded-3xl p-7">
          <h2 className="font-display text-2xl tracking-wider">
            <span className="text-gradient-aurora">FIELD NOTES</span>
          </h2>
          <ul className="mt-4 space-y-3">
            {f.facts.map((fact: string) => (
              <li
                key={fact}
                className="flex gap-3 text-foreground/85"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: f.accent }}
                />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <div
        className="mb-3 inline-block h-1 w-10 rounded-full"
        style={{ background: accent }}
      />
      <h3 className="font-display text-xl tracking-wider">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
    </div>
  );
}
