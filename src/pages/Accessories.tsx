import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { accessoriesDB } from "@/data/mega-products";

const Accessories = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Watering", "Tools", "Fertilizers", "Care"];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (categoryParam) {
      const matchedCategory = categories.find(
        cat => cat.toLowerCase() === categoryParam.toLowerCase()
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
      }
    }
  }, [categoryParam]);
  
  const filteredProducts = selectedCategory === "All" 
    ? accessoriesDB 
    : accessoriesDB.filter(product => 
        product.subcategory && product.subcategory.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-sage/10 to-leaf-green/10 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-primary font-medium text-sm sm:text-base">Garden Accessories</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Garden Accessories</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
            Everything you need to care for your plants. Quality tools and accessories for every gardener.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-4 sm:py-6 md:py-8 border-b border-border px-4 sm:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={`text-xs sm:text-sm ${category === selectedCategory ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
          Showing {filteredProducts.length} products
        </p>
      </section>

      {/* Products Grid */}
      <section className="container py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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