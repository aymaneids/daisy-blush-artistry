import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import artistSofia from "@/assets/artist-sofia.jpg";

const TeamTeaser = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Meet Our Artists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our talented team of beauty artists brings years of experience and passion to every service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto">
                <img
                  src={artistSofia}
                  alt="Sofia - Lead Beauty Artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Featured Artist</span>
                </div>
                
                <h3 className="text-3xl font-heading font-semibold text-foreground mb-2">
                  Sofia
                </h3>
                <p className="text-primary font-medium mb-4">Lead Beauty Artist & Studio Owner</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 8 years of experience in nail artistry and lash extensions, Sofia brings 
                  exceptional skill and creativity to every client. Her passion for beauty and attention 
                  to detail has made her a sought-after artist in the Sacramento area.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Certified Lash Technician</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Nail Art Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">8+ Years Experience</span>
                  </div>
                </div>

                <Button variant="outline" className="group" asChild>
                  <Link to="/team">
                    Meet Our Full Team
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;