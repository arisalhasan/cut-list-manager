import { Scissors, User, Sparkles, Baby, Flame, Paintbrush } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "A precision haircut tailored to your style with a hot towel finish.",
    price: "$35",
    duration: "60 min"
  },
  {
    icon: User,
    title: "Beard Trim & Shape",
    description: "Professional beard shaping with hot lather and straight razor detailing.",
    price: "$25",
    duration: "30 min"
  },
  {
    icon: Sparkles,
    title: "Royal Treatment",
    description: "Haircut, beard trim, hot towel treatment, and relaxing scalp massage.",
    price: "$60",
    duration: "90 min"
  },
  {
    icon: Baby,
    title: "Kids Cut",
    description: "Special haircut for young gentlemen with a fun, comfortable experience.",
    price: "$25",
    duration: "45 min"
  },
  {
    icon: Flame,
    title: "Hot Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$40",
    duration: "45 min"
  },
  {
    icon: Paintbrush,
    title: "Hair Coloring",
    description: "Professional hair coloring services using premium products for men.",
    price: "$55+",
    duration: "90+ min"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-primary">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
              >
                <CardHeader className="text-center">
                  <div className="h-24 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-hover transition-colors">
                    <IconComponent className="text-primary-foreground text-4xl" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;