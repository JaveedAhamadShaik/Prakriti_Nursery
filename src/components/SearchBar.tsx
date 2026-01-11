import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ===========================
// TYPE DEFINITIONS
// ===========================
interface SearchItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price?: number;
  link: string;
  image?: string;
}

interface GroupedResults {
  category: string;
  categoryLink: string;
  items: SearchItem[];
}

// ===========================
// DATA AGGREGATION
// ===========================
const getAllSearchableData = (): SearchItem[] => {
  const allItems: SearchItem[] = [];

  // INDOOR PLANTS - Foliage (61 items)
  const foliagePlants = [
    { id: "ip-001", name: "Monstera Deliciosa", price: 450, subcategory: "Foliage" },
    { id: "ip-002", name: "Snake Plant", price: 300, subcategory: "Foliage" },
    { id: "ip-003", name: "Dieffenbachia", price: 250, subcategory: "Foliage" },
    { id: "ip-004", name: "Philodendron Fire", price: 350, subcategory: "Foliage" },
    { id: "ip-005", name: "Philodendron Lime", price: 350, subcategory: "Foliage" },
    { id: "ip-006", name: "Alocasia Jacklyn", price: 400, subcategory: "Foliage" },
    { id: "ip-007", name: "Syngonium Albo", price: 400, subcategory: "Foliage" },
    { id: "ip-008", name: "Syngonium Pink", price: 150, subcategory: "Foliage" },
    { id: "ip-009", name: "Syngonium White", price: 150, subcategory: "Foliage" },
    { id: "ip-010", name: "Marble Pothos", price: 120, subcategory: "Foliage" },
    { id: "ip-011", name: "Neon Pothos", price: 120, subcategory: "Foliage" },
    { id: "ip-012", name: "Aglaonema Lipstik", price: 300, subcategory: "Foliage" },
    { id: "ip-013", name: "Aglaonema Red Valentine", price: 320, subcategory: "Foliage" },
    { id: "ip-014", name: "Aglaonema Snow White", price: 300, subcategory: "Foliage" },
    { id: "ip-015", name: "Fern", price: 250, subcategory: "Foliage" },
    { id: "ip-016", name: "Baby Palm", price: 200, subcategory: "Foliage" },
    { id: "ip-017", name: "Bird of Paradise", price: 300, subcategory: "Foliage" },
    { id: "ip-018", name: "Rosemary", price: 250, subcategory: "Foliage" },
    { id: "ip-022", name: "Poinsettia Ice Pink", price: 499, subcategory: "Foliage" },
    { id: "ip-023", name: "Poinsettia Pink", price: 499, subcategory: "Foliage" },
    { id: "ip-024", name: "Poinsettia Red", price: 499, subcategory: "Foliage" },
    { id: "ip-025", name: "Poinsettia Variegates", price: 549, subcategory: "Foliage" },
    { id: "ip-026", name: "Poinsettia White", price: 499, subcategory: "Foliage" },
    { id: "ip-027", name: "Poinsettia Yellow", price: 499, subcategory: "Foliage" },
    { id: "ip-037", name: "ZZ Plant", price: 299, subcategory: "Foliage" },
    { id: "ip-043", name: "Burking", price: 299, subcategory: "Foliage" },
    { id: "ip-045", name: "Aglaonema Snow white", price: 300, subcategory: "Foliage" },
    { id: "ip-046", name: "Aglaonema Variegated", price: 350, subcategory: "Foliage" },
    { id: "ip-047", name: "Aglaonema Sunset", price: 350, subcategory: "Foliage" },
    { id: "ip-049", name: "Colocasia Blue Currant", price: 249, subcategory: "Foliage" },
    { id: "ip-050", name: "Alocasia Pink Dragon", price: 300, subcategory: "Foliage" },
    { id: "ip-051", name: "Alocasia Black Velvet", price: 300, subcategory: "Foliage" },
    { id: "ip-053", name: "Betel Plant", price: 70, subcategory: "Foliage" },
    { id: "ip-055", name: "Croton", price: 250, subcategory: "Foliage" },
    { id: "ip-056", name: "Philodendron billietiae", price: 250, subcategory: "Foliage" },
    { id: "ip-057", name: "Elephant Ear", price: 120, subcategory: "Foliage" },
    { id: "ip-059", name: "Fiddle Leaf Fig", price: 350, subcategory: "Foliage" },
    { id: "ip-062", name: "Anthurium Crystallinum", price: 349, subcategory: "Foliage" },
    { id: "ip-063", name: "Monstera Adansonii", price: 299, subcategory: "Foliage" },
    { id: "ip-068", name: "Philodendron Red Congo", price: 399, subcategory: "Foliage" },
    { id: "ip-069", name: "Philodendron Gloriosum", price: 749, subcategory: "Foliage" },
    { id: "ip-070", name: "Philodendron Heart-shaped Leaves", price: 249, subcategory: "Foliage" },
    { id: "ip-071", name: "Philodendron Lance-shaped Yellow-green", price: 329, subcategory: "Foliage" },
    { id: "ip-072", name: "Philodendron Lime-green with Orange New Leaf", price: 379, subcategory: "Foliage" },
    { id: "ip-073", name: "Philodendron Melanochrysum", price: 899, subcategory: "Foliage" },
    { id: "ip-074", name: "Philodendron Micans", price: 299, subcategory: "Foliage" },
    { id: "ip-075", name: "Rubber Plant", price: 349, subcategory: "Foliage" },
    { id: "ip-076", name: "Syngonium Arrowhead Vine", price: 199, subcategory: "Foliage" },
    { id: "ip-077", name: "Syngonium Heart-shaped Green Leaves", price: 179, subcategory: "Foliage" },
    { id: "ip-078", name: "Variegated Aglaonema with Pink Stems", price: 399, subcategory: "Foliage" },
    { id: "ip-079", name: "Variegated Japanese Mock Orange", price: 449, subcategory: "Foliage" },
    { id: "ip-081", name: "Adiantum Maidenhair Fern", price: 279, subcategory: "Foliage" },
    { id: "ip-082", name: "Anthurium Clarinervium", price: 649, subcategory: "Foliage" },
    { id: "ip-084", name: "Bougainvillea", price: 349, subcategory: "Foliage" },
    { id: "ip-085", name: "Clusia Rosea Variegata", price: 499, subcategory: "Foliage" },
    { id: "ip-086", name: "Clusia", price: 449, subcategory: "Foliage" },
    { id: "ip-094", name: "Ajuga Reptans Carpet Bugleweed", price: 189, subcategory: "Foliage" },
    { id: "ip-083", name: "Anthurium Jungle King", price: 799, subcategory: "Foliage" },
  ];

  // INDOOR PLANTS - Flowering (5 items)
  const floweringPlants = [
    { id: "ip-019", name: "Anthurium", price: 699, subcategory: "Flowering" },
    { id: "ip-020", name: "Peace Lily", price: 349, subcategory: "Flowering" },
    { id: "ip-021", name: "Adenium", price: 299, subcategory: "Flowering" },
    { id: "ip-087", name: "Heliconia Varigatted", price: 299, subcategory: "Flowering" },
    { id: "ip-088", name: "Heliconia", price: 249, subcategory: "Flowering" },
  ];

  // INDOOR PLANTS - Bonsai (5 items)
  const bonsaiPlants = [
    { id: "ip-028", name: "2-Step Lucky Bamboo", price: 250, subcategory: "Bonsai" },
    { id: "ip-029", name: "3-Step Lucky Bamboo", price: 350, subcategory: "Bonsai" },
    { id: "ip-030", name: "Ficus Bonsai", price: 2500, subcategory: "Bonsai" },
    { id: "ip-031", name: "Jade Mini Bonsai", price: 1000, subcategory: "Bonsai" },
    { id: "ip-090", name: "Dwarf Jade", price: 7000, subcategory: "Bonsai" },
  ];

  // INDOOR PLANTS - Succulents (16 items)
  const succulentPlants = [
    { id: "ip-032", name: "Christmas Cactus", price: 250, subcategory: "Succulents" },
    { id: "ip-033", name: "Crassula Yellow", price: 250, subcategory: "Succulents" },
    { id: "ip-034", name: "Echeveria Apus", price: 200, subcategory: "Succulents" },
    { id: "ip-035", name: "Echeveria Doristaylor", price: 200, subcategory: "Succulents" },
    { id: "ip-036", name: "Graptosedum", price: 179, subcategory: "Succulents" },
    { id: "ip-038", name: "Zebra Haworthia", price: 150, subcategory: "Succulents" },
    { id: "ip-039", name: "Monkey Tail", price: 300, subcategory: "Succulents" },
    { id: "ip-040", name: "Cactus A", price: 200, subcategory: "Succulents" },
    { id: "ip-041", name: "Cactus B", price: 200, subcategory: "Succulents" },
    { id: "ip-042", name: "Cactus C", price: 250, subcategory: "Succulents" },
    { id: "ip-060", name: "Graptoveria", price: 179, subcategory: "Succulents" },
    { id: "ip-067", name: "Perle von Nurnberg", price: 229, subcategory: "Succulents" },
    { id: "ip-092", name: "Echeveria", price: 189, subcategory: "Succulents" },
    { id: "ip-093", name: "Echeveria Rosette", price: 219, subcategory: "Succulents" },
    { id: "ip-066", name: "Crassula Variegata", price: 199, subcategory: "Succulents" },
    { id: "ip-091", name: "Crassula Ovata - Jade Plant", price: 349, subcategory: "Succulents" },
  ];

  // Add all indoor plants
  [...foliagePlants, ...floweringPlants, ...bonsaiPlants, ...succulentPlants].forEach(plant => {
    allItems.push({
      ...plant,
      category: "Indoor Plants",
      link: `/indoor-plants?id=${plant.id}`
    });
  });

  // POTS - Ceramic (45 items)
  const ceramicPots = [
    { id: "pot-001", name: "Autumn Leaf Beige", price: 1099 },
    { id: "pot-002", name: "Blue Blossom Cream", price: 1099 },
    { id: "pot-003", name: "Cera Owl Blue", price: 599 },
    { id: "pot-004", name: "Cera Owl Red", price: 599 },
    { id: "pot-005", name: "Cera Owl Set Of 2", price: 1099 },
    { id: "pot-006", name: "Classic Ribbed Stand Pot Set Of 2", price: 899 },
    { id: "pot-007", name: "Classic Ribbed Stand Pot Warm Ivory", price: 450 },
    { id: "pot-008", name: "Classic Ribbed Stand Pot White", price: 450 },
    { id: "pot-009", name: "Crimson Garden Cream", price: 1099 },
    { id: "pot-010", name: "Cute Bear Face Ceramic Pot - Peach Beige", price: 249 },
    { id: "pot-011", name: "Dandelion and Deer Motif Pot", price: 199 },
    { id: "pot-012", name: "Frog Pot", price: 249 },
    { id: "pot-013", name: "Head Face Planter Brown", price: 699 },
    { id: "pot-014", name: "Head Face Planter Green", price: 699 },
    { id: "pot-015", name: "Head Face Planter Set Of 3", price: 1999 },
    { id: "pot-016", name: "Head Face Planter White", price: 699 },
    { id: "pot-017", name: "Kitty Face Pot Black", price: 599 },
    { id: "pot-018", name: "Kitty Face Pot Red", price: 599 },
    { id: "pot-019", name: "Kitty Face Pot Set Of 2", price: 1100 },
    { id: "pot-020", name: "Leaf-embossed Ceramic Pot Charcoal White", price: 599 },
    { id: "pot-021", name: "Leaf-embossed Ceramic Pot Ivory Cream", price: 599 },
    { id: "pot-022", name: "Leaf-embossed Ceramic Pot Set Of 4", price: 2270 },
    { id: "pot-023", name: "Leaf-embossed Ceramic Pot Stone Grey", price: 599 },
    { id: "pot-024", name: "Leaf-embossed Ceramic Pot Terracotta White", price: 599 },
    { id: "pot-025", name: "Oval Ribbed Planter Set Of 2", price: 1800 },
    { id: "pot-026", name: "Oval Ribbed Planter Warm Beige", price: 950 },
    { id: "pot-027", name: "Oval Ribbed Planter Warm Ivory", price: 950 },
    { id: "pot-028", name: "Pig Pot", price: 249 },
    { id: "pot-029", name: "Ribbed Ceramic Planter", price: 199 },
    { id: "pot-030", name: "Ribbed Pedestal Planter Set Of 3", price: 1400 },
    { id: "pot-031", name: "Ribbed Pedestal Planter Warm Beige", price: 499 },
    { id: "pot-032", name: "Ribbed Pedestal Planter Warm Ivory", price: 499 },
    { id: "pot-033", name: "Ribbed Pedestal Planter White", price: 499 },
    { id: "pot-034", name: "Rose Floral Cream", price: 1099 },
    { id: "pot-035", name: "Square Ribbed Planter Green", price: 549 },
    { id: "pot-036", name: "Square Ribbed Planter Set Of 2", price: 1040 },
    { id: "pot-037", name: "Square Ribbed Planter Warm Beige", price: 549 },
    { id: "pot-038", name: "Standing Ceramic Pot Set Of 2", price: 1040 },
    { id: "pot-039", name: "Standing Ceramic Pot Warm Beige", price: 250 },
    { id: "pot-040", name: "Vertical Ribbed Green", price: 250 },
    { id: "pot-041", name: "Vertical Ribbed Light Blue", price: 250 },
    { id: "pot-042", name: "Vertical Ribbed Planter", price: 459 },
    { id: "pot-043", name: "Vintage Floral Teacup Planter Set Of 4", price: 4100 },
    { id: "pot-044", name: "Geometric Carved Terracotta Pot", price: 199 },
    { id: "pot-045", name: "Handcrafted Floral Motif Terracotta Pot", price: 249 },
  ];

  ceramicPots.forEach(pot => {
    allItems.push({
      ...pot,
      category: "Ceramic Pots",
      link: `/pots?category=Ceramic&id=${pot.id}`
    });
  });

  // POTS - Plastic (showing key ones)
  const plasticPots = [
    { id: "pot-046", name: "6 Inch ORCHID POT", price: 49 },
    { id: "pot-047", name: "8 Inch POT", price: 79 },
    { id: "pot-048", name: "10 Inch POT", price: 99 },
    { id: "pot-056", name: "CLEAR SELF WATERING 4 POT", price: 199 },
    { id: "pot-057", name: "CLEAR SELF WATERING 6 POT", price: 249 },
    { id: "pot-058", name: "CLEAR SELF WATERING 8 Inch POT", price: 299 },
    { id: "pot-077", name: "UV 14 Inch POT", price: 329 },
    { id: "pot-078", name: "UV 16 Inch POT", price: 399 },
    { id: "pot-079", name: "UV 20 Inch POT", price: 549 },
    { id: "pot-085", name: "CHEETAH 8 Inch POT", price: 250 },
  ];

  plasticPots.forEach(pot => {
    allItems.push({
      ...pot,
      category: "Plastic Pots",
      link: `/pots?category=Plastic&id=${pot.id}`
    });
  });

  // POTS - Other categories
  const otherPots = [
    // Terracotta
    { id: "pot-t20", name: "4 Inch POT WITH PLATES", price: 180, category: "Terracotta Pots" },
    { id: "pot-t22", name: "6 Inch POT WITH PLATES", price: 299, category: "Terracotta Pots" },
    { id: "pot-t24", name: "8 Inch POT WITH PLATES", price: 399, category: "Terracotta Pots" },
    
    // Fiber
    { id: "pot-118", name: "APPLE 24 POT", price: 2499, category: "Fiber Pots" },
    { id: "pot-119", name: "APPLE 12 POT", price: 1099, category: "Fiber Pots" },
    { id: "pot-121", name: "NFP CYLENDER 10", price: 849, category: "Fiber Pots" },
    
    // Metal
    { id: "pot-065", name: "3 STEP STAND WITH POTS", price: 899, category: "Metal Pots" },
    { id: "pot-066", name: "4 STEP STAND", price: 1350, category: "Metal Pots" },
    { id: "pot-076", name: "GOLD POT WITH STAND", price: 250, category: "Metal Pots" },
    
    // Hanging
    { id: "pot-120", name: "HANGING POT SMALL WITH THREAD", price: 100, category: "Hanging Pots" },
    { id: "pot-121h", name: "LARGE HANGING WITH CHAIN BLUE", price: 180, category: "Hanging Pots" },
  ];

  otherPots.forEach(pot => {
    allItems.push({
      ...pot,
      link: `/pots?category=${pot.category.replace(' Pots', '')}&id=${pot.id}`
    });
  });

  // ACCESSORIES
  const accessories = [
    // Watering
    { id: "acc-001", name: "Metal Spray Bottle", price: 299, category: "Watering", subcategory: "Watering" },
    { id: "acc-002", name: "Pressure Spray Bottle - Plastic", price: 249, category: "Watering", subcategory: "Watering" },
    
    // Tools
    { id: "acc-011", name: "RAKE 8 TEETH", price: 899, category: "Garden Tools", subcategory: "Tools" },
    { id: "acc-012", name: "Pruning Shears", price: 399, category: "Garden Tools", subcategory: "Tools" },
    { id: "acc-013", name: "RAKE 4 TEETH", price: 199, category: "Garden Tools", subcategory: "Tools" },
    { id: "acc-016", name: "GLOVES", price: 449, category: "Garden Tools", subcategory: "Tools" },
    
    // Fertilizers
    { id: "acc-026", name: "Cocopeat", price: 149, category: "Fertilizers", subcategory: "Fertilizers" },
    { id: "acc-027", name: "Soil Mix", price: 299, category: "Fertilizers", subcategory: "Fertilizers" },
    { id: "acc-028", name: "Vermi Compost", price: 199, category: "Fertilizers", subcategory: "Fertilizers" },
    { id: "acc-029", name: "Neem Oil", price: 249, category: "Fertilizers", subcategory: "Fertilizers" },
    { id: "acc-030", name: "Neem Soil", price: 279, category: "Fertilizers", subcategory: "Fertilizers" },
    { id: "acc-031", name: "Epsum Salt", price: 199, category: "Fertilizers", subcategory: "Fertilizers" },
  ];

  accessories.forEach(acc => {
    allItems.push({
      ...acc,
      link: `/accessories?category=${acc.subcategory}&id=${acc.id}`
    });
  });

  // CORPORATE GIFTING
  const corporateGifting = [
    { id: "cg-1", name: "Cera Plastic Pot with Aglonema Red Valentine", price: 499 },
    { id: "cg-2", name: "Cera Plastic Pot with Aglonema", price: 499 },
    { id: "cg-3", name: "Ceramic Sweet Home Orange Pot with Crassula Red", price: 599 },
    { id: "cg-4", name: "Gold Metal Pot with Fern", price: 699 },
    { id: "cg-5", name: "Vertical Ribbed Planter with Anthurium", price: 799 },
  ];

  corporateGifting.forEach(gift => {
    allItems.push({
      ...gift,
      category: "Corporate Gifting",
      link: `/corporate-gifting?id=${gift.id}`
    });
  });

  return allItems;
};

