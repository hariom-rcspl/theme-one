import { Charts } from "../components/Charts";
import { ProductsTable } from "../components/ProductsTable";
import TopGraph from "../components/TopGraph";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <TopGraph />
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
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

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-600">Active Sessions</h3>
          <p className="text-3xl font-bold mt-2">312</p>
        </div>
      </div>

      <Charts />

      <ProductsTable />

    </div>
  );
}
