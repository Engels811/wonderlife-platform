// @ts-nocheck

export default function OwnerPanelPage() {
  return (
    <div className="p-8">

      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-400">Owner Panel</h1>
      <p className="opacity-70 mt-2 mb-10">Administrative tools for owners.</p>

      {/* GRID – Kategorien */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <OwnerCard
          title="FiveM Server Control"
          desc="Restart server, check performance, manage resources."
        />

        <OwnerCard
          title="Discord Network"
          desc="Manage server settings, roles, bots & permissions."
        />

        <OwnerCard
          title="Creator System"
          desc="Approve creators, manage analytics & strike system."
        />

        <OwnerCard
          title="Team Management"
          desc="Manage team, permissions, applications & onboarding."
        />

        <OwnerCard
          title="Security & Logs"
          desc="View system logs, admin actions, error reports."
        />

        <OwnerCard
          title="System Tools"
          desc="Backups, API Keys, Webhooks, platform utilities."
        />

      </div>
    </div>
  );
}


/* ------------------------------------------------------------------- */
/* OwnerCard Component */
/* ------------------------------------------------------------------- */

function OwnerCard({ title, desc }) {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20 hover:scale-[1.03] transition">
      <h2 className="text-xl font-semibold text-purple-300">{title}</h2>
      <p className="opacity-70 mt-1 text-sm">{desc}</p>
    </div>
  );
}
