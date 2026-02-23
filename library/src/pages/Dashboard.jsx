import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-6 bg-blend-darken bg-gray-100 p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 ">
        <StatCard title="Total Books" value="2,340" />
        <StatCard title="Members" value="1,204" />
        <StatCard title="Issued Today" value="54" />
        <StatCard title="Overdue Books" value="12" />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="text-gray-500">No recent activity yet.</div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Upcoming Due Dates</h2>
        <div className="text-gray-500">No upcoming due dates.</div>
      </div>

    </div>
    
  );
}