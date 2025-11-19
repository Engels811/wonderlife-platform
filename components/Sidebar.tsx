"use client";

import {
  Home,
  MessageSquare,
  Users,
  Shield,
  Settings,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0a0412] neon-border p-6 flex flex-col justify-between">
      
      {/* Logo */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold neon-text">WonderLife</h1>
        <p className="text-[11px] opacity-70">Creator Platform</p>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-4 text-sm">

        <NavItem icon={<Home size={18} />} text="Dashboard" href="/" />
        <NavItem icon={<MessageSquare size={18} />} text="Tickets" href="/tickets" />
        <NavItem icon={<Users size={18} />} text="Users" href="/users" />
        <NavItem icon={<Shield size={18} />} text="Owner Panel" href="/owner" />
        <NavItem icon={<Settings size={18} />} text="Settings" href="/settings" />

      </nav>

      {/* User bottom */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 glow-box p-3">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=Engels811"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Engels811</p>
            <p className="text-[11px] opacity-60">OWNER</p>
          </div>
        </div>

        <button className="glow-box px-4 py-2 w-full text-sm flex items-center justify-center gap-2">
          Logout
        </button>
      </div>

    </aside>
  );
}

function NavItem({ icon, text, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-purple-900/20 transition"
    >
      {icon}
      {text}
    </a>
  );
}
