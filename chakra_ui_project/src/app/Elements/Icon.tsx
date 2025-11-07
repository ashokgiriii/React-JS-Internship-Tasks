interface IconProps {
  imgSrc: string;
  altText: string;
  className?: string;
}

const Icon = ({ imgSrc, altText, className }: IconProps) => {
  return <img className={className} src={`/icons/${imgSrc}`} alt={altText} />;
};

export default Icon;
