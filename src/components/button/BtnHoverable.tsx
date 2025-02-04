import { useState } from "react"


interface BtnHoverableProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export const BtnHoverable = ( props : BtnHoverableProps) =>
{
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
      {props.children}
      {isHovered && props.modal}
    </div>
  )
}