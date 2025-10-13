interface Props {
  iconName: string;
  clasName: string;
}
const IconName = ({ iconName, clasName }: Props) => {
  return <p className={clasName}>{iconName}</p>;
};

export default IconName;
