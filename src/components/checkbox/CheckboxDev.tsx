import type React from "react"

interface CheckboxDevProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export const CheckboxDev: React.FC<CheckboxDevProps> = ({ id, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    />
  )
}

