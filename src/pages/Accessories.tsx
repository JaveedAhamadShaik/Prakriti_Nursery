import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { accessoriesDB } from "@/data/mega-products";

const Accessories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const categories = ["All", "Watering", "Tools", "Fertilizers", "Care"];

  // 🔥 CATEGORY → KEYWORDS MAP (THIS FIXES EVERYTHING)
  const categoryMap: Record<string, string[]> = {
    Watering: ["watering", "spray", "hose", "can"],
    Tools: ["tool", "cutter", "shovel", "spade", "fork"],
    Fertilizers: ["fertilizer", "manure", "compost", "soil"],
    Care: ["care", "support", "guard", "clip", "net"]
  };

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All"
  );

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sync URL → state
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  // ✅ FIXED FILTER LOGIC
  const filteredProducts =
    selectedCategory === "All"
      ? accessoriesDB
      : accessoriesDB.filter((product) => {
          const keywords = categoryMap[selectedCategory] || [];
          return keywords.some((keyword) =>
            product.subcategory?.toLowerCase().includes(keyword)
          );
        });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="bg-gradient-to-r from-sage/10 to-leaf-green/10 py-10">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium">
              Garden Accessories
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Garden Accessories
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Everything you need to care for your plants.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-6 border-b px-4 sm:px-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Showing {filteredProducts.length} products
        </p>
      </section>

      {/* Products */}
      <section className="container py-10 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accessories;
