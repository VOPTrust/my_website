import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, Users, TreePine } from "lucide-react";

export function HeroSection() {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const targetTrees = 620000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTreesPlanted(prev => {
        if (prev < targetTrees) {
          return prev + Math.floor(targetTrees / 100);
        }
        return targetTrees;
      });
    }, 50);

    const timeout = setTimeout(() => clearInterval(interval), 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [targetTrees]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
          alt="Lush forest background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Leaf className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
            VOP Foundation
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-green-100">
            Let's Green Andhra Together
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
            Join us in our mission to plant 1 million trees across Andhra Pradesh. 
            Together, we can create a greener, healthier future for generations to come.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              Join Our Mission
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <TreePine className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-medium text-white mb-2">
                {treesPlanted.toLocaleString()}
              </div>
              <p className="text-green-100">Trees Planted So Far</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-medium text-white mb-2">15</div>
              <p className="text-blue-100">Years of Service</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Leaf className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-medium text-white mb-2">1M</div>
              <p className="text-yellow-100">Tree Goal</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}