import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Eye } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Daisy Blush Studio - Beautiful nail art and lash extensions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground mb-6 leading-tight">
            Daisy Blush Studio
          </h1>
          <p className="text-xl md:text-2xl font-heading font-light text-primary mb-4">
            Where Artistry Meets Beauty
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your destination for custom nail art and flawless lash extensions. 
            Experience the perfect blend of creativity, precision, and luxury at our boutique studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-lg" asChild>
              <Link to="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-medium text-base text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white" asChild>
              <Link to="/portfolio">
                <Eye className="w-5 h-5" />
                Explore Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;