import type React from "react"

interface InputRadioProps {
  id: string
  name: string
  value: string
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputRadio: React.FC<InputRadioProps> = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="flex items-center py-[10px]">
      <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} className="hidden" />
      <label htmlFor={id} className="flex items-center cursor-pointer text-sm">
        <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
        {label}
      </label>
      <style>{`
        input[type="radio"]:checked + label span {
          background-color: var(--btn-color);
          box-shadow: 0px 0px 0px 2px white inset;
        }
        input[type="radio"]:checked + label {
          color: var(--btn-color);
        }
        label span {
          transition: all 0.3s ease;
        }
        label:hover span {
          border-color: var(--btn-color);
        }
      `}</style>
    </div>
  )
}

