import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Books from "../pages/Books.jsx";
import Members from "../pages/Members.jsx";
import Reports from "../pages/Reports.jsx";
import Settings from "../pages/Settings.jsx";
import Login from "../pages/Login.jsx";
import Circulation from "../pages/Circulation.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="members" element={<Members />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="circulation" element={<Circulation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}