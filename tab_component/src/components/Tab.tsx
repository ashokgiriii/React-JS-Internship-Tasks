interface Props {
  title: string;
}

const Tab = ({ title }: Props) => {
  return (
    <div className="h-[50vh] flex flex-col gap-2  bg-gray-50 shadow p-4 rounded-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        dignissimos dolores architecto! Vitae sint quod labore eum dolorem?
        Molestiae consequuntur, recusandae ratione pariatur odio nam eum
        consectetur fugit maxime adipisci.
      </p>
    </div>
  );
};

export default Tab;
