"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm, type FormData } from "@/app/actions"
import FadeIn from "@/components/fade-in"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData as FormData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: result.error || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-[#101314] text-[#FFFFFA]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="heading-lg mb-16 title-font uppercase-spaced">CONTACT</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={200}>
            <div>
              <p className="body-text mb-8">
                I'm currently available for new opportunities and collaborations. Feel free to reach out if you'd like
                to discuss a project or just say hello.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:nallamolu.s@northeastern.edu"
                  className="flex items-center gap-3 hover:opacity-70 transition-opacity rounded-full bg-[#36454F]/30 p-3 hover:bg-[#36454F]/50 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_15px_rgba(255,255,250,0.1)]"
                  data-cursor-hover
                >
                  <Mail size={20} />
                  <span>nallamolu.s@northeastern.edu</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sahitinallamolu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-70 transition-opacity rounded-full bg-[#36454F]/30 p-3 hover:bg-[#36454F]/50 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_15px_rgba(255,255,250,0.1)]"
                  data-cursor-hover
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-0 border-b rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-[#FAF7F0] text-[#FAF7F0]"
                  data-cursor-hover
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-0 border-b rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-[#FAF7F0] text-[#FAF7F0]"
                  data-cursor-hover
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-0 border-b rounded-none px-0 py-2 min-h-[120px] bg-transparent focus-visible:ring-0 focus-visible:border-[#FAF7F0] text-[#FAF7F0] resize-none"
                  data-cursor-hover
                />
              </div>
              <Button
                type="submit"
                className="bg-[#101314] text-[#FFFFFA] hover:bg-[#101314]/90 rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_15px_rgba(255,255,250,0.3)]"
                disabled={isSubmitting}
                data-cursor-hover
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
