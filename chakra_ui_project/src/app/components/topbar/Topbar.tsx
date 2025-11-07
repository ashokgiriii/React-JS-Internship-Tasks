import { useState } from "react";
import LinkElem from "../../Elements/LinkElem";
import Logo from "./Logo";
import HoveredDiv from "../HoveredDiv";

const Topbar = () => {
  const [isHoveredDivVisible, setIsHoveredDivVisible] = useState(false);
  return (
    <div className="w-full bg-black justify-between h-[10vh] flex items-center px-4 gap-4 relative border-b-1 border-gray-900">
      <div className="flex items-center gap-4 ">
        <Logo imgSrc="light-logo.png" altText="logo.png" />

        <div className="relative flex items-center gap-2">
          <LinkElem
            iconVisible={true}
            iconSrc="down.svg"
            iconSrcAlt="down-arrow"
            elemText="Elements"
            hrefLink="/elements"
            className="flex-row-reverse text-white linkElem-bg text-color"
            iconClasssName="h-[12px]"
            onHover={() => {
              setIsHoveredDivVisible(true);
            }}
            onLeave={() => {
              setIsHoveredDivVisible(false);
            }}
          />
          {isHoveredDivVisible && <HoveredDiv onHover={() => {
              setIsHoveredDivVisible(true);
            }}
            onLeave={() => {
              setIsHoveredDivVisible(false);
            }}  />}

          <LinkElem
            iconVisible={true}
            iconSrc="dot.svg"
            iconSrcAlt="dot"
            elemText="Challenges"
            hrefLink="/challenges"
            className="flex-row-reverse text-white linkElem"
            iconClasssName="h-[12px]"
          />
          <LinkElem
            elemText="Spotlight"
            hrefLink="/spotlight"
            className="text-color text-white"
          />
          <LinkElem
            elemText="Blog"
            hrefLink="/blog"
            className="text-color text-white"
          />
        </div>
      </div>

      <LinkElem
        iconVisible={true}
        iconSrc="up.svg"
        iconSrcAlt="dot"
        elemText="Join On Social Media"
        hrefLink="/challenges"
        iconClasssName="h-[2rem]"
        className="text-sm text-white linkElem-bg linkElem-bg-hovered"
      />
    </div>
  );
};

export default Topbar;
