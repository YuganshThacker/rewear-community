import { useState } from "react";
import { Header } from "@/components/Header";
import { ItemCard } from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  SlidersHorizontal,
  MapPin,
  Coins,
  RefreshCw
} from "lucide-react";

// Mock data for browse page
const mockItems = [
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
  },
  // Add more items...
];

const categories = ["All", "Outerwear", "Tops", "Bottoms", "Dresses", "Footwear", "Accessories"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const conditions = ["Like New", "Excellent", "Very Good", "Good"];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userPoints={320} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse Amazing Items
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of pre-loved fashion items from our community. 
            From vintage treasures to modern essentials.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl p-6 shadow-soft mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for items, brands, or styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Near Me
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <Badge key={size} variant="outline" className="cursor-pointer">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Condition</label>
                  <div className="flex flex-wrap gap-2">
                    {conditions.map((condition) => (
                      <Badge key={condition} variant="outline" className="cursor-pointer">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Exchange Type</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer">
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Swap
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      <Coins className="w-3 h-3 mr-1" />
                      Points
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-muted-foreground">
              Showing <span className="font-medium">1,234</span> items
            </p>
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
              <option>Sort by: Most Recent</option>
              <option>Sort by: Most Popular</option>
              <option>Sort by: Nearest</option>
              <option>Sort by: Points (Low to High)</option>
              <option>Sort by: Points (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 12 }, (_, i) => (
            <ItemCard 
              key={i} 
              {...mockItems[i % mockItems.length]}
              id={String(i + 1)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browse;