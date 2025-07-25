import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary-hover">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-muted-foreground">Ze Elias Barber Shop</p>
                  <p className="text-muted-foreground">2CPH+G67, Polis Chrysochous 8820</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-muted-foreground">+357 96 395320</p>
                  <p className="text-muted-foreground">Mon-Fri: 9am-7pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-muted-foreground">hello@zeelias.com</p>
                  <p className="text-muted-foreground">bookings@zeelias.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="bg-primary hover:bg-primary-hover text-primary-foreground border-primary">
                  <Facebook size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary hover:bg-primary-hover text-primary-foreground border-primary">
                  <Twitter size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary hover:bg-primary-hover text-primary-foreground border-primary">
                  <Instagram size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;