import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// =======================
// IMAGES
// =======================

// =======================
// CORPORATE GIFTING IMAGES (EXACT FILE NAMES)
// =======================
import ceraAglonemaRed from "@/assets/corporate/Cera Plastic Pot with Aglonema Red Valentine.jpeg";
import ceraAglonema from "@/assets/corporate/Cera Plastic Pot with Aglonema.jpeg";
import ceraSingoniumPink from "@/assets/corporate/Cera Plastic Pot with Singonium Pink.jpeg";

import ceramicSweetBlue from "@/assets/corporate/Ceramic Sweet Home Blue Pot with Aglonema Red Valentine.jpeg";
import ceramicSweetOrange from "@/assets/corporate/Ceramic Sweet Home Orange Pot with Crassula Red.jpeg";
import ceramicSweetWhite from "@/assets/corporate/Ceramic Sweet Home White Pot with Aglonema Red Valentine.jpeg";

import coirBabyPalm from "@/assets/corporate/Coir 4 Inch Pot with Baby Palm.jpeg";
import deerNeonPothos from "@/assets/corporate/Dandelion and Deer Motif Pot with Neon Pothos.jpeg";
import goldMetalFern from "@/assets/corporate/Gold Metal Pot with Fern.jpeg";
import leafEmbossedWhite from "@/assets/corporate/Leaf-Embossed Ceramic Terracotta White Leaf Pot.jpeg";

import metalCagePalm from "@/assets/corporate/Metal Cage Pot with Baby Palm.jpeg";
import miniMisaPainted from "@/assets/corporate/Mini Misa 4.5 Painted Pot.jpeg";
import stellaSingoniumWhite from "@/assets/corporate/Stella Plastic Pot with Singonium White.jpeg";

import terracottaSmallGreen from "@/assets/corporate/Terracotta Small Pot with Syngonium Green.jpeg";
import terracottaSmallPink from "@/assets/corporate/Terracotta Small Pot with Syngonium Pink.jpeg";
import terracotta8InchGreen from "@/assets/corporate/Terracotta 8 Inch Pot with Philodendron Green.jpeg";

import verticalRibbedAnthurium from "@/assets/corporate/Vertical Ribbed Planter with Anthurium.jpeg";
import verticalRibbedPoinsettia from "@/assets/corporate/Vertical Ribbed Planter with Poinsettia Variegated.jpeg";

// =======================
// CORPORATE GIFTING DATA
// =======================
const corporateGiftingProducts = [
  { id: "cg-1", name: "Cera Plastic Pot with Aglonema Red Valentine", price: 499, image: ceraAglonemaRed, category: "Corporate Gifting", inStock: true },
  { id: "cg-2", name: "Cera Plastic Pot with Aglonema", price: 499, image: ceraAglonema, category: "Corporate Gifting", inStock: true },
  { id: "cg-3", name: "Cera Plastic Pot with Singonium Pink", price: 499, image: ceraSingoniumPink, category: "Corporate Gifting", inStock: true },

  { id: "cg-4", name: "Ceramic Sweet Home Orange Pot with Crassula Red", price: 599, image: ceramicSweetOrange, category: "Corporate Gifting", inStock: true },
  { id: "cg-5", name: "Ceramic Sweet Home Blue Pot with Aglonema Red Valentine", price: 599, image: ceramicSweetBlue, category: "Corporate Gifting", inStock: true },
  { id: "cg-6", name: "Ceramic Sweet Home White Pot with Aglonema Red Valentine", price: 599, image: ceramicSweetWhite, category: "Corporate Gifting", inStock: true },

  { id: "cg-7", name: "Coir 4 Inch Pot with Baby Palm", price: 449, image: coirBabyPalm, category: "Corporate Gifting", inStock: true },
  { id: "cg-8", name: "Dandelion and Deer Motif Pot with Neon Pothos", price: 549, image: deerNeonPothos, category: "Corporate Gifting", inStock: true },
  { id: "cg-9", name: "Gold Metal Pot with Fern", price: 699, image: goldMetalFern, category: "Corporate Gifting", inStock: true },

  { id: "cg-10", name: "Leaf-Embossed Ceramic Terracotta White Leaf Pot", price: 399, image: leafEmbossedWhite, category: "Corporate Gifting", inStock: true },
  { id: "cg-11", name: "Metal Cage Pot with Baby Palm", price: 749, image: metalCagePalm, category: "Corporate Gifting", inStock: true },
  { id: "cg-12", name: "Mini Misa 4.5 Painted Pot", price: 349, image: miniMisaPainted, category: "Corporate Gifting", inStock: true },

  { id: "cg-13", name: "Stella Plastic Pot with Singonium White", price: 449, image: stellaSingoniumWhite, category: "Corporate Gifting", inStock: true },
  { id: "cg-14", name: "Terracotta Small Pot with Syngonium Pink", price: 349, image: terracottaSmallPink, category: "Corporate Gifting", inStock: true },
  { id: "cg-15", name: "Terracotta Small Pot with Syngonium Green", price: 349, image: terracottaSmallGreen, category: "Corporate Gifting", inStock: true },

  { id: "cg-16", name: "Terracotta 8 Inch Pot with Philodendron Green", price: 599, image: terracotta8InchGreen, category: "Corporate Gifting", inStock: true },
  { id: "cg-17", name: "Vertical Ribbed Planter with Anthurium", price: 799, image: verticalRibbedAnthurium, category: "Corporate Gifting", inStock: true },
  { id: "cg-18", name: "Vertical Ribbed Planter with Poinsettia Variegated", price: 799, image: verticalRibbedPoinsettia, category: "Corporate Gifting", inStock: true },
];

// =======================
// COMPONENT
// =======================
const CorporateGifting = () => {
  const [openQuote, setOpenQuote] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Gift className="h-8 w-8 text-primary" />
              <span className="text-primary font-medium">Corporate & Bulk Gifting</span>
            </div>

            <h1 className="text-4xl font-bold mb-4">Corporate / Bulk Gifting</h1>
            <p className="text-muted-foreground max-w-2xl">
              Premium curated plant & pot gift sets ideal for offices, events,
              festivals, and employee gifting.
            </p>

            <div className="mt-6">
              <Button onClick={() => setOpenQuote(true)}>
                Get Bulk Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="container py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">Available Gift Sets</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {corporateGiftingProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QUOTE MODAL ================= */}
      {openQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
            
            {/* Close */}
            <button
              className="absolute right-4 top-4 text-muted-foreground hover:text-black"
              onClick={() => setOpenQuote(false)}
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-1">Get a Quote</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in: <span className="text-primary">Corporate / Bulk Gifting</span>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <textarea
                placeholder="Tell us about your project requirements..."
                className="w-full border rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CorporateGifting;