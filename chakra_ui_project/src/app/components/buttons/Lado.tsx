interface LadoProps {
  className?: string;
}
const Lado = ({ className }: LadoProps) => {
  return <div className={` text-red-400 ${className}`}>lorem ipsum</div>;
};

export default Lado;
