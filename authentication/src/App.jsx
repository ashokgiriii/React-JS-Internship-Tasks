import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
