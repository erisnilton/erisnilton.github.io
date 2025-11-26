import { AboutSection } from "@/components/about-section"
import { BackendProjectsSection } from "@/components/backend-projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HardSkillsSection } from "@/components/hard-skills-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BackendProjectsSection />
        <HardSkillsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
