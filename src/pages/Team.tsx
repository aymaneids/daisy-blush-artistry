import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Calendar } from "lucide-react";
import artistSofia from "@/assets/artist-sofia.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sofia Martinez",
      title: "Lead Beauty Artist & Studio Owner",
      image: artistSofia,
      bio: "With over 8 years of experience in the beauty industry, Sofia is passionate about creating stunning nail art and flawless lash extensions. She founded Daisy Blush Studio with a vision to provide personalized, high-quality beauty services in a welcoming, luxurious environment. Sofia's attention to detail and artistic flair have made her a sought-after artist in the Sacramento area.",
      specialties: ["Custom Nail Art", "Volume Lash Extensions", "Bridal Beauty", "Color Theory"],
      certifications: ["Certified Lash Technician", "Nail Technology License", "Color Specialist"],
      experience: "8+ Years",
      languages: ["English", "Spanish"],
      achievements: [
        "Featured in Sacramento Beauty Magazine",
        "Top Rated Lash Artist 2023",
        "Bridal Beauty Specialist Certification",
      ],
    },
    // Adding another team member for variety
    {
      name: "Emma Thompson",
      title: "Senior Nail Artist",
      image: artistSofia, // Using same image for demo
      bio: "Emma brings 5 years of expertise in nail artistry and design. Known for her precision in gel applications and creative seasonal designs, she specializes in both classic elegance and trendy nail art. Emma's warm personality and skilled techniques ensure every client leaves feeling confident and beautiful.",
      specialties: ["Gel Manicures", "Seasonal Designs", "Nail Health", "Classic French"],
      certifications: ["Nail Technology License", "Gel Specialist Certification"],
      experience: "5+ Years",
      languages: ["English"],
      achievements: [
        "Gel Application Specialist",
        "Client Favorite Award 2023",
        "Advanced Nail Health Training",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                Meet Our Artists
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our talented team of beauty professionals brings years of experience, passion, and 
                artistry to every service. Get to know the artists behind Daisy Blush Studio.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 shadow-xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          <Award className="w-3 h-3 mr-1" />
                          Featured Artist
                        </Badge>
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
                        {member.name}
                      </h2>
                      <p className="text-primary font-medium text-lg mb-6">{member.title}</p>

                      <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                        {member.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="font-heading font-semibold text-foreground mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-sm">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-heading font-semibold text-foreground mb-2">Experience</h4>
                          <p className="text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            {member.experience}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground mb-2">Languages</h4>
                          <p className="text-muted-foreground">{member.languages.join(", ")}</p>
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mb-6">
                        <h4 className="font-heading font-semibold text-foreground mb-3">Certifications</h4>
                        <div className="space-y-2">
                          {member.certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-3">Achievements</h4>
                        <div className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Award className="w-4 h-4 text-primary" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Join Our Team CTA */}
            <div className="text-center mt-20 pt-20 border-t border-border">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Are you a passionate beauty artist looking to join a supportive, creative environment? 
                We're always looking for talented individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@daisyblushstudio.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  careers@daisyblushstudio.com
                </a>
                <a
                  href="tel:+19165787400"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  +1 916-578-7400
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;