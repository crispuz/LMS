export default function Members() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Members</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Member ID</th>
              <th className="p-4">Books Borrowed</th>
              <th className="p-4">Fines</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Alice Johnson</td>
              <td className="p-4">M001</td>
              <td className="p-4">3</td>
              <td className="p-4">$5</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </td>
              <td className="p-4 text-blue-600 cursor-pointer">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}