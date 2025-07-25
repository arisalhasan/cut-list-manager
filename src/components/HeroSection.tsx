import { Button } from "./ui/button";
import heroImage from "../assets/barbershop-hero.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `var(--gradient-hero), url(${heroImage})`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Precision <span className="text-primary">Cuts</span>, Timeless <span className="text-primary">Style</span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Experience the art of traditional barbering with modern techniques at Ze Elias. 
            Book your appointment today and leave looking your absolute best.
          </p>
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;