import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function DashboardLayout() {

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100 overflow-y-auto">
        {/* Top Navbar */}
        <TopBar />

        {/* Page Content */}
        <div className="p-5 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
