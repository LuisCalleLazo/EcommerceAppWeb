import React, { useState } from 'react';

interface InputSearchProps {
  placeholder: string;
  value: string;
  label?: string;
  width: string;
  icon?: string;
  setValue: (val: string) => void;
  onSearch: (val: string) => void;
}

export const InputSearch = (props: InputSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const styleInput = {
    width: props.width ?? "250px",
    borderColor: isFocused ? 'blue' : 'gray',
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onSearch(props.value);
    }
  };

  return (
    <div className="p-2 h-[55px] bg-white rounded-2xl">
      {props.label && (
        <div className="mb-4">
          <label className="font-bold text-black flex justify-start items-center">
            {props.icon && <i className={`${props.icon} text-2xl px-3`}></i>}
            <p>{props.label}</p>
          </label>
        </div>
      )}
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          className="p-2 pl-3 rounded-lg w-64 outline-none"
          placeholder={props.placeholder}
          style={styleInput}
        />
        <button 
          onClick={() => props.onSearch(props.value)} 
          className="ml-2 p-2 bg-[var(--tx-color2)] text-white rounded-lg"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
