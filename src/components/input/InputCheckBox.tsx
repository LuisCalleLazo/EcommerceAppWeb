interface InputPassProps
{
  id : string,
  label: string;
  width?: string;
  checked: boolean;
  onChange : (checked : boolean) => void;
}

export const InputCheckBox = (props : InputPassProps) => 
{
  const id = `${props.id}_filter_product`;
  return (
  <div className="flex items-center space-x-3 mb-2">
    <div className="relative">
      <input
        type="checkbox"
        id={id}
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
        className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[var(--tx-color2)] checked:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--tx-color2)] focus:ring-offset-2"
      />
      <svg
        className="absolute w-4 h-4 top-0.5 left-0.5 pointer-events-none hidden check-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <label htmlFor={id} className="text-sm font-medium leading-none text-gray-700 select-none">
      {props.label}
    </label>
  </div>
  );
}