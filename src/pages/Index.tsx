import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden gradient-animated">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Profile Image */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
          <img
            src="/profile.jpg"
            alt="Profile"
            className="relative w-48 h-48 rounded-full object-cover border-4 border-background/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center space-y-6 max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Welcome to my <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            Crafting digital experiences that inspire and innovate
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/resume">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8 py-6 text-lg glow-primary"
              >
                View Resume
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/bio-data">
              <Button 
                size="lg"
                variant="outline"
                className="group glass text-foreground border-2 hover:bg-background/60 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8 py-6 text-lg"
              >
                View Bio-Data
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
