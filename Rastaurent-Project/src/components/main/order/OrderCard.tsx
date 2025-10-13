interface Props {
  orderId: string;
  customer: string;
  items: string;
  table: string;
  total: string;
  status: string;
  time: string;
}

function OrderCard({
  orderId,
  customer,
  items,
  table,
  total,
  status,
  time,
}: Props) {
  return (
    <div className="flex justify-between border-b px-2 py-4 border-gray-200">
      <p className="text-sm flex-[1]">{orderId}</p>
      <p className="text-sm flex-[1]">{customer}</p>
      <p className="text-sm flex-[2]">{items}</p>
      <p className="text-sm flex-[1]">{table}</p>
      <p className="text-sm flex-[1]">{total}</p>
      <p className="text-sm flex-[1]">
        <span
          className={`p-1 rounded-sm ${
            status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : status === "Ready"
              ? "bg-green-100 text-green-800"
              : status === "Preparing"
              ? "bg-blue-100 text-blue-800"
              : status === "Delivered"
              ? "bg-gray-100 text-gray-800"
              : "bg-red-100 text-red-800" // default or fallback
          }`}
        >
          {status}
        </span>
      </p>
      <p className="text-sm flex-[1]">{time}</p>
    </div>
  );
}

export default OrderCard;
