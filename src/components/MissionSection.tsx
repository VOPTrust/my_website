import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, TreePine, Leaf, Heart, Users, Globe } from "lucide-react";

export function MissionSection() {
  const treesPlanted = 620000;
  const targetTrees = 1000000;
  const progressPercentage = (treesPlanted / targetTrees) * 100;

  const impactAreas = [
    {
      icon: TreePine,
      title: "Reforestation",
      description: "Restoring degraded lands with native tree species",
      stats: "620K+ Trees"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Involving local communities in conservation efforts",
      stats: "1000+ Villages"
    },
    {
      icon: Leaf,
      title: "Biodiversity",
      description: "Promoting diverse ecosystems and wildlife habitats",
      stats: "50+ Species"
    },
    {
      icon: Globe,
      title: "Climate Action",
      description: "Contributing to carbon sequestration and climate mitigation",
      stats: "15K+ Tons CO₂"
    }
  ];

  const participationWays = [
    {
      title: "Individual Volunteer",
      description: "Join our annual plantation drives and monthly activities",
      commitment: "4-8 hours/month",
      impact: "Plant 50+ trees/year"
    },
    {
      title: "Corporate Partnership",
      description: "Partner with us for large-scale environmental initiatives",
      commitment: "Ongoing collaboration",
      impact: "5000+ trees/project"
    },
    {
      title: "School Programs",
      description: "Educational programs and student plantation activities",
      commitment: "Seasonal participation",
      impact: "Environmental education"
    },
    {
      title: "Sapling Donation",
      description: "Donate saplings or sponsor tree plantation costs",
      commitment: "One-time or monthly",
      impact: "Direct tree plantation"
    }
  ];

  return (
    <section id="mission" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Mission
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary">
            1 Million Trees for Andhra Pradesh
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our ambitious goal is to plant one million trees across Andhra Pradesh by 2030. 
            Together, we can create a greener, more sustainable future for our state and planet.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-16">
          <Card className="bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-primary">
                  Mission Progress
                </h3>
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-medium text-primary mb-2">
                      {treesPlanted.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Trees Planted</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-medium text-muted-foreground mb-2">
                      /
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-medium text-primary mb-2">
                      {targetTrees.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Target Goal</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">Progress</span>
                  <span className="text-sm font-medium text-primary">{progressPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-center text-sm text-muted-foreground">
                  Only {(targetTrees - treesPlanted).toLocaleString()} more trees to reach our million tree goal!
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="mr-4">
                  <Heart className="h-4 w-4 mr-2" />
                  Help Us Reach 1M
                </Button>
                <Button size="lg" variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Track Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-medium text-center mb-12 text-primary">
            Our Environmental Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2 text-primary">{area.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                    <Badge variant="secondary" className="text-xs">{area.stats}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Visual Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop"
              alt="Vision of green landscape"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-medium text-primary">
              Why 1 Million Trees Matter
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Climate Impact:</strong> One million trees can 
                  absorb approximately 48,000 tons of CO₂ annually, significantly contributing 
                  to climate change mitigation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Biodiversity:</strong> Creating habitats for 
                  countless species of birds, insects, and small mammals while preserving 
                  native ecosystems.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Community Benefits:</strong> Improving air 
                  quality, providing shade, preventing soil erosion, and enhancing the overall 
                  quality of life for millions of people.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Economic Value:</strong> Supporting local 
                  livelihoods through sustainable forestry practices and eco-tourism opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to Participate */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-medium text-center text-primary">
            How You Can Help Us Reach Our Goal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {participationWays.map((way, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h4 className="font-medium text-primary mb-3">{way.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{way.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Commitment</p>
                      <p className="text-sm font-medium text-primary">{way.commitment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Impact</p>
                      <p className="text-sm font-medium text-primary">{way.impact}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}