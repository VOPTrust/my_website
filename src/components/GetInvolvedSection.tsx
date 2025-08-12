import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Heart, TreePine, Calendar, Mail, Phone, MapPin, Gift } from "lucide-react";
import { toast } from "sonner";

export function GetInvolvedSection() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: [] as string[],
    availability: "",
    experience: ""
  });

  const [donationAmount, setDonationAmount] = useState("");

  const volunteerOpportunities = [
    {
      icon: TreePine,
      title: "Tree Plantation Volunteer",
      description: "Join our monthly plantation drives and help plant saplings",
      commitment: "1 day/month",
      next: "Next event: Aug 15, 2025"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help spread awareness and engage with local communities",
      commitment: "Flexible",
      next: "Ongoing opportunity"
    },
    {
      icon: Calendar,
      title: "Event Coordinator",
      description: "Help organize and manage our environmental events",
      commitment: "2-4 hours/week",
      next: "Apply anytime"
    },
    {
      icon: Mail,
      title: "Social Media Volunteer",
      description: "Share our mission online and create environmental content",
      commitment: "Remote",
      next: "Immediate start"
    }
  ];

  const donationOptions = [
    { amount: "₹500", description: "Plants 10 saplings", popular: false },
    { amount: "₹1,500", description: "Plants 30 saplings + care", popular: true },
    { amount: "₹5,000", description: "Plants 100 saplings + maintenance", popular: false },
    { amount: "₹15,000", description: "Sponsors entire plantation event", popular: false }
  ];

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for volunteering! We'll contact you soon.");
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      interests: [],
      availability: "",
      experience: ""
    });
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your generous donation! Redirecting to payment...");
  };

  const handleInterestChange = (interest: string, checked: boolean | "indeterminate") => {
    if (checked === true) {
      setVolunteerForm(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    } else {
      setVolunteerForm(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== interest)
      }));
    }
  };

  return (
    <section id="get-involved" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get Involved
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary">
            Be Part of the Green Revolution
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether through volunteering your time or making a donation, every contribution 
            brings us closer to our goal of 1 million trees. Join our mission today!
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-medium text-center mb-8 text-primary">
            Volunteer Opportunities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2 text-primary">{opportunity.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                    <div className="text-xs text-muted-foreground mb-2">
                      <strong>Commitment:</strong> {opportunity.commitment}
                    </div>
                    <Badge variant="outline" className="text-xs mb-3">
                      {opportunity.next}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="h-5 w-5 mr-2" />
                Volunteer Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm(prev => ({...prev, name: e.target.value}))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm(prev => ({...prev, phone: e.target.value}))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, District"
                      value={volunteerForm.location}
                      onChange={(e) => setVolunteerForm(prev => ({...prev, location: e.target.value}))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Tree Plantation", "Community Outreach", "Event Management", "Social Media"].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={volunteerForm.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked)}
                        />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select value={volunteerForm.availability} onValueChange={(value) => setVolunteerForm(prev => ({...prev, availability: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="events-only">Events Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Experience (Optional)</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about any relevant experience..."
                    value={volunteerForm.experience}
                    onChange={(e) => setVolunteerForm(prev => ({...prev, experience: e.target.value}))}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Register as Volunteer
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Donation Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Heart className="h-5 w-5 mr-2" />
                Support Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1527004760525-9b86b1f46039?q=80&w=2070&auto=format&fit=crop"
                    alt="Hands holding a small plant"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <p className="text-muted-foreground">
                    Your donation directly funds sapling purchases, plantation events, 
                    and maintenance of planted trees.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {donationOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        donationAmount === option.amount
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      } ${option.popular ? 'ring-2 ring-primary/20' : ''}`}
                      onClick={() => setDonationAmount(option.amount)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-primary">{option.amount}</span>
                            {option.popular && (
                              <Badge variant="secondary" className="text-xs">Most Popular</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          donationAmount === option.amount
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground'
                        }`}>
                          {donationAmount === option.amount && (
                            <div className="w-full h-full rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input
                    id="custom-amount"
                    placeholder="Enter custom amount (₹)"
                    value={donationAmount.startsWith('₹') ? '' : donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>

                <form onSubmit={handleDonationSubmit} className="space-y-4">
                  <Button type="submit" className="w-full" disabled={!donationAmount}>
                    <Gift className="h-4 w-4 mr-2" />
                    Donate {donationAmount || 'Now'}
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Secure payment powered by Razorpay</p>
                  <p>All donations are tax deductible under 80G</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Corporate Partnership */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-primary">
              Corporate Social Responsibility
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partner with VOP Foundation for your CSR initiatives. We offer customized 
              programs for corporate tree plantation, employee engagement, and 
              environmental impact reporting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium text-primary mb-2">Plantation Programs</h4>
              <p className="text-sm text-muted-foreground">
                Organize dedicated plantation events for your employees and stakeholders
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium text-primary mb-2">Team Building</h4>
              <p className="text-sm text-muted-foreground">
                Combine environmental action with meaningful team building activities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium text-primary mb-2">Impact Reporting</h4>
              <p className="text-sm text-muted-foreground">
                Detailed reports on environmental impact for your sustainability goals
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Discuss Corporate Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}