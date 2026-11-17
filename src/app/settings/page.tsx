"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const CHECKLIST = [
  {
    step: "01",
    title: "Open TikFinity",
    desc: "Launch TikFinity on your stream computer.",
  },
  {
    step: "02",
    title: "Connect your TikTok LIVE",
    desc: "Use the same account you stream with.",
  },
  {
    step: "03",
    title: "Enable the WebSocket server",
    desc: "Match the endpoint shown on the left.",
  },
];

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState("Alex Nova");
  const [tiktokUsername, setTiktokUsername] = useState("@alexnova");
  const [email, setEmail] = useState("alex@yourstream.com");
  const [websocketEndpoint, setWebsocketEndpoint] = useState("ws://127.0.0.1:21213");
  const [timezone, setTimezone] = useState("America / New York");
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [settingsNotice, setSettingsNotice] = useState<string | null>(null);

  function handleSaveChanges() {
    setSettingsNotice(
      `Settings preview saved for ${displayName.trim() || "Alex Nova"} (${tiktokUsername.trim() || "@alexnova"}).`
    );
  }

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="flex min-w-0 flex-col">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Settings</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-md border border-white/10 bg-[#13131d] px-2.5 py-1 text-[11px] text-slate-400">
              Demo workspace
            </span>
            <span className="text-xs font-medium text-slate-200">
              Alex Nova ⌄
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto w-full max-w-6xl space-y-6 px-6 py-7">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                CREATOR WORKSPACE
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
                Settings
              </h1>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                A workspace that works your way.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSaveChanges}
              className="rounded-lg bg-[#7c5dfa] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
            >
              Save changes
            </button>
          </div>

          {settingsNotice && (
            <div className="rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-4 py-2.5 text-xs text-purple-100">
              {settingsNotice}
            </div>
          )}

          {/* Two-Column Settings Layout */}
          <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
            {/* Left Column: Profile + Security + TikFinity integration */}
            <div className="space-y-5">
              {/* Profile */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">Profile</h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  How you show up in your creator workspace.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="settingsDisplayName"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Display name
                    </label>
                    <input
                      id="settingsDisplayName"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="settingsTiktok"
                      className="block text-xs font-medium text-slate-300"
                    >
                      TikTok username
                    </label>
                    <input
                      id="settingsTiktok"
                      type="text"
                      value={tiktokUsername}
                      onChange={(e) => setTiktokUsername(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="settingsEmail"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Email address
                  </label>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <input
                      id="settingsEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-w-[220px] flex-1 rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                    />
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-300">
                      Verified
                    </span>
                  </div>
                </div>
              </section>

              {/* Security */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">Security</h2>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold text-white">Password</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Last changed October 22, 2026
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSettingsNotice("Password update preview opened.")
                    }
                    className="rounded-lg border border-white/10 bg-[#171724] px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    Update password
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Active session
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="text-slate-400">
                      Chrome · Windows · This device
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                      Current
                    </span>
                  </div>
                </div>
              </section>

              {/* TikFinity integration */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-bold text-white">
                    TikFinity integration
                  </h2>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                    Connected
                  </span>
                </div>

                <p className="mt-0.5 text-xs text-slate-400">
                  Receive gifts, comments, and follows from your TikTok LIVE.
                </p>

                <div className="mt-4">
                  <label
                    htmlFor="wsEndpoint"
                    className="block text-xs font-medium text-slate-300"
                  >
                    WebSocket endpoint
                  </label>
                  <input
                    id="wsEndpoint"
                    type="text"
                    value={websocketEndpoint}
                    onChange={(e) => setWebsocketEndpoint(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 font-mono text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                  />
                </div>
              </section>
            </div>

            {/* Right Column: Connection checklist + Workspace preferences + All done for today */}
            <div className="space-y-5">
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">
                  Your connection checklist
                </h2>

                <div className="mt-4 space-y-4">
                  {CHECKLIST.map((item) => (
                    <div key={item.step} className="flex items-start gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#5a43b8]/40 bg-[#201838] text-[11px] font-bold text-[#a78bfa]">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">
                  Workspace preferences
                </h2>

                <div className="mt-4 space-y-4 text-xs">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3.5">
                    <label htmlFor="timezoneSelect" className="text-slate-300">
                      Timezone
                    </label>
                    <select
                      id="timezoneSelect"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="rounded-lg border border-white/10 bg-[#161622] px-3 py-1.5 text-xs font-medium text-white focus:border-[#7c5dfa] focus:outline-none"
                    >
                      <option value="America / New York">America / New York</option>
                      <option value="Asia / Manila">Asia / Manila</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-300">Email updates</span>
                    <button
                      type="button"
                      onClick={() => setEmailUpdates((prev) => !prev)}
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition ${
                        emailUpdates
                          ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
                          : "border-white/15 bg-white/5 text-slate-400"
                      }`}
                    >
                      {emailUpdates ? "Enabled" : "Disabled"}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Product news and important account notices.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-[#11111a] px-5 py-4">
                <h2 className="text-sm font-bold text-white">
                  All done for today?
                </h2>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}