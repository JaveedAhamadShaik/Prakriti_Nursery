import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { comprehensiveIndoorPlants } from "@/data/comprehensive-products";

const IndoorPlants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Leafy", "Flowering", "Bonsai", "Succulents"];
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const filteredProducts = selectedCategory === "All" 
    ? comprehensiveIndoorPlants 
    : comprehensiveIndoorPlants.filter(product => 
        product.subcategory && product.subcategory.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-primary font-medium text-sm sm:text-base">Indoor Collection</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Indoor Plants</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Bring life and fresh air to your home with our carefully selected indoor plants. 
            Perfect for every room and lighting condition.
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
              className={`text-xs sm:text-sm px-2 sm:px-3 md:px-4 h-8 sm:h-9 ${category === selectedCategory ? "bg-primary text-primary-foreground" : ""}`}
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
      <section className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndoorPlants;