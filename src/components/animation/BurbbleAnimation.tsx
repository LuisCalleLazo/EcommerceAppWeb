"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  size: number
  color: string
  delay: number
}

const pinkShades = [
  "rgba(255, 192, 203, 0.8)", // pink
  "rgba(255, 182, 193, 0.8)", // light pink
  "rgba(255, 105, 180, 0.8)", // hot pink
  "rgba(219, 112, 147, 0.8)", // pale violet red
  "rgba(255, 20, 147, 0.8)", // deep pink
]

export const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 30 + 20, // Increased size
      color: pinkShades[Math.floor(Math.random() * pinkShades.length)],
      delay: Math.random() * 1, // Increased delay variation
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            bottom: "-10%",
            width: bubble.size,
            height: bubble.size,
            background: bubble.color,
            boxShadow: `0 0 10px ${bubble.color}, 0 0 20px ${bubble.color}`,
          }}
          animate={{
            y: [0, "-300%"], // Increased travel distance
            opacity: [0, 0.8, 0],
            scale: [1, 1.2, 1], // Added scale animation
          }}
          transition={{
            duration: 8 + Math.random() * 6, // Increased duration
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  )
}

