import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Page",
  description: "This is Staic Page, which will be same at every time",
};

const page = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen w-full ">
      <h1 className="text-2xl">This is Staic Page</h1>
      <h2 className="text-2xl">
        Current Time is : <span className="text-orange-400">{Date.now()}</span>
      </h2>
    </div>
  );
};

export default page;
