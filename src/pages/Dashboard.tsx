import { Calendar1, MessageCircleMore, Phone, User } from "lucide-react";
import { Charts } from "../components/Charts";
import { ProductsTable } from "../components/ProductsTable";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-2">
            <User />
            <h3 className="font-semibold text-gray-600"> Total Users</h3>
          </div>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex item-center gap-2">
            <Calendar1 />
            <h3 className="font-semibold text-gray-600">Monthly Sales</h3>
          </div>
          <p className="text-3xl font-bold mt-2">$8,450</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-2">
            <Phone />
            <h3 className="font-semibold text-gray-600">Support Requests</h3>
          </div>
          <p className="text-3xl font-bold mt-2">312</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-2">
            <MessageCircleMore/>
            <h3 className="font-semibold text-gray-600">Messages</h3>
          </div>
          <p className="text-3xl font-bold mt-2">312</p>
        </div>
      </div>

      <Charts />

      <ProductsTable />

    </div>
  );
}
