import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-[#36454F] text-[#FFFFFA] border-t border-[#FFFFFA]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Sahiti Nallamolu. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="mailto:nallamolu.s@northeastern.edu"
              className="opacity-70 hover:opacity-100 transition-opacity"
              data-cursor-hover
            >
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sahitinallamolu/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              data-cursor-hover
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
