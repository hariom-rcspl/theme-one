import { Route, Routes, Navigate } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"
import AuthLayout from "../layout/AuthLayout"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/Users"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import Login from "../pages/Login"
import { useState } from "react"
import ProfileSetting from "../pages/ProfileSetting"
import ChangePassword from "../pages/ChangePassword"
import NotificationSetting from "../pages/NotificationSetting"

const Routing = () => {
    const maintenanceStatus = false
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    if (maintenanceStatus) {
        return <h2>Site is on maintenance mode!</h2>
    }

    return (
        <Routes>
            {!isLoggedIn && (
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Route>
            )}

            {isLoggedIn && (
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/profile" element={<ProfileSetting />} />
                    <Route path="/settings/change-password" element={<ChangePassword />} />
                    <Route path="/settings/notification" element={<NotificationSetting />} />
                    <Route path="/login" element={<Navigate to="/" />} />
                </Route>
            )}
        </Routes>
    )
}

export default Routing
