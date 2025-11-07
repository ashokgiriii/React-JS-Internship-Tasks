import { Link } from "react-router-dom";
import Icon from "./Icon";

interface LinkElemProps {
  elemText: string;
  hrefLink: string;
  iconVisible?: boolean;
  iconSrc?: string;
  iconSrcAlt?: string;
  className?: string;
  iconClasssName?: string;
  onHover?: () => void;
  onLeave?: () => void;
}

const LinkElem = ({
  elemText,
  hrefLink,
  iconVisible,
  iconSrc,
  iconSrcAlt,
  iconClasssName,
  className,
  onHover,
  onLeave,
}: LinkElemProps) => {
  return (
    <Link
      className={`flex items-center justify-end gap-2 tracking-wider hover:bg-[#212121] hover:text-white transition-all duration-100 p-1 px-4 rounded-sm ${className} `}
      to={hrefLink}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {iconVisible && iconSrc && iconSrcAlt && iconClasssName && (
        <Icon
          imgSrc={iconSrc}
          altText={iconSrcAlt}
          className={iconClasssName}
        />
      )}

      {elemText}
    </Link>
  );
};

export default LinkElem;
