import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, User, MapPin, Clock, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge as BadgeComponent } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const mockItem = {
  id: 1,
  title: "Vintage Denim Jacket",
  description: "Classic vintage denim jacket in excellent condition. Perfect for layering and adding a retro touch to any outfit. Slightly oversized fit with authentic wear patterns.",
  category: "Outerwear",
  type: "Jacket",
  size: "M",
  condition: "Excellent",
  tags: ["vintage", "denim", "casual"],
  images: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    "https://images.unsplash.com/photo-1544441893-675973e31985?w=400"
  ],
  points: 25,
  swapEligible: true,
  uploader: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b86d7e5d?w=100",
    rating: 4.8,
    totalSwaps: 15,
    location: "Brooklyn, NY",
    joinDate: "March 2024"
  },
  uploadDate: "2 days ago",
  views: 127,
  likes: 23
};

export default function ItemDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card">
              <img 
                src={mockItem.images[selectedImage]} 
                alt={mockItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 space-y-2">
                <Button
                  size="icon"
                  variant={isLiked ? "default" : "secondary"}
                  onClick={() => setIsLiked(!isLiked)}
                  className="rounded-full"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {mockItem.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground/50'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{mockItem.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {mockItem.uploadDate}
                </span>
                <span>{mockItem.views} views</span>
                <span>{mockItem.likes} likes</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <BadgeComponent variant="secondary">{mockItem.category}</BadgeComponent>
                <BadgeComponent variant="outline">{mockItem.type}</BadgeComponent>
                <BadgeComponent variant="outline">Size {mockItem.size}</BadgeComponent>
                <BadgeComponent 
                  variant={mockItem.condition === 'Excellent' ? 'default' : 'secondary'}
                  className="bg-success/10 text-success hover:bg-success/20"
                >
                  {mockItem.condition}
                </BadgeComponent>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{mockItem.description}</p>

            {/* Tags */}
            <div>
              <h3 className="font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {mockItem.tags.map((tag) => (
                  <BadgeComponent key={tag} variant="outline" className="bg-accent/10">
                    #{tag}
                  </BadgeComponent>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90" size="lg">
                Request Swap
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Redeem for {mockItem.points} Points
              </Button>
            </div>

            {/* Uploader Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Listed by</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mockItem.uploader.avatar} />
                    <AvatarFallback>{mockItem.uploader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{mockItem.uploader.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {mockItem.uploader.rating} • {mockItem.uploader.totalSwaps} swaps
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {mockItem.uploader.location}
                  </div>
                  <div className="text-muted-foreground">
                    Joined {mockItem.uploader.joinDate}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}