import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Droplet, Sun, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  lightRequirement?: "low" | "medium" | "high";
  waterRequirement?: "low" | "medium" | "high";
  size?: string;
}

const ProductCard = ({
  name,
  price,
  image,
  category,
  lightRequirement,
  waterRequirement,
  size = "M",
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState(size);
  const [imageOpen, setImageOpen] = useState(false);

  const productId = `${category}-${name.toLowerCase().replace(/\s+/g, "-")}`;
  const isInFavorites = isFavorite(productId);

  const getIconColor = (level?: string) => {
    switch (level) {
      case "low":
        return "text-muted-foreground";
      case "medium":
        return "text-terracotta";
      case "high":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  const product = {
    id: productId,
    name,
    scientificName: "",
    price,
    image,
    category: category as any,
    subcategory: "",
    lightRequirement,
    waterRequirement,
    sizes: [size],
    description: "",
    stock: 10,
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="product-card group hover:shadow-lg transition-all duration-300">

          {/* IMAGE */}
          <div className="relative">
            {category && (
              <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-xs">
                {category}
              </Badge>
            )}

            <div
              className="product-image-wrapper cursor-pointer"
              onClick={() => setImageOpen(true)}
            >
              <motion.img
                src={image}
                alt={name}
                loading="lazy"
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* FAVORITE */}
            <div className="absolute top-2 right-2 z-10">
              <Button
                size="icon"
                variant="secondary"
                className={`h-8 w-8 ${
                  isInFavorites
                    ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    : ""
                }`}
                onClick={() => {
                  if (isInFavorites) {
                    removeFromFavorites(productId);
                    toast({
                      title: "Removed from favorites",
                      description: `${name} removed from favorites.`,
                    });
                  } else {
                    addToFavorites(product);
                    toast({
                      title: "Added to favorites",
                      description: `${name} added to favorites.`,
                    });
                  }
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    isInFavorites ? "fill-current" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* CONTENT */}
          <CardContent className="p-3 sm:p-4 flex-1">
            <h3 className="font-semibold text-sm sm:text-base line-clamp-2 mb-2">
              {name}
            </h3>

            {(lightRequirement || waterRequirement) && (
              <div className="flex items-center gap-4 mb-3 text-xs">
                {lightRequirement && (
                  <div className="flex items-center gap-1">
                    <Sun className={`h-4 w-4 ${getIconColor(lightRequirement)}`} />
                    <span className="capitalize">{lightRequirement}</span>
                  </div>
                )}
                {waterRequirement && (
                  <div className="flex items-center gap-1">
                    <Droplet
                      className={`h-4 w-4 ${getIconColor(waterRequirement)}`}
                    />
                    <span className="capitalize">{waterRequirement}</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-lg sm:text-xl font-bold text-primary">
              ₹{price}
            </p>
          </CardContent>

          {/* FOOTER */}
          <CardFooter className="product-card-footer p-3 sm:p-4 pt-0 flex-col gap-3">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full h-9">
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="S">Small</SelectItem>
                <SelectItem value="M">Medium</SelectItem>
                <SelectItem value="L">Large</SelectItem>
                <SelectItem value="XL">Extra Large</SelectItem>
              </SelectContent>
            </Select>

            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                addToCart(product, selectedSize);
                toast({
                  title: "Added to cart",
                  description: `${name} (${selectedSize}) added to cart.`,
                });
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* FULL IMAGE VIEW MODAL */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="max-w-screen-lg w-full p-0 bg-black border-none">
          <DialogClose className="absolute right-4 top-4 z-10">
            <X className="h-6 w-6 text-white" />
          </DialogClose>

          <div className="w-full h-[80vh] flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
