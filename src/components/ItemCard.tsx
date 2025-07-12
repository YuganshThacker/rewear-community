import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  MapPin, 
  Star, 
  Coins,
  RefreshCw,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  size: string;
  condition: string;
  location: string;
  points?: number;
  isSwappable?: boolean;
  rating?: number;
  isFavorited?: boolean;
  className?: string;
}

export const ItemCard = ({
  id,
  title,
  description,
  images,
  category,
  size,
  condition,
  location,
  points,
  isSwappable = true,
  rating,
  isFavorited = false,
  className
}: ItemCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 bg-card",
      className
    )}>
      <div className="relative">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-soft"
        >
          <Heart 
            className={cn(
              "w-4 h-4 transition-colors",
              isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
            )} 
          />
        </Button>

        {/* Condition Badge */}
        <Badge 
          className="absolute top-2 left-2 bg-background/90 text-foreground border-0 shadow-soft"
        >
          {condition}
        </Badge>

        {/* Points/Swap Badge */}
        <div className="absolute bottom-2 right-2">
          {points ? (
            <Badge variant="secondary" className="bg-accent/90 text-accent-foreground font-medium">
              <Coins className="w-3 h-3 mr-1" />
              {points}
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground font-medium">
              <RefreshCw className="w-3 h-3 mr-1" />
              Swap
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title and Category */}
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          </div>

          {/* Details */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <span>•</span>
            <span>Size {size}</span>
          </div>

          {/* Location and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
            
            {rating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-muted-foreground">{rating}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/item/${id}`}>
                <Eye className="w-4 h-4" />
                View
              </Link>
            </Button>
            <Button 
              variant={points ? "accent" : "default"} 
              size="sm" 
              className="flex-1"
            >
              {points ? `Redeem ${points}` : "Request Swap"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};