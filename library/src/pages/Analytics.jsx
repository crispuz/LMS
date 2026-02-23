import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  // Dummy data (replace with backend)
  const [stats, setStats] = useState({
    totalBooks: 120,
    totalMembers: 35,
    issuedToday: 8,
    overdueBooks: 4,
  });

  const borrowTrend = [
    { date: "Mon", issued: 5 },
    { date: "Tue", issued: 8 },
    { date: "Wed", issued: 6 },
    { date: "Thu", issued: 10 },
    { date: "Fri", issued: 4 },
    { date: "Sat", issued: 7 },
    { date: "Sun", issued: 3 },
  ];

  const topBooks = [
    { title: "Introduction to Algorithms", count: 12 },
    { title: "Database Systems", count: 9 },
    { title: "React Guide", count: 7 },
    { title: "Python Programming", count: 5 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Books" value={stats.totalBooks} />
        <StatCard title="Total Members" value={stats.totalMembers} />
        <StatCard title="Issued Today" value={stats.issuedToday} />
        <StatCard title="Overdue Books" value={stats.overdueBooks} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Borrow Trend Line Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Borrow Trend (This Week)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={borrowTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="issued"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Books Bar Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h3 className="font-semibold mb-4">Top Borrowed Books</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topBooks}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Stats Card Component
function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <h4 className="text-gray-500 mb-2">{title}</h4>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}