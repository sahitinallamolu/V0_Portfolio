"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  direction?: "left" | "right"
  className?: string
}

export default function Marquee({
  children,
  speed = 50,
  pauseOnHover = true,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild as HTMLElement
      if (firstChild) {
        setContentWidth(firstChild.offsetWidth)
      }
    }

    const handleResize = () => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstChild as HTMLElement
        if (firstChild) {
          setContentWidth(firstChild.offsetWidth)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [children])

  const duration = contentWidth / speed

  return (
    <div
      className={`marquee-container ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {children}
      </div>
      <div
        className="marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {children}
      </div>
    </div>
  )
}
