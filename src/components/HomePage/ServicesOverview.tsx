import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import nailArt from "@/assets/nail-art-1.jpg";
import lashExtensions from "@/assets/lash-extensions-1.jpg";

const ServicesOverview = () => {
  const services = [
    {
      title: "Nail Services",
      description: "From classic manicures to intricate custom nail art, we create beautiful designs that express your unique style.",
      features: ["Custom Nail Art", "Gel Manicures", "Acrylic Extensions", "French Manicures"],
      image: nailArt,
      icon: Sparkles,
    },
    {
      title: "Lash Services",
      description: "Enhance your natural beauty with our professional lash services, from classic to volume extensions.",
      features: ["Classic Extensions", "Volume Lashes", "Lash Lifts", "Lash Tinting"],
      image: lashExtensions,
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Our Specialty Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in two areas where artistry and precision come together to create stunning results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card key={service.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="group/btn" asChild>
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;