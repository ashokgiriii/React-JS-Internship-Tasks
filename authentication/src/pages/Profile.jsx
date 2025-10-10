import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">Hi,</h1>
      <p className="text-lg text-gray-700 mb-4">{user?.email}</p>

      <button
        onClick={handleLogout}
        className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
