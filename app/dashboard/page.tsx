export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-400">Dashboard</h1>
      <p className="opacity-70 mt-2 mb-10">WonderLife Platform Overview</p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Widget title="Active Users" value="128" />
        <Widget title="Tickets Today" value="34" />
        <Widget title="Server Health" value="100%" />
        
        <Widget title="Uploads" value="542" />
        <Widget title="Creator Studio Tasks" value="17" />
        <Widget title="Pending Reviews" value="8" />

      </div>
    </div>
  );
}

/* REUSABLE WIDGET COMPONENT */
function Widget({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">
      <h2 className="text-xl font-semibold text-purple-300">{title}</h2>
      <p className="text-4xl font-bold mt-2 text-purple-400">{value}</p>
    </div>
  );
}
