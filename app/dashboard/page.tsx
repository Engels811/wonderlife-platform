// @ts-nocheck

export default function DashboardPage() {
  return (
    <div className="p-8">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-purple-400">WonderLife Platform</h1>
      <p className="opacity-70 mt-2 mb-10">
        Übersicht deiner System-, Discord- und Serverstatistiken
      </p>

      {/* TOP GRID – STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatCard title="Discord Server" value="8" />
        <StatCard title="FiveM Server" value="City RP (LIVE)" />
        <StatCard title="Team-Mitglieder" value="42" />
        <StatCard title="Offene Tickets" value="3" />

      </div>

      {/* MID GRID – SERVER + DISCORD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <FiveMStatus />
        <DiscordPanel />

      </div>

      {/* BOTTOM GRID – ROLES + LOGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <RolePanel />
        <LogsPanel />

      </div>

    </div>
  );
}

/* =======================================================================
   COMPONENTS
======================================================================= */

function StatCard({ title, value }) {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 
                    shadow-purple-900/20 shadow-lg 
                    hover:shadow-purple-500/30 hover:scale-[1.03] 
                    transition transform duration-200">
      <p className="text-sm opacity-60">{title}</p>
      <h2 className="text-3xl font-bold text-purple-300 mt-1">{value}</h2>
    </div>
  );
}

function FiveMStatus({ online = 0, max = 260, cpu = 0, ram = 0, resources = 0 }) {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 
                    shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        FiveM Server Status
      </h2>

      <p className="opacity-70">
        WonderLife City RP —{" "}
        <span className={online > 0 ? "text-green-400" : "text-red-400"}>
          {online > 0 ? "ONLINE" : "OFFLINE"}
        </span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-purple-900/30 h-3 rounded-full mt-4 overflow-hidden">
        <div
          className="bg-purple-500 h-3 rounded-full"
          style={{ width: `${(online / max) * 100}%` }}
        />
      </div>

      {/* DYNAMISCH */}
      <p className="text-sm opacity-70 mt-2">
        🔹 {online} / {max} Spieler online
      </p>

      <p className="text-sm opacity-50">
        🔸 CPU: {cpu}% — RAM: {ram}% — Ressourcen: {resources}
      </p>

    </div>
  );
}

function DiscordPanel() {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 
                    shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        Discord Netzwerk
      </h2>

      <ul className="space-y-2 opacity-80">
        <li>• WonderLife Network</li>
        <li>• WonderLife City</li>
        <li>• WonderLife Studios</li>
        <li>• WonderLife FM</li>
        <li>• WonderLife Logs</li>
        <li>• Development</li>
        <li>• Entbannung</li>
      </ul>

    </div>
  );
}

function RolePanel() {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 
                    shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        Rollenverwaltung
      </h2>

      <p className="opacity-70">
        Hier kannst du Rollen, Berechtigungen und Teamfunktionen verwalten.
      </p>

    </div>
  );
}

function LogsPanel() {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 
                    shadow-lg shadow-purple-900/20">

      <h2 className="text-xl font-semibold text-purple-300 mb-3">
        System Logs
      </h2>

      <ul className="space-y-2 text-sm opacity-80">
        <li>+ Engels811 banned Spieler123 (vor 2h)</li>
        <li>+ Wise entfernt „Support“ Rolle von Spieler456</li>
        <li>+ Mine kickt Raptor (vor 1 Tag)</li>
        <li>+ Kevin Timeout Spieler789 (vor 2 Tagen)</li>
        <li>+ Rebecca verteilte ’Admin‘ Rolle an Tech</li>
      </ul>

    </div>
  );
}
