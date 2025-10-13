import SidebarHeading from "./SidebarHeading";
import SidebarMenu from "./SidebarMenu";
import Image from "../image/Image";

const Sidebar = () => {
  return (
    <div className="h-[100vh] fixed flex flex-col shadow border-r-1 border-gray-200 gap-2 justify-between w-[15%] ">
      <div className="flex flex-col gap-2  ">
        <SidebarHeading
          iconSrc="king"
          appName="RestaurentOS"
          userName="Ashok Giri"
          wrapperClass=" p-4 pb-4  border-b border-gray-200 "
          iconClass="h-[2rem] w-[2rem]  bg-gray-800 p-[2px]  rounded-md"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Dashboard"
          iconSrc="dashboard"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Orders"
          iconSrc="cart"
        />

        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="menu"
          iconSrc="fork"
          activeClass="bg-gray-900 text-white" // Custom active style
        />

        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Reservations"
          iconSrc="note"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Staff"
          iconSrc="people"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Analytics"
          iconSrc="bar"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName=""
          textName="Settings"
          iconSrc="settings"
        />
      </div>

      <div className="flex gap-2 justify-center border-t border-gray-200 relative bottom-4 p-4 items-center">
        <Image iconSrc="user" classname=" h-[2rem] w-[2rem] rounded-full" />
        <div>
          <p className="text-sm font-bold">Admin User</p>
          <p className="text-sm text-gray-500">ashokgiri@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
