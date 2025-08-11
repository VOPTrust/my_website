import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users, Award, Play } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      year: "2024",
      title: "Independence Day Tree Plantation Drive",
      location: "Visakhapatnam, Andhra Pradesh",
      participants: 5000,
      treesPlanted: 15000,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Record participation of 5,000+ volunteers",
        "15,000 saplings planted in a single day",
        "Distribution of saplings to 500 families"
      ]
    },
    {
      year: "2023",
      title: "Green Independence Celebration",
      location: "Guntur, Andhra Pradesh",
      participants: 4200,
      treesPlanted: 12500,
      image: "https://images.unsplash.com/photo-1574263867128-b4d4f0b1bb45?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Collaboration with local schools",
        "Environmental awareness workshops",
        "12,500 native species planted"
      ]
    },
    {
      year: "2022",
      title: "Unity in Green Movement",
      location: "Tirupati, Andhra Pradesh",
      participants: 3800,
      treesPlanted: 11000,
      image: "https://images.unsplash.com/photo-1516887919481-b4bbdce0cec2?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "First post-pandemic large gathering",
        "Focus on medicinal plants",
        "Community kitchen for volunteers"
      ]
    }
  ];

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
      alt: "Volunteers planting saplings"
    },
    {
      src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=2070&auto=format&fit=crop",
      alt: "Community participation in tree planting"
    },
    {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2070&auto=format&fit=crop",
      alt: "Children participating in plantation drive"
    },
    {
      src: "https://images.unsplash.com/photo-1563736460842-c9b84f5e3e82?q=80&w=2070&auto=format&fit=crop",
      alt: "Mass tree plantation event"
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Events
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary">
            Annual Plantation Drives
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every August 15th, we celebrate India's Independence Day by planting thousands 
            of trees across Andhra Pradesh. Join us in our annual green revolution!
          </p>
        </div>

        {/* Featured Events */}
        <div className="space-y-8 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {event.year}
                  </Badge>
                </div>
                
                <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary">
                    {event.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      August 15, {event.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants.toLocaleString()} Participants
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      {event.treesPlanted.toLocaleString()} Trees
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-primary">Event Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-fit">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Event Video
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-primary">
              Event Gallery
            </h3>
            <p className="text-muted-foreground">
              Moments captured from our plantation drives and community events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Stories */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-medium text-center mb-8 text-primary">
            Voices from Our Community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "Participating in VOP Foundation's plantation drive was life-changing. 
                  Seeing thousands of people come together for our environment gave me hope."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-medium">RS</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Ravi Sharma</p>
                    <p className="text-xs text-muted-foreground">Volunteer, Visakhapatnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "The saplings we received have grown into beautiful trees in our village. 
                  Our children now play under their shade."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-medium">LM</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lakshmi Mani</p>
                    <p className="text-xs text-muted-foreground">Villager, Guntur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "Every year, I look forward to August 15th not just for Independence Day, 
                  but for our plantation event. It's become a family tradition."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-medium">AK</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Arjun Kumar</p>
                    <p className="text-xs text-muted-foreground">Regular Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}