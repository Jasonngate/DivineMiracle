import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageTransition from "@/components/PageTransition";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      service: "Complete Life Reading",
      rating: 5,
      text: "Dr. Jinel's reading was incredibly accurate and insightful. Her tarot and astrology combination gave me clarity about my career path that I had been seeking for years. Highly recommended!",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Kandivali",
      service: "Vastu Consultation",
      rating: 5,
      text: "After implementing Dr. Jinel's Vastu recommendations, our home feels so much more peaceful and harmonious. My business has also seen significant improvement. Amazing transformation!",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Borivali",
      service: "Angel Healing",
      rating: 5,
      text: "The angel healing session was profound. I felt a deep sense of peace and healing that lasted for weeks. Dr. Jinel has a genuine gift for connecting with divine energies.",
      date: "November 2024"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Malad",
      service: "Numerology",
      rating: 5,
      text: "The numerology session revealed aspects of my personality and life purpose that resonated deeply. Dr. Jinel's interpretations were spot-on and very helpful for my personal growth.",
      date: "October 2024"
    },
    {
      id: 5,
      name: "Kavita Menon",
      location: "Goregaon",
      service: "Tarot Reading",
      rating: 5,
      text: "Dr. Jinel's tarot reading provided incredible guidance during a difficult period in my life. Her compassionate approach and accurate insights helped me make important decisions with confidence.",
      date: "October 2024"
    },
    {
      id: 6,
      name: "Suresh Gupta",
      location: "Dahisar",
      service: "Astrology Reading",
      rating: 5,
      text: "The astrology consultation was enlightening. Dr. Jinel explained my birth chart in detail and provided practical remedies that have positively impacted my relationships and career.",
      date: "September 2024"
    }
  ];

  const stats = [
    { number: 1000, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Average Rating", suffix: "" },
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 95, label: "Client Satisfaction", suffix: "%" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-secondary fill-secondary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from those who have experienced the transformative power of spiritual guidance 
            and healing through our sacred services.
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter 
                target={stat.number} 
                suffix={stat.suffix}
                duration={2500}
              />
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Testimonials Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-cosmic transition-all duration-300 bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-secondary/50" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-secondary">{testimonial.service}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Featured Testimonial */}
        <section className="bg-cosmic rounded-2xl p-12 text-center text-primary-foreground mb-20">
          <Quote className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <blockquote className="text-2xl font-medium mb-6 italic">
            "Dr. Jinel doesn't just read the cards or charts – she connects with your soul. 
            Her guidance has been instrumental in helping me understand my life's purpose and 
            navigate challenging times with wisdom and grace."
          </blockquote>
          <div className="flex justify-center space-x-1 mb-4">
            {renderStars(5)}
          </div>
          <cite className="text-lg">
            - Meera Krishnan, Spiritual Seeker from Andheri
          </cite>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Your Life?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have discovered their true path through 
            divine guidance and spiritual healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cosmic text-primary-foreground rounded-lg hover:shadow-divine transition-all duration-300">
              Book Your Session
            </button>
            <button className="px-8 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary/20 transition-all duration-300">
              Learn About Services
            </button>
          </div>
        </section>
      </div>
      </div>
    </PageTransition>
  );
};

export default Testimonials;