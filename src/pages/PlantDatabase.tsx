import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Leaf,
  Droplet,
  Sun,
  ThermometerSun,
  TrendingUp,
} from "lucide-react";

import { comprehensiveIndoorPlants } from "@/data/comprehensive-products";
import type { Product } from "@/data/products";

const PlantDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ ONLY INDOOR CATEGORIES
  const categories = ["All", "Indoor"];

  // ==================================================
  // TRANSFORM INDOOR PRODUCTS → PLANT DATABASE
  // ==================================================
  const plantDatabase = useMemo(() => {
    return comprehensiveIndoorPlants.map((product: Product) => {
      const commonNames = [product.name];
      if (product.scientificName) commonNames.push(product.scientificName);

      // Difficulty
      let difficulty = "Easy";
      if (
        product.lightRequirement === "high" &&
        product.waterRequirement === "high"
      ) {
        difficulty = "Moderate";
      } else if (
        product.lightRequirement === "low" &&
        product.waterRequirement === "low"
      ) {
        difficulty = "Very Easy";
      }

      // Climate
      let climate = "Tropical";
      if (product.subcategory === "Succulents") climate = "Arid / Desert";
      if (product.subcategory === "Air-Purifying") climate = "Tropical";

      // Growth rate
      let growthRate = "Medium";
      if (
        product.subcategory === "Succulents" ||
        product.subcategory === "Bonsai"
      ) {
        growthRate = "Slow";
      } else if (product.waterRequirement === "high") {
        growthRate = "Fast";
      }

      // Temperature
      let temperature = "16–26°C";
      if (product.subcategory === "Succulents") temperature = "18–27°C";

      // Pot type
      let potType = "Well-draining, medium pot";
      if (product.subcategory === "Bonsai") {
        potType = "Shallow bonsai pot with excellent drainage";
      } else if (product.subcategory === "Succulents") {
        potType = "Terracotta pot with excellent drainage";
      } else if (product.waterRequirement === "high") {
        potType = "Well-draining pot with moisture retention";
      }

      // Care tips
      const careTips: string[] = [];

      if (product.lightRequirement === "high") {
        careTips.push("Needs bright direct sunlight (6+ hours)");
      } else if (product.lightRequirement === "medium") {
        careTips.push("Prefers bright indirect light");
      } else {
        careTips.push("Suitable for low to medium light areas");
      }

      if (product.waterRequirement === "low") {
        careTips.push("Water sparingly; let soil dry completely");
      } else if (product.waterRequirement === "medium") {
        careTips.push("Water when top soil feels dry");
      } else {
        careTips.push("Keep soil evenly moist, not soggy");
      }

      if (product.subcategory === "Air-Purifying") {
        careTips.push("Helps purify indoor air");
      }

      careTips.push("Wipe leaves regularly to remove dust");

      return {
        name: product.name,
        scientificName: product.scientificName || "Unknown",
        commonNames,
        climate,
        lightRequirement: product.lightRequirement || "medium",
        waterRequirement: product.waterRequirement || "medium",
        growthRate,
        difficulty,
        temperature,
        potType,
        careTips,
        category: "Indoor",
        description: product.description,
      };
    });
  }, []);

  // ==================================================
  // FILTERS
  // ==================================================
  const categoryFiltered =
    selectedCategory === "All"
      ? plantDatabase
      : plantDatabase.filter((p) => p.category === "Indoor");

  const filteredPlants = categoryFiltered.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.commonNames.some((n) =>
        n.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const getLightColor = (level: string) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HEADER */}
      <section className="bg-gradient-to-r from-leaf-green/10 to-sage/10 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium">
              Indoor Plant Knowledge Base
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">Plant Database</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated indoor plant collection with complete care,
            growth, and climate information.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="container py-6 border-b px-4">
        <div className="flex gap-3 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* SEARCH */}
      <section className="container py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search indoor plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Showing {filteredPlants.length} plants
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="container pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPlants.map((plant, idx) => (
            <Card key={idx} className="hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{plant.name}</CardTitle>
                    <p className="text-sm italic text-muted-foreground">
                      {plant.scientificName}
                    </p>
                  </div>
                  <Badge>Indoor</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Sun className={getLightColor(plant.lightRequirement)} />
                    <span className="capitalize">{plant.lightRequirement}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplet className={getLightColor(plant.waterRequirement)} />
                    <span className="capitalize">{plant.waterRequirement}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThermometerSun className="text-terracotta" />
                    {plant.temperature}
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-leaf-green" />
                    {plant.growthRate}
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-sm font-semibold mb-2">Care Tips</p>
                  <ul className="space-y-1">
                    {plant.careTips.slice(0, 3).map((tip, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold">No plants found</h3>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default PlantDatabase;
