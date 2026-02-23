export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label className="block text-gray-500 mb-1">Loan Duration (days)</label>
          <input
            type="number"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="14"
          />
        </div>

        <div>
          <label className="block text-gray-500 mb-1">Fine per Day ($)</label>
          <input
            type="number"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="1"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Save Settings
        </button>
      </div>
    </div>
  );
}