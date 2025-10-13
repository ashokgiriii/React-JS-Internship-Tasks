import Icon from "../icons/Icon";
import IconName from "../icons/IconName";
interface Props {
  textName: string;
  iconSrc: string;
  iconClassName: string;
  textClassName: string;
  activeClass?: string;
  onClick?: () => void;
}
const SidebarMenu = ({
  textName,
  iconSrc,
  iconClassName,
  textClassName,
  activeClass,
  onClick,
}: Props) => {
  return (
    <div
      className={`flex gap-4 items-center w-[90%] hover:bg-gray-800 hover:text-white transition duration-150 ease-in-out px-2 mx-2 py-3 rounded-sm cursor-pointer ${
        activeClass ?? ""
      }`}
      onClick={onClick}
    >
      <Icon iconSrc={iconSrc} classname={iconClassName} />
      <IconName iconName={textName} clasName={textClassName} />
    </div>
  );
};

export default SidebarMenu;
