interface Props {
  iconSrc: string;
  classname: string;
}

const Image = ({ iconSrc, classname }: Props) => {
  return <img className={classname} src={`/images/${iconSrc}.jpg`} />;
};

export default Image;
