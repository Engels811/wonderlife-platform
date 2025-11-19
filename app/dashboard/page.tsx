// @ts-nocheck

export default function DashboardPage() {
  return (
    <div className="space-y-12">

      {/* TITLE */}
      <h1 className="text-4xl neon-blue font-bold tracking-wide">
        DASHBOARD – WONDERLIFE NETWORK
      </h1>

      {/* HELLO USER */}
      <div className="text-xl">
        👋 <span className="text-purple-400 font-bold">Hallo, Engels811</span>
      </div>

      {/* TOP 4 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <GlowCard title="Discord Server" value="8" color="cyan" />
        <GlowCard title="FiveM Server" value="1 (City)" color="magenta" />
        <GlowCard title="Team-Mitglieder" value="42" color="cyan" />
        <GlowCard title="Offene Tickets" value="3" color="magenta" />

      </div>

      {/* SERVER + DISCORD PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* FIVEM SERVER STATUS PANEL */}
        <div className="neon-panel p-6">
          <h2 className="text-xl neon-blue font-bold mb-4">FiveM Server Status</h2>

          <p className="text-lg opacity-90">WonderLife City RP – LIVE</p>
          <p className="text-sm opacity-70 mt-1">CPU: 32% • RAM: 82%</p>

          <div className="mt-4 w-full bg-purple-900/30 rounded-full h-3">
            <div className="h-3 rounded-full bg-cyan-400 w-[45%] shadow-[0_0_10px_#00eaff]"></div>
          </div>

          <p className="text-sm mt-3 opacity-70">54/128 Online Spieler</p>
          <p className="text-sm opacity-70">Ressourcen: 185 geladen</p>
        </div>

        {/* DISCORD PANEL */}
        <div className="neon-panel p-6">
          <h2 className="text-xl neon-blue font-bold mb-4">Discord Panel</h2>

          <ul className="space-y-2">
            <PanelItem name="WonderLife Network" />
            <PanelItem name="WonderLife City" />
            <PanelItem name="WonderLife Studios" />
            <PanelItem name="WonderLife FM" />
            <PanelItem name="WonderLife Logs" />
            <PanelItem name="Development" />
            <PanelItem name="Entbannung" />
          </ul>
        </div>

      </div>

      {/* ROLLEN VERWALTEN */}
      <div className="neon-panel p-6">
        <h2 className="text-xl neon-blue font-bold mb-4">Rollen verwalten</h2>

        <div className="flex gap-4">
          <button className="glow-button px-4 py-2">Rollen verwalten</button>
          <button className="glow-button magenta px-4 py-2">Logs ansehen</button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ */
/* COMPONENTS */
/* ------------------------------------------------------ */

function GlowCard({ title, value, color }) {
  return (
    <div className="neon-card p-6 text-center">
      <h3 className="text-lg opacity-85">{title}</h3>
      <p
        className={`text-4xl font-bold mt-2 neon-${color}`}
      >
        {value}
      </p>
    </div>
  );
}

function PanelItem({ name }) {
  return (
    <li className="text-sm flex justify-between opacity-85 hover:text-cyan-400 transition">
      {name}
      <span className="text-cyan-400">●</span>
    </li>
  );
}
