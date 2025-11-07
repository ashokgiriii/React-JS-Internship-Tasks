import LinkElem from "../../Elements/LinkElem";

const Sidebar = () => {
  return (
    <div className="p-4 gap-4 w-[20%] border-r-1 border-gray-900 h-[90vh] relative  flex flex-col">
      {[
        { text: "All", icon: "books.svg", className: "bg-[#212121]" },
        { text: "Elements", icon: "books.svg" },
        { text: "Buttons", icon: "button.svg" },
        { text: "Checkbox", icon: "checkbox.svg" },
        { text: "Toggle Switches", icon: "toggle.svg" },
        { text: "Cards", icon: "cards.svg" },
        { text: "Loaders", icon: "loading.svg" },
        { text: "Inputs", icon: "inputs.svg" },
        { text: "Radio", icon: "radio.svg" },
        { text: "Forms", icon: "forms.svg" },
      ].map((items, i) => (
        <LinkElem
          key={i}
          iconVisible={true}
          iconSrc={items.icon}
          iconSrcAlt={items.icon}
          elemText={items.text}
          hrefLink={items.text.toLowerCase()}
          className={`justify-start text-color text-white p-2 ${items.className}`}
          iconClasssName="h-[1.3rem]"
        />
      ))}
    </div>
  );
};

export default Sidebar;
