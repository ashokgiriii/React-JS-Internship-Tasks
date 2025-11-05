const page = () => {
  return (
    <>
      <h1 className="text-center tracking-wider text-2xl p-4">
        List of Students.
      </h1>
      <ul className="flex flex-col gap-2 text-lg ml-2  items-start  w-[500px]">
        <li className="p-2 px-4 hover:bg-gray-900 cursor-pointer rounded-2xl bg-gray-800">
          Grishma Bartaula
        </li>
        <li className="p-2 px-4 hover:bg-gray-900 cursor-pointer rounded-2xl bg-gray-800">
          Sam Neupane
        </li>
        <li className="p-2 px-4 hover:bg-gray-900 cursor-pointer rounded-2xl bg-gray-800">
          Aayush Rawol
        </li>
        <li className="p-2 px-4 hover:bg-gray-900 cursor-pointer rounded-2xl bg-gray-800">
          Hari Rai
        </li>
      </ul>
    </>
  );
};

export default page;
