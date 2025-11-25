import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { BackendProjectsSection } from "@/components/backend-projects-section"
import { SkillsSection } from "@/components/skills-section"
import { MetricsSection } from "@/components/metrics-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BackendProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
