"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#101314]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="text-[#FFFFFA] font-light text-xl title-font uppercase-spaced">SAHITI NALLAMOLU</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`nav-link text-[#FFFFFA] text-sm ${
                    activeSection === section ? "active" : ""
                  } uppercase-spaced`}
                  data-cursor-hover
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#EEEEEE]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-cursor-hover
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center">
          <nav className="flex flex-col space-y-8 text-center">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-2xl hover:opacity-70 transition-opacity title-font"
                data-cursor-hover
              >
                {section.toUpperCase()}
              </button>
            ))}
          </nav>
          <button
            className="absolute top-8 right-6 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            data-cursor-hover
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  )
}
