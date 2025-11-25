import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Nav } from "react-day-picker"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Erisnilton Freitas | Full Stack Developer",
  description:
    "Portfolio de Erisnilton Freitas - Desenvolvedor Full Stack especializado em ReactJS, VueJS, NodeJS, TypeScript, PostgreSQL, Java e Spring Boot",
  keywords: [
    "Erisnilton Freitas",
    "Desenvolvedor Full Stack",
    "ReactJS",
    "VueJS",
    "NodeJS",
    "TypeScript",
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "Portfólio de Desenvolvedor",
    "Desenvolvimento Web",
    "Aplicações Web",
    "Programação",
    "Desenvolvimento de Software",
  ],
  authors: [{ name: "Erisnilton Freitas", url: "https://erisnilton.dev" }],
  openGraph: {
    title: "Erisnilton Freitas | Full Stack Developer",
    description:
      "Portfolio de Erisnilton Freitas - Desenvolvedor Full Stack especializado em ReactJS, VueJS, NodeJS, TypeScript, PostgreSQL, Java e Spring Boot",
    url: "https://erisnilton.dev",
    siteName: "Erisnilton Freitas Portfolio",
    images: [
      {
        url: "https://erisnilton.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Erisnilton Freitas Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
