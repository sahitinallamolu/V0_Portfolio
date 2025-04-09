"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/fade-in"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[#36454F] text-[#FFFFFA]">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Center content */}
        <div className="text-center">
          <FadeIn delay={800}>
            <h2 className="heading-lg max-w-3xl mx-auto mb-12 title-font">
              Aspiring Data Scientist with expertise in AI, analytics, and data visualization
            </h2>
          </FadeIn>
          <FadeIn delay={1200}>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#101314] text-[#FFFFFA] hover:bg-[#101314]/90 rounded-none px-8 py-6"
                data-cursor-hover
              >
                VIEW PROJECTS <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#FFFFFA] text-[#FFFFFA] hover:bg-[#FFFFFA]/5 rounded-none px-8 py-6"
                data-cursor-hover
              >
                <a
                  href="https://drive.google.com/file/d/1JFQaIUUuC_QGv4Tf_Trhiv14LN8IcOIm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  VIEW RESUME <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={1600}>
          <div className="mt-20">
            <div className="w-8 h-8 mx-auto border-b-2 border-r-2 border-[#4A4947] rotate-45 animate-bounce" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
