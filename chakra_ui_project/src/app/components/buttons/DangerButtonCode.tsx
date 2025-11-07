import { useState } from "react";
import CodeTitle from "../../Elements/CodeTitle";
import CopyCode from "../../Elements/CopyCode";
import TextArea from "../../Elements/TextArea";
import { DangerButton } from "./Button";
import ComponenetTitle from "../../Elements/ComponenetTitle";

const DangerButtonCode = () => {
  const [className, setClassName] = useState(
    `    bg-red-900
    text-white
    h-fit
    w-1/2 
    hover:shadow
    cursor-pointer
    hover:scale-105
    py-4 
    px-8 
    rounded-full
    hover:bg-red-700
    transition`
  );
  return (
    <div className="fixed top-[10vh] left-[20%] w-[80%] h-[90vh] bg-gray-950 z-10 flex gap-4 shadow-lg rounded-md overflow-hidden">
      {/* Left: Component Preview */}
      <div className="flex w-[40%] justify-center items-center ">
        <ComponenetTitle componenTitle="Danger Button" />
        <DangerButton className={className} />
      </div>

      {/* Right: Code Display */}
      <div className="w-[60%] bg-gray-900 relative flex flex-col">
        <div className="flex items-center px-4 justify-between h-[8vh]">
          <CodeTitle />
          <CopyCode />
        </div>

        <div className="relative h-[82vh]">
          <TextArea codeText={className} setCodeText={setClassName} />
        </div>
      </div>
    </div>
  );
};

export default DangerButtonCode;
