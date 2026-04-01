import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { AdvisoryPhilosophy } from "./components/AdvisoryPhilosophy";
import { ServicesSection } from "./components/ServicesSection";
import { ConfidenceSection } from "./components/ConfidenceSection";
import { ShapeFuture } from "./components/ShapeFuture";
import { IndustriesSection } from "./components/IndustriesSection";
import { CareersSection } from "./components/CareersSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { FeaturedInsights } from "./components/FeaturedInsights";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div id="home">
        <HeroSlider />
      </div>
      <div id="insights">
        <FeaturedInsights/>
      </div>

      <AdvisoryPhilosophy />

      <div id="services">
        <ServicesSection />
      </div>

      <ConfidenceSection />
      <ShapeFuture />

      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>

      <Footer />
    </div>
  );
}
