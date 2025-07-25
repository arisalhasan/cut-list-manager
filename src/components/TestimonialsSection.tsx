import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Best haircut I've ever had! Elias took the time to understand exactly what I wanted and delivered beyond expectations. The atmosphere is great and the service is top-notch."
  },
  {
    name: "David L.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    text: "George is a beard wizard! I've struggled with maintaining my beard shape for years, but after one visit with George, I finally have the look I've always wanted. Highly recommend!"
  },
  {
    name: "James T.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4.5,
    text: "Took my son for his first real haircut here and Charalambos made it such a great experience. My son was nervous but Charalambos put him at ease and gave him an awesome cut. We'll be regulars for sure."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16}
                          className={i < Math.floor(testimonial.rating) ? "fill-current" : ""}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;