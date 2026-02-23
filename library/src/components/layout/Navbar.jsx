import { Menu, PanelLeft, Bell, User } from "lucide-react";

export default function Navbar({
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:block"
        >
          <PanelLeft size={22} />
        </button>

        <h1 className="text-lg font-semibold">
          Library Management
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Bell size={20} className="text-gray-600" />
        <User size={20} className="text-gray-600" />
      </div>
    </header>
  );
}