import "./globals.css";
import "./glow.css"; // <- Neon Glow Effekte aktivieren
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";

export const metadata = {
  title: "WonderLife Platform",
  description: "WonderLife Network – Creator Studio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#06060a] text-white flex items-center justify-center min-h-screen p-6">
        <div className="flex bg-[#08020f] border border-purple-900/40 rounded-2xl shadow-2xl shadow-purple-900/40 overflow-hidden w-[90%] max-w-[1600px] min-h-[800px]">
          <Sidebar />

          {/* main content area */}
          <main className="flex-1 p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
