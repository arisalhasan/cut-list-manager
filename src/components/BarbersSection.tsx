import { Card, CardContent } from "./ui/card";
import { Instagram, Twitter } from "lucide-react";

const barbers = [
  {
    name: "Elias",
    title: "Master Barber",
    image: "https://images.unsplash.com/photo-1583864697781-a0a9725b6d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "With over 10 years of experience, Elias excels in both haircuts and beard trims, delivering precision and style with every service."
  },
  {
    name: "George",
    title: "Style Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    description: "George combines classic barbering techniques with modern trends to create the perfect look for each client, from fades to full beard trims."
  },
  {
    name: "Charalambos",
    title: "Traditional Barber",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description: "Charalambos brings old-world craftsmanship to every haircut and beard trim, ensuring each client leaves looking their absolute best."
  }
];

const BarbersSection = () => {
  return (
    <section id="barbers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meet Our <span className="text-primary">Barbers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <Card 
              key={index} 
              className="group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border-0 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={barber.image} 
                  alt={`Barber ${barber.name}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{barber.name}</h3>
                  <p className="text-primary">{barber.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{barber.description}</p>
                <div className="flex space-x-4 text-primary">
                  <button className="hover:text-primary-hover transition-colors">
                    <Instagram size={20} />
                  </button>
                  <button className="hover:text-primary-hover transition-colors">
                    <Twitter size={20} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;