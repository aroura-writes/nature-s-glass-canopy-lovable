import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { galleryItems, categories, type GalleryItem } from "@/content/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nature's Symphony" },
      {
        name: "description",
        content:
          "A photo gallery of forests, oceans, deserts and waterfalls — the wild places we love.",
      },
      { property: "og:title", content: "Gallery — Nature's Symphony" },
      {
        property: "og:description",
        content: "Forests, oceans, deserts, waterfalls.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Filter = "All" | (typeof categories)[number];

function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const visible =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            The Gallery
          </span>
          <h1 className="mt-3 font-display text-5xl tracking-wider md:text-7xl">
            WILD PLACES,{" "}
            <span className="text-gradient-aurora">CAUGHT MID-BREATH</span>
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Browse by biome — or wander through everything at once. Tap any
            frame for a closer look.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {(["All", ...categories] as Filter[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                filter === c
                  ? "border-transparent bg-primary text-primary-foreground glow-violet"
                  : "border-white/15 bg-white/5 text-foreground/80 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {visible.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setActive(item)}
              className={`group glass mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl p-2 text-left transition-transform hover:-translate-y-1 ${
                item.span === "tall"
                  ? "row-span-2"
                  : item.span === "wide"
                    ? ""
                    : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.span === "tall" ? "aspect-[3/4]" : item.span === "wide" ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">
                    {item.category}
                  </div>
                  <div className="font-display text-lg tracking-wide">
                    {item.caption}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-strong relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-md hover:bg-black/60"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <img
                src={active.src.replace("w=1200", "w=2000")}
                alt={active.caption}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {active.category}
                </div>
                <div className="mt-1 font-display text-2xl tracking-wider">
                  {active.caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
