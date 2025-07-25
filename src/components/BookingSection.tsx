import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin, Phone, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM"
];

const services = [
  "Classic Haircut - $35",
  "Beard Trim & Shape - $25", 
  "Royal Treatment - $60",
  "Kids Cut - $25",
  "Hot Shave - $40",
  "Hair Coloring - $55+"
];

const barbers = ["Any Barber", "Elias", "George", "Charalambos"];

const BookingSection = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    notes: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTime) {
      toast({
        title: "Please select a time slot",
        variant: "destructive"
      });
      return;
    }

    // For now, just show success message
    // Later this will save to Supabase
    toast({
      title: "Appointment Booked!",
      description: `Your ${formData.service} is scheduled for ${new Date(formData.date).toLocaleDateString()} at ${selectedTime}`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      barber: "",
      date: "",
      notes: ""
    });
    setSelectedTime("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="book" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Book Your <span className="text-primary">Appointment</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="md:flex">
              {/* Booking Form */}
              <div className="w-full md:w-1/2 p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Schedule Your Visit</CardTitle>
                </CardHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="barber">Preferred Barber</Label>
                    <Select onValueChange={(value) => handleInputChange("barber", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Barber" />
                      </SelectTrigger>
                      <SelectContent>
                        {barbers.map((barber) => (
                          <SelectItem key={barber} value={barber}>
                            {barber}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Available Times</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 text-sm rounded border transition-colors ${
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted hover:bg-primary hover:text-primary-foreground'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Special Requests</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                    Confirm Booking
                  </Button>
                </form>
              </div>
              
              {/* Booking Info */}
              <div className="w-full md:w-1/2 bg-primary text-primary-foreground p-8 flex flex-col justify-between">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-primary-foreground text-2xl">Booking Information</CardTitle>
                  </CardHeader>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Clock className="text-xl mt-1" />
                      <div>
                        <h4 className="font-bold">Hours</h4>
                        <p className="text-sm opacity-90">Monday - Wednesday: 9am - 7pm</p>
                        <p className="text-sm opacity-90">Thursday: Closed</p>
                        <p className="text-sm opacity-90">Friday - Saturday: 9am - 7pm</p>
                        <p className="text-sm opacity-90">Sunday: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="text-xl mt-1" />
                      <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-sm opacity-90">2CPH+G67</p>
                        <p className="text-sm opacity-90">Polis Chrysochous 8820</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="text-xl mt-1" />
                      <div>
                        <h4 className="font-bold">Contact</h4>
                        <p className="text-sm opacity-90">+357 96 395320</p>
                        <p className="text-sm opacity-90">bookings@zeelias.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-xl mt-1" />
                    <div>
                      <h4 className="font-bold">Cancellation Policy</h4>
                      <p className="text-sm opacity-90">
                        Please provide at least 24 hours notice for cancellations to avoid a fee. 
                        Late arrivals may result in shortened service time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;