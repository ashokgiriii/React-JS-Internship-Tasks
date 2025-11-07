import Image from "../Elements/ImageElm";
import LinkElem from "../Elements/LinkElem";
import Logo from "./topbar/Logo";
interface HoveredDivProps {
   onHover?: () => void;
  onLeave?: () => void;
}

const HoveredDiv = ({onHover,onLeave}: HoveredDivProps) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave} className="absolute top-[5vh] left-0 z-10 gap-2 flex w-[50vw] min-h-[50vh] rounded-xl border border-gray-800 bg-black backdrop-blur-md shadow-xl p-4">
      <div className="flex flex-wrap w-[60%] gap-4 content-start justify-between">
        {[
          { text: "Elements", icon: "books.svg" },
          { text: "Buttons", icon: "button.svg" },
          { text: "Checkbox", icon: "checkbox.svg" },
          { text: "Toggle Switches", icon: "toggle.svg" },
          { text: "Cards", icon: "cards.svg" },
          { text: "Loaders", icon: "loading.svg" },
          { text: "Inputs", icon: "inputs.svg" },
          { text: "Radio", icon: "radio.svg" },
          { text: "Forms", icon: "forms.svg" },
        ].map((item, i) => (
          <LinkElem
            key={i}
            iconVisible={true}
            iconSrc={item.icon}
            iconSrcAlt={`${item.text}-icon`}
            elemText={item.text}
            hrefLink={`/${item.text.toLowerCase()}`}
            className="flex justify-start gap-2 w-[calc(50%-8px)] px-4 py-3 text-red-400 linkElem-bg linkElem-bg-hovered"
            iconClasssName="h-[1.5rem]"
          />
        ))}
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-[40%] bg-gradient-to-b from-gray-900 bg-black rounded-lg p-6 shadow-inner">
        <Image
          imgSrc="haha.gif"
          imgAlt="Social preview"
          className="h-24 w-24 rounded-full object-cover shadow-md mb-4"
        />
        <h1 className="text-2xl text-white font-semibold text-center mb-2">
          We're on <span className="text-[#E03F0B]">Social Media!</span>
        </h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Follow us to stay up-to-date on new challenges, updates, and posts.
        </p>
        <div className="flex gap-4 justify-center">
          <Logo
            imgSrc="gitlab.svg"
            altText="logo"
            className="h-[40px] cursor-pointer hover:scale-110 transition-transform duration-200"
          />
          <Logo
            imgSrc="github.svg"
            altText="logo"
            className="h-[40px] cursor-pointer hover:scale-110 transition-transform duration-200"
          />
          <Logo
            imgSrc="insta.svg"
            altText="logo"
            className="h-[40px]  hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HoveredDiv;
