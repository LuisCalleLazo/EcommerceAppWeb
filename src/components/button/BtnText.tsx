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
    backgroundColor: props.bg ?? "#400",
    color: "#fff",
    padding: "10px 13px 10px 13px",
  }

  return (
      <button onClick={props.onClick} style={styleBtnText} className="rounded-lg font-bold hover:scale-105 duration-150 ease-in-out">
        {props.children}
      </button>
  );
}