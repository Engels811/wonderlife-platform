"use client";

export default function TicketsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-400">Tickets</h1>
      <p className="opacity-70 mt-2 mb-10">Manage support requests</p>

      {/* TABLE */}
      <div className="bg-[#13081f] border border-purple-900/40 rounded-xl shadow-lg shadow-purple-900/20 p-6">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-purple-300 border-b border-purple-900/30">
              <th className="py-3">ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>User</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-purple-900/20">
            <TicketRow id="TK-001" title="Game Crash" status="Open" user="Engels811" date="Today" />
            <TicketRow id="TK-002" title="Donator Missing" status="Pending" user="Celine" date="1h ago" />
            <TicketRow id="TK-003" title="Whitelist Fehler" status="Closed" user="Jaden" date="Yesterday" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TicketRow({ id, title, status, user, date }) {
  return (
    <tr className="hover:bg-purple-900/10 transition">
      <td className="py-3">{id}</td>
      <td>{title}</td>
      <td className="text-purple-300">{status}</td>
      <td>{user}</td>
      <td>{date}</td>
    </tr>
  );
}
