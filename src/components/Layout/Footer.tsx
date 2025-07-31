import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-primary">
              Daisy Blush Studio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where artistry meets beauty. Your destination for custom nails and flawless lashes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link to="/gift-cards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gift Cards
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">Nail Art & Design</span>
              <span className="text-sm text-muted-foreground">Gel Manicures</span>
              <span className="text-sm text-muted-foreground">Classic Lash Extensions</span>
              <span className="text-sm text-muted-foreground">Volume Lashes</span>
              <span className="text-sm text-muted-foreground">Lash Lifts & Tints</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  1547 Fulton Ave, Ste E<br />
                  Sacramento, CA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+1 916-578-7400</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon-Sat: 9AM - 7PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Daisy Blush Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;