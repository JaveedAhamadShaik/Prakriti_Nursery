import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Droplet, Sun, X } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});

  const handleAddToCart = (product: any) => {
    const size = selectedSizes[product.id] || "M";
    addToCart(product, size);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${size}) has been added to your cart.`,
    });
  };

  const handleRemoveFavorite = (productId: string, productName: string) => {
    removeFromFavorites(productId);
    toast({
      title: "Removed from favorites",
      description: `${productName} has been removed from your favorites.`,
    });
  };

  const getLightColor = (level?: string) => {
    switch (level) {
      case "low": return "text-muted-foreground";
      case "medium": return "text-terracotta";
      case "high": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              My Favorites
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your favorites
            </p>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <Heart className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4 text-muted-foreground" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Start adding plants you love to your favorites!
              </p>
              <Button asChild>
                <a href="/indoor-plants">Browse Plants</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {favorites.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                    <div className="relative">
                      <div className="relative aspect-square overflow-hidden bg-muted/30 flex items-center justify-center">
                        {product.category && (
                          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground z-10">
                            {product.category}
                          </Badge>
                        )}
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="h-[70%] w-[70%] object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute top-3 right-3">
                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => handleRemoveFavorite(product.id, product.name)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-3 mb-3">
                        {product.lightRequirement && (
                          <div className="flex items-center gap-1">
                            <Sun className={`h-4 w-4 ${getLightColor(product.lightRequirement)}`} />
                            <span className="text-xs text-muted-foreground capitalize">
                              {product.lightRequirement}
                            </span>
                          </div>
                        )}
                        {product.waterRequirement && (
                          <div className="flex items-center gap-1">
                            <Droplet className={`h-4 w-4 ${getLightColor(product.waterRequirement)}`} />
                            <span className="text-xs text-muted-foreground capitalize">
                              {product.waterRequirement}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-primary">₹{product.price}</p>
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-0 flex-col gap-3">
                      <div className="w-full">
                        <label className="text-xs text-muted-foreground mb-2 block">
                          Select Size
                        </label>
                        <Select
                          value={selectedSizes[product.id] || "M"}
                          onValueChange={(value) =>
                            setSelectedSizes((prev) => ({ ...prev, [product.id]: value }))
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="S">Small</SelectItem>
                            <SelectItem value="M">Medium</SelectItem>
                            <SelectItem value="L">Large</SelectItem>
                            <SelectItem value="XL">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
