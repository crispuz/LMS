import { useState, useEffect } from "react";

export default function ReturnBook() {
  const [formData, setFormData] = useState({
    member: "",
    book: "",
    returnDate: new Date().toISOString().split("T")[0],
    notes: "",
  });

  // Dummy data (replace with API)
  const members = [
    { id: 1, name: "ck big", borrowedBooks: [1] },
    { id: 2, name: "Sarah James", borrowedBooks: [2] },
  ];

  const books = [
    { id: 1, title: "Introduction to Algorithms" },
    { id: 2, title: "Database Systems" },
  ];

  const [availableBooks, setAvailableBooks] = useState([]);

  useEffect(() => {
    // Filter books based on selected member
    const member = members.find(
      (m) => m.id === parseInt(formData.member)
    );
    if (member) {
      setAvailableBooks(
        books.filter((b) => member.borrowedBooks.includes(b.id))
      );
    } else {
      setAvailableBooks([]);
    }
  }, [formData.member]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // connect to backend later
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Return Book
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

        {/* Select Borrowed Book */}
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
            disabled={!availableBooks.length}
          >
            <option value="">
              {availableBooks.length
                ? "-- Choose Book --"
                : "No borrowed books"}
            </option>
            {availableBooks.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Return Date
          </label>
          <input
            type="date"
            name="returnDate"
            required
            value={formData.returnDate}
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
          className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Return Book
        </button>
      </form>
    </div>
  );
}