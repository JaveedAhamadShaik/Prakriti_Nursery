import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import showcase images
import showcase1 from "@/assets/showcase/1.jpg";
import showcase2 from "@/assets/showcase/2.jpg";
import showcase3 from "@/assets/showcase/3.jpg";
import showcase4 from "@/assets/showcase/4.jpg";
import showcase5 from "@/assets/showcase/5.jpg";
import showcase6 from "@/assets/showcase/6.jpg";
import showcase7 from "@/assets/showcase/7.jpg";
import showcase8 from "@/assets/showcase/8.jpg";
import showcase10 from "@/assets/showcase/10.jpg";
import indoorHero from "@/assets/showcase/indoor-hero.jpg";
import outdoorHero from "@/assets/showcase/outdoor-hero.jpg";
import potsHero from "@/assets/showcase/pots-hero.jpg";
import accessoriesHero from "@/assets/showcase/accessories-hero.jpg";

const galleryImages = [
  { src: showcase1, title: "Garden View 1" },
  { src: showcase2, title: "Garden View 2" },
  { src: showcase3, title: "Garden View 3" },
  { src: showcase4, title: "Garden View 4" },
  { src: showcase5, title: "Garden View 5" },
  { src: showcase6, title: "Garden View 6" },
  { src: showcase7, title: "Garden View 7" },
  { src: showcase8, title: "Garden View 8" },
  { src: showcase10, title: "Garden View 9" },
  { src: indoorHero, title: "Indoor Plants Collection" },
  { src: outdoorHero, title: "Outdoor Garden" },
  { src: potsHero, title: "Pots & Planters" },
  { src: accessoriesHero, title: "Garden Accessories" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg">Explore our beautiful collection of plants and gardens</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
