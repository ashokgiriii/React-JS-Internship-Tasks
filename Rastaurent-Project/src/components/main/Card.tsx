import Icon from "../icons/Icon";

interface Props {
  clasName: string;
  numbers: string;
  cardTitle: string;
  lastMonthPercent: string;
  lastMonthClassName?: string;
  iconSrc: string;
}

const Card = ({
  clasName,
  numbers,
  cardTitle,
  lastMonthPercent,
  lastMonthClassName,
  iconSrc,
}: Props) => {
  return (
    <div className="flex  flex-wrap justify-between items-center gap-16 bg-white w-[calc(100%/4)]  p-4 shadow border border-gray-200 rounded-xl">
      <div className="flex flex-col gap-1">
        <p className="text-gray-500 text-sm">{cardTitle}</p>
        <span className="font-bold text-2xl">{numbers}</span>
        <p className="text-sm">
          <span className={` text-green-600 ${lastMonthClassName}`}>
            {lastMonthPercent}%
          </span>
          <span className="text-gray-500">vs last month</span>
        </p>
      </div>
      <Icon
        classname={`h-[2.7rem]  p-2 rounded-md ${clasName}`}
        iconSrc={iconSrc}
      />
    </div>
  );
};

export default Card;
