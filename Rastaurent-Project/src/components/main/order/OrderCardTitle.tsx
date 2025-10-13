function OrderCardTitle() {
  return (
    <div className="flex w-full justify-between border-b border-gray-200 p-2">
      <p className="text-gray-600 flex-[1]">Order ID</p>
      <p className="text-gray-600 flex-[1]">Customer</p>
      <p className="text-gray-600 flex-[2]">Items</p>
      <p className="text-gray-600 flex-[1]">Table</p>
      <p className="text-gray-600 flex-[1]">Total</p>
      <p className="text-gray-600 flex-[1]">Status</p>
      <p className="text-gray-600 flex-[1]">Time</p>
    </div>
  );
}

export default OrderCardTitle;
