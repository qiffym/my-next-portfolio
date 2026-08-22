import AboutSection from "@/components/features/about";
import ContactSection from "@/components/features/contact";
import FaqSection from "@/components/features/faq";
import HeroSection from "@/components/features/hero";
import ProcessSection from "@/components/features/process";
import ProjectsSection from "@/components/features/projects";
import ServicesSection from "@/components/features/services";
import TestimonialsSection from "@/components/features/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
