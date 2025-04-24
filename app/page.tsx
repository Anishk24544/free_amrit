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
import {motion} from "motion/react"
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ModeToggle } from "@/components/ui/Modetoggle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import herosection from "../public/1745517948324.png"
import Image from "next/image";

const StatsSection = () => {
  const bottlesRef = useRef(null);
  const sponsorsRef = useRef(null);
  const citiesRef = useRef(null);

  useEffect(() => {
    const animateNumber = (ref: any, end: number, suffix = "") => {
      gsap.fromTo(
        ref.current,
        { textContent: 0 },
        {
          textContent: end,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            ref.current.textContent = Math.floor(ref.current.textContent).toLocaleString() + suffix;
          },
        }
      );
    };

    animateNumber(bottlesRef, 10000, "+");
    animateNumber(sponsorsRef, 50, "+");
    animateNumber(citiesRef, 10, "+");
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-primary/20 dark:bg-neutral-900 p-8 rounded-lg text-center">
        <GlassWater className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <p ref={bottlesRef} className="text-4xl font-bold mb-2">0</p>
        <p className="opacity-80">Bottles Distributed</p>
      </div>
      <div className="bg-primary/20 dark:bg-neutral-900 p-8 rounded-lg text-center">
        <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <p ref={sponsorsRef} className="text-4xl font-bold mb-2">0</p>
        <p className="opacity-80">Active Sponsors</p>
      </div>
      <div className="bg-primary/20 dark:bg-neutral-900 p-8 rounded-lg text-center">
        <MapPin className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <p ref={citiesRef} className="text-4xl font-bold mb-2">0</p>
        <p className="opacity-80">Cities Covered</p>
      </div>
    </div>
  );
};



export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
const currentDate=Date.now()
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-background/90 dark:bg-neutral-950 backdrop-blur border-b border-border z-50">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Droplet className="h-8 w-8 text-primary" />
              <span className="text-4xl font-bold text-foreground">Free Amrit</span>
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

              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background dark:from-primary/20 dark:to-background">
        <div className="container max-w-7xl mx-auto px-4">
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
                
              <motion.img
      src={herosection.src} // Replace with your image path
      alt="Rotating"
      initial={{ rotate: 0 }}
      animate={{ rotate: 15 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
          
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
      <section id="features" className="py-20">
        <div className="container  mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
              Platform Benefits
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach to hydration creates a win-win situation for sponsors, event organizers, and end users.
            </p>
          </div>
  
          <div className="grid  w-full justify-self-center  grid-cols-1 md:grid-cols-2    max-w-4xl  gap-8">
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

          <Tabs defaultValue="sponsors" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 bg-primary/10 dark:bg-accent">
              <TabsTrigger value="sponsors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/90">For Sponsors</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary/90">For Events</TabsTrigger>
             
            </TabsList>
            
            <TabsContent value="sponsors" className="mt-6">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border dark:shadow-primary/10 z-10">
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

           
          </Tabs>
        </div>
      </section>

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
          
          <StatsSection/>
        </div>
      </section>
        {/* <footer className={`w-full py-8 px-4 dark:bg-neutral-950 dark:text-neutral-100 bg-neutral-100 text-neutral-950`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className={`text-2xl font-bold dark:text-cyan-500 text-cyan-500`}>Your Brand</h2>
              <p className="mt-2 text-sm">Creating amazing experiences since 2023</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0">
              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Legal</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-cyan-500 transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {currentDate} Your Company. All rights reserved.</p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
            
          
              <a href="#" className="text-cyan-500 hover:text-cyan-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            
          </div>
        </div>
      </footer> */}
    </div>
  );
}


