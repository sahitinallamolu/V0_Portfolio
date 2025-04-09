"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)

          // Add a small delay before hiding the loading screen
          setTimeout(() => {
            setLoaded(true)

            // Enable scrolling after loading
            document.body.style.overflow = ""
          }, 500)

          return 100
        }
        return newProgress
      })
    }, 200)

    // Disable scrolling during loading
    document.body.style.overflow = "hidden"

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <div className={`loading-screen ${loaded ? "loaded" : ""}`}>
      <div className="loading-text title-font uppercase-spaced text-[#FFFFFA]">SAHITI NALLAMOLU</div>
      <div className="loading-progress text-[#FFFFFA]">{Math.round(progress)}%</div>
    </div>
  )
}
