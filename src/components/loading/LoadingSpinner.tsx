

interface ISpinner
{
  heigth: string,
  hw : string,
  color: string
}

export const LoadingSpinner = (props: ISpinner) => {
  return (
    <div className={`flex flex-col justify-center items-center h-[${props.heigth}]`}>
      <div className={`animate-spin rounded-full h-${props.hw} w-${props.hw} border-t-2 border-b-2 border-[${props.color}] mb-2`}></div>
    </div>
  );
};