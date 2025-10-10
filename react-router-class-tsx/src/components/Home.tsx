import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl tracking-wider text-center py-4 px-2">
        Home Page
      </h1>

      <div className="w-full flex items-center justify-center">
        <Link
          to="/student"
          className="bg-gray-700 text-white rounded-sm tracking-wide p-2 text-medium "
        >
          Go to Student Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
