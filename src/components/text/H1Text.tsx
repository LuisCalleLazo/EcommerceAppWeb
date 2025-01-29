
interface BtnTextProp
{
  text : string;
  width?: string;
  bg?: string;
  color?: string;
} 

export const H1Text = (props: BtnTextProp) =>
{

  const styleH1Text = 
  {
    width : props.width ?? '180px',
    backgroundColor: props.bg ?? "#400",
    color: props.color ?? "#fff",
  }
  return (
    <div className="pt-3 pb-3 w-full">
      <h1 style={styleH1Text} className="font-extrabold text-3xl">
        {props.text}
      </h1>
    </div>
  );
}