import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Top Navbar */}
        <header className="h-14 bg-white shadow-sm sticky top-0 flex items-center px-5">
          <h2 className="font-semibold text-lg">Welcome</h2>
        </header>

        {/* Page Content */}
        <div className="p-5 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
