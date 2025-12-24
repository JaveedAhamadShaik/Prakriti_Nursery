import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Discover Indoor Plants",
    description: "Transform your living space with lush greenery",
    thumbnail: "/src/assets/showcase/1.jpg"
  },
  {
    id: 2,
    title: "Outdoor Garden Beauty",
    description: "Create your dream garden oasis",
    thumbnail: "/src/assets/showcase/2.jpg"
  },
  {
    id: 3,
    title: "Premium Plant Collection",
    description: "Curated selection of rare and beautiful plants",
    thumbnail: "/src/assets/showcase/3.jpg"
  },
  {
    id: 4,
    title: "Garden Essentials",
    description: "Everything you need for perfect plant care",
    thumbnail: "/src/assets/showcase/4.jpg"
  },
  {
    id: 5,
    title: "Nature at Home",
    description: "Bring the beauty of nature indoors",
    thumbnail: "/src/assets/showcase/5.jpg"
  }
];

export const VideoHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl mb-12">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 animate-fade-in">
              {video.title}
            </h2>
            <p className="text-lg md:text-xl font-elegant opacity-90 animate-fade-in">
              {video.description}
            </p>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
