import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles, Award } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const About = () => {
  const achievements = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "10+ Years Experience",
      description: "A decade of spiritual guidance and healing"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "1000+ Lives Touched",
      description: "Thousands of souls guided to their true path"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Practitioner",
      description: "Certified in multiple spiritual modalities"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Holistic Approach",
      description: "Combining ancient wisdom with modern insights"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-golden bg-clip-text text-transparent">
            About Dr. Jinel K
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A compassionate spiritual guide dedicated to illuminating the path of self-discovery 
            and healing through ancient wisdom and divine insight.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              My spiritual journey began over a decade ago when I first discovered the profound 
              wisdom hidden within ancient divination practices. What started as personal curiosity 
              transformed into a calling to help others navigate their spiritual paths.
            </p>
            <p className="text-lg text-muted-foreground">
              Based in the vibrant community of Kandivali West, Mumbai, I have dedicated my life 
              to mastering various spiritual arts including Tarot reading, Numerology, Angel Healing, 
              Vastu consultation, Astrology, and the ancient practice of Herbal Spells.
            </p>
            <p className="text-lg text-muted-foreground">
              Each session is a sacred space where traditional wisdom meets modern understanding, 
              creating a unique healing experience tailored to your individual needs and spiritual journey.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-cosmic rounded-lg shadow-divine flex items-center justify-center">
              <Sparkles className="h-24 w-24 text-primary-foreground opacity-50" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-cosmic transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-secondary mb-4 group-hover:text-primary-glow transition-colors duration-300 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">My Philosophy</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              "Every soul carries within it the seeds of divine wisdom. My role is not to provide 
              answers, but to help you discover the truth that already exists within you."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="font-semibold mb-3 text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Honoring your true self and life purpose through genuine spiritual connection.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3 text-foreground">Compassion</h3>
                <p className="text-muted-foreground">
                  Creating a safe, nurturing space for healing and self-discovery.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3 text-foreground">Wisdom</h3>
                <p className="text-muted-foreground">
                  Combining ancient knowledge with modern insights for holistic guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </PageTransition>
  );
};

export default About;