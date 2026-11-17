"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const STATS = [
  {
    label: "Total players",
    value: "2,486",
    delta: "↑ 18.6%",
    compare: "vs. previous 7 days",
  },
  {
    label: "Gifts received",
    value: "1,284",
    delta: "↑ 12.4%",
    compare: "vs. previous 7 days",
  },
  {
    label: "Games played",
    value: "38",
    delta: "↑ 6",
    compare: "vs. previous 7 days",
  },
  {
    label: "Stream time",
    value: "16h 42m",
    delta: "↑ 2h 14m",
    compare: "vs. previous 7 days",
  },
];

const RECENT_SESSIONS = [
  {
    game: "Gift Race",
    time: "Today, 8:30 PM",
    players: "812",
    gifts: "426",
    duration: "48m",
  },
  {
    game: "Word Rush",
    time: "Today, 6:15 PM",
    players: "536",
    gifts: "285",
    duration: "36m",
  },
  {
    game: "Drop Zone",
    time: "Yesterday, 9:00 PM",
    players: "648",
    gifts: "327",
    duration: "52m",
  },
];

const CROWD_ITEMS = [
  {
    badge: "GIFT",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    title: "luna.live sent a Galaxy",
    subtitle: "Speed boost · Gift Race",
    time: "2m ago",
  },
  {
    badge: "WIN",
    badgeStyle: "bg-[#12263a] text-[#38bdf8] border-[#1e4976]",
    title: "cosmic_jay took the lead",
    subtitle: "1,840 points · Gift Race",
    time: "4m ago",
  },
  {
    badge: "CHAT",
    badgeStyle: "bg-[#112b26] text-[#34d399] border-[#1b5e4b]",
    title: "pixelking joined the race",
    subtitle: "Command: !join",
    time: "6m ago",
  },
];

export default function DashboardPage() {
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      {/* Main Content Shell */}
      <div className="flex min-w-0 flex-col">
        {/* Top Breadcrumb & Profile Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Dashboard</span>
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

        {/* Workspace Body */}
        <main className="mx-auto w-full max-w-6xl space-y-6 px-6 py-7">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                CREATOR WORKSPACE
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
                Overview
              </h1>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Your stream, at a glance.
              </p>
            </div>

            <Link
              href="/live-studio"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
            >
              <span>Open live studio</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* 4 Metric Cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-[#11111a] p-4"
              >
                <p className="text-xs text-slate-400">{stat.label}</p>
                <p className="mt-2 text-2xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px]">
                  <span className="font-semibold text-emerald-400">
                    {stat.delta}
                  </span>
                  <span className="text-slate-500">{stat.compare}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Action Banner + Connection Status Card */}
          <section
            id="status"
            className="grid gap-4 lg:grid-cols-[1.55fr_1fr]"
          >
            <div className="flex flex-col justify-between rounded-xl border border-[#5a43b8]/40 bg-gradient-to-br from-[#231742] via-[#1a1230] to-[#141024] p-6">
              <div>
                <span className="inline-block rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b9abff]">
                  READY WHEN YOU ARE
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                  Make tonight a crowd favorite.
                </h2>
                <p className="mt-1.5 text-xs text-slate-300/80 sm:text-sm">
                  Gift Race is set up with your latest rules. All that&apos;s missing is you.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActionNotice(
                      "Workspace ready for Gift Race preview (no game mechanics active yet)."
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
                >
                  <span>Launch Gift Race</span>
                  <span aria-hidden="true">→</span>
                </button>

                <Link
                  href="/studio"
                  onClick={() =>
                    setActionNotice("Opening Game studio rules configuration.")
                  }
                  className="rounded-lg border border-white/15 bg-[#1b182b] px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Edit game settings
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white">
                  You&apos;re good to go
                </h2>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  Connected
                </span>
              </div>

              <div className="my-4 border-y border-white/10 py-3.5">
                <p className="text-xs font-semibold text-white">TikFinity</p>
                <p className="mt-1 font-mono text-[11px] text-slate-400">
                  127.0.0.1:21213
                </p>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Pro plan active</span>
                <button
                  type="button"
                  onClick={() =>
                    setActionNotice("Pro plan is active on Alex's workspace.")
                  }
                  className="font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
                >
                  Manage →
                </button>
              </div>
            </div>
          </section>

          {actionNotice && (
            <div className="rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-4 py-2.5 text-xs text-purple-100">
              {actionNotice}
            </div>
          )}

          {/* Recent Sessions + In the Crowd */}
          <section
            id="sessions"
            className="grid gap-4 lg:grid-cols-[1.55fr_1fr]"
          >
            <div className="rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white">Recent sessions</h2>
                <Link
                  href="/live-studio"
                  className="text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
                >
                  View rankings →
                </Link>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-[11px] text-slate-500">
                      <th className="pb-2.5 font-medium">Game</th>
                      <th className="pb-2.5 font-medium">Players</th>
                      <th className="pb-2.5 font-medium">Gifts</th>
                      <th className="pb-2.5 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {RECENT_SESSIONS.map((row) => (
                      <tr key={row.game}>
                        <td className="py-3">
                          <p className="font-semibold text-white">{row.game}</p>
                          <p className="mt-0.5 text-[11px] text-slate-500">
                            {row.time}
                          </p>
                        </td>
                        <td className="py-3 text-slate-300">{row.players}</td>
                        <td className="py-3 text-slate-300">{row.gifts}</td>
                        <td className="py-3 text-slate-300">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#11111a] p-5">
              <h2 className="text-sm font-bold text-white">In the crowd</h2>

              <div className="mt-4 space-y-3.5">
                {CROWD_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-3 rounded-lg bg-[#0d0d14] p-2.5"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex shrink-0 items-center justify-center rounded border px-1.5 py-1 text-[9px] font-bold uppercase ${item.badgeStyle}`}
                      >
                        {item.badge}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] text-slate-500">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}