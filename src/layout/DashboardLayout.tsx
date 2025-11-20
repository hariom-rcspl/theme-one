import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Users", icon: User, path: "/users" },
    { label: "Reports", icon: BarChart3, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-blue-500 text-white transition-all duration-300 flex flex-col",
          collapsed ? "w-20" : "w-60"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
          {!collapsed && <h1 className="text-lg font-bold">My Dashboard</h1>}

          <button
            className="text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            {/* {collapsed ? <Menu size={22} /> : <X size={22} />} */}
            <Menu size={22} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 hover:bg-white/20 transition-all",
                  isActive && "bg-white/30"
                )}
              >
                <Icon size={22} />

                {!collapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

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
