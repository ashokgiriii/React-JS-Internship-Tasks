import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
