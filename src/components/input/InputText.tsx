
interface InputTextProps
{
  placeholder: string;
  value: string;
  label?: string;
  width: string;
  icon? : string;
  setValue : (val: string) => void;
  validation?: TypeValidation;
}
export enum TypeValidation
{
  Age, Name, InitDate, EndDate, Email
}


export const InputText = (props : InputTextProps) => 
{

  const styleInput = 
  {
    width : props.width ?? "150px"
  }


  return (
    <div className="p-2 h-[80px] bg-white">
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
      <div className="flex justify-center">
        <input 
          type="text" 
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)} 
          className="p-2 pl-3 rounded-lg w-64 outline-[var(--tx-color2)]" 
          placeholder={props.placeholder}
          style={styleInput}
          />
      </div>
    </div>
  );
}