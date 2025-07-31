import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Eye, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import nailArt from "@/assets/nail-art-1.jpg";
import lashExtensions from "@/assets/lash-extensions-1.jpg";

const Services = () => {
  const nailServices = [
    {
      name: "Custom Nail Art",
      description: "Unique, hand-painted designs tailored to your style and personality",
      price: "Starting at $65",
      duration: "2-3 hours",
      features: ["Hand-painted designs", "Seasonal themes", "Special occasion art", "Color matching"],
    },
    {
      name: "Gel Manicures",
      description: "Long-lasting, chip-resistant gel polish with perfect finish",
      price: "Starting at $45",
      duration: "1.5 hours",
      features: ["2-3 week wear", "Chip resistant", "High gloss finish", "Cuticle care"],
    },
    {
      name: "Acrylic Full Set",
      description: "Durable extensions with custom length and shape",
      price: "Starting at $75",
      duration: "2.5 hours",
      features: ["Custom length", "Shape options", "Strengthening base", "Perfect finish"],
    },
    {
      name: "French Manicures",
      description: "Classic elegance with modern twists and color variations",
      price: "Starting at $50",
      duration: "1.5 hours",
      features: ["Classic white tips", "Color variations", "Modern designs", "Long-lasting"],
    },
  ];

  const lashServices = [
    {
      name: "Classic Lash Extensions",
      description: "Natural-looking extensions that enhance your natural lashes",
      price: "Starting at $120",
      duration: "2 hours",
      features: ["1:1 ratio", "Natural look", "Customizable curl", "6-8 week wear"],
    },
    {
      name: "Volume Lashes",
      description: "Fuller, more dramatic look with multiple lashes per natural lash",
      price: "Starting at $160",
      duration: "2.5 hours",
      features: ["2D-6D volume", "Dramatic effect", "Lightweight feel", "Custom density"],
    },
    {
      name: "Lash Lift & Tint",
      description: "Enhance your natural lashes with lift, curl, and tinting",
      price: "Starting at $85",
      duration: "1.5 hours",
      features: ["Natural curl", "Darker appearance", "Low maintenance", "6-8 week results"],
    },
    {
      name: "Lash Fill",
      description: "Maintain your extensions with regular touch-ups",
      price: "Starting at $80",
      duration: "1.5 hours",
      features: ["2-3 week touch-ups", "Maintains fullness", "Extends wear", "Fresh look"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of nail and lash services, each designed to enhance 
                your natural beauty with precision, artistry, and care.
              </p>
            </div>
          </div>
        </section>

        {/* Nail Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/20 rounded-full p-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-heading font-semibold text-foreground">
                    Nail Services
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From classic manicures to intricate custom designs, our nail services combine 
                  artistry with precision to create beautiful, long-lasting results that express 
                  your unique style.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Premium quality products and techniques</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src={nailArt}
                  alt="Beautiful nail art designs"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {nailServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-heading text-foreground mb-2">
                          {service.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lash Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 relative">
                <img
                  src={lashExtensions}
                  alt="Professional lash extensions"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-secondary/20 rounded-full p-3">
                    <Eye className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="text-4xl font-heading font-semibold text-foreground">
                    Lash Services
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Transform your eyes with our professional lash services. From natural enhancement 
                  to dramatic volume, we create the perfect look to complement your features and lifestyle.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Certified lash technicians with premium products</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {lashServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-heading text-foreground mb-2">
                          {service.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the artistry and precision that sets Daisy Blush Studio apart. 
              Book your consultation today and let us create something beautiful for you.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;