import { useState } from "react";
import {
    Menu,
    X,
    LayoutDashboard,
    User,
    BarChart3,
    Settings,
    ChevronDown,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard, path: "/" },
        { label: "Users", icon: User, path: "/users" },
        { label: "Reports", icon: BarChart3, path: "/reports" },
        {
            label: "Settings",
            icon: Settings,
            path: "/settings",
            subMenu: [
                { label: "Profile Setting", path: "/settings/profile" },
                { label: "Notification Setting", path: "/settings/notification" },
                { label: "Change Password", path: "/settings/change-password" },
            ]
        },
    ];
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div
            className={cn(
                "bg-[#1c9d96] text-white h-screen transition-all duration-300 flex flex-col py-4 overflow-y-auto",
                collapsed ? "w-24" : "w-72"
            )}
        >
            {/* Logo + Toggle */}
            <div className="flex items-center justify-between px-5 mb-1">
                {!collapsed && (
                    <img src="/logo.png" alt="logo" className="w-auto h-14 object-contain" />
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`bg-white/20 p-2 rounded-full hover:bg-white/30 transition cursor-pointer ${collapsed && "mx-auto"}`}
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
                            subMenu={ele.subMenu}
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
    href,
    subMenu
}: any) {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation()
    console.log('pathname', pathname)
    const toggleSubmenu = (e: any) => {
        e.stopPropagation(); // prevent navigating to parent link
        setOpen(!open);
    };

    return (
        <div>
            <div
                className={cn(
                    "flex items-center cursor-pointer transition-all px-5 py-3 rounded-full mx-3 group",
                    (pathname === href) ? "bg-white/30" : "hover:bg-white/20",
                    collapsed ? "justify-center" : ""
                )}
            >
                <Link to={href} className="flex w-full">
                    <Icon size={22} />
                    {!collapsed && (
                        <span className="ml-4 text-sm font-medium">
                            {label}
                        </span>
                    )}
                </Link>

                {subMenu && !collapsed && (
                    <button
                        onClick={toggleSubmenu}
                        className="ml-auto"
                    >
                        <ChevronDown
                            className={`transition-transform duration-300 ${open && "rotate-180"}`}
                        />
                    </button>
                )}
            </div>

            {subMenu && open && !collapsed && (
                <div className="ml-12 flex flex-col gap-1 mb-1">
                    {subMenu.map((item: any, index: number) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={cn(
                                "py-2 px-3 rounded-md text-sm transition",
                                (pathname === item.path)
                                    ? "bg-white/30"
                                    : "hover:bg-white/20"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

