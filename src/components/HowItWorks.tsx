import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Search, 
  RefreshCw, 
  Coins,
  CheckCircle,
  ArrowRight,
  Camera,
  Heart,
  Handshake
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "List Your Items",
    description: "Upload photos of clothes you no longer wear. Add details about size, condition, and style.",
    icon: Upload,
    color: "bg-primary",
    features: ["Easy photo upload", "Detailed descriptions", "Category tagging"]
  },
  {
    number: "02", 
    title: "Browse & Discover",
    description: "Explore thousands of pre-loved items from your local community and beyond.",
    icon: Search,
    color: "bg-accent",
    features: ["Smart search filters", "Location-based results", "Save favorites"]
  },
  {
    number: "03",
    title: "Swap or Redeem",
    description: "Request direct swaps with other members or use points to redeem items you love.",
    icon: RefreshCw,
    color: "bg-success",
    features: ["Direct exchanges", "Point system", "Secure transactions"]
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
            How It Works
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Three Simple Steps to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sustainable Style
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fashion-conscious individuals who are making a positive impact 
            on the environment while refreshing their wardrobes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-border z-0 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                </div>
              )}

              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                {/* Number Badge */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Earn Points</h4>
            <p className="text-sm text-muted-foreground">Get points for successful swaps and redeem them for items you want.</p>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-success" />
            </div>
            <h4 className="font-semibold mb-2">Help Planet</h4>
            <p className="text-sm text-muted-foreground">Reduce textile waste and promote circular fashion economy.</p>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold mb-2">Discover Unique</h4>
            <p className="text-sm text-muted-foreground">Find one-of-a-kind pieces and vintage treasures from fellow fashion lovers.</p>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-semibold mb-2">Build Community</h4>
            <p className="text-sm text-muted-foreground">Connect with like-minded fashion enthusiasts in your area.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Sustainable Fashion Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join ReWear today and be part of the fashion revolution that's good for you and the planet.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8" asChild>
              <Link to="/signup">
                Join ReWear Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8" asChild>
              <Link to="/browse">
                Browse Items First
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No listing fees • Free to join • Secure transactions
          </p>
        </div>
      </div>
    </section>
  );
};