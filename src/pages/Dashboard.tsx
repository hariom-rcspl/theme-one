import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

// Chart Data
const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 75 },
  { name: "May", value: 60 },
  { name: "Jun", value: 80 },
];

const barData = [
  { name: "Monday", users: 120 },
  { name: "Tuesday", users: 98 },
  { name: "Wednesday", users: 140 },
  { name: "Thursday", users: 110 },
  { name: "Friday", users: 160 },
];

// Table data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Editor" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Viewer" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "Viewer" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-600">Monthly Sales</h3>
          <p className="text-3xl font-bold mt-2">$8,450</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-600">Active Sessions</h3>
          <p className="text-3xl font-bold mt-2">312</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Activity</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Users per Day</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Users</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}
