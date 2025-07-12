import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  RefreshCw, 
  Leaf, 
  Users, 
  Sparkles,
  ArrowRight,
  Play
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-secondary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-warm rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="bg-background/50 backdrop-blur-sm border-primary/20 text-primary w-fit"
            >
              <Sparkles className="w-3 h-3 mr-2" />
              Sustainable Fashion Revolution
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Swap, Share,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sustain
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join the community clothing exchange that's transforming how we think about fashion. 
                Give your clothes a second life and discover amazing pre-loved pieces.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/signup">
                  Start Swapping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/browse">
                  <Play className="w-5 h-5 mr-2" />
                  Watch How It Works
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Easy Swaps</div>
                  <div className="text-xs text-muted-foreground">Direct exchanges</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-medium text-sm">Eco-Friendly</div>
                  <div className="text-xs text-muted-foreground">Reduce waste</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm">Community</div>
                  <div className="text-xs text-muted-foreground">Connect locally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
              {/* Floating Cards */}
              <div className="space-y-6">
                {/* Item Card 1 */}
                <div className="bg-background shadow-medium rounded-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl"></div>
                    <div className="flex-1">
                      <div className="font-semibold">Vintage Denim Jacket</div>
                      <div className="text-sm text-muted-foreground">Size M • Excellent</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          <RefreshCw className="w-2 h-2 mr-1" />
                          Swap
                        </Badge>
                        <span className="text-xs text-success">✓ Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Card 2 */}
                <div className="bg-background shadow-medium rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-warm rounded-xl"></div>
                    <div className="flex-1">
                      <div className="font-semibold">Designer Sneakers</div>
                      <div className="text-sm text-muted-foreground">Size 9 • Like New</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                          <span className="text-accent">250</span> points
                        </Badge>
                        <span className="text-xs text-primary">🔥 Popular</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Card 3 */}
                <div className="bg-background shadow-medium rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
                    <div className="flex-1">
                      <div className="font-semibold">Summer Dress</div>
                      <div className="text-sm text-muted-foreground">Size S • Good</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          <RefreshCw className="w-2 h-2 mr-1" />
                          Swap
                        </Badge>
                        <span className="text-xs text-muted-foreground">2 interested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};