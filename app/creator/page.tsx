export default function CreatorPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-400">Creator Studio</h1>
      <p className="opacity-70 mt-2 mb-10">Manage creator tools & content</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <CreatorCard title="Upload Manager" desc="Upload Videos, Thumbnails, Images" />
        <CreatorCard title="Stream Sync" desc="Sync Twitch/YT Live Data" />
        <CreatorCard title="Shorts / Clips" desc="Manage and auto-generate clips" />

        <CreatorCard title="Analytics" desc="Track Views, Uploads, Stats" />
        <CreatorCard title="Tasks" desc="To-do system for your creator work" />
        <CreatorCard title="Brand Tools" desc="Logos, Overlays, Templates" />
      </div>
    </div>
  );
}

function CreatorCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20 hover:scale-[1.03] transition">
      <h2 className="text-xl font-semibold text-purple-300">{title}</h2>
      <p className="opacity-70 mt-1 text-sm">{desc}</p>
    </div>
  );
}

