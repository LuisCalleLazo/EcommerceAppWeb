import { ReactNode } from "react";

interface BtnTextProp
{
  children : ReactNode;
  onClick : () => void;
  width?: string;
  bg?: string;
  disabled?: boolean;
  hoverBg? : string;
} 

export const BtnText = (props: BtnTextProp) =>
{
  const hoverBg = "var(--btn-color-hover)";
  const styleBtnText = 
  {
    backgroundColor: props.bg ?? "var(--btn-color)",
    color: "#fff",
    padding: "10px 13px 10px 13px",
    cursor: props.disabled ? "not-allowed" : "pointer",
    opacity: props.disabled ? 0.6 : 1,
  }

  return (
      <button 
        onClick={(e) => {
          e.stopPropagation()
          props.onClick()
        }} 
        style={styleBtnText}
        className={`rounded-lg font-bold duration-110 ease-in-out transition-colors
          ${props.disabled ? "" : "hover:scale-105"}
          ${props.width ?? "w-full"}`}
        onMouseEnter={(e) => {
          if (!props.disabled && hoverBg) {
            (e.target as HTMLButtonElement).style.backgroundColor = hoverBg;
          }
        }}
        onMouseLeave={(e) => {
          if (!props.disabled) {
            (e.target as HTMLButtonElement).style.backgroundColor =
              props.bg ?? "var(--btn-color)";
          }
        }}
        disabled={props.disabled}>
        {props.children}
      </button>
  );
}