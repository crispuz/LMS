import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Landing from "../pages/Landing.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

// Protected Pages
import Dashboard from "../pages/Dashboard.jsx";
import Books from "../pages/Books.jsx";
import Members from "../pages/Members.jsx";
import IssueBook from "../pages/IssueBook.jsx";
import ReturnBook from "../pages/ReturnBook.jsx";
import Analytics from "../pages/Analytics.jsx";
import Settings from "../pages/Settings.jsx";

// Layout
import Layout from "../components/layout/Layout.jsx";

// Optional: Protected Route Wrapper
import ProtectedRoutes from "./ProtectedRoutes.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* ========== Public Routes ========== */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ========== Protected Routes ========== */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/members" element={<Members />} />
            <Route path="/issue" element={<IssueBook />} />
            <Route path="/return" element={<ReturnBook />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}