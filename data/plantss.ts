export type Plant = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export const plants: Plant[] = [
  // Tropical Plants
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "The iconic Swiss cheese plant with stunning split leaves.",
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1598880427893-2e9c9c9e9d1f?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "Dramatic foliage that brings tropical vibes to any space.",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "Statement plant with large, violin-shaped leaves.",
  },
  {
    id: "banana-plant",
    name: "Banana Plant",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "Lush tropical leaves that create an instant jungle feel.",
  },
  {
    id: "alocasia-polly",
    name: "Alocasia Polly",
    price: 38.0,
    image:
      "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "Striking arrowhead leaves with silver veins.",
  },
  {
    id: "calathea-orbifolia",
    name: "Calathea Orbifolia",
    price: 42.0,
    image:
      "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&h=400&fit=crop",
    category: "Tropical Plants",
    description: "Beautiful round leaves with silver stripes.",
  },

  // Low Light Plants
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Nearly indestructible with air-purifying qualities.",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1632321915712-5a7e89f19f45?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Glossy leaves that thrive in low light conditions.",
  },
  {
    id: "pothos-golden",
    name: "Golden Pothos",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Trailing vine with heart-shaped variegated leaves.",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 25.0,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Elegant white flowers and glossy dark leaves.",
  },
  {
    id: "philodendron",
    name: "Philodendron",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Classic heart-shaped leaves perfect for beginners.",
  },
  {
    id: "cast-iron-plant",
    name: "Cast Iron Plant",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1604762512526-b7ce049b5764?w=400&h=400&fit=crop",
    category: "Low Light Plants",
    description: "Extremely hardy plant that survives neglect.",
  },

  // Succulents & Cacti
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    price: 15.0,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Medicinal plant with soothing gel inside leaves.",
  },
  {
    id: "echeveria",
    name: "Echeveria Elegans",
    price: 12.0,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Rosette-shaped succulent with powder-blue leaves.",
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    price: 20.0,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Symbol of good luck with thick, oval leaves.",
  },
  {
    id: "bunny-ears-cactus",
    name: "Bunny Ears Cactus",
    price: 16.0,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Adorable cactus with flat, ear-shaped pads.",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    price: 24.0,
    image:
      "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Cascading succulent with bead-like leaves.",
  },
  {
    id: "haworthia",
    name: "Haworthia",
    price: 14.0,
    image:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=400&fit=crop",
    category: "Succulents & Cacti",
    description: "Small succulent with translucent leaf tips.",
  },
];

export const categories = [...new Set(plants.map((plant) => plant.category))];
