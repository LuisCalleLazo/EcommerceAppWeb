import { ReactNode } from "react";

interface BtnTextProp
{
  children : ReactNode;
  onClick : () => void;
  width?: string;
  bg?: string;
} 

export const BtnText = (props: BtnTextProp) =>
{
  const styleBtnText = 
  {
    width : props.width ?? '180px',
    backgroundColor: props.bg ?? "var(--bg-color)",
    color: "#fff",
    padding: "10px 13px 10px 13px",
  }

  return (
      <button onClick={props.onClick} style={styleBtnText} className="rounded-lg font-bold hover:scale-125 duration-110 ease-in-out cursor-pointer">
        {props.children}
      </button>
  );
}