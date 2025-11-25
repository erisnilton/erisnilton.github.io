"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase, Code2, GitBranch, Award } from "lucide-react"

const metrics = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Anos de Experiência",
  },
  {
    icon: GitBranch,
    value: "1000+",
    label: "Commits no GitHub",
  },

]

export function MetricsSection() {
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
    <section ref={sectionRef} className="py-24 px-4 bg-muted/20">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/5 mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
