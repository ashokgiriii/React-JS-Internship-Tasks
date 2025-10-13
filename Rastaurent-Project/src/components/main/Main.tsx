import Card from "./Card";
import Linebar from "./chart/RevenueChart";
import TopDishesChart from "./chart/TopDishesChart";
import OrderCard from "./order/OrderCard";
import OrderCardTitle from "./order/OrderCardTitle";
import orders from "../../data/orders.json";


const Main = () => {
  return (
    <div className="relative left-[15%] w-[85%] top-[8vh] p-4 flex flex-col gap-8">
      <div>
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>
      {/* Card div */}
      <div className="flex gap-2">
        <Card
          cardTitle="Total Orders"
          numbers="101"
          lastMonthPercent="9.5"
          clasName="bg-blue-100"
          iconSrc="cart"
        />
        <Card
          cardTitle="Total Revenue"
          numbers="$50000"
          lastMonthPercent="12"
          clasName="bg-green-100"
          iconSrc="dollor"
        />
        <Card
          cardTitle="Total Customers"
          numbers="200"
          lastMonthPercent="15"
          clasName="bg-purple-100"
          iconSrc="people"
        />
        <Card
          cardTitle="Active Tables"
          numbers="87"
          lastMonthPercent="-5.4"
          clasName="bg-red-100 text-red-500"
          lastMonthClassName="text-red-500"
          iconSrc="fork"
        />
      </div>

      {/* Chart */}
      <div className="flex gap-2 justify-between ">
        <Linebar />
        <TopDishesChart />
      </div>

      {/* Order Request */}
      <div className="w-full bg-white shadow rounded-md p-2">
        <p className="p-2 font-bold text-gray-800">Recent Orders</p>
        <OrderCardTitle />

        {/*maping the order  */}
        {orders.map((order) => (
          <OrderCard key={order.orderId} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Main;
