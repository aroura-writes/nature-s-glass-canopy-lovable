export type GalleryItem = {
  id: string;
  category: "Forests" | "Oceans" | "Deserts" | "Waterfalls";
  src: string;
  caption: string;
  span?: "tall" | "wide" | "default";
};

export const galleryItems: GalleryItem[] = [
  // Forests
  { id: "f1", category: "Forests", caption: "Mist over redwood cathedral", span: "tall",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" },
  { id: "f2", category: "Forests", caption: "Golden hour through birch",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" },
  { id: "f3", category: "Forests", caption: "Boreal pine silence",
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80" },
  { id: "f4", category: "Forests", caption: "Bamboo grove, Arashiyama", span: "wide",
    src: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=80" },
  { id: "f5", category: "Forests", caption: "Rainforest understory",
    src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1200&q=80" },
  { id: "f6", category: "Forests", caption: "Autumn maples",
    src: "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?auto=format&fit=crop&w=1200&q=80" },

  // Oceans
  { id: "o1", category: "Oceans", caption: "Atlantic break at dawn", span: "wide",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1400&q=80" },
  { id: "o2", category: "Oceans", caption: "Tide pools, Pacific Northwest",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  { id: "o3", category: "Oceans", caption: "Turquoise lagoon, Tahiti", span: "tall",
    src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=80" },
  { id: "o4", category: "Oceans", caption: "Coral reef shallows",
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80" },
  { id: "o5", category: "Oceans", caption: "Storm-front horizon",
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80" },
  { id: "o6", category: "Oceans", caption: "Bioluminescent shore",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80" },

  // Deserts
  { id: "d1", category: "Deserts", caption: "Dunes of Sossusvlei", span: "tall",
    src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200&q=80" },
  { id: "d2", category: "Deserts", caption: "Joshua tree, Mojave",
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80" },
  { id: "d3", category: "Deserts", caption: "Saguaro at dusk",
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80" },
  { id: "d4", category: "Deserts", caption: "Sahara wind ridges", span: "wide",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80" },
  { id: "d5", category: "Deserts", caption: "Atacama salt flats",
    src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80" },
  { id: "d6", category: "Deserts", caption: "Wadi Rum sandstone",
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80" },

  // Waterfalls
  { id: "w1", category: "Waterfalls", caption: "Skogafoss, Iceland", span: "tall",
    src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80" },
  { id: "w2", category: "Waterfalls", caption: "Plitvice cascades",
    src: "https://images.unsplash.com/photo-1467890947394-8171244e5410?auto=format&fit=crop&w=1200&q=80" },
  { id: "w3", category: "Waterfalls", caption: "Jungle veil, Bali", span: "wide",
    src: "https://images.unsplash.com/photo-1564550974352-90745b09f55b?auto=format&fit=crop&w=1400&q=80" },
  { id: "w4", category: "Waterfalls", caption: "Iguazu thunder",
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80" },
  { id: "w5", category: "Waterfalls", caption: "Mossy alpine spill",
    src: "https://images.unsplash.com/photo-1467890947394-8171244e5410?auto=format&fit=crop&w=1200&q=80" },
  { id: "w6", category: "Waterfalls", caption: "Hidden glen pool",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80" },
];

export const categories = ["Forests", "Oceans", "Deserts", "Waterfalls"] as const;
