import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@vopfoundation.org",
      secondary: "volunteer@vopfoundation.org"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 953890222",
      secondary: "+91 8147767405"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "VOP Foundation Headquarters",
      secondary: "Visakhapatnam, Andhra Pradesh 530001"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday: 9:00 AM - 6:00 PM",
      secondary: "Saturday: 9:00 AM - 2:00 PM"
    }
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook", color: "text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "text-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "text-red-600" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setContactForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary">
            Let's Connect for a Greener Future
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our mission? Want to get involved? Ready to partner with us? 
            We'd love to hear from you. Reach out and let's grow something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">{info.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{info.primary}</p>
                        <p className="text-sm text-muted-foreground">{info.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <h4 className="font-medium text-primary mb-4">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Stay updated with our latest plantation drives, events, and environmental initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({...prev, name: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({...prev, email: e.target.value}))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({...prev, phone: e.target.value}))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Select value={contactForm.subject} onValueChange={(value) => setContactForm(prev => ({...prev, subject: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volunteer">Volunteer Inquiry</SelectItem>
                          <SelectItem value="donation">Donation Related</SelectItem>
                          <SelectItem value="corporate">Corporate Partnership</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your inquiry, how you'd like to get involved, or any questions you have..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({...prev, message: e.target.value}))}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-primary">Find Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-primary mb-4">VOP Foundation Headquarters</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p>VOP Foundation Building</p>
                      <p>Bank street, Above Union Bank</p>
                      <p>Parchur, Andhra Pradesh 523169</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <p>+91 953890222</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <p>info@vopfoundation.org</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="font-medium text-primary mb-2">Public Transport</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bus: Routes 15A, 23, 45 (Green Avenue Stop)</li>
                    <li>• Auto: Available from all major points</li>
                    <li>• Metro: Sector 7 Station (500m walk)</li>
                  </ul>
                </div>
              </div>
              
              <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-3" />
                  <p className="font-medium mb-1">Interactive Map</p>
                  <p className="text-sm">
                    VOP Foundation Headquarters<br />
                    Parchur, Andhra Pradesh
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-medium mb-2">Quick Email</h4>
              <p className="text-sm mb-3">For immediate responses</p>
              <Button variant="secondary" size="sm">
                Send Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-primary">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-medium mb-2 text-primary">Call Directly</h4>
              <p className="text-sm text-muted-foreground mb-3">Speak with our team</p>
              <Button variant="outline" size="sm">
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-medium mb-2 text-primary">Visit Office</h4>
              <p className="text-sm text-muted-foreground mb-3">Meet us in person</p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}