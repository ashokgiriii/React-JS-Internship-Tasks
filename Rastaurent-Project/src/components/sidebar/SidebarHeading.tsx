import Icon from "../icons/Icon";
import IconName from "../icons/IconName";

interface SidebarHeadingProps {
  iconSrc: string;
  appName: string;
  userName: string;
  wrapperClass?: string;
  iconClass?: string;
  textClass?: string;
}

const SidebarHeading = ({
  iconSrc,
  appName,
  userName,
  wrapperClass = "",
  iconClass = "",
  textClass = "",
}: SidebarHeadingProps) => {
  return (
    <div className={`flex gap-2 cursor-pointer items-center ${wrapperClass}`}>
      <Icon iconSrc={iconSrc} classname={iconClass} />
      <div className="flex flex-col">
        <IconName
          clasName={`text-[.8rem] font-bold tracking-wider ${textClass}`}
          iconName={appName}
        />
        <IconName clasName={`text-[.7rem] ${textClass}`} iconName={userName} />
      </div>
    </div>
  );
};

export default SidebarHeading;
