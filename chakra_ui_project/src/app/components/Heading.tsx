interface HeadingProps {
  title: string;
  description: string;
}
const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2 w-full  border-gray-900">
      <h1 className="text-3xl tracking-wider font-bold text-white">{title}</h1>
      <p className="text-gray-400 tracking-wider">{description}</p>
    </div>
  );
};

export default Heading;
