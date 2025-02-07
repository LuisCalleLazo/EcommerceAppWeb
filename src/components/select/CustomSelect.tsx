"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface Option {
  id: string
  label: string
  icon: string
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  className?: string,
  disabled? : boolean
  widthMax? : string;
}

export const CustomSelect = ( props: CustomSelectProps) => 
{
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = props.options.find((option) => option.id === props.value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const styleBtnText = 
  {
    cursor: props.disabled ? "not-allowed" : "pointer",
    opacity: props.disabled ? 0.6 : 1,
  }

  return (
    <div 
      className={`relative w-full`} 
      ref={selectRef} 
      style={{ maxWidth: props.widthMax }}>
      <button
        disabled={props.disabled ?? false}
        style={styleBtnText}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-md border border-red-300 bg-white px-4 py-2 text-left text-sm hover:bg-gray-50 ${props.className}`}
      >
        <div className="flex items-center gap-2">
          <i className={selectedOption?.icon}/>
          <span className="font-medium">{selectedOption?.label}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {props.options.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => {
                    props.onChange(option.id)
                    setIsOpen(false)
                  }}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 ${
                    props.value === option.id ? "bg-gray-50" : ""
                  }`}
                >
                  <i className={option.icon}/>
                  <span className="font-medium">{option.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

