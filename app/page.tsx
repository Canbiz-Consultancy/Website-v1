import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { FeaturedInsights } from "./components/FeaturedInsights";
import { AdvisoryPhilosophy } from "./components/AdvisoryPhilosophy";
import { ServicesSection } from "./components/ServicesSection";
import { ConfidenceSection } from "./components/ConfidenceSection";
import { ShapeFuture } from "./components/ShapeFuture";
import { IndustriesSection } from "./components/IndustriesSection";
import { CareersSection } from "./components/CareersSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-14" />

      {/* HOME */}
      <div id="home">
        <HeroSlider />
      </div>

      {/* INSIGHTS */}
      <div id="insights">
        <FeaturedInsights />
      </div>

      {/* Parthenon brand section */}
      <AdvisoryPhilosophy />

      {/* SERVICES */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Confidence + Shape Future sub-sections */}
      <ConfidenceSection />
      <ShapeFuture />

      {/* INDUSTRIES */}
      <div id="industries">
        <IndustriesSection />
      </div>
      
      {/* CAREERS */}
      <div id="careers">
        <CareersSection />
      </div>

      {/* ABOUT US */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}