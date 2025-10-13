import { useState, useEffect, useRef } from "react";
import Image from "../image/Image";
import DropDown from "./DropDown";
import Input from "./Input";
import Icon from "../icons/Icon";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow border-b border-b-gray-300 h-[8vh] items-center justify-between py-2 px-4 z-10 flex fixed w-[85%] left-[15%]">
      <Input />

      <div className="flex items-center gap-2 pr-4" ref={dropdownRef}>
        <div className="relative">
          <span className="absolute right-[0rem] top-[-.6rem] bg-red-400 text-white p-[3px] h-[20px] w-[20px] flex items-center justify-center text-sm font-bold rounded-md">3</span>
          <Icon
            iconSrc="bell"
            classname="h-[2rem] w-[2rem] p-[2px] cursor-pointer"
          />
        </div>

        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={handleToggle}
        >
          <Image classname="w-[2rem] h-[2rem] rounded-full" iconSrc="user" />
          <p className="font-bold text-sm">Admin User</p>
        </div>

        {/* Dropdown*/}
        {showDropdown && <DropDown />}
      </div>
    </div>
  );
};

export default Topbar;
