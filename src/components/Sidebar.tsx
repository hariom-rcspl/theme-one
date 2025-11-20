import { useState } from "react";
import {
    Menu,
    X,
    LayoutDashboard,
    User,
    BarChart3,
    Settings,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard, path: "/" },
        { label: "Users", icon: User, path: "/users" },
        { label: "Reports", icon: BarChart3, path: "/reports" },
        { label: "Settings", icon: Settings, path: "/settings" },
    ];
    const [collapsed, setCollapsed] = useState(false);
    const {pathname} = useLocation()
    console.log('path', pathname)
    return (
        <div
            className={cn(
                "bg-blue-500 text-white h-screen transition-all duration-300 flex flex-col py-4",
                collapsed ? "w-24" : "w-72"
            )}
        >
            {/* Logo + Toggle */}
            <div className="flex items-center justify-between px-5 mb-5">
                {!collapsed && (
                    <h1 className="text-xl font-bold tracking-wide uppercase">
                        Creative Tim
                    </h1>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
                >
                    {collapsed ? <Menu /> : <X />}
                </button>
            </div>

            <div className="border-t border-white/30 mb-4"></div>

            {/* MENU ITEMS */}
            <nav className="flex flex-col gap-1">
                {
                    menuItems.map((ele, i) =>
                        <SidebarItem
                            label={ele.label}
                            icon={ele.icon}
                            collapsed={collapsed}
                            key={i}
                            href={ele.path}
                            active={pathname === ele.path}
                        />
                    )
                }
            </nav>
        </div>
    );
}

/* SIMPLE ITEM (no dropdown) */
function SidebarItem({
    label,
    icon: Icon,
    collapsed,
    active = false,
    href
}: any) {
    return (
        <Link
            to={href}
            className={cn(
                "flex items-center cursor-pointer transition-all px-5 py-3 rounded-full mx-3 group",
                active
                    ? "bg-white/30"
                    : "hover:bg-white/20"
            )}
        >
            <Icon size={22} />

            {!collapsed && (
                <span className="ml-4 text-sm font-medium transition-colors">
                    {label}
                </span>
            )}
        </Link>
    );
}
