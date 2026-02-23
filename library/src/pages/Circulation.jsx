export default function Circulation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Circulation</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Issue Book */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold">Issue Book</h2>

          <input
            type="text"
            placeholder="Search Member ID"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Search Book ISBN"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-4">
            <input
              type="date"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="date"
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full">
            Confirm Issue
          </button>
        </div>

        {/* Return Book */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold">Return Book</h2>

          <input
            type="text"
            placeholder="Enter Book ISBN"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            Fine Calculation Preview:
            <br />
            Days Overdue: 3
            <br />
            Fine: $3
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full">
            Confirm Return
          </button>
        </div>

      </div>
    </div>
  );
}