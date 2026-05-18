export type Flower = {
  slug: string;
  name: string;
  scientific: string;
  origin: string;
  excerpt: string;
  image: string;
  accent: string;
  history: string;
  symbolism: string;
  habitat: string;
  facts: string[];
};

export const flowers: Flower[] = [
  {
    slug: "cherry-blossom",
    name: "Cherry Blossom",
    scientific: "Prunus serrulata",
    origin: "Japan & East Asia",
    excerpt:
      "A fleeting pink storm that has shaped poetry, philosophy, and an entire nation's calendar.",
    image:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-coral)",
    history:
      "Sakura have been cultivated in Japan for more than a thousand years. Records from the Heian period (794–1185) describe imperial flower-viewing parties — hanami — where nobles wrote waka poetry beneath the blossoms. The samurai later embraced the cherry as a metaphor for life itself: brilliant, brief, and unattached.",
    symbolism:
      "In Japan they embody mono no aware — the bittersweet awareness of transience. In China, they signal feminine beauty and love; in Korea, purity and spring renewal.",
    habitat:
      "Native to the temperate forests of Japan, Korea, and parts of China. Today cultivated across the temperate world wherever winters chill and springs are mild.",
    facts: [
      "Peak bloom lasts only about a week.",
      "Japan's meteorological agency forecasts a 'cherry blossom front' (sakura zensen) each spring.",
      "The 1912 gift of 3,020 trees from Tokyo to Washington, D.C. still blooms each spring along the Tidal Basin.",
    ],
  },
  {
    slug: "lotus",
    name: "Sacred Lotus",
    scientific: "Nelumbo nucifera",
    origin: "South & Southeast Asia",
    excerpt:
      "The flower that rises pristine from muddy water — sacred to half the world for three thousand years.",
    image:
      "https://images.unsplash.com/photo-1606293459409-aa0a0d0753ae?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-violet)",
    history:
      "Cultivated in Asia for at least 3,000 years, the lotus appears in the earliest Hindu Vedas, in the iconography of Egyptian temples (via the related blue lotus), and in Buddhist sutras where the Buddha is born onto a thousand-petaled bloom.",
    symbolism:
      "Purity, spiritual awakening, and rebirth. Petal counts carry meaning — 8 for the noble eightfold path, 1,000 for total enlightenment.",
    habitat:
      "Still freshwater ponds, lakes, and slow rivers across India, China, Vietnam, and northern Australia. Roots anchor in mud; leaves and flowers ride above the surface.",
    facts: [
      "Lotus leaves are so water-repellent they inspired self-cleaning surface technology — the 'lotus effect'.",
      "A 1,300-year-old seed recovered from a Chinese lakebed successfully germinated.",
      "The flower regulates its own temperature, staying warm to attract pollinators.",
    ],
  },
  {
    slug: "bird-of-paradise",
    name: "Bird of Paradise",
    scientific: "Strelitzia reginae",
    origin: "South Africa",
    excerpt:
      "A flower that mimics a tropical bird in mid-flight, named for an English queen.",
    image:
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-coral)",
    history:
      "First described for European science in 1773 by Sir Joseph Banks at Kew Gardens, who named it after Queen Charlotte of Mecklenburg-Strelitz. The Zulu people of its South African homeland had cultivated it for centuries.",
    symbolism:
      "Joyful liberation, paradise, and the magnificence of flight. Often given to celebrate the arrival of something long-awaited.",
    habitat:
      "Coastal eastern South Africa — KwaZulu-Natal and Eastern Cape — in subtropical, frost-free scrubland.",
    facts: [
      "Pollinated by sunbirds that perch on the flower's blue 'tongue', which springs open under their weight.",
      "California adopted it as the official flower of Los Angeles.",
      "The plant can live for decades and only flowers after 4–5 years of growth.",
    ],
  },
  {
    slug: "edelweiss",
    name: "Edelweiss",
    scientific: "Leontopodium nivale",
    origin: "European Alps",
    excerpt:
      "A wool-cloaked star clinging to the highest crags, an emblem of mountaineering devotion.",
    image:
      "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-teal)",
    history:
      "By the late 19th century, Alpine climbers risked their lives picking edelweiss as proof of summiting. Emperor Franz Joseph famously gathered a bouquet for Empress Elisabeth, sealing its romantic legend.",
    symbolism:
      "Courage, devotion, and noble purity — the woolly white hairs that protect it from UV came to symbolize incorruptibility.",
    habitat:
      "Rocky limestone slopes between 1,800 and 3,000 m across the Alps, Pyrenees, and Carpathians.",
    facts: [
      "The fuzzy hairs filter up to 75% of harmful UV — researchers study them for sunscreens.",
      "Now protected by law across much of its range; picking wild edelweiss is illegal.",
      "The Austrian 2-cent euro coin carries its likeness.",
    ],
  },
  {
    slug: "passion-flower",
    name: "Passion Flower",
    scientific: "Passiflora incarnata",
    origin: "Americas",
    excerpt:
      "An almost mechanical bloom whose geometry was read as a sermon by 16th-century missionaries.",
    image:
      "https://images.unsplash.com/photo-1597167181596-c14acf86e36a?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-violet)",
    history:
      "When Spanish missionaries first encountered Passiflora in South America in the 1500s, they interpreted its corona of filaments as the crown of thorns, the five anthers as wounds, and the three stigmas as nails — and named it Flor de las Cinco Llagas.",
    symbolism:
      "Faith and contemplation in Christian tradition; in Indigenous Amazonian medicine, the calming power of the night.",
    habitat:
      "Edges of subtropical forests and disturbed open ground from the southeastern United States down through Central and South America.",
    facts: [
      "Modern herbalists use the leaves as a mild sedative.",
      "The fruit of P. edulis is the passion fruit of supermarkets and cocktails.",
      "Each flower blooms for only one day.",
    ],
  },
  {
    slug: "blue-poppy",
    name: "Himalayan Blue Poppy",
    scientific: "Meconopsis betonicifolia",
    origin: "Tibet & Bhutan",
    excerpt:
      "A flower so improbably blue that Western botanists once refused to believe it existed.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    accent: "var(--accent-teal)",
    history:
      "Discovered for European science by Lt. Col. Frederick Bailey in 1913 and brought into cultivation by plant hunter Frank Kingdon-Ward in 1924. Its sky-blue debut at the 1926 Chelsea Flower Show caused a sensation.",
    symbolism:
      "The unreachable, the imagined-made-real. In Bhutanese culture, it is the national flower — a symbol of rare beauty earned through pilgrimage.",
    habitat:
      "Cool, moist alpine meadows between 3,000 and 4,500 m in the eastern Himalaya.",
    facts: [
      "The blue pigment shifts toward purple in less acidic soils.",
      "Each plant may take 3–5 years to flower, sometimes only once before dying.",
      "Bhutan's national flower since the 1980s.",
    ],
  },
];

export const getFlower = (slug: string) =>
  flowers.find((f) => f.slug === slug);
