import type React from "react"
import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

interface InputSearchProps {
  placeholder: string
  value: string
  label?: string
  width: string
  icon?: string
  setValue: (val: string) => void
  onSearch: (val: string) => void
  options: {id: number, name: string}[]
}

export const InputSearch = (props: InputSearchProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [selectedOption, setSelectedOption] = useState(props.options[0])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onSearch(props.value)
    }
  }

  return (
    <div className="p-2 bg-white rounded-2xl flex flex-row items-center space-x-2">
      {props.label && (
        <div className="flex items-center">
          {props.icon && <i className={`${props.icon} text-2xl px-3`}></i>}
          <p className="font-bold text-black">{props.label}</p>
        </div>
      )}
      <div className="relative">
        <select
          value={selectedOption.name}
          onChange={() => setSelectedOption(selectedOption)}
          className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[var(--tx-color2)]"
        >
          {props.options.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={handleKeyPress}
        className={`p-2 pl-3 rounded-lg outline-none border ${
          isFocused ? "border-[var(--tx-color2)]" : "border-gray-300"
        }`}
        style={{ width: props.width }}
        placeholder={props.placeholder}
      />
    </div>
  )
}

