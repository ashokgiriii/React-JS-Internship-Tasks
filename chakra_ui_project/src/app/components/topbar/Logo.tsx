interface LogoProps {
  imgSrc: string;
  altText: string;
  className?: string;
}
const Logo = ({ imgSrc, altText, className }: LogoProps) => {
  return (
    <img
      className={`h-[50px] w-fit object-contain ${className}`}
      src={`/icons/${imgSrc}`}
      alt={`/icons/${altText}`}
    />
  );
};

export default Logo;
