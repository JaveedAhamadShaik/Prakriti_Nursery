import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  { src: "/assets/showcase/1.jpg", title: "Garden View 1" },
  { src: "/assets/showcase/2.jpg", title: "Garden View 2" },
  { src: "/assets/showcase/3.jpg", title: "Garden View 3" },
  { src: "/assets/showcase/4.jpg", title: "Garden View 4" },
  { src: "/assets/showcase/5.jpg", title: "Garden View 5" },
  { src: "/assets/showcase/6.jpg", title: "Garden View 6" },
  { src: "/assets/showcase/7.jpg", title: "Garden View 7" },
  { src: "/assets/showcase/8.jpg", title: "Garden View 8" },
  { src: "/assets/showcase/10.jpg", title: "Garden View 9" },
  { src: "/assets/showcase/indoor-hero.jpg", title: "Indoor Plants Collection" },
  { src: "/assets/showcase/outdoor-hero.jpg", title: "Outdoor Garden" },
  { src: "/assets/showcase/pots-hero.jpg", title: "Pots & Planters" },
  { src: "/assets/showcase/accessories-hero.jpg", title: "Garden Accessories" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Explore our beautiful collection of plants and gardens
          </p>
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
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "/assets/placeholder.jpg";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
