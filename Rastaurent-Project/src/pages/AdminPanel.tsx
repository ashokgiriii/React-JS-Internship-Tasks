import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";


const AdminPanel = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Main />
    </div>
  );
};

export default AdminPanel;
