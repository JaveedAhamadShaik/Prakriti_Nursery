import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoHero } from "@/components/VideoHero";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-garden.jpg";
import indoorHero from "@/assets/showcase/indoor-hero.jpg";
import potsHero from "@/assets/showcase/pots-hero.png";
import accessoriesHero from "@/assets/showcase/accessories-hero.jpg";
import peaceLily from "@/assets/plants/peace-lily.jpg";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container relative h-full flex items-center px-4 sm:px-6">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="mb-3 sm:mb-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              <span className="text-secondary font-elegant font-medium text-sm sm:text-base">
                Welcome to PRAKRITI NURSERY
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Home Is Where The Plants Are
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our curated collection of indoor and outdoor plants,
              pots, and accessories. Transform your space into a green
              paradise.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                asChild
              >
                <Link to="/indoor-plants">
                  Shop Now <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>

              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                asChild
              >
                <Link to="/what-we-do?tab=landscaping">
                  Landscaping
                </Link>
              </Button>

              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                asChild
              >
                <Link to="/what-we-do?tab=vertical-gardening">
                  Vertical Gardening
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Hero Section */}
      <section className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <VideoHero />
      </section>

      {/* Featured Plants Section */}
      <section className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Featured Plants</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-2">
            Handpicked favorites to beautify your space
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-10">
          {[
            { image: indoorHero, title: "Indoor Plants", sub: "Air-purifying & fresh", link: "/indoor-plants" },
            { image: peaceLily, title: "Corporate/Bulk Gifting", sub: "Perfect for gifting", link: "/corporate-gifting" },
            { image: potsHero, title: "Pots & Planters", sub: "Ceramic, fiber & more", link: "/pots" },
            { image: accessoriesHero, title: "Accessories", sub: "Cutters, hooks & tools", link: "/accessories" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link to={item.link} className="group block">
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl bg-card border backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 text-center">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{item.sub}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plant Database CTA */}
      <section className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <motion.div 
          className="bg-card border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Leaf className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-primary mx-auto mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Explore Our Plant Database</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Search through thousands of plants from around the world. Learn
            about their care, conditions, and growth patterns.
          </p>

          <Button
            size="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
            asChild
          >
            <Link to="/plant-database">
              Browse Database <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;