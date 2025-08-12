import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { href: "#about", label: "About VOP Foundation" },
    { href: "#events", label: "Plantation Events" },
    { href: "#mission", label: "Our Mission" },
    { href: "#get-involved", label: "Volunteer" }
  ];

  const supportLinks = [
    { href: "#get-involved", label: "Donate Now" },
    { href: "#contact", label: "Corporate Partnership" },
    { href: "#", label: "Tree Adoption Program" },
    { href: "#", label: "Volunteer Guide" }
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "Transparency Report" }
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground rounded-full">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">VOP Foundation</h3>
                <p className="text-sm text-primary-foreground/80">Let's Green Andhra Together</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Dedicated to planting 1 million trees across Andhra Pradesh. 
              Join our mission to create a greener, more sustainable future for generations to come.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@vopfoundation.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for updates on plantation drives and environmental initiatives.
            </p>
            <div className="space-y-2">
              <Label htmlFor="newsletter-email" className="sr-only">Email</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-primary-foreground/80">
            <p>&copy; 2025 VOP Foundation. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-primary-foreground/80">Follow us:</span>
            {socialMedia.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Environmental Stats */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-medium">620,000+</div>
              <p className="text-sm text-primary-foreground/80">Trees Planted</p>
            </div>
            <div>
              <div className="text-2xl font-medium">15+</div>
              <p className="text-sm text-primary-foreground/80">Years of Service</p>
            </div>
            <div>
              <div className="text-2xl font-medium">1,000+</div>
              <p className="text-sm text-primary-foreground/80">Villages Reached</p>
            </div>
            <div>
              <div className="text-2xl font-medium">50+</div>
              <p className="text-sm text-primary-foreground/80">Districts Covered</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-primary-foreground/80 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
}