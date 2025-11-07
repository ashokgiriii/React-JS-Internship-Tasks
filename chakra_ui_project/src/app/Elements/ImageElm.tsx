interface ImageProps {
  imgSrc: string;
  imgAlt: string;
  className: string;
}
const Image = ({ imgSrc, className, imgAlt }: ImageProps) => {
  return (
    <img src={`/images/${imgSrc}`} alt={imgAlt} className={className} />
  );
};

export default Image;
