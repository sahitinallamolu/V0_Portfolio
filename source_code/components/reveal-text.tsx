"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
}

export default function RevealText({ children, delay = 0 }: RevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsRevealed(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={textRef} className={`reveal-text ${isRevealed ? "revealed" : ""}`}>
      <span>{children}</span>
    </div>
  )
}
