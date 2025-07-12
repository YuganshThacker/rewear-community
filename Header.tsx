import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Coins,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isAuthenticated?: boolean;
  userPoints?: number;
}

export const Header = ({ isAuthenticated = false, userPoints = 0 }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ReWear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/browse" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Browse Items
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {/* Points Display */}
                <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                  <Coins className="w-4 h-4 text-accent" />
                  <span className="font-medium">{userPoints}</span>
                  <span className="text-sm text-muted-foreground">points</span>
                </div>

                {/* Quick Actions */}
                <Button variant="accent" size="sm" asChild>
                  <Link to="/add-item">
                    <Plus className="w-4 h-4" />
                    List Item
                  </Link>
                </Button>

                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>

                <Button variant="ghost" size="icon" asChild>
                  <Link to="/dashboard">
                    <User className="w-5 h-5" />
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/signup">Join ReWear</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden mt-4 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-4 pb-4">
            <Link 
              to="/browse" 
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Items
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg w-fit">
                  <Coins className="w-4 h-4 text-accent" />
                  <span className="font-medium">{userPoints} points</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="accent" size="sm" className="flex-1" asChild>
                    <Link to="/add-item">List Item</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" className="flex-1" asChild>
                  <Link to="/signup">Join ReWear</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};