import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  itemCount?: number;
}

const CategoryCard = ({ title, description, image, link, itemCount }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 line-clamp-1">{title}</h3>
            <p className="text-xs sm:text-sm text-white/90 line-clamp-1 hidden sm:block">{description}</p>
            {itemCount && (
              <p className="text-xs text-white/80 mt-1 sm:mt-2 hidden md:block">{itemCount}+ varieties</p>
            )}
          </div>
        </div>
        <CardContent className="p-2 sm:p-3 md:p-4">
          <div className="flex items-center justify-between text-primary group-hover:text-primary/80 transition-colors">
            <span className="font-medium text-xs sm:text-sm md:text-base">Explore</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;