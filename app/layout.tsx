import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "WonderLife Platform",
  description: "WonderLife Network – Neon Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#0b0313] text-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 neon-scrollbar">{children}</main>
        </div>
      </body>
    </html>
  );
}
