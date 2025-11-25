"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/css3/css3-original.svg" },
      { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/typescript/typescript-original.svg" },
      { name: "UnoCSS", icon: "https://images.seeklogo.com/logo-png/43/1/unocss-logo-png_seeklogo-434982.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/nestjs/nestjs-original.svg" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/nodejs/nodejs-original.svg" },
      { name: "JWT", icon: "🔐" },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/docker/docker-original.svg" },
    ],
  },
  {
    title: "Arquitetura & Práticas",
    skills: [
      { name: "MVC", icon: "🧱" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
]


export function HardSkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
          Hard Skills & Ferramentas
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Tecnologias que domino
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 border-border/50">
              <h3 className="text-2xl font-semibold mb-8 text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    {skill.icon.startsWith("http") ? (
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <span className="text-3xl">{skill.icon}</span>
                    )}
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
