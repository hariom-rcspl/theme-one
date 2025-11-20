import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
