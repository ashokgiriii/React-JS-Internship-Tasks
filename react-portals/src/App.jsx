import { useState } from "react";
import Model from "./components/Model";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[100vh] w-full flex justify-center items-center flex-col gap-2">
      <button
        onClick={() => setIsOpen(true)}
        className=" p-4 rounded-md bg-green-200 shadow cursor-pointer hover:bg-green-300 text-red-800"
      >
        Open Model
      </button>
      <Model open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default App;
