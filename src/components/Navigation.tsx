import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-secondary text-secondary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scissors className="text-primary text-2xl" />
          <span className="text-xl font-bold">Ze <span className="text-primary">Elias</span></span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('barbers')} 
            className="hover:text-primary transition-colors"
          >
            Our Barbers
          </button>
          <button 
            onClick={() => scrollToSection('book')} 
            className="hover:text-primary transition-colors"
          >
            Book Now
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary w-full py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-primary transition-colors text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('barbers')} 
              className="hover:text-primary transition-colors text-left"
            >
              Our Barbers
            </button>
            <button 
              onClick={() => scrollToSection('book')} 
              className="hover:text-primary transition-colors text-left"
            >
              Book Now
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;