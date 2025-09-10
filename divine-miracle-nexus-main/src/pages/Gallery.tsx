import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Gallery = () => {
  // Placeholder gallery items - in a real app, these would be dynamically loaded
  const galleryItems = [
    {
      id: 1,
      title: "Tarot Card Spread",
      category: "Tarot Reading",
      description: "A beautiful Celtic cross spread revealing life's mysteries"
    },
    {
      id: 2,
      title: "Healing Crystals",
      category: "Angel Healing",
      description: "Sacred crystals used in healing sessions"
    },
    {
      id: 3,
      title: "Astrology Chart",
      category: "Astrology",
      description: "Detailed birth chart analysis and planetary positions"
    },
    {
      id: 4,
      title: "Sacred Space",
      category: "Vastu",
      description: "Harmonious living space designed with Vastu principles"
    },
    {
      id: 5,
      title: "Numerology Grid",
      category: "Numerology",
      description: "Personal numerology calculations and life path analysis"
    },
    {
      id: 6,
      title: "Herbal Remedies",
      category: "Herbal Spells",
      description: "Traditional herbs prepared for healing and protection"
    },
    {
      id: 7,
      title: "Meditation Corner",
      category: "Spiritual Space",
      description: "Peaceful meditation area for spiritual practice"
    },
    {
      id: 8,
      title: "Angel Cards",
      category: "Angel Healing",
      description: "Divine guidance through angelic card readings"
    }
  ];

  const categories = ["All", "Tarot Reading", "Angel Healing", "Astrology", "Vastu", "Numerology", "Herbal Spells"];

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
            Sacred Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the mystical world of spiritual practices through our curated collection 
            of sacred tools, healing spaces, and divine moments.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-muted hover:bg-secondary/20 text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer overflow-hidden hover:shadow-cosmic transition-all duration-300 bg-card/80 backdrop-blur-sm border-border">
              <div className="aspect-square bg-cosmic p-8 flex items-center justify-center relative overflow-hidden">
                <Sparkles className="h-16 w-16 text-primary-foreground opacity-50 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <div className="text-xs text-secondary font-medium mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center mt-20 bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Experience the Sacred</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to create your own spiritual moments? Book a session and begin 
            your transformative journey with Dr. Jinel K.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cosmic text-primary-foreground rounded-lg hover:shadow-divine transition-all duration-300">
              Book Your Session
            </button>
            <button className="px-8 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </section>
      </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;