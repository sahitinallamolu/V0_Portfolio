"use client"

import { useState, useRef, useEffect } from "react"
import CustomCursor from "@/components/custom-cursor"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import MarqueeBanner from "@/components/sections/marquee-banner"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isLoaded, setIsLoaded] = useState(false)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Set loaded state after initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: experienceRef, id: "experience" },
        { ref: projectsRef, id: "projects" },
        { ref: contactRef, id: "contact" },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const { ref, id } = sections[i]
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)

    const sectionRef =
      sectionId === "home"
        ? homeRef
        : sectionId === "about"
          ? aboutRef
          : sectionId === "experience"
            ? experienceRef
            : sectionId === "projects"
              ? projectsRef
              : sectionId === "contact"
                ? contactRef
                : null

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <div className="min-h-screen">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        <div ref={homeRef}>
          <Hero scrollToSection={scrollToSection} />
        </div>

        <MarqueeBanner />

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={experienceRef}>
          <Experience />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  )
}
