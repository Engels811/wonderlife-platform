export default function DashboardPage() {
  return (
    <div className="space-y-10">

      {/* Title */}
      <h1 className="text-3xl neon-blue font-bold">
        DASHBOARD – WONDERLIFE NETWORK
      </h1>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Stat title="Discord Server" value="8" color="cyan" />
        <Stat title="FiveM Server" value="1 (City)" color="magenta" />
        <Stat title="Team Mitglieder" value="42" color="cyan" />
        <Stat title="Offene Tickets" value="3" color="magenta" />
      </div>

      {/* FiveM Server */}
      <div className="glow-box p-6">
        <h2 className="neon-blue text-xl font-bold mb-4">FiveM Server Status</h2>

        <p className="text-lg">WonderLife City RP — LIVE</p>
        <p className="text-sm opacity-70">CPU: 32% | RAM: 82%</p>

        <div className="mt-4 w-full bg-purple-900/30 rounded-full h-3">
          <div className="h-3 rounded-full bg-cyan-400 w-[45%] shadow-[0_0_10px_#00eaff]"></div>
        </div>

        <p className="text-sm mt-2 opacity-70">54/128 Online Spieler</p>
      </div>

      {/* Discord Panel */}
      <div className="glow-box p-6">
        <h2 className="neon-blue text-xl font-bold mb-4">Discord Panel</h2>

        <ul className="space-y-1">
          <Server name="WonderLife Network" />
          <Server name="WonderLife City" />
          <Server name="WonderLife Studios" />
          <Server name="WonderLife FM" />
          <Server name="WonderLife Logs" />
          <Server name="Development" />
          <Server name="Entbannung" />
        </ul>
      </div>

    </div>
  );
}

/* COMPONENTS */
function Stat({ title, value, color }) {
  return (
    <div className="glow-box p-6 text-center">
      <h3 className="text-lg opacity-80">{title}</h3>
      <p className={`text-3xl font-bold neon-${color}`}>{value}</p>
    </div>
  );
}

function Server({ name }) {
  return (
    <li className="text-sm hover:text-cyan-400 transition">{name}</li>
  );
}
