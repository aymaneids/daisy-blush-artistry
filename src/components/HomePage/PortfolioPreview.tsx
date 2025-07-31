import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import nailGallery1 from "@/assets/nail-gallery-1.jpg";
import nailGallery2 from "@/assets/nail-gallery-2.jpg";
import lashGallery1 from "@/assets/lash-gallery-1.jpg";
import nailArt from "@/assets/nail-art-1.jpg";

const PortfolioPreview = () => {
  const portfolioImages = [
    {
      src: nailArt,
      alt: "Intricate floral nail art design",
      category: "Nail Art",
    },
    {
      src: lashGallery1,
      alt: "Volume lash extensions before and after",
      category: "Lash Extensions",
    },
    {
      src: nailGallery1,
      alt: "Soft pink gel manicure collection",
      category: "Manicures",
    },
    {
      src: nailGallery2,
      alt: "Modern French manicure with gold accents",
      category: "French Manicure",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Our Latest Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of beautiful nail designs and stunning lash transformations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className="text-white font-medium text-sm">{image.category}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <ExternalLink className="w-3 h-3 text-white/80" />
                    <span className="text-white/80 text-xs">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;