import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Book,
  Users,
  BarChart,
  Settings,
} from "lucide-react";

export default function Sidebar({ open, setOpen, collapsed }) {
  return (
    <aside
      className={`
        fixed md:static z-40 h-full
        bg-gray-900 text-gray-200
        transform transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        ${collapsed ? "md:w-20" : "md:w-64"}
        w-64
      `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-800 flex items-center justify-center">
        {collapsed ? (
          <span className="text-xl font-bold">L</span>
        ) : (
          <span className="text-xl font-bold">LibraryMS</span>
        )}
      </div>

      <nav className="p-4 space-y-2">
        <SidebarItem
          to="/"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          collapsed={collapsed}
          setOpen={setOpen}
        />
        <SidebarItem
          to="/books"
          icon={<Book size={20} />}
          label="Books"
          collapsed={collapsed}
          setOpen={setOpen}
        />
        <SidebarItem
          to="/members"
          icon={<Users size={20} />}
          label="Members"
          collapsed={collapsed}
          setOpen={setOpen}
        />
        <SidebarItem
          to="/circulation"
          icon={<Book size={20} />}
          label="Circulation"
          collapsed={collapsed}
          setOpen={setOpen}
        />
        <SidebarItem
          to="/reports"
          icon={<BarChart size={20} />}
          label="Reports"
          collapsed={collapsed}
          setOpen={setOpen}
        />
        <SidebarItem
          to="/settings"
          icon={<Settings size={20} />}
          label="Settings"
          collapsed={collapsed}
          setOpen={setOpen}
        />
      </nav>
    </aside>
  );
}

function SidebarItem({ to, icon, label, collapsed, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition
         ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-800"}
         ${collapsed ? "justify-center" : ""}`
      }
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}