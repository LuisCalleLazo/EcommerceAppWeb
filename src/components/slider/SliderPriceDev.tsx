import type React from "react"

interface SliderDevProps {
  id: string
  min: number
  max: number
  step: number
  value: number[]
  onChange: (value: number[]) => void
}

export const SliderDev: React.FC<SliderDevProps> = ({ id, min, max, step, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = [...value]
    newValue[index] = Number(e.target.value)
    onChange(newValue)
  }

  return (
    <div className="flex space-x-2">
      <input
        type="range"
        id={`${id}-min`}
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => handleChange(e, 0)}
        className="w-full"
      />
      <input
        type="range"
        id={`${id}-max`}
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => handleChange(e, 1)}
        className="w-full"
      />
    </div>
  )
}

