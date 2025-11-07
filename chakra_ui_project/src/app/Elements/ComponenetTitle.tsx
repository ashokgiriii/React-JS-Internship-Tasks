interface ComponenetTitleProps {
  componenTitle: string;
}
const ComponenetTitle = ({ componenTitle }: ComponenetTitleProps) => {
  return (
    <div className="w-full text-white px-4 h-[8vh] absolute top-0 left-0 flex items-center text-2xl bg-gray-900 tracking-wider">
      {componenTitle}
    </div>
  );
};

export default ComponenetTitle;
