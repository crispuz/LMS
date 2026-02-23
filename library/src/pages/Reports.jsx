export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reports</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Monthly Borrow Trend</h2>
          <div className="text-gray-400">Chart placeholder</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Most Borrowed Books</h2>
          <div className="text-gray-400">Chart placeholder</div>
        </div>
      </div>
    </div>
  );
}