// ===========================
// HELPER FUNCTION
// ===========================
const getCategoryLink = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    "Indoor Plants": "/indoor-plants",
    "Corporate Gifting": "/corporate-gifting",
    "Ceramic Pots": "/pots?category=Ceramic",
    "Fiber Pots": "/pots?category=Fiber",
    "Plastic Pots": "/pots?category=Plastic",
    "Metal Pots": "/pots?category=Metal",
    "Terracotta Pots": "/pots?category=Terracotta",
    "Hanging Pots": "/pots?category=Hanging",
    "Garden Tools": "/accessories?category=Tools",
    "Watering": "/accessories?category=Watering",
    "Fertilizers": "/accessories?category=Fertilizers",
  };
  
  return categoryMap[category] || "/";
};

// ===========================
// MAIN COMPONENT
// ===========================
export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupedResults, setGroupedResults] = useState<GroupedResults[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [allData, setAllData] = useState<SearchItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Load all searchable data on mount
  useEffect(() => {
    const data = getAllSearchableData();
    setAllData(data);
    console.log(`Loaded ${data.length} searchable items`);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search function with grouping by category
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setGroupedResults([]);
      setIsOpen(false);
      return;
    }

    const searchTerm = searchQuery.toLowerCase();
    
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      (item.subcategory && item.subcategory.toLowerCase().includes(searchTerm))
    );

    const grouped: { [key: string]: SearchItem[] } = {};
    filtered.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    const groupedArray: GroupedResults[] = Object.entries(grouped).map(([category, items]) => ({
      category,
      categoryLink: getCategoryLink(category),
      items: items.slice(0, 5),
    }));

    setGroupedResults(groupedArray);
    setIsOpen(groupedArray.length > 0);
  }, [searchQuery, allData]);

  const handleClear = () => {
    setSearchQuery("");
    setGroupedResults([]);
    setIsOpen(false);
  };

  const handleResultClick = (item: SearchItem) => {
    setIsOpen(false);
    setSearchQuery("");
    navigate(item.link, { state: { product: item } });
  };

  const handleCategoryClick = (categoryLink: string) => {
    setIsOpen(false);
    setSearchQuery("");
    navigate(categoryLink);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && groupedResults.length > 0 && groupedResults[0].items.length > 0) {
      handleResultClick(groupedResults[0].items[0]);
    }
  };

  const totalResults = groupedResults.reduce((acc, group) => acc + group.items.length, 0);

  return (
    <div className="relative w-full md:max-w-md" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ fontSize: '16px' }}
          className="w-full pl-8 md:pl-10 pr-8 md:pr-10 py-2 md:py-2.5 bg-white border border-gray-200 rounded-full text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown - Grouped by Category */}
      {isOpen && groupedResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-[400px] md:max-h-[500px] overflow-y-auto z-50 w-screen md:w-auto -ml-4 md:ml-0 px-2 md:px-0">
          <div className="p-2">
            <p className="text-xs text-gray-500 px-2 md:px-3 py-2 font-medium">
              {totalResults} result{totalResults !== 1 ? "s" : ""} found
            </p>

            {groupedResults.map((group, groupIndex) => (
              <div key={group.category} className={groupIndex > 0 ? "mt-4" : ""}>
                <button
                  onClick={() => handleCategoryClick(group.categoryLink)}
                  className="w-full flex items-center justify-between px-2 md:px-3 py-2 hover:bg-green-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                      {group.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({group.items.length})
                    </span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <div className="mt-1 space-y-1">
                  {group.items.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left px-2 md:px-3 py-2 md:py-2.5 hover:bg-green-50 rounded-lg transition-colors group ml-1 md:ml-2"
                    >
                      <div className="flex items-center justify-between gap-2 md:gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-xs md:text-sm text-gray-900 group-hover:text-green-600 transition-colors truncate">
                            {result.name}
                          </p>
                          {result.subcategory && (
                            <p className="text-xs text-gray-400 mt-0.5">{result.subcategory}</p>
                          )}
                        </div>
                        {result.price && (
                          <p className="text-xs md:text-sm font-semibold text-green-600 flex-shrink-0">
                            ₹{result.price}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {groupIndex < groupedResults.length - 1 && (
                  <div className="border-t border-gray-100 mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && groupedResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 text-center z-50">
          <Search className="h-8 w-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-600">No results found for "{searchQuery}"</p>
          <p className="text-xs text-gray-400 mt-1">Try searching for plants, pots, or accessories</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

export const getProductById = (id: string): SearchItem | null => {
  const allData = getAllSearchableData();
  return allData.find(item => item.id === id) || null;
};

export type { SearchItem };