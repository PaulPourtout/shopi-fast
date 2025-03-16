import { Link } from "@tanstack/react-router";
import { cn } from "../lib/utils";
import { Card } from "./ui/card";
import { Category } from "../routes/products";

interface CategoryCardProps {
  title: Category;
  description: string;
  imageUrl: string;
}

export function CategoryCard({
  title,
  description,
  imageUrl,
}: CategoryCardProps) {
  return (
    <Link to={`/products`} params={{ category: title }}>
      <Card className="w-72 h-80 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow relative">
        <img
          className={cn(
            "w-full h-full object-cover absolute",
            // TODO: Make this gradient work
            "before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-transparent"
          )}
          src={imageUrl}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </Card>
    </Link>
  );
}
