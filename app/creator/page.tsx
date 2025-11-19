'use client';

import React from 'react';

// ------------------------------------------------------
// Types
// ------------------------------------------------------
interface CreatorCardProps {
  title: string;
  desc: string;
}

// ------------------------------------------------------
// Einzelne Creator-Funktion als Card
// ------------------------------------------------------
function CreatorCard({ title, desc }: CreatorCardProps) {
  return (
    <div className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20 hover:scale-[1.03] transition">
      <h2 className="text-xl font-semibold text-purple-300">{title}</h2>
      <p className="opacity-70 mt-1 text-sm">{desc}</p>
    </div>
  );
}

// ------------------------------------------------------
// Creator Studio Hauptseite (einziger Export)
// ------------------------------------------------------
export default function CreatorPage() {
  return (
    <div>
      {/* Titel + Untertitel */}
      <h1 className="text-3xl font-bold text-purple-400">Creator Studio</h1>
      <p className="opacity-70 mt-2 mb-10">
        Manage creator tools & content
      </p>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Basis Creator Funktionen */}
        <CreatorCard
          title="Upload Manager"
          desc="Upload Videos, Thumbnails, Images"
        />

        <CreatorCard
          title="Stream Sync"
          desc="Sync Twitch / YouTube Live Data"
        />

        <CreatorCard
          title="Shorts / Clips"
          desc="Auto-generate short clips"
        />

        <CreatorCard
          title="Analytics"
          desc="Track views, stats & engagement"
        />

        <CreatorCard
          title="Tasks"
          desc="Manage your workflow"
        />

        <CreatorCard
          title="Brand Tools"
          desc="Logos, overlays, templates"
        />

        {/* Social Media Plattformen */}
        <CreatorCard
          title="Instagram Tools"
          desc="Reels, Posts, Insights, Scheduling"
        />

        <CreatorCard
          title="TikTok Tools"
          desc="Auto-Shorts, Trends, Analytics"
        />

        <CreatorCard
          title="Twitter / X Tools"
          desc="Posts, Auto-Export, Engagement Tracking"
        />

        <CreatorCard
          title="Kick Tools"
          desc="Stream Sync, Clips, Creator Insights"
        />

      </div>
    </div>
  );
}
