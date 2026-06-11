import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServicesCards from "@/components/ServicesCards";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import VisionMission from "@/components/VisionMission";
import QuickLinks from "@/components/QuickLinks";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroBanner />
    <ServicesCards />
    <AboutSection />
    <ExperienceSection />
    <VisionMission />
    <QuickLinks />
    <ContactSection />
    <TeamSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
