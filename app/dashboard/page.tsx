"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [sys, setSys] = useState(null);
  const [fivem, setFivem] = useState(null);
  const [loading, setLoading] = useState(true);

  // API URLs
  const SERVER_IP = "193.46.81.88"; // <-- ändern!
  const MONITOR_URL = `http://${SERVER_IP}:4020/status`;
  const FIVEM_PLAYERS = `http://${SERVER_IP}:30120/players.json`;
  const FIVEM_INFO = `http://${SERVER_IP}:30120/info.json`;

  // Fetch LIVE System Info
  const loadSystem = async () => {
    try {
      const res = await fetch(MONITOR_URL);
      const data = await res.json();
      setSys(data);
    } catch (err) {
      setSys({ status: "offline" });
    }
  };

  // Fetch FiveM Data
  const loadFiveM = async () => {
    try {
      const players = await fetch(FIVEM_PLAYERS).then((r) => r.json());
      const info = await fetch(FIVEM_INFO).then((r) => r.json());

      setFivem({
        online: players.length,
        max: info.vars.sv_maxClients,
        players,
        resources: info.resources.length,
        hostname: info.vars.sv_hostname,
        onesync: info.vars.onesync_enabled,
      });
    } catch (err) {
      setFivem({ status: "offline" });
    }
  };

  // Auto-refresh every 1 sec
  useEffect(() => {
    loadSystem();
    loadFiveM();
    const interval = setInterval(() => {
      loadSystem();
      loadFiveM();
    }, 1000);
    setLoading(false);
    return () => clearInterval(interval);
  }, []);

  if (loading || !sys) {
    return (
      <div className="text-purple-400 p-10 animate-pulse text-xl">
        Loading WonderLife Dashboard…
      </div>
    );
  }

  return (
    <div className="p-8 text-white">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-purple-400">WonderLife Platform</h1>
      <p className="opacity-70 mt-2 mb-10">
        Live System- & Serverüberwachung
      </p>

      {/* ----------- TOP STATS ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatCard title="CPU Auslastung" value={`${sys.cpu}%`} color={cpuColor(sys.cpu)} />
        <StatCard title="RAM Nutzung" value={`${sys.ramUsed}%`} color={ramColor(sys.ramUsed)} />
        <StatCard title="Uptime" value={`${formatUptime(sys.uptime)}`} />
        <StatCard title="Status" value={sys.status === "online" ? "🟢 ONLINE" : "🔴 OFFLINE"} />

      </div>

      {/* -------------- MID GRID (FiveM + Discord) -------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <FiveMPanel fivem={fivem} />
        <DiscordPanel />

      </div>

      {/* -------------- BOTTOM (Logs + Players) -------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <PlayersPanel fivem={fivem} />
        <LogsPanel />
      </div>

    </div>
  );
}

/* =====================================================================
   COMPONENTS
===================================================================== */

function StatCard({ title, value, color }) {
  return (
    <div
      className={`bg-[#11071c] border border-purple-900/30 rounded-xl p-6 shadow-lg transition hover:scale-[1.03]`}
    >
      <p className="text-sm opacity-60">{title}</p>
      <h2 className={`text-3xl font-bold mt-1 ${color ?? "text-purple-300"}`}>
        {value}
      </h2>
    </div>
  );
}

// CPU Color
function cpuColor(v) {
  if (v < 50) return "text-green-400";
  if (v < 80) return "text-yellow-400";
  return "text-red-500";
}

// RAM Color
function ramColor(v) {
  if (v < 60) return "text-green-400";
  if (v < 90) return "text-yellow-400";
  return "text-red-500";
}

// Format uptime
function formatUptime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return `${h}h ${m}m`;
}

/* =====================================================================
   FiveM Panel
===================================================================== */

function FiveMPanel({ fivem }) {
  if (!fivem || fivem.status === "offline") {
    return (
      <Panel title="FiveM Status">
        <p className="text-red-400">FiveM Server offline</p>
      </Panel>
    );
  }

  return (
    <Panel title="FiveM Status">
      <p className="opacity-80">Servername: {fivem.hostname}</p>
      <p className="opacity-80 mt-1">
        Spieler: {fivem.online} / {fivem.max}
      </p>
      <p className="opacity-80 mt-1">
        Ressourcen: {fivem.resources}
      </p>
      <p className="opacity-80 mt-1">
        OneSync: {fivem.onesync}
      </p>
    </Panel>
  );
}

/* Discord Panel */
function DiscordPanel() {
  return (
    <Panel title="Discord Netzwerk">
      <ul className="space-y-2 opacity-80">
        <li>• WonderLife Network</li>
        <li>• WonderLife City</li>
        <li>• WonderLife Studios</li>
        <li>• WonderLife FM</li>
        <li>• WonderLife Logs</li>
        <li>• Development</li>
        <li>• Entbannung</li>
      </ul>
    </Panel>
  );
}

/* Players Panel */
function PlayersPanel({ fivem }) {
  if (!fivem || fivem.status === "offline") {
    return (
      <Panel title="Spieler Übersicht">
        <p className="text-red-400">Keine Verbindung zum Server</p>
      </Panel>
    );
  }

  return (
    <Panel title="Spieler Übersicht">
      <ul className="opacity-80 space-y-1">
        {fivem.players.map((p, i) => (
          <li key={i}>• {p.name}</li>
        ))}
      </ul>
    </Panel>
  );
}

/* Logs Panel */
function LogsPanel() {
  return (
    <Panel title="System Logs">
      <ul className="space-y-2 text-sm opacity-80">
        <li>+ Engels811 banned Spieler123 (vor 2h)</li>
        <li>+ Wise entfernt Support-Rolle von Spieler456</li>
        <li>+ Mine kickt Raptor (vor 1 Tag)</li>
        <li>+ Kevin Timeout Spieler789 (vor 2 Tagen)</li>
        <li>+ Rebecca gab Tech Admin Rechte</li>
      </ul>
    </Panel>
  );
}

/* Panel Wrapper */
function Panel({ title, children }) {
  return (
    <div className="bg-[#11071c] border border-purple-900/30 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-purple-300 mb-3">{title}</h2>
      {children}
    </div>
  );
}
