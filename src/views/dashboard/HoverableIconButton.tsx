import type React from "react"
import { useState } from "react"

interface HoverableIconButtonProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export function HoverableIconButton({ children, modal }: HoverableIconButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children}
      {isHovered && modal}
    </div>
  )
}

