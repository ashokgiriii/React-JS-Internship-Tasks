import Icon from "../icons/Icon";

const Input = () => {
  return (
    <div className="border rounded-md w-[30%] border-gray-200 relative">
      <Icon
        classname="h-[.8rem] w-[.8rem] absolute top-1/2 left-[1rem] transform translate-x-[-50%] translate-y-[-50%] "
        iconSrc="search"
      />
      <input
        type="text"
        placeholder="Search orders, menu items, customers..."
        className="px-8 text-[.8rem] tracking-wider outline-none py-[2px] text-gray-400  w-full"
      />
    </div>
  );
};

export default Input;
