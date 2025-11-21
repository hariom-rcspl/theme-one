import { Route, Routes, Navigate } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"
import AuthLayout from "../layout/AuthLayout"
import Dashboard from "../pages/Dashboard"
import Users from "../pages/Users"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import Login from "../pages/Login"

const Routing = () => {
    const maintenanceStatus = false
    const isLoggedIn = false 

    if (maintenanceStatus) {
        return <h2>Site is on maintenance mode!</h2>
    }

    return (
        <Routes>
            {!isLoggedIn && (
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Route>
            )}

            {isLoggedIn && (
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<Navigate to="/" />} />
                </Route>
            )}
        </Routes>
    )
}

export default Routing
