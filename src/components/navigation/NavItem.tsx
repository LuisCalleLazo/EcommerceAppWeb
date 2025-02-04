

interface NavItemProps
{
  label : string
  icon : string
}
export const NavItem = (props : NavItemProps) =>
{
  return (
    <>
      <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <div>
          <i className={"mr-3 " + props.icon}/>
        </div>
        <div>
          <span>{props.label}</span>
        </div>
      </li>
    </>
  );
}