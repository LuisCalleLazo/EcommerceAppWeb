

interface BtnTextProp
{
  OnClick : () => void;
  icon: string;
  className?: string;
} 

export const BtnIcon = (props: BtnTextProp) =>
{

  return (
    <button 
      className={"text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors hover:cursor-pointer " + (props.className ?? "") }
      onClick={(e) => {
        e.stopPropagation();
        props.OnClick();
      }}>
      <i className={`${props.icon} text-[25px]`}></i>
    </button>
  );
}