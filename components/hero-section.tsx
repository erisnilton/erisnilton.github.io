"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div
        className={`relative z-10 max-w-6xl mx-auto w-full transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Information */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Erisnilton Freitas
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
              Desenvolvedor Full Stack
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Especializado em criar aplicações web modernas e escaláveis com VueJS, ReactJS, NodeJS, TypeScript, NestJS e Spring Boot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToProjects} className="text-base cursor-pointer">
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="text-base cursor-pointer">
                <Mail className="mr-2 h-4 w-4" />
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="https://github.com/erisnilton.png"
                alt="Erisnilton Freitas"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
