
interface SubtitleProp
{
  text : string;
} 


export const SubTitle = (props : SubtitleProp) =>
{
  return (
    <div className="px-4 md:px-20 pt-10">
      <h2 className="border-t-2 border-orange-400 border-b-2 py-3 font-bold text-left pl-4 md:pl-10 text-pink-700">
        {props.text}
      </h2>
    </div>
  );
} 