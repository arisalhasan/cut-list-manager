import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BarbersSection from "@/components/BarbersSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BarbersSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Google Maps Embed */}
      <div className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.179946671741!2d32.42471531523683!3d34.83617788040347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7098d9f5f5b0f%3A0x2b7f3d8f5f5b0f0!2sPolis%20Chrysochous%208820%2C%20Cyprus!5e0!3m2!1sen!2sus!4v1689780238382!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
