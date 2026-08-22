import HeroSection from "@/components/features/hero"
import ProjectsSection from "@/components/features/projects"
import ServicesSection from "@/components/features/services"
import ProcessSection from "@/components/features/process"
import AboutSection from "@/components/features/about"
import TestimonialsSection from "@/components/features/testimonials"
import FaqSection from "@/components/features/faq"
import ContactSection from "@/components/features/contact"

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
  )
}
