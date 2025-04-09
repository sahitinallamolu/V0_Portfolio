"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Add cursor class to body
    document.body.classList.add("cursor-none")

    // Only show cursor when it moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Track link hovers
    const handleLinkHoverEvents = () => {
      document
        .querySelectorAll("a, button, [role=button], input, textarea, select, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setLinkHovered(true))
          el.addEventListener("mouseleave", () => setLinkHovered(false))
        })
    }

    addEventListeners()
    handleLinkHoverEvents()

    // Re-run hover detection when DOM might have changed
    const observer = new MutationObserver(handleLinkHoverEvents)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      removeEventListeners()
      document.body.classList.remove("cursor-none")
      observer.disconnect()
    }
  }, [])

  // Don't render on server or when cursor is hidden
  if (typeof window === "undefined") return null

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-50" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"} ${
          linkHovered ? "cursor-hover" : ""
        } ${clicked ? "scale-75" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) ${
            linkHovered ? "scale(1.5)" : clicked ? "scale(0.75)" : "scale(1)"
          }`,
        }}
      />
      <style jsx global>{`
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: #FFFFFA;
        }

        .cursor-outline {
          width: 40px;
          height: 40px;
          border: 2px solid #FFFFFA;
          transition: transform 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
