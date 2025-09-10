import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Heart, Sparkles, Moon, Sun, Zap } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import heroImage from "@/assets/hero-cosmic.jpg";

const Home = () => {
  const services = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Tarot Reading",
      description: "Unveil your destiny through ancient wisdom"
    },
    {
      icon: <Moon className="h-8 w-8" />,
      title: "Numerology",
      description: "Discover the power of numbers in your life"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Angel Healing",
      description: "Divine healing through angelic guidance"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Vastu Consultation",
      description: "Harmonize your space with cosmic energy"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Astrology",
      description: "Chart your course through stellar wisdom"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Herbal Spells",
      description: "Nature's magic for healing and protection"
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
              Divine Miracle
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 font-medium">
              Guided by the Stars, Revealed by Tarot
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Experience the profound wisdom of ancient spiritual practices with Dr. Jinel K. 
              Unlock your destiny through tarot, astrology, and divine healing in Mumbai's heart.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" className="bg-cosmic text-primary-foreground hover:shadow-divine text-lg px-8 py-4">
                Book Your Reading
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/20 text-lg px-8 py-4">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Sacred Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the divine path through our comprehensive spiritual offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-cosmic hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-secondary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/20">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Meet Dr. Jinel K</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in spiritual guidance, Dr. Jinel K has helped 
                thousands of souls find their true path through the ancient arts of divination and healing.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Based in Kandivali West, Mumbai, her practice combines traditional wisdom with 
                modern understanding to provide profound insights and transformative healing.
              </p>
              <Link to="/about">
                <Button className="bg-cosmic text-primary-foreground hover:shadow-divine">
                  Learn More About Dr. Jinel
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-cosmic rounded-lg shadow-divine flex items-center justify-center">
                <Sparkles className="h-24 w-24 text-primary-foreground opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-cosmic">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Begin Your Spiritual Journey</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards enlightenment and healing. Book your personalized session today.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-golden">
              Schedule Your Session
            </Button>
          </Link>
        </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;