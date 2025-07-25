import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Pérez - Full Stack Developer",
  description:
    "Portafolio profesional de Juan Pérez, Full Stack Developer especializado en React, Node.js y TypeScript",
  keywords: ["desarrollador", "full stack", "react", "nodejs", "typescript", "portfolio"],
  authors: [{ name: "Juan Pérez" }],
  creator: "Juan Pérez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://juanperez.dev",
    title: "Juan Pérez - Full Stack Developer",
    description: "Portafolio profesional de Juan Pérez",
    siteName: "Juan Pérez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Pérez - Full Stack Developer",
    description: "Portafolio profesional de Juan Pérez",
    creator: "@juanperez",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/placeholder.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
