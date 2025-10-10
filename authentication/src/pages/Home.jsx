import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 w-full mx-auto flex justify-center h-[100vh] flex-col items-center gap-4">
      <h1 className="w-full text-center text-3xl">Welcome Home</h1>
      <button
        className=" hover:bg-gray-600 cursor-pointer bg-gray-700 rounded-md p-2 text-white w-[200px]"
        onClick={() => navigate("/profile")}
      >
        Profile
      </button>
    </div>
  );
};

export default Home;
