import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import AdminPanel from "./pages/AdminPanel";
import NotFoundPage from "./components/utils/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
