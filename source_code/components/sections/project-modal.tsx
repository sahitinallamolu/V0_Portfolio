"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  image: string
  description: string
  fullDescription: string[]
  date: string
}

interface ProjectModalProps {
  projects: Project[]
  selectedProject: number | null
  setSelectedProject: (id: number | null) => void
}

export default function ProjectModal({ projects, selectedProject, setSelectedProject }: ProjectModalProps) {
  return (
    <div className={`modal-overlay ${selectedProject !== null ? "open" : ""}`} onClick={() => setSelectedProject(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-cursor-hover>
        {selectedProject !== null &&
          projects
            .filter((p) => p.id === selectedProject)
            .map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-light title-font">{project.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close modal"
                    data-cursor-hover
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    {project.fullDescription.map((paragraph, idx) => (
                      <p key={idx} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button
                    onClick={() => setSelectedProject(null)}
                    className="bg-[#101314] text-[#FFFFFA] hover:bg-[#101314]/90 rounded-none px-8 py-6 title-font"
                    data-cursor-hover
                  >
                    CLOSE
                  </Button>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
