import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CreativeGallery from "@/components/home/CreativeGallery";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import StatsSection from "@/components/home/StatsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesSection />
      <CaseStudiesSection />
      <CreativeGallery />
      <Process />
      <WhyUs />
      <StatsSection />
      <FinalCTA />
    </>
  );
}
