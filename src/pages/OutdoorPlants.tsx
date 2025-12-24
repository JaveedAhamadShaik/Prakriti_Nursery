import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { TreeDeciduous } from "lucide-react";
import { outdoorPlantsDB } from "@/data/mega-products";

const OutdoorPlants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Fruit", "Flower", "Medicinal", "Creepers", "Shrubs", "Trees"];
  
  const filteredProducts = selectedCategory === "All" 
    ? outdoorPlantsDB 
    : outdoorPlantsDB.filter(product => 
        product.subcategory && product.subcategory.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-accent/10 to-secondary/10 py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <TreeDeciduous className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium">Outdoor Collection</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">Outdoor Plants</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transform your garden with our diverse selection of outdoor plants. 
            From flowering beauties to fruit-bearing trees.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8 border-b border-border">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={category === selectedCategory ? "bg-primary text-primary-foreground" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Showing {filteredProducts.length} products
        </p>
      </section>

      {/* Products Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutdoorPlants;
