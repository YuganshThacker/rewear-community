import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Coins, 
  ShoppingBag, 
  RefreshCw,
  Heart,
  TrendingUp,
  Calendar,
  MapPin,
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userPoints={320} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, Sarah! 👋
            </h1>
            <p className="text-muted-foreground mt-2">
              Here's what's happening with your items and swaps
            </p>
          </div>
          
          <Button variant="accent" asChild>
            <Link to="/add-item">
              <Plus className="w-4 h-4 mr-2" />
              List New Item
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-2xl font-bold text-foreground">320</p>
                  <p className="text-xs text-success">+25 this week</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-xs text-muted-foreground">2 pending approval</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Swaps</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-success">+3 this month</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Saved Items</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-xs text-muted-foreground">3 new matches</p>
                </div>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Swaps */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Active Swaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">Vintage Denim Jacket</h4>
                      <p className="text-sm text-muted-foreground">Swap with @fashionista23</p>
                      <Badge variant="secondary" className="mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        Pending pickup
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-warm rounded-lg"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">Designer Sneakers</h4>
                      <p className="text-sm text-muted-foreground">Swap with @sneakerhead</p>
                      <Badge variant="secondary" className="mt-1 bg-success/20 text-success">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        In progress
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>

                <Button variant="ghost" className="w-full mt-4">
                  View All Swaps
                </Button>
              </CardContent>
            </Card>

            {/* My Items */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  My Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="border border-border rounded-lg p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3"></div>
                      <h4 className="font-medium mb-1">Summer Dress</h4>
                      <p className="text-sm text-muted-foreground mb-2">Size M • Excellent</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          <Eye className="w-2 h-2 mr-1" />
                          24 views
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          3 interested
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full mt-4">
                  View All Items
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    Brooklyn, NY
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="font-semibold text-primary">4.9</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">3 months</div>
                      <div className="text-xs text-muted-foreground">Member</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/profile">
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/add-item">
                    <Plus className="w-4 h-4 mr-2" />
                    List New Item
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/browse">
                    <Eye className="w-4 h-4 mr-2" />
                    Browse Items
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/favorites">
                    <Heart className="w-4 h-4 mr-2" />
                    Saved Items
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Points Summary */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-accent" />
                  Points Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Successful swap</span>
                    <span className="text-success">+50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Item redeemed</span>
                    <span className="text-destructive">-120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Profile completion</span>
                    <span className="text-success">+25</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full mt-4 text-xs">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;