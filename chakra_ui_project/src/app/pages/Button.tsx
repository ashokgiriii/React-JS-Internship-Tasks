import { useState } from "react";
import {
  DangerButton,
  SecondaryButton,
  WarningButton,
  NormalButton,
  SuccessButton,
} from "../components/buttons/Button";
import Heading from "../components/Heading";
import DangerButtonCode from "../components/buttons/DangerButtonCode";

const Button = () => {
  const [code, getCode] = useState(false);

  const goToNormalButton = () => {
    getCode(true);
  };
  const goToDangerButton = () => {
    getCode(true);
  };
  const goToWarningButton = () => {
    alert("Warning Button");
  };
  const goToSecondaryButton = () => {
    alert("Secondary Button");
  };
  return (
    <>
      <div className="w-[80%] absolute left-[20%] p-4 gap-4 flex flex-col">
        <Heading
          title="Button"
          description="Open-Source buttons made with CSS or Tailwind"
        />

        <div className="flex flex-wrap gap-4 w-full h-[400px]">
          {/* Danger Button */}
          <div className="flex group cursor-pointer items-center justify-center bg-gray-900 relative w-[calc(33.333%-1rem)] h-[15rem] p-2 rounded-2xl">
            <DangerButton />
            <button
              onClick={goToDangerButton}
              className="text-white opacity-0 group-hover:opacity-100 p-1 px-2 transition duration-75 absolute bottom-4 hover:bg-gray-700 rounded-md hover:text-white shadow right-4"
            >
              &lt;/&gt; Get code
            </button>

            {/* Code Div is here */}
            {code && <DangerButtonCode />}
          </div>

          {/* Warning Button */}
          <div className="flex items-center group cursor-pointer justify-center bg-gray-900 relative w-[calc(33.333%-1rem)] h-[15rem] p-2 rounded-2xl">
            <WarningButton />
            <button
              onClick={goToWarningButton}
              className="text-white p-1 px-2 transition opacity-0 group-hover:opacity-100 duration-75 absolute bottom-4 hover:bg-gray-700 rounded-md hover:text-white shadow right-4"
            >
              &lt;/&gt; Get code
            </button>
          </div>

          {/* Secondary Button */}
          <div className="flex items-center group cursor-pointer justify-center bg-gray-900 relative w-[calc(33.333%-1rem)] h-[15rem] p-2 rounded-2xl">
            <SecondaryButton />
            <button
              onClick={goToSecondaryButton}
              className="text-white p-1 px-2 transition opacity-0 group-hover:opacity-100 duration-75 absolute bottom-4 hover:bg-gray-700 rounded-md hover:text-white shadow right-4"
            >
              &lt;/&gt; Get code
            </button>
          </div>

          {/* Normal Button */}
          <div className="flex items-center group cursor-pointer justify-center bg-gray-900 relative w-[calc(33.333%-1rem)] h-[15rem] p-2 rounded-2xl">
            <NormalButton />
            <button
              onClick={goToNormalButton}
              className="text-white p-1 px-2 transition opacity-0 group-hover:opacity-100 duration-75 absolute bottom-4 hover:bg-gray-700 rounded-md hover:text-white shadow right-4"
            >
              &lt;/&gt; Get code
            </button>
          </div>

          {/* Success Button  */}
          <div className="flex items-center group cursor-pointer justify-center bg-gray-900 relative w-[calc(33.333%-1rem)] h-[15rem] p-2 rounded-2xl">
            <SuccessButton />
            <button
              onClick={goToNormalButton}
              className="text-white p-1 px-2 transition opacity-0 group-hover:opacity-100 duration-75 absolute bottom-4 hover:bg-gray-700 rounded-md hover:text-white shadow right-4"
            >
              &lt;/&gt; Get code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
