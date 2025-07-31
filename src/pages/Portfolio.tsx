import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, ExternalLink } from "lucide-react";
import nailArt from "@/assets/nail-art-1.jpg";
import nailGallery1 from "@/assets/nail-gallery-1.jpg";
import nailGallery2 from "@/assets/nail-gallery-2.jpg";
import lashExtensions from "@/assets/lash-extensions-1.jpg";
import lashGallery1 from "@/assets/lash-gallery-1.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      src: nailArt,
      title: "Intricate Floral Design",
      category: "nail-art",
      description: "Hand-painted floral nail art with delicate details and gold accents",
      tags: ["Custom Design", "Floral", "Gold Accents"],
    },
    {
      id: 2,
      src: nailGallery1,
      title: "Soft Pink Collection",
      category: "manicures",
      description: "Elegant gel manicures in soft pink tones with subtle variations",
      tags: ["Gel Manicure", "Pink Tones", "Classic"],
    },
    {
      id: 3,
      src: lashExtensions,
      title: "Natural Volume Lashes",
      category: "lashes",
      description: "Beautiful volume lash extensions for a natural, enhanced look",
      tags: ["Volume Lashes", "Natural Look", "Eye Enhancement"],
    },
    {
      id: 4,
      src: nailGallery2,
      title: "Modern French Elegance",
      category: "manicures",
      description: "Contemporary French manicure with gold accent details",
      tags: ["French Manicure", "Modern", "Elegant"],
    },
    {
      id: 5,
      src: lashGallery1,
      title: "Dramatic Transformation",
      category: "lashes",
      description: "Before and after classic lash extension application",
      tags: ["Classic Lashes", "Transformation", "Before & After"],
    },
    // Duplicate some for variety
    {
      id: 6,
      src: nailArt,
      title: "Custom Wedding Design",
      category: "nail-art",
      description: "Special occasion nail art perfect for weddings",
      tags: ["Wedding", "Special Occasion", "Custom"],
    },
  ];

  const categories = [
    { id: "all", label: "All Work", count: portfolioItems.length },
    { id: "nail-art", label: "Nail Art", count: portfolioItems.filter(item => item.category === "nail-art").length },
    { id: "manicures", label: "Manicures", count: portfolioItems.filter(item => item.category === "manicures").length },
    { id: "lashes", label: "Lash Extensions", count: portfolioItems.filter(item => item.category === "lashes").length },
  ];

  const getFilteredItems = (category: string) => {
    return category === "all" ? portfolioItems : portfolioItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our collection of beautiful nail designs and stunning lash transformations. 
                Each piece showcases our commitment to artistry and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-sm font-medium"
                    >
                      {category.label}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getFilteredItems(category.id).map((item) => (
                      <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(item.src)}
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white font-heading font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-1 text-white/80">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">View Details</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* CTA Section */}
            <div className="text-center mt-16 pt-16 border-t border-border">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Ready to Create Your Own Masterpiece?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a consultation with our artists to discuss your vision and create something uniquely beautiful.
              </p>
              <Button variant="elegant" size="lg">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Portfolio item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;