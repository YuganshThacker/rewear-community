import { useState } from 'react';
import { Star, MapPin, Calendar, Edit, Settings, Shield, Heart, Package, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ItemCard } from '@/components/ItemCard';

const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b86d7e5d?w=200",
  location: "Brooklyn, NY",
  joinDate: "March 2024",
  bio: "Sustainable fashion enthusiast sharing my wardrobe treasures. Love vintage finds and eco-friendly brands!",
  rating: 4.8,
  totalSwaps: 15,
  pointsEarned: 320,
  currentPoints: 85,
  badges: ["Eco Warrior", "Top Swapper", "Vintage Lover"],
  stats: {
    itemsListed: 23,
    successfulSwaps: 15,
    savedItems: 8,
    followers: 42,
    following: 38
  }
};

const mockItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket in excellent condition",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300"],
    condition: "Excellent",
    points: 25,
    category: "Outerwear",
    size: "M",
    location: "Brooklyn, NY",
    status: "available"
  },
  {
    id: "2",
    title: "Silk Floral Dress",
    description: "Beautiful silk dress with floral print",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300"],
    condition: "Good",
    points: 30,
    category: "Dresses",
    size: "S",
    location: "Brooklyn, NY",
    status: "pending"
  },
  {
    id: "3",
    title: "Leather Ankle Boots",
    description: "Stylish leather ankle boots",
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300"],
    condition: "Excellent",
    points: 35,
    category: "Shoes",
    size: "8",
    location: "Brooklyn, NY",
    status: "swapped"
  }
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback className="text-2xl">{mockUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mockUser.rating}</span>
                  <span className="text-muted-foreground">({mockUser.totalSwaps} swaps)</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{mockUser.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {mockUser.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {mockUser.joinDate}
                      </span>
                    </div>
                    <p className="text-muted-foreground max-w-lg">{mockUser.bio}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mockUser.stats.itemsListed}</div>
                    <div className="text-sm text-muted-foreground">Items Listed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mockUser.stats.successfulSwaps}</div>
                    <div className="text-sm text-muted-foreground">Successful Swaps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mockUser.currentPoints}</div>
                    <div className="text-sm text-muted-foreground">Current Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mockUser.stats.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mockUser.stats.following}</div>
                    <div className="text-sm text-muted-foreground">Following</div>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.badges.map((badge) => (
                      <Badge key={badge} className="bg-gradient-primary text-primary-foreground">
                        <Shield className="h-3 w-3 mr-1" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="items" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              My Items
            </TabsTrigger>
            <TabsTrigger value="swaps" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Swap History
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Saved Items
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Items ({mockItems.length})</h2>
                <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  List New Item
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockItems.map((item) => (
                  <div key={item.id} className="relative">
                    <ItemCard {...item} />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        item.status === 'available' ? 'bg-success' : 
                        item.status === 'pending' ? 'bg-warning' : 'bg-muted'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="swaps">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Swap History</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((swap) => (
                  <Card key={swap}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                          <img 
                            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100" 
                            alt="Item" 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <RefreshCw className="h-6 w-6 text-muted-foreground mt-5" />
                          <img 
                            src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100" 
                            alt="Item" 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Vintage Denim Jacket ↔ Silk Floral Dress</h3>
                          <p className="text-muted-foreground">Swapped with Emma Wilson • 2 weeks ago</p>
                          <Badge variant="outline" className="mt-2">Completed</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Saved Items ({mockUser.stats.savedItems})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockItems.slice(0, 2).map((item) => (
                  <ItemCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Reviews & Feedback</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50" />
                          <AvatarFallback>EW</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">Emma Wilson</h4>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">1 week ago</span>
                          </div>
                          <p className="text-muted-foreground">
                            "Great swap experience! The item was exactly as described and Sarah was very communicative throughout the process."
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}