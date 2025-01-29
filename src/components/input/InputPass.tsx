import { useState } from "react";

interface InputPassProps
{
  placeholder: string;
  value: string;
  label?: string;
  width: string;
  icon? : string;
  setValue : (val: string) => void;
}

export const InputPass = (props : InputPassProps) => 
{

  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styleInput = 
  {
    width : props.width ?? "150px"
  }

  return (
    <div className="p-2 h-[80px]">
      {
        props.label != null ? 
        <div className="mb-4">
          <label className="font-bold text-white flex justify-start items-center">
            {
              props.icon != null ?
              <i className={`${props.icon} text-2xl px-3`}></i> : null
            }
            <p>
              {props.label}
            </p>
          </label>
        </div> : 
        null
      }
      <div className="flex justify-center relative">
        <input 
          type={showPassword ? 'text' : 'password'} 
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)} 
          className="p-2 pl-3 rounded-lg w-64 outline-[var(--tx-color2)]" 
          placeholder={props.placeholder}
          style={styleInput}
          />
        <i onClick={togglePasswordVisibility} 
          className={`bi bi-eye${showPassword ? '-slash' : ''}-fill 
          absolute right-[10px] text-xl mt-1 hover:cursor-pointer`}/>
      </div>
    </div>
  );
}