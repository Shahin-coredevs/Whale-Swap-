import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import Topbar from "../Pages/Dashboard/Topbar";

const DashboardLayout = () => {
  return (
    <div className="bg-BGColor w-screen h-screen">
      <div className="flex overflow-x-hidden overflow-y-hidden px-2">
        <Sidebar />
        <div className="w-full md:w-full h-full flex-1">
          <Topbar />
          <div className=" overflow-auto h-[calc(100vh-200px)] p-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
