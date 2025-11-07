import { Route, Routes } from "react-router-dom";
import Sidebar from "./app/components/sidebar/Sidebar";
import Topbar from "./app/components/topbar/Topbar";
import Dashboard from "./app/pages/Dashboard";
import Settings from "./app/pages/Settings";
import Radio from "./app/pages/Radio";
import Button from "./app/pages/Button";
import {
  DangerButton,
  NormalButton,
  SecondaryButton,
  WarningButton,
} from "./app/components/buttons/Button";

const App = () => {
  return (
    <>

      <Topbar />

      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/buttons" element={<Button />}>
            <Route path="normal-button" element={<NormalButton />} />
            <Route path="danger-button" element={<DangerButton />} />
            <Route path="warning" element={<WarningButton />} />
            <Route path="secondary-button" element={<SecondaryButton />} />
          </Route>
        </Routes>
      </div>
      <Sidebar />
    </>
  );
};

export default App;
