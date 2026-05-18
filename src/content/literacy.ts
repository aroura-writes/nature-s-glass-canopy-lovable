export type LiteracySection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  stats?: { label: string; value: string }[];
};

export const literacySections: LiteracySection[] = [
  {
    id: "ecosystems",
    eyebrow: "01 — Ecosystems",
    title: "Everything talks to everything",
    body:
      "An ecosystem is a conversation between climate, soil, water, plants, fungi, microbes, and animals. A single old-growth tree can host more than 1,000 distinct species — birds, beetles, lichens, fungi — wired together by chemistry and chance. Remove one strand and the whole web answers.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { label: "Known species on Earth", value: "~2.1M" },
      { label: "Estimated total", value: "8.7M" },
      { label: "Forest biomes", value: "12" },
    ],
  },
  {
    id: "biodiversity",
    eyebrow: "02 — Biodiversity",
    title: "Variety is resilience",
    body:
      "Biodiversity is the planet's insurance policy. The more variants a system holds — of genes, species, and habitats — the better it survives shocks. Tropical rainforests cover 6% of Earth's surface yet shelter more than half of all terrestrial species; coral reefs cover less than 0.1% of the ocean and host a quarter of marine life.",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { label: "Rainforest species share", value: "50%+" },
      { label: "Reef ocean coverage", value: "<0.1%" },
      { label: "Marine life on reefs", value: "25%" },
    ],
  },
  {
    id: "climate",
    eyebrow: "03 — Climate",
    title: "Forests are slow lungs",
    body:
      "The world's forests absorb roughly 7.6 billion tonnes of CO₂ a year — about 1.5× more than the United States emits. Oceans take another 25% of human carbon output, paying for it with acidifying water. Climate stability isn't an abstraction; it is the daily breathing of ecosystems we are still learning to measure.",
    image:
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { label: "Annual forest CO₂ uptake", value: "7.6Gt" },
      { label: "Ocean CO₂ share", value: "25%" },
      { label: "Tree species worldwide", value: "73,000+" },
    ],
  },
  {
    id: "conservation",
    eyebrow: "04 — Action",
    title: "Small, repeated, multiplied",
    body:
      "Conservation is the practice of paying attention. Plant native, not pretty. Leave leaf litter — it's a nursery, not mess. Buy less, mend more. Vote for protected land. Walk into a forest and learn the name of three things. Stewardship at scale is built from small repetitions multiplied by many people.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  },
];
