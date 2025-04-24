"use client";
import { useState } from "react";
import {
  Droplet,
  Users,
  BarChart3,
  Calendar,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  MapPin,
  GlassWater,
  Building,
  Truck,
  Mail,
  Phone,
  MessageSquare,
  User,
  MapPinned,
  Send,
  ChevronDown,
  Star,
  Shield,
  Gift,
  Clock,
  Award,
  ThumbsUp,
  Bookmark,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ModeToggle } from "@/components/ui/Modetoggle";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-background/90 dark:bg-neutral-950 backdrop-blur border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Droplet className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Free Water Bottle Co.</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors dark:hover:text-primary/90">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors dark:hover:text-primary/90">How It Works</a>
              <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors dark:hover:text-primary/90">Partners</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors dark:hover:text-primary/90">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors dark:hover:text-primary/90">Contact</a>
              <ModeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#partners" 
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partners
                </a>
                <a 
                  href="#faq" 
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 dark:border-primary/80 dark:text-primary/90 dark:hover:bg-primary/20">Log In</Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background dark:from-primary/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                <Star className="h-3 w-3 mr-1" />
                Innovative Hydration Solution
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Free Water for All, <span className="text-primary dark:text-primary/90">Sponsored by Brands</span></h1>
              <p className="text-lg text-muted-foreground mb-8">
                We provide clean, branded drinking water at no cost to end users. Our platform connects sponsors with events and locations to create hydration campaigns that benefit everyone.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="px-6 bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80">
                  <span>Become a Sponsor</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="px-6 border-primary text-primary hover:bg-primary/10 dark:border-primary/80 dark:text-primary/90 dark:hover:bg-primary/20">
                  <span>Request Water for Event</span>
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Free Water Bottle" 
                  className="rounded-lg shadow-2xl w-full dark:shadow-primary/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg dark:shadow-primary/20">
                  <div className="flex items-center space-x-2">
                    <Droplet className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">1M+</p>
                      <p className="text-sm text-muted-foreground">Bottles Distributed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
              Platform Benefits
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach to hydration creates a win-win situation for sponsors, event organizers, and end users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary transition-colors dark:border-primary/20 dark:hover:border-primary/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:bg-primary/20">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>For Sponsors</CardTitle>
                <CardDescription>Create impactful sustainability campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Design custom branded bottles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Target specific events and locations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Track real-time impressions and engagement</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 dark:border-primary/80 dark:text-primary/90 dark:hover:bg-primary/20">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-border hover:border-primary transition-colors dark:border-primary/20 dark:hover:border-primary/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>For Event Organizers</CardTitle>
                <CardDescription>Simplify hydration logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Easy scheduling system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Reliable deliveries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Zero cost hydration solution</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 dark:border-primary/80 dark:text-primary/90 dark:hover:bg-primary/20">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-border hover:border-primary transition-colors dark:border-primary/20 dark:hover:border-primary/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:bg-primary/20">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>For Logistics Managers</CardTitle>
                <CardDescription>Streamline distribution operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Real-time inventory tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Optimized delivery scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Digital confirmation system</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 dark:border-primary/80 dark:text-primary/90 dark:hover:bg-primary/20">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-16 bg-muted dark:bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
              Strategic Advantages
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits For Everyone</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform creates value for all stakeholders in the ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Brand Visibility</h3>
              <p className="text-muted-foreground text-sm">Increase awareness through sustainable marketing</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Sustainability</h3>
              <p className="text-muted-foreground text-sm">Reduce plastic waste with our eco-friendly solutions</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Data Analytics</h3>
              <p className="text-muted-foreground text-sm">Gain insights from detailed engagement metrics</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Free Hydration</h3>
              <p className="text-muted-foreground text-sm">Provide value to users without any cost</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Time Saving</h3>
              <p className="text-muted-foreground text-sm">Streamlined processes for efficient management</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Wide Coverage</h3>
              <p className="text-muted-foreground text-sm">Access to over 50 cities across India</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">User Satisfaction</h3>
              <p className="text-muted-foreground text-sm">Improve event experiences with free hydration</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center dark:shadow-primary/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 dark:bg-primary/20">
                <Bookmark className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">Brand Loyalty</h3>
              <p className="text-muted-foreground text-sm">Build stronger connections with your audience</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
              Process
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to connect sponsors with events and manage water bottle distribution.
            </p>
          </div>

          <Tabs defaultValue="sponsors" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-primary/10 dark:bg-accent">
              <TabsTrigger value="sponsors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/90">For Sponsors</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/90">For Events</TabsTrigger>
              <TabsTrigger value="logistics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/90">For Logistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sponsors" className="mt-6">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border dark:shadow-primary/10">
                <ol className="relative border-l border-primary/20 ml-3 dark:border-primary/40">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">1</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Register as a Sponsor</h3>
                    <p className="text-muted-foreground">Create an account and set up your company profile with logo and brand details.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">2</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Design Your Campaign</h3>
                    <p className="text-muted-foreground">Upload bottle artwork, create QR codes linking to your content, and set campaign parameters.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">3</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Select Distribution Points</h3>
                    <p className="text-muted-foreground">Choose events or public locations where you want your branded bottles distributed.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">4</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Track Performance</h3>
                    <p className="text-muted-foreground">Monitor impressions, QR code scans, and engagement metrics through your dashboard.</p>
                  </li>
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border dark:shadow-primary/10">
                <ol className="relative border-l border-primary/20 ml-3 dark:border-primary/40">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">1</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Register Your Event</h3>
                    <p className="text-muted-foreground">Create an account and add details about your event including date, location, and expected attendance.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">2</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Request Water Bottles</h3>
                    <p className="text-muted-foreground">Specify the quantity needed and preferred delivery windows through our scheduling system.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">3</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Confirm Delivery</h3>
                    <p className="text-muted-foreground">Receive deliveries and confirm receipt via mobile QR scan through our platform.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">4</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Distribute Bottles</h3>
                    <p className="text-muted-foreground">Hand out free water to attendees and enjoy a sustainable, cost-free hydration solution.</p>
                  </li>
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="logistics" className="mt-6">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border dark:shadow-primary/10">
                <ol className="relative border-l border-primary/20 ml-3 dark:border-primary/40">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">1</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Monitor Inventory</h3>
                    <p className="text-muted-foreground">Track bottle stock levels in real-time across multiple warehouses and locations.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">2</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Plan Route Optimization</h3>
                    <p className="text-muted-foreground">Use our scheduling tools to optimize delivery routes and maximize efficiency.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">3</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Manage Deliveries</h3>
                    <p className="text-muted-foreground">Receive automated notifications for new orders and update delivery statuses in real-time.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background dark:bg-primary/20">
                      <span className="text-primary font-bold">4</span>
                    </span>
                    <h3 className="font-medium text-lg text-foreground">Generate Reports</h3>
                    <p className="text-muted-foreground">Access comprehensive analytics on distribution metrics and operational efficiency.</p>
                  </li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground dark:bg-primary/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 dark:bg-primary-foreground/90 dark:text-primary">
              Impact
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Our Reach</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Making a difference across India through our free water distribution network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/20 dark:bg-accent p-8 rounded-lg text-center">
              <GlassWater className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold mb-2">1M+</p>
              <p className="opacity-80">Bottles Distributed</p>
            </div>
            <div className="bg-primary/20 dark:bg-accent p-8 rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="opacity-80">Active Sponsors</p>
            </div>
            <div className="bg-primary/20 dark:bg-accent p-8 rounded-lg text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="opacity-80">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


