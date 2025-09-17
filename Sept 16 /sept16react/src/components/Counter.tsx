import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function increase() {
    setErrorMessage("");
    setCount(count + 1);
  }
  function decrease() {
    if (count <= 0) {
      setCount(0);
      setErrorMessage("Negative number is not Allowed");
      return;
    }
    setCount(count - 1);
  }

  return (
    <div>
      <h1 className="absolute top-2 left-8 text-[4rem] text-white tracking-[3px]">
        Functional Component
      </h1>
      <div className="flex items-center justify-center flex-col gap-[3rem] h-screen bg-gray-800">
        <h1 className="text-green-400 text-center text-8xl">
          {count}
          <br />
          <span className="text-2xl text-red-600">{errorMessage}</span>
        </h1>

        <div className="flex gap-4 ">
          <button
            onClick={increase}
            className="increase py-4 px-8 border rounded-md bg-gray-600 text-white tracking-[1px] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out"
          >
            Increase
          </button>
          <button
            onClick={decrease}
            className="decrease py-4 px-8 border rounded-md bg-gray-600 text-white tracking-[1px] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
