import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesOverview from "@/components/HomePage/ServicesOverview";
import TeamTeaser from "@/components/HomePage/TeamTeaser";
import PortfolioPreview from "@/components/HomePage/PortfolioPreview";
import Testimonials from "@/components/HomePage/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <TeamTeaser />
        <PortfolioPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;