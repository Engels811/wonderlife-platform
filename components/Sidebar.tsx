'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Ticket, 
  Users, 
  Settings, 
  Shield,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: any;
  adminOnly?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Tickets', href: '/tickets', icon: Ticket },
  { name: 'Users', href: '/users', icon: Users, adminOnly: true },
  { name: 'Owner Panel', href: '/owner', icon: Shield, adminOnly: true },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Get user role from auth context
  const userRole = 'OWNER'; // Placeholder

  const filteredNavItems = navItems.filter(item => 
    !item.adminOnly || ['ADMIN', 'OWNER'].includes(userRole)
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 neon-shadow"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-black/40 backdrop-blur-xl
          border-r border-purple-500/30 p-6 flex flex-col
          transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold neon-text">WonderLife</h1>
          <p className="text-sm text-gray-400">Platform Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-purple-600/20 border border-purple-500/50 neon-shadow' 
                    : 'hover:bg-purple-600/10 border border-transparent'
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="pt-4 border-t border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
              <span className="text-sm font-bold">E</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Engels811</p>
              <p className="text-xs text-gray-400">{userRole}</p>
            </div>
          </div>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
              hover:bg-red-600/10 border border-transparent
              hover:border-red-500/50 transition-all duration-200"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
