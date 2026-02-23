import { useState } from "react";

export default function IssueBook() {
  const [formData, setFormData] = useState({
    member: "",
    book: "",
    issueDate: "",
    dueDate: "",
    notes: "",
  });

  // Dummy data (replace later with API)
  const members = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Sarah James" },
  ];

  const books = [
    { id: 1, title: "Introduction to Algorithms", available: true },
    { id: 2, title: "Database Systems", available: false },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Connect to backend later
  };

  const selectedBook = books.find(
    (book) => book.id === parseInt(formData.book)
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Issue Book
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Select Member */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Member
          </label>
          <select
            name="member"
            required
            value={formData.member}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose Member --</option>
            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Book */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Book
          </label>
          <select
            name="book"
            required
            value={formData.book}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose Book --</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        {/* Book Availability Indicator */}
        {selectedBook && (
          <div
            className={`text-sm font-medium ${
              selectedBook.available
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {selectedBook.available
              ? "Book is Available"
              : "Book is Currently Issued"}
          </div>
        )}

        {/* Issue Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Issue Date
          </label>
          <input
            type="date"
            name="issueDate"
            required
            value={formData.issueDate}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            required
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Notes (Optional)
          </label>
          <textarea
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={selectedBook && !selectedBook.available}
          className={`w-full py-2 rounded-lg text-white transition ${
            selectedBook && !selectedBook.available
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Issue Book
        </button>
      </form>
    </div>
  );
}