interface Props {
  iconSrc: string;
  classname: string;
}

const Icon = ({ iconSrc, classname }: Props) => {
  return (
    <img className={classname} src={`/icons/${iconSrc}.svg`} />
  );
};

export default Icon;
