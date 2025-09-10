import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Calendar, Send, MessageCircle, Instagram, Facebook, Globe, Search } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "Tarot Reading",
    "Numerology Consultation", 
    "Angel Healing",
    "Vastu Consultation",
    "Astrology Reading",
    "Herbal Spells & Remedies",
    "Complete Life Reading Package",
    "Healing Journey Package"
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, phone, and service selection are required.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Appointment request sent!",
      description: "Dr. Jinel will contact you within 24 hours to confirm your booking.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageTransition>
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
            Book Your Session
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step on your spiritual journey. Schedule a consultation 
            and discover the divine guidance that awaits you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-secondary" />
                Schedule Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-input border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Service Required *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-foreground">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className="bg-input border-border text-foreground"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground">Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="text-foreground">
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Any specific questions or requirements..."
                    className="bg-input border-border text-foreground min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-cosmic text-primary-foreground hover:shadow-divine"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-cosmic text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1 text-secondary" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-primary-foreground/80">
                      Kandivali West<br />
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Kandivali+West+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-secondary hover:text-primary-glow transition-colors"
                    >
                      <Search className="h-4 w-4 mr-1" />
                      View on Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1 text-secondary" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+919876543210"
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1 text-secondary" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contact@divinemiracle.com"
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      contact@divinemiracle.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 mt-1 text-secondary" />
                  <div>
                    <h3 className="font-semibold mb-1">Consultation Hours</h3>
                    <p className="text-primary-foreground/80">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">Follow us on social media for daily inspiration and updates</p>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-secondary/20 transition-colors group"
                    >
                      <MessageCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-secondary">WhatsApp</span>
                    </a>
                    
                    <a 
                      href="https://instagram.com/divinemiracle.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-secondary/20 transition-colors group"
                    >
                      <Instagram className="h-5 w-5 text-pink-500 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-secondary">Instagram</span>
                    </a>
                    
                    <a 
                      href="https://facebook.com/divinemiracle.mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-secondary/20 transition-colors group"
                    >
                      <Facebook className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-secondary">Facebook</span>
                    </a>
                    
                    <a 
                      href="https://g.co/kgs/divinemiracle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-secondary/20 transition-colors group"
                    >
                      <Globe className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-secondary">Google</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-muted-foreground">
                  <p>• Confirmation call within 24 hours</p>
                  <p>• Prepare your questions beforehand</p>
                  <p>• Sessions conducted in a peaceful environment</p>
                  <p>• Recordings available upon request</p>
                  <p>• Follow-up guidance included</p>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;