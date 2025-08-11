import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Heart, Target } from "lucide-react";

export function AboutSection() {
  const milestones = [
    {
      year: "2010",
      title: "Foundation Established",
      description: "VOP Foundation was founded with a vision to green Andhra Pradesh",
      icon: Heart
    },
    {
      year: "2011",
      title: "First Plantation Drive",
      description: "Our first Independence Day event planted 1,000 trees",
      icon: Calendar
    },
    {
      year: "2015",
      title: "50,000 Trees Milestone",
      description: "Reached our first major milestone of 50,000 trees planted",
      icon: Target
    },
    {
      year: "2020",
      title: "State-wide Expansion",
      description: "Extended our reach to all districts of Andhra Pradesh",
      icon: MapPin
    },
    {
      year: "2025",
      title: "620,000 Trees & Counting",
      description: "Continuing our mission towards 1 million trees",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About VOP Foundation
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary">
            15 Years of Environmental Impact
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            For over a decade and a half, VOP Foundation has been at the forefront of 
            environmental conservation in Andhra Pradesh, transforming landscapes and 
            touching lives through our tree plantation initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-medium text-primary">
              Our Founding Story
            </h3>
            <p className="text-muted-foreground">
              VOP Foundation was born out of a deep concern for the rapidly degrading 
              environment in Andhra Pradesh. What started as a small group of 
              environmentally conscious individuals has now grown into a movement 
              that spans across the entire state.
            </p>
            <p className="text-muted-foreground">
              Every year on August 15th, India's Independence Day, we organize 
              large-scale plantation events that bring together thousands of 
              volunteers, villagers, and environmental enthusiasts. These events 
              are not just about planting trees – they're about planting hope 
              for a sustainable future.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-medium text-primary mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Villages Reached</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-medium text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Districts Covered</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
              alt="Community tree planting event"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-medium text-center text-primary mb-12">
            Our Journey Through the Years
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-primary border-primary">
                        {milestone.year}
                      </Badge>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2 text-primary">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-medium mb-6 text-primary">
            Beyond Tree Planting
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Our work extends beyond just planting trees. We engage with local communities, 
            educate villagers about environmental conservation, distribute saplings for 
            home gardens, and create awareness about the importance of forests in combating 
            climate change. Every tree we plant is a step towards a greener, more 
            sustainable Andhra Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
}