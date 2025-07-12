import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Mail, 
  MapPin, 
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Leaf,
  Heart
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ReWear</span>
            </Link>
            
            <p className="text-background/80 text-sm leading-relaxed">
              Building a sustainable fashion community where every piece of clothing gets a second chance to shine.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-background/60">
              <Leaf className="w-4 h-4 text-success" />
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for the planet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse" className="text-background/80 hover:text-background transition-colors">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-background/80 hover:text-background transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-background/80 hover:text-background transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-background/80 hover:text-background transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-background/80 hover:text-background transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-background/80 hover:text-background transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-background/80 hover:text-background transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@rewear.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8 text-background/60 hover:text-background hover:bg-background/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-background/60 hover:text-background hover:bg-background/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 text-background/60 hover:text-background hover:bg-background/10">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-background/5 rounded-2xl p-6 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-background/80 mb-4">
              Get the latest sustainable fashion tips and community updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="accent" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 ReWear. All rights reserved. Built with love for sustainable fashion.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>🌱 Carbon Neutral Shipping</span>
              <span>♻️ Circular Fashion</span>
              <span>🤝 Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};