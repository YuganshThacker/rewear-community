import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { 
  ShoppingBag, 
  Mail, 
  Lock, 
  User,
  Eye,
  EyeOff,
  Leaf,
  RefreshCw,
  Users,
  ArrowLeft
} from "lucide-react";

interface AuthProps {
  mode?: "login" | "signup";
}

const Auth = ({ mode = "login" }: AuthProps) => {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const isSignup = !isLogin;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/30">
      {/* Header */}
      <header className="p-4">
        <div className="flex items-center justify-between container mx-auto">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ReWear
            </span>
          </Link>

          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Fashion Revolution
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with a community of conscious fashion lovers. Swap, share, and discover 
                amazing pre-loved pieces while making a positive impact on the planet.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Easy Clothing Swaps</h3>
                  <p className="text-sm text-muted-foreground">
                    Exchange items directly with other members or use our points system
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Sustainable Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce textile waste and extend the life of beautiful clothing
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Amazing Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with like-minded fashion enthusiasts in your area
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="animate-slide-up">
            <Card className="border-0 shadow-strong bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {isLogin ? "Welcome Back!" : "Join ReWear"}
                </CardTitle>
                <p className="text-muted-foreground">
                  {isLogin 
                    ? "Sign in to continue your sustainable fashion journey" 
                    : "Start your sustainable fashion journey today"
                  }
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Name Field (Signup only) */}
                  {isSignup && (
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password (Signup only) */}
                  {isSignup && (
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    variant="hero" 
                    className="w-full py-6 text-lg font-semibold"
                    disabled={isLoading}
                    onClick={async (e) => {
                      e.preventDefault();
                      setIsLoading(true);
                      
                      try {
                        if (isLogin) {
                          await login(formData.email, formData.password);
                          toast({
                            title: "Welcome back!",
                            description: "Successfully signed in to your account.",
                          });
                        } else {
                          if (formData.password !== formData.confirmPassword) {
                            toast({
                              title: "Passwords don't match",
                              description: "Please make sure your passwords match.",
                              variant: "destructive",
                            });
                            return;
                          }
                          await signup({
                            fullName: formData.name,
                            email: formData.email,
                            password: formData.password,
                            username: formData.email.split('@')[0], // Generate username from email
                          });
                          toast({
                            title: "Account created!",
                            description: "Welcome to ReWear! Your account has been created successfully.",
                          });
                        }
                        navigate('/dashboard');
                      } catch (error: any) {
                        toast({
                          title: "Authentication failed",
                          description: error.message || "Please check your credentials and try again.",
                          variant: "destructive",
                        });
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                  >
                    {isLoading ? "Loading..." : (isLogin ? "Sign In" : "Create Account")}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="py-6">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  
                  <Button variant="outline" className="py-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>

                {/* Toggle Auth Mode */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    {" "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-primary hover:underline font-medium"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>

                {/* Terms (Signup only) */}
                {isSignup && (
                  <p className="text-xs text-muted-foreground text-center">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;