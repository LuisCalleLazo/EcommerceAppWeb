interface RangeFilterOptionProps {
  id: string;
  label: string;
  min: number;
  max: number;
  currentMinValue: number;
  currentMaxValue: number;
  onChange: (min: number, max: number) => void;
}

export const InputRange = (props : RangeFilterOptionProps) => {
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
        <div className="relative">
          <div className="absolute inset-y-0 left-0 right-0 bg-gray-200 rounded-full h-1"></div>
          <input
            type="range"
            min={props.min}
            max={props.max}
            value={props.currentMinValue}
            onChange={(e) => props.onChange(Number(e.target.value), props.currentMaxValue)}
            className="absolute inset-y-0 left-0 w-full h-1 m-0 bg-transparent appearance-none pointer-events-none"
          />
          <input
            type="range"
            min={props.min}
            max={props.max}
            value={props.currentMaxValue}
            onChange={(e) => props.onChange(props.currentMinValue, Number(e.target.value))}
            className="absolute inset-y-0 left-0 w-full h-1 m-0 bg-transparent appearance-none pointer-events-none"
          />
        </div>
        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 bg-[var(--tx-color2)] rounded-full h-1"
            style={{
              width: `${((props.currentMaxValue - props.currentMinValue) / (props.max - props.min)) * 100}%`,
              left: `${((props.currentMinValue - props.min) / (props.max - props.min)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
