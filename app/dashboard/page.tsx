// @ts-nocheck

export default function DashboardPage() {
  return (
    <div className="p-8">

      {/* Titel */}
      <h1 className="text-3xl font-bold text-purple-400">WonderLife Platform</h1>
      <p className="opacity-70 mt-2 mb-10">Dashboard Overview</p>

      {/* GRID – STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Discord Server */}
        <StatCard
          title="Discord Server"
          value="8"
        />

        {/* FiveM Server */}
        <StatCard
          title="FiveM Server"
          value="1 (City)"
        />

        {/* Team Mitglieder */}
        <StatCard
          title="Team-Mitglieder"
          value="42"
        />

        {/* Offene Tickets */}
        <StatCard
          title="Offene Tickets"
          value="3"
        />

      </div>

      {/* FiveM Status + Discord Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        {/* FiveM Server Status */}
        <FiveMStatus />

        {/* Discord Panel */}
        <DiscordPanel />

      </div>

      {/* Rollen + Logs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <RolePanel />
        <LogsPanel />

      </div>

    </div>
  );
}

/* COMPONENTS ----------------------------------------------------------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-purple-900/20 shadow-lg hover:scale-[1.02] transition">
      <p className="text-sm opacity-60">{title}</p>
      <h2 className="text-3xl font-bold text-purple-300 mt-1">{value}</h2>
    </div>
  );
}

function FiveMStatus() {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        FiveM Server Status
      </h2>

      <p className="opacity-70">WonderLife City RP — LIVE</p>

      <div className="w-full bg-purple-900/30 h-3 rounded-full mt-4">
        <div className="bg-purple-500 h-3 rounded-full w-[42%]" />
      </div>

      <p className="text-sm opacity-70 mt-1">54 / 128 Online Spieler</p>
      <p className="text-sm opacity-50">CPU: 32% — RAM: 80% — Ressourcen: 185 geladen</p>

    </div>
  );
}

function DiscordPanel() {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        Discord Panel
      </h2>

      <ul className="space-y-2 opacity-80">
        <li>WonderLife Network</li>
        <li>WonderLife City</li>
        <li>WonderLife Studios</li>
        <li>WonderLife FM</li>
        <li>WonderLife Logs</li>
        <li>Development</li>
        <li>Entbannung</li>
      </ul>

    </div>
  );
}

function RolePanel() {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        Rollen verwalten
      </h2>

      <p className="opacity-70">Manage your server roles and permissions.</p>

    </div>
  );
}

function LogsPanel() {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">Logs</h2>

      <ul className="space-y-2 text-sm opacity-80">
        <li>Engels811 banned Spieler123 — 2h ago</li>
        <li>Wise removed Support role von Spieler456</li>
        <li>Mine kicked Raptor — 1d ago</li>
        <li>Kevin timeout Spieler789 — 2d ago</li>
        <li>Rebecca added 'Admin' role to Tech — 2d ago</li>
      </ul>

    </div>
  );
}
