export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96 space-y-6">
        <h1 className="text-2xl font-semibold text-center">LibraryMS Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-sm text-gray-500 text-center">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}