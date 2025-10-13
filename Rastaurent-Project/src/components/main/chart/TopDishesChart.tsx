import { useState } from "react";
import Chart from "react-apexcharts";

const TopDishesChart = () => {
  const [dateRangeOpen, setDateRangeOpen] = useState(false);

  const getChartOptions = () => ({
    series: [52.8, 26.8, 20.4, 30],
    labels: [
      "Marghorita Pizza",
      "Boof Burger",
      "Grilled Salmon",
      "Caesar Salad",
      "Pasta Carbonara",
    ],
    colors: ["#1C64F2", "#16BDCA", "#9061F9", "#00ba7c", "#00ba"],
    chart: {
      type: "pie",
      height: 320,
      fontFamily: "Inter, sans-serif",
    },
    stroke: {
      colors: ["#fff"],
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
    },
  });

  const daysOptions = [
    "Yesterday",
    "Today",
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
  ];

  return (
    <div className=" w-[50%] h-[50vh] bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      {/* Header */}
      <div className="flex  justify-between items-start w-full">
        <div>
          <div className="flex items-center mb-1">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1">
              Top Dishes
            </h5>
            {/* Tooltip Icon */}
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="relative">
          <button
            onClick={() => setDateRangeOpen(!dateRangeOpen)}
            className="inline-flex items-center text-blue-700 dark:text-blue-600 font-medium hover:underline"
          >
            31 Aug - 31 Sep
            <svg className="w-3 h-3 ms-2" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {dateRangeOpen && (
            <div className="absolute right-0 mt-2 z-20 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-80">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Date picker UI here
              </p>
              {/* Replace this with a real date picker later */}
            </div>
          )}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="py-2 ">
        <Chart
          options={getChartOptions()}
          series={getChartOptions().series}
          type="pie"
          height={320}
        />
      </div>

  
    </div>
  );
};

export default TopDishesChart;
