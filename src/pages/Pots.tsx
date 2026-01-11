import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { potsDB } from "@/data/mega-products";

const Pots = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");
  const productId = searchParams.get("id");

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "All");

  const categories = [
    "All",
    "Ceramic",
    "Plastic",
    "Fiber",
    "Terracotta",
    "Metal",
    "Rotomold",
    "Hanging",
  ];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sync category with URL
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSearchParams(productId ? { id: productId } : {});
    } else {
      setSearchParams(
        productId ? { category, id: productId } : { category }
      );
    }
  };

  // ✅ MAIN FILTER LOGIC (CATEGORY + ID)
  const filteredProducts = productId
    ? potsDB.filter(p => p.id === productId)
    : selectedCategory === "All"
    ? potsDB
    : potsDB.filter(
        product =>
          product.subcategory &&
          product.subcategory.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-terracotta/10 to-sand/10 py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Package className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-primary font-medium text-sm sm:text-base">
              Pots & Planters
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {productId ? "Product Details" : "Pots & Planters"}
          </h1>

          {!productId && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl">
              Find the perfect home for your plants. From classic terracotta to modern designer pots.
            </p>
          )}
        </div>
      </section>

      {/* Filters (HIDE when single product) */}
      {!productId && (
        <section className="container py-4 sm:py-6 md:py-8 border-b border-border px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`text-xs sm:text-sm px-2 sm:px-3 md:px-4 h-8 sm:h-9 ${
                  category === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Showing {filteredProducts.length} products
          </p>
        </section>
      )}

      {/* Products Grid */}
      <section className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Product not found
          </p>
        ) : (
          <div
            className={`grid gap-3 sm:gap-4 md:gap-6 ${
              productId
                ? "grid-cols-1 max-w-md mx-auto"
                : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Pots;
