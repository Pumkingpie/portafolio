"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import GradientText from "@/components/ui/gradientext"
import TextType from "./ui/textype"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative mb-8">
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#220b34] p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full w-full h-full object-cover"
                priority={true}
              />
            </motion.div>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GradientText>
              <span>Juan Carlos</span>
            </GradientText>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TextType
              text={["Desarrollador Full Stack", "Diseñador UI/UX", "Apasionado por la tecnología"]}
              loop={true}
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection("trabajos")}
              className="gradient-button text-white px-8 py-3 rounded-full text-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              Ver Trabajos
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-900 hover:text-white px-8 py-3 rounded-full text-lg bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
