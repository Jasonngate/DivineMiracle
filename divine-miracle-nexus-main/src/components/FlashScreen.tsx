import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface FlashScreenProps {
  onComplete: () => void;
}

const FlashScreen = ({ onComplete }: FlashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800); // Allow time for fade out animation
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Cosmic Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic opacity-20"></div>
        
        {/* Floating Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
          </div>
        ))}
        
        {/* Cosmic Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center animate-fade-in">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <Sparkles className="h-24 w-24 text-secondary animate-spin" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-0 h-24 w-24 border-2 border-primary/30 rounded-full animate-ping"></div>
            <div className="absolute inset-2 h-20 w-20 border border-secondary/50 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-golden bg-clip-text text-transparent animate-scale-in">
          Divine Miracle
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-secondary font-medium animate-fade-in mb-8" style={{ animationDelay: '0.5s' }}>
          Guided by the Stars, Revealed by Tarot
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Mystical Quote */}
        <p className="text-muted-foreground text-lg mt-8 italic opacity-70 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          "The universe conspires to reveal your destiny..."
        </p>
      </div>
    </div>
  );
};

export default FlashScreen;