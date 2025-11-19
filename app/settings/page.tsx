"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="space-y-10">

      {/* Titel */}
      <div>
        <h1 className="text-3xl font-bold text-purple-400">Settings</h1>
        <p className="opacity-70 mt-1">
          Manage your WonderLife Platform configuration.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 1. System Settings */}
        <section className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            System Settings
          </h2>

          <SettingSwitch label="Maintenance Mode" />
          <SettingSwitch label="Enable Dark Neon Theme" />
          <SettingSwitch label="Show Debug Logs" />
        </section>

        {/* 2. Notifications */}
        <section className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Notifications
          </h2>

          <SettingSwitch label="Email Alerts" />
          <SettingSwitch label="Discord Webhook Alerts" />
          <SettingSwitch label="Ticket Notifications" />
        </section>

        {/* 3. Security */}
        <section className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Security
          </h2>

          <SettingSwitch label="2FA Login Required" />
          <SettingSwitch label="Enable Firewall Mode" />
          <SettingSwitch label="Block Suspicious IPs" />
        </section>

        {/* 4. Platform */}
        <section className="bg-[#13081f] border border-purple-900/30 rounded-xl p-6 shadow-lg shadow-purple-900/20">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Platform Settings
          </h2>

          <SettingInput label="Site Title" placeholder="WonderLife Platform" />
          <SettingInput label="Support Email" placeholder="support@wonderlife.network" />
          <SettingInput label="Discord Server ID" placeholder="123456789012345678" />
        </section>

      </div>
    </div>
  );
}

/* ------------------------------- */
/* UI COMPONENTS ----------------- */
/* ------------------------------- */

function SettingSwitch({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm">{label}</span>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-900/40 hover:bg-purple-800/50 transition">
        <span className="inline-block h-4 w-4 transform rounded-full bg-purple-300 translate-x-1 transition" />
      </button>
    </div>
  );
}

function SettingInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="mb-4">
      <label className="text-sm opacity-80">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full bg-[#1b0b2c] border border-purple-800/40 rounded-lg p-2 text-sm outline-none focus:border-purple-400"
      />
    </div>
  );
}
