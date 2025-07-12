import { Button } from "@/components/ui/button";
import { ItemCard } from "./ItemCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured items
const featuredItems = [
  {
    id: "1",
    title: "Vintage Levi's Denim Jacket",
    description: "Classic blue denim jacket in excellent condition. Perfect for layering and timeless style.",
    images: ["/placeholder.svg"],
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    location: "Brooklyn, NY",
    isSwappable: true,
    rating: 4.8,
    isFavorited: false
  },
  {
    id: "2",
    title: "Nike Air Max Sneakers",
    description: "White and gray Nike Air Max in like-new condition. Only worn a few times.",
    images: ["/placeholder.svg"],
    category: "Footwear",
    size: "9",
    condition: "Like New",
    location: "San Francisco, CA",
    points: 250,
    rating: 4.9,
    isFavorited: true
  },
  {
    id: "3",
    title: "Zara Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer occasions. Flowing and comfortable.",
    images: ["/placeholder.svg"],
    category: "Dresses",
    size: "S",
    condition: "Good",
    location: "Austin, TX",
    isSwappable: true,
    rating: 4.6,
    isFavorited: false
  },
  {
    id: "4",
    title: "Patagonia Fleece Jacket",
    description: "Cozy fleece jacket in forest green. Great for outdoor activities and casual wear.",
    images: ["/placeholder.svg"],
    category: "Outerwear",
    size: "L",
    condition: "Very Good",
    location: "Portland, OR",
    points: 180,
    rating: 4.7,
    isFavorited: false
  },
  {
    id: "5",
    title: "Lululemon Yoga Leggings",
    description: "High-waisted black leggings with side pockets. Perfect for workouts or casual wear.",
    images: ["/placeholder.svg"],
    category: "Activewear",
    size: "M",
    condition: "Excellent",
    location: "Miami, FL",
    isSwappable: true,
    rating: 4.9,
    isFavorited: true
  },
  {
    id: "6",
    title: "Vintage Band T-Shirt",
    description: "Authentic vintage concert tee from the 90s. Soft and comfortable with unique graphics.",
    images: ["/placeholder.svg"],
    category: "Tops",
    size: "L",
    condition: "Good",
    location: "Nashville, TN",
    points: 120,
    rating: 4.5,
    isFavorited: false
  }
];

export const FeaturedItems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Featured Items</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Discover Amazing Pre-Loved Fashion
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From vintage finds to modern essentials, explore curated items from our community members. 
            Each piece has a story and is looking for a new home.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ItemCard {...item} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" className="px-8" asChild>
            <Link to="/browse">
              Browse All Items
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Over 10,000+ items available • New items added daily
          </p>
        </div>
      </div>
    </section>
  );
};