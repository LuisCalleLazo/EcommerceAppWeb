

interface BtnTextProp
{
  onClick : () => void;
  icon: string;
} 

export const BtnIconDev = (props: BtnTextProp) =>
{

  return (
    <button className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors">
      <i className={`${props.icon} text-[30px]`}></i>
    </button>
  );
}