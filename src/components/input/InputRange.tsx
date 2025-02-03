import type React from "react"
import './InputRange.css';
interface InputRangeProps {
  id: string
  label: string
  min: number
  max: number
  currentMinValue: number
  currentMaxValue: number
  onChange: (min: number, max: number) => void
}

export const InputRange: React.FC<InputRangeProps> = (props) => {
  return (
    <div className="space-y-4 mb-4">
      <label htmlFor={props.id} className="text-sm font-medium leading-none text-gray-700">
        {props.label}
      </label>
      <div className="relative pt-1">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700">Bs {props.currentMinValue}</span>
          <span className="text-xs font-semibold text-gray-700">Bs {props.currentMaxValue}</span>
        </div>
        <div className="relative h-2">
          <div className="absolute inset-y-0 left-0 right-0 bg-gray-200 rounded-full"></div>
          <div
            className="absolute inset-y-0 bg-[var(--tx-color2)] rounded-full"
            style={{
              left: `${((props.currentMinValue - props.min) / (props.max - props.min)) * 100}%`,
              right: `${100 - ((props.currentMaxValue - props.min) / (props.max - props.min)) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min={props.min}
            max={props.max}
            value={props.currentMinValue}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value < props.currentMaxValue) {
                props.onChange(value, props.currentMaxValue)
              }
            }}
            className="absolute inset-y-0 left-0 w-full h-2 m-0 bg-transparent appearance-none"
          />
          <input
            type="range"
            min={props.min}
            max={props.max}
            value={props.currentMaxValue}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value > props.currentMinValue) {
                props.onChange(props.currentMinValue, value)
              }
            }}
            className="absolute inset-y-0 left-0 w-full h-2 m-0 bg-transparent appearance-none"
          />
        </div>
      </div>
    </div>
  )
}

