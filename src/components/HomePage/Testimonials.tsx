import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Rodriguez",
      service: "Nail Art & Lash Extensions",
      rating: 5,
      text: "Sofia's work is absolutely incredible! My nails have never looked better, and the lash extensions are so natural and beautiful. I get compliments everywhere I go!",
    },
    {
      name: "Jessica Chen",
      service: "Volume Lashes",
      rating: 5,
      text: "The attention to detail at Daisy Blush Studio is unmatched. My lashes look amazing and last so long. The studio atmosphere is so relaxing and luxurious.",
    },
    {
      name: "Maria Santos",
      service: "Custom Nail Design",
      rating: 5,
      text: "I brought in a vision for my wedding nails, and Sofia exceeded my expectations completely. The custom design was perfect and held up beautifully for weeks!",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join hundreds of satisfied clients who trust Daisy Blush Studio for their beauty needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;