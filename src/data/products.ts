export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  image: string;
  category: "indoor" | "outdoor" | "pot" | "accessory";
  subcategory: string;
  lightRequirement?: "low" | "medium" | "high";
  waterRequirement?: "low" | "medium" | "high";
  sizes: string[];
  description: string;
  stock: number;
}

export const products: Product[] = [
  // Indoor Plants - Leafy
  {
    id: "ip-001",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    price: 599,
    image: "/src/assets/plants/indoor-monstera.png",
    category: "indoor",
    subcategory: "Leafy",
    lightRequirement: "medium",
    waterRequirement: "medium",
    sizes: ["S", "M", "L"],
    description: "Swiss cheese plant with stunning split leaves",
    stock: 50
  },
  {
    id: "ip-002",
    name: "Golden Pothos",
    scientificName: "Epipremnum aureum",
    price: 299,
    image: "/src/assets/plants/indoor-pothos.png",
    category: "indoor",
    subcategory: "Leafy",
    lightRequirement: "low",
    waterRequirement: "medium",
    sizes: ["S", "M", "L"],
    description: "Easy-care trailing plant with heart-shaped leaves",
    stock: 100
  },
  {
    id: "ip-003",
    name: "Philodendron Brasil",
    scientificName: "Philodendron hederaceum",
    price: 349,
    image: "/src/assets/plants/indoor-pothos.png",
    category: "indoor",
    subcategory: "Leafy",
    lightRequirement: "medium",
    waterRequirement: "medium",
    sizes: ["S", "M"],
    description: "Vibrant variegated climbing plant",
    stock: 45
  },
  {
    id: "ip-004",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    price: 799,
    image: "/src/assets/plants/indoor-monstera.png",
    category: "indoor",
    subcategory: "Leafy",
    lightRequirement: "medium",
    waterRequirement: "low",
    sizes: ["M", "L", "XL"],
    description: "Bold, glossy leaves that purify air",
    stock: 30
  },
  {
    id: "ip-005",
    name: "Calathea Orbifolia",
    scientificName: "Calathea orbifolia",
    price: 899,
    image: "/src/assets/plants/indoor-monstera.png",
    category: "indoor",
    subcategory: "Leafy",
    lightRequirement: "low",
    waterRequirement: "high",
    sizes: ["S", "M"],
    description: "Stunning striped foliage plant",
    stock: 25
  },

  // Indoor Plants - Air Purifying
  {
    id: "ip-006",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: 399,
    image: "/src/assets/plants/indoor-snake-plant.png",
    category: "indoor",
    subcategory: "Air-Purifying",
    lightRequirement: "low",
    waterRequirement: "low",
    sizes: ["S", "M", "L"],
    description: "Hardy plant that releases oxygen at night",
    stock: 80
  },
  {
    id: "ip-007",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    price: 249,
    image: "/src/assets/plants/indoor-pothos.png",
    category: "indoor",
    subcategory: "Air-Purifying",
    lightRequirement: "medium",
    waterRequirement: "medium",
    sizes: ["S", "M"],
    description: "Easy-care plant that removes toxins",
    stock: 90
  },
  {
    id: "ip-008",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    price: 549,
    image: "/src/assets/plants/indoor-monstera.png",
    category: "indoor",
    subcategory: "Air-Purifying",
    lightRequirement: "low",
    waterRequirement: "medium",
    sizes: ["S", "M", "L"],
    description: "Beautiful white blooms and air purifying",
    stock: 60
  },
  {
    id: "ip-009",
    name: "Areca Palm",
    scientificName: "Dypsis lutescens",
    price: 1299,
    image: "/src/assets/plants/indoor-monstera.png",
    category: "indoor",
    subcategory: "Air-Purifying",
    lightRequirement: "medium",
    waterRequirement: "medium",
    sizes: ["M", "L", "XL"],
    description: "Elegant palm that humidifies air",
    stock: 35
  },
  {
    id: "ip-010",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    price: 449,
    image: "/src/assets/plants/indoor-pothos.png",
    category: "indoor",
    subcategory: "Air-Purifying",
    lightRequirement: "medium",
    waterRequirement: "high",
    sizes: ["S", "M", "L"],
    description: "Lush fern that removes pollutants",
    stock: 55
  },

  // Indoor Plants - Succulents
  {
    id: "ip-011",
    name: "Succulent Collection",
    scientificName: "Various species",
    price: 199,
    image: "/src/assets/plants/indoor-succulents.png",
    category: "indoor",
    subcategory: "Succulents",
    lightRequirement: "high",
    waterRequirement: "low",
    sizes: ["S"],
    description: "Mix of colorful succulents",
    stock: 120
  },
  {
    id: "ip-012",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    price: 299,
    image: "/src/assets/plants/indoor-succulents.png",
    category: "indoor",
    subcategory: "Succulents",
    lightRequirement: "high",
    waterRequirement: "low",
    sizes: ["S", "M", "L"],
    description: "Medicinal plant with healing gel",
    stock: 75
  },
  {
    id: "ip-013",
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    price: 349,
    image: "/src/assets/plants/indoor-succulents.png",
    category: "indoor",
    subcategory: "Succulents",
    lightRequirement: "high",
    waterRequirement: "low",
    sizes: ["S", "M"],
    description: "Lucky plant with thick glossy leaves",
    stock: 65
  },

  // Indoor Plants - Bonsai
  {
    id: "ip-014",
    name: "Ficus Bonsai",
    scientificName: "Ficus retusa",
    price: 1499,
    image: "/src/assets/plants/indoor-bonsai.png",
    category: "indoor",
    subcategory: "Bonsai",
    lightRequirement: "medium",
    waterRequirement: "medium",
    sizes: ["S", "M"],
    description: "Classic indoor bonsai tree",
    stock: 20
  },
  {
    id: "ip-015",
    name: "Jade Bonsai",
    scientificName: "Crassula ovata",
    price: 1299,
    image: "/src/assets/plants/indoor-bonsai.png",
    category: "indoor",
    subcategory: "Bonsai",
    lightRequirement: "high",
    waterRequirement: "low",
    sizes: ["S", "M"],
    description: "Miniature jade tree bonsai",
    stock: 15
  },

  // Pots - Ceramic
  {
    id: "pot-001",
    name: "White Ceramic Pot",
    price: 299,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Ceramic",
    sizes: ["S", "M", "L", "XL"],
    description: "Classic white glazed ceramic pot with drainage",
    stock: 100
  },
  {
    id: "pot-002",
    name: "Blue Ceramic Pot Set",
    price: 899,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Ceramic",
    sizes: ["S", "M", "L"],
    description: "Hand-painted blue ceramic pot collection",
    stock: 50
  },
  {
    id: "pot-003",
    name: "Terracotta Ceramic Pot",
    price: 249,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Ceramic",
    sizes: ["S", "M", "L", "XL"],
    description: "Natural terracotta finish ceramic pot",
    stock: 120
  },

  // Pots - Clay
  {
    id: "pot-004",
    name: "Traditional Clay Pot",
    price: 199,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Clay",
    sizes: ["S", "M", "L", "XL"],
    description: "Handmade traditional clay pot",
    stock: 150
  },
  {
    id: "pot-005",
    name: "Clay Pot with Saucer",
    price: 249,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Clay",
    sizes: ["M", "L"],
    description: "Clay pot with matching drainage saucer",
    stock: 90
  },

  // Pots - Plastic
  {
    id: "pot-006",
    name: "Black Plastic Planter",
    price: 99,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Plastic",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight durable plastic pot",
    stock: 200
  },
  {
    id: "pot-007",
    name: "Colored Plastic Pot Set",
    price: 299,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Plastic",
    sizes: ["S", "M"],
    description: "Set of 5 colorful plastic pots",
    stock: 80
  },

  // Pots - Designer
  {
    id: "pot-008",
    name: "Modern Geometric Planter",
    price: 1299,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Designer",
    sizes: ["M", "L"],
    description: "Contemporary geometric design planter",
    stock: 30
  },
  {
    id: "pot-009",
    name: "Marble Finish Pot",
    price: 1599,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Designer",
    sizes: ["M", "L", "XL"],
    description: "Luxurious marble-effect planter",
    stock: 25
  },

  // Pots - Rotomould
  {
    id: "pot-010",
    name: "Large Rotomould Planter",
    price: 1499,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Rotomould",
    sizes: ["L", "XL"],
    description: "Durable rotomould commercial-grade planter",
    stock: 40
  },
  {
    id: "pot-011",
    name: "Rotomould Square Planter",
    price: 1299,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Rotomould",
    sizes: ["M", "L"],
    description: "Modern square rotomould planter",
    stock: 35
  },
  {
    id: "pot-012",
    name: "Rotomould Tall Planter",
    price: 1799,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Rotomould",
    sizes: ["L", "XL"],
    description: "Tall cylindrical rotomould planter",
    stock: 30
  },

  // Pots - Terracota
  {
    id: "pot-013",
    name: "Classic Terracota Pot",
    price: 199,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Terracota",
    sizes: ["S", "M", "L", "XL"],
    description: "Traditional Italian terracota pot",
    stock: 150
  },
  {
    id: "pot-014",
    name: "Terracota Bowl Planter",
    price: 349,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Terracota",
    sizes: ["M", "L"],
    description: "Wide terracotta bowl for succulents",
    stock: 80
  },
  {
    id: "pot-015",
    name: "Terracota Hanging Pot",
    price: 399,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Terracota",
    sizes: ["S", "M"],
    description: "Terracota pot with hanging hooks",
    stock: 60
  },
  {
    id: "pot-016",
    name: "Aged Terracota Planter",
    price: 599,
    image: "/src/assets/products/clay-pot.png",
    category: "pot",
    subcategory: "Terracota",
    sizes: ["M", "L", "XL"],
    description: "Weathered finish terracota planter",
    stock: 45
  },

  // Pots - Metal
  {
    id: "pot-017",
    name: "Galvanized Metal Planter",
    price: 799,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Metal",
    sizes: ["M", "L"],
    description: "Industrial-style galvanized metal pot",
    stock: 50
  },
  {
    id: "pot-018",
    name: "Copper Finish Planter",
    price: 1499,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Metal",
    sizes: ["M", "L"],
    description: "Elegant copper-finished metal planter",
    stock: 35
  },

  // Pots - Fiber
  {
    id: "pot-019",
    name: "Fiber Clay Pot",
    price: 899,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Fiber",
    sizes: ["M", "L", "XL"],
    description: "Lightweight fiber clay composite planter",
    stock: 60
  },
  {
    id: "pot-020",
    name: "Fiber Textured Planter",
    price: 1099,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Fiber",
    sizes: ["L", "XL"],
    description: "Modern textured fiber planter",
    stock: 40
  },

  // Pots - Hanging Pots
  {
    id: "pot-021",
    name: "Macrame Hanging Planter",
    price: 599,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Hanging Pots",
    sizes: ["S", "M"],
    description: "Handwoven macrame hanging planter",
    stock: 70
  },
  {
    id: "pot-022",
    name: "Ceramic Hanging Pot",
    price: 449,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Hanging Pots",
    sizes: ["S", "M"],
    description: "Ceramic pot with metal hanging chain",
    stock: 65
  },
  {
    id: "pot-023",
    name: "Plastic Hanging Basket",
    price: 199,
    image: "/src/assets/products/ceramic-pots.png",
    category: "pot",
    subcategory: "Hanging Pots",
    sizes: ["M", "L"],
    description: "Self-watering hanging basket",
    stock: 90
  },

  // Accessories - Watering
  {
    id: "acc-001",
    name: "Vintage Watering Can",
    price: 599,
    image: "/src/assets/products/watering-can.png",
    category: "accessory",
    subcategory: "Watering",
    sizes: ["1L", "2L", "5L"],
    description: "Classic metal watering can",
    stock: 60
  },
  {
    id: "acc-002",
    name: "Plastic Watering Can",
    price: 199,
    image: "/src/assets/products/watering-can.png",
    category: "accessory",
    subcategory: "Watering",
    sizes: ["1L", "2L"],
    description: "Lightweight plastic watering can",
    stock: 100
  },
  {
    id: "acc-003",
    name: "Spray Bottle Set",
    price: 299,
    image: "/src/assets/products/watering-can.png",
    category: "accessory",
    subcategory: "Watering",
    sizes: ["500ml"],
    description: "Set of 2 misting spray bottles",
    stock: 80
  },

  // Accessories - Tools
  {
    id: "acc-004",
    name: "Garden Tool Set",
    price: 899,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Tools",
    sizes: ["Standard"],
    description: "Complete 6-piece garden tool kit",
    stock: 50
  },
  {
    id: "acc-005",
    name: "Pruning Shears",
    price: 399,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Cutters",
    sizes: ["Standard"],
    description: "Professional grade pruning scissors",
    stock: 70
  },
  {
    id: "acc-006",
    name: "Mini Garden Tools",
    price: 349,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Tools",
    sizes: ["Small"],
    description: "3-piece mini tool set for indoor plants",
    stock: 90
  },

  // Accessories - Soil & Fertilizer
  {
    id: "acc-007",
    name: "Potting Mix - 5kg",
    price: 199,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Soil & Fertilizer",
    sizes: ["5kg", "10kg", "20kg"],
    description: "Premium all-purpose potting soil",
    stock: 150
  },
  {
    id: "acc-008",
    name: "Organic Fertilizer",
    price: 249,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Soil & Fertilizer",
    sizes: ["1kg", "2kg"],
    description: "100% organic plant fertilizer",
    stock: 120
  },
  {
    id: "acc-009",
    name: "Coco Peat Block",
    price: 149,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Soil & Fertilizer",
    sizes: ["650g", "5kg"],
    description: "Compressed coco peat for soil mix",
    stock: 100
  },

  // Accessories - Garden Gloves
  {
    id: "acc-010",
    name: "Cotton Garden Gloves",
    price: 149,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Gloves",
    sizes: ["S", "M", "L"],
    description: "Comfortable cotton gardening gloves",
    stock: 80
  },
  {
    id: "acc-011",
    name: "Professional Leather Gloves",
    price: 499,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Gloves",
    sizes: ["M", "L", "XL"],
    description: "Durable leather gardening gloves",
    stock: 45
  },

  // Accessories - Hooks
  {
    id: "acc-012",
    name: "Wall Hook Set - 6pc",
    price: 299,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Hooks",
    sizes: ["Standard"],
    description: "Metal hooks for hanging planters",
    stock: 90
  },
  {
    id: "acc-013",
    name: "Ceiling Plant Hanger",
    price: 399,
    image: "/src/assets/products/garden-tools.png",
    category: "accessory",
    subcategory: "Hooks",
    sizes: ["Standard"],
    description: "Adjustable macrame plant hanger",
    stock: 70
  }
];

// Helper function for case-insensitive subcategory matching
const normalizeSubcategory = (subcategory: string): string => {
  return subcategory.toLowerCase().trim();
};

// Get unique subcategories for a category
export const getSubcategoriesForCategory = (category: string): string[] => {
  const subcategories = new Set<string>();
  products.forEach(p => {
    if (p.category === category) {
      subcategories.add(p.subcategory);
    }
  });
  return Array.from(subcategories).sort();
};

// Filter products by category and optional subcategory
export const getProductsByCategory = (category: string, subcategory?: string) => {
  let filtered = products.filter(p => p.category === category);

  if (subcategory && subcategory !== "All") {
    const normalizedFilter = normalizeSubcategory(subcategory);
    filtered = filtered.filter(p =>
      normalizeSubcategory(p.subcategory) === normalizedFilter
    );
  }

  return filtered;
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export default products;
