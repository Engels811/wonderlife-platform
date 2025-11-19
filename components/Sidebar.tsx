"use client";

import {
  Home,
  Ticket,
  Users,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0d031a] border-r border-purple-900/40 text-white flex flex-col justify-between p-6">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-purple-400">WonderLife</h1>
        <p className="text-xs opacity-60">Platform Dashboard</p>

        {/* Navigation */}
        <nav className="mt-10 space-y-3">

          <NavItem icon={<Home size={18} />} text="Dashboard" href="/" />
          <NavItem icon={<Ticket size={18} />} text="Tickets" href="/tickets" />
          <NavItem icon={<Users size={18} />} text="Users" href="/users" />
          <NavItem icon={<Shield size={18} />} text="Owner Panel" href="/owner" />
          <NavItem icon={<Settings size={18} />} text="Settings" href="/settings" />

        </nav>
      </div>

      {/* Profil/Logout */}
      <div className="space-y-4">
        {/* User badge */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-800/10 border border-purple-800/20">
          <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
            E
          </div>
          <div>
            <p className="text-sm font-semibold">Engels811</p>
            <p className="text-xs opacity-60">OWNER</p>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transition border border-purple-900/30">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}

function NavItem({ icon, text, href }: any) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-lg hover:bg-purple-900/20 transition"
    >
      {icon}
      {text}
    </a>
  );
}
