import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Moon, Heart, Sun, Sparkles, Zap, Clock, IndianRupee } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Services = () => {
  const services = [
    {
      icon: <Star className="h-12 w-12" />,
      title: "Tarot Reading",
      description: "Unveil the mysteries of your past, present, and future through the ancient wisdom of tarot cards. Each reading provides deep insights into your life's journey.",
      duration: "60 minutes",
      price: "₹2,500",
      features: ["3-card spread", "Celtic cross reading", "Relationship guidance", "Career insights"]
    },
    {
      icon: <Moon className="h-12 w-12" />,
      title: "Numerology Consultation",
      description: "Discover the hidden meanings behind the numbers in your life. From birth dates to name analysis, unlock your life's blueprint.",
      duration: "45 minutes",
      price: "₹2,000",
      features: ["Life path number", "Destiny number", "Soul urge analysis", "Personal year forecast"]
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Angel Healing",
      description: "Connect with divine angelic energies for emotional, physical, and spiritual healing. Experience profound peace and transformation.",
      duration: "90 minutes",
      price: "₹3,500",
      features: ["Chakra balancing", "Aura cleansing", "Angel card guidance", "Energy healing"]
    },
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Vastu Consultation",
      description: "Harmonize your living or working space with ancient Vastu principles to enhance prosperity, health, and happiness.",
      duration: "2 hours",
      price: "₹5,000",
      features: ["Space analysis", "Energy mapping", "Correction remedies", "Follow-up guidance"]
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Astrology Reading",
      description: "Explore your birth chart and planetary influences to understand your personality, relationships, and life purpose.",
      duration: "75 minutes",
      price: "₹3,000",
      features: ["Birth chart analysis", "Transit predictions", "Compatibility reading", "Remedial guidance"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Herbal Spells & Remedies",
      description: "Ancient herbal wisdom combined with spiritual practices for protection, prosperity, love, and healing.",
      duration: "30 minutes",
      price: "₹1,500",
      features: ["Customized spell work", "Herbal remedies", "Protection rituals", "Manifestation guidance"]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
            Sacred Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect spiritual service for your journey. Each offering is designed 
            to provide deep insights and transformative healing experiences.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-cosmic transition-all duration-300 bg-card/80 backdrop-blur-sm border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-secondary group-hover:text-primary-glow transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-secondary font-semibold">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/contact">
                  <Button className="w-full bg-cosmic text-primary-foreground hover:shadow-divine">
                    Book This Service
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Special Packages */}
        <section className="bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Special Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-cosmic text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Life Reading</CardTitle>
                <p className="text-primary-foreground/80">Comprehensive spiritual guidance</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Tarot + Astrology + Numerology</span>
                    <span className="font-semibold">3 hours</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Special Price</span>
                    <span>₹6,500</span>
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    Save ₹1,000 with this comprehensive package
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary" className="w-full shadow-golden">
                      Book Complete Reading
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Healing Journey</CardTitle>
                <p className="text-muted-foreground">Transform your energy completely</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-foreground">
                    <span>Angel Healing + Vastu + Herbal Remedies</span>
                    <span className="font-semibold">4 hours</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold text-foreground">
                    <span>Special Price</span>
                    <span>₹8,500</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save ₹1,500 with this transformative package
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-cosmic text-primary-foreground hover:shadow-divine">
                      Book Healing Journey
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      </div>
    </PageTransition>
  );
};

export default Services;