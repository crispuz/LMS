export default function Books() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Books</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Book
        </button>
      </div>

      <div className="bg-[#c7d2fe] rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#889ef7] border-b">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">ISBN</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Clean Code</td>
              <td className="p-4">Robert C. Martin</td>
              <td className="p-4">9780132350884</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Available
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