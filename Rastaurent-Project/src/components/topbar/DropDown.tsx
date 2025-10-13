import SidebarMenu from "../sidebar/SidebarMenu";

import { useNavigate } from "react-router-dom";

const DropDown = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };



  return (
    <div className="bg-white flex flex-col rounded-sm shadow absolute top-[8.5vh] right-8 w-[20%]">
      <p className="border-b px-4 py-2 border-gray-300">My Account</p>
      <div className="flex flex-col py-2 border-b border-gray-300 ">
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem] "
          textClassName="lauda"
          textName="Profile"
          iconSrc="user"
        />
        <SidebarMenu
          iconClassName="h-[1.25rem] w-[1.25rem]"
          textClassName="lauda"
          textName="Settings"
          iconSrc="settings"
        />
      </div>
      <SidebarMenu
        iconClassName="h-[1.25rem] w-[1.25rem]"
        textClassName="Logout"
        textName="Logout"
        iconSrc="logout"
        onClick={handleLogout}
      />
    </div>
  );
};

export default DropDown;
