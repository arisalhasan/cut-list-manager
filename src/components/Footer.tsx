import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Scissors, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="text-primary text-2xl" />
              <span className="text-xl font-bold">Ze <span className="text-primary">Elias</span></span>
            </div>
            <p className="text-secondary-foreground/70">
              Precision cuts with old-school charm and modern techniques. Your style is our passion.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('barbers')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Our Barbers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('book')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Book Now
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/70">Haircuts</li>
              <li className="text-secondary-foreground/70">Beard Trims</li>
              <li className="text-secondary-foreground/70">Hot Shaves</li>
              <li className="text-secondary-foreground/70">Kids Cuts</li>
              <li className="text-secondary-foreground/70">Hair Coloring</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-secondary-foreground/70 mb-4">
              Subscribe to get updates on special offers and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none bg-secondary-foreground/10 border-secondary-foreground/20"
                required
              />
              <Button 
                type="submit" 
                className="rounded-l-none bg-primary hover:bg-primary-hover"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/70">© 2023 Ze Elias. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
              <Facebook size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
              <Twitter size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
              <Instagram size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;