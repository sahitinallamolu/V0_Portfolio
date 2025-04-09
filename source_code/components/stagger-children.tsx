"use client"

import type React from "react"

import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react"

interface StaggerChildrenProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export default function StaggerChildren({ children, staggerDelay = 100, className = "" }: StaggerChildrenProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Clone children and add stagger classes and delays
  const staggeredChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement, {
        className: `stagger-item ${isVisible ? "appear" : ""} ${child.props.className || ""}`,
        style: {
          ...child.props.style,
          transitionDelay: `${index * staggerDelay}ms`,
        },
      })
    }
    return child
  })

  return (
    <div ref={containerRef} className={className}>
      {staggeredChildren}
    </div>
  )
}
