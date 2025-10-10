import { useState } from "react";
import Tab from "./components/Tab";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col gap-2 border-r px-2 fixed">
        <button
          onClick={() => setActiveTab(1)}
          className={`p-2 rounded-md cursor-pointer hover:bg-blue-600 w-[200px] ${
            activeTab === 1
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          Tab One
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`p-2 rounded-md cursor-pointer hover:bg-blue-600 w-[200px] ${
            activeTab === 2
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          Tab Two
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`p-2 rounded-md cursor-pointer hover:bg-blue-600 w-[200px] ${
            activeTab === 3
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          Tab Three
        </button>
      </div>

      {/* all the tab component  */}
      <div className="flex flex-col relative left-[20%] w-[70%] overflow-hidden h-[100vh]">
        {activeTab === 1 && <Tab title="Hi , I am Tab Component One" />}
        {activeTab === 2 && <Tab title="Hi , I am Tab Component Two" />}
        {activeTab === 3 && <Tab title="Hi , I am Tab Component Three" />}
      </div>
    </div>
  );
};

export default App;
