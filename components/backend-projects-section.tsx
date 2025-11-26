"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Server } from "lucide-react";
import { Istok_Web } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const backendProjects = [
  {
    title: "Balde Cheio API (Multi-tenant)",
    context:
      "Contexto: Precisava estruturar um backend que suportasse múltiplas propriedades rurais com isolamento de dados e autenticação segura.",
    solution:
      "Solução: Desenvolvi uma API RESTful com arquitetura multi-tenant e autenticação JWT, permitindo gerenciar produção, produtores e coletas de forma organizada e escalável.",
    result:
      "Resultado: A API oferece um fluxo seguro e padronizado para operações do sistema, garantindo isolamento entre clientes e facilitando integração com aplicações web e mobile.",
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "JWT",
      "NestJS",
      "Docker",
      "Swagger",
      "Knex.js",
      "Objection.js",
      "Multi-tenancy",
    ],
    icon: Server,
    github: "🔒",
    docs: "#",
    is_private: true,
  },
  {
    title: "Transcritor.ia API",
    context:
      "Contexto: Documentos antigos geralmente chegam em imagens ilegíveis ou com baixa qualidade, exigindo um backend capaz de processar arquivos e integrá-los ao fluxo de transcrição por IA.",
    solution:
      "Atuação: Contribuí no desenvolvimento da API responsável por receber documentos, gerenciar uploads, organizar processamento e entregar o texto transcrito de forma consistente.",
    result:
      "Resultado: A API tornou o fluxo de digitalização mais estável e padronizado, facilitando a conversão de documentos difíceis de ler em texto claro e editável.",
    stack: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Redis",
      "Redis Streams",
      "Docker",
      "Cookie-based Auth",
    ],
    icon: Server,
    github: "#",
    docs: "#",
    is_private: true,
  },
  {
    title: "Cripto Tracker API",
    context:
      "Contexto: Quis praticar consumo de APIs externas e atualização de dados em tempo real.",
    solution:
      "Solução: Desenvolvi uma aplicação que consulta a API pública da CoinGecko e exibe cotações de criptomoedas de forma dinâmica, reforçando integração com APIs e interfaces reativas.",
    result:
      "Resultado: O projeto serviu como um exercício prático para aprimorar manipulação de dados, consumo de APIs e atualização contínua no frontend.",
    stack: ["Node.js", "WebSocket", "Redis", "Express", "Docker"],
    icon: Server,
    github: "https://github.com/erisnilton/criptotrack",
    docs: "#",
  },
  {
    title: "Encurtador de Links API",
    context:
      "Contexto: Buscava praticar desenvolvimento backend e conteinerização com foco em serviços simples e escaláveis.",
    solution:
      "Solução: Criei uma API em Node.js e Express para gerar e resolver URLs encurtadas, utilizando PostgreSQL para persistência e Docker para padronizar o ambiente.",
    result:
      "Resultado: O projeto reforçou conceitos de arquitetura backend, integração com banco de dados e uso de Docker, além de entregar uma API funcional para encurtamento de links.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    icon: Server,
    github: "https://github.com/erisnilton/encurtador-de-link",
    docs: "#",
  },

  {
    title: "Monitor de Sistema API",
    context:
      "Contexto: Quis explorar coleta de métricas do sistema e comunicação em tempo real para estudos de performance.",
    solution:
      "Solução: Desenvolvi uma API em Node.js capaz de capturar informações de CPU, memória e disco, enviando atualizações contínuas ao frontend via WebSockets.",
    result:
      "Resultado: O projeto consolidou meu entendimento sobre métricas do sistema, streaming de dados e integração backend–frontend em tempo real.",
    stack: [
      "Node.js",
      "TypeScript",
      "WebSockets",
      "Comandos do Sistema",
      "Docker",
    ],
    icon: Server,
    github: "https://github.com/erisnilton/monitor-do-sistema",
    docs: "#",
  },
];

export function BackendProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted/20">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
          Projetos Backend
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          APIs, Infraestrutura & Arquitetura
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group border-border/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-balance leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {project.context}
                </p>
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {project.solution}
                </p>
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted text-foreground/50 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="flex-1 text-base"
                    asChild
                    disabled={project.is_private}
                  >
                    {project.is_private ? (
                      <span>🔒 Privado</span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </a>
                    )}
                  </Button>
                  {/* <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Docs
                    </a>
                  </Button> */}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
