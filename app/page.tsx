import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import TeamStrip from "@/components/home/TeamStrip";
import ScrollZoomShowcase from "@/components/home/ScrollZoomShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CreativeShowcase from "@/components/home/CreativeShowcase";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <TeamStrip />
      <ScrollZoomShowcase />
      <ServicesSection />
      <WorkSection />
      <CaseStudiesSection />
      <CreativeShowcase />
      <Process />
      <WhyUs />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
