"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Unocss CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", level: 95 },
      { name: "Node.js", level: 95 },
      { name: "Express", level: 90 },
      { name: "JWT", level: 90 },
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },

      
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 70 },
      { name: "ArangoDB", level: 70 },
      { name: "Redis", level: 80 },
      { name: "Redis Stream", level: 80 },
      { name: "Docker", level: 85 },
      { name: "GCP", level: 75 },
    ],
  },
  {
    title: "Arquitetura & Práticas",
    skills: [
      { name: "MVC", level: 95 },
      { name: "Clean Architecture", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 80 },
      { name: "TDD", level: 80 },
      { name: "DDD", level: 80 },
      {
        name: 'Multi-tenancy', level: 85
      }
    ],
  },
]

export function SkillsSection() {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Habilidades & Ferramentas</h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">Tecnologias que domino</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 border-border/50">
              <h3 className="text-2xl font-semibold mb-8 text-primary">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                        }}
                      />
                    </div>
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
