import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Student from "./components/Student";
import StudentDetail from "./components/StudentDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<StudentDetail />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
