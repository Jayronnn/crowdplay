"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const TOP_THREE = [
  {
    rank: "01",
    badge: "TOP OF THE CROWD",
    badgeStyle: "bg-[#31215e] text-[#c4b5fd] border-[#6d4aff]/50",
    cardStyle:
      "border-[#6d4aff]/50 bg-gradient-to-br from-[#28194d] via-[#1c1236] to-[#140e26]",
    player: "cosmic_jay",
    points: "24,850 pts",
    pointsColor: "text-[#b9abff]",
    delta: "↑ 2 places",
    deltaColor: "text-emerald-400",
  },
  {
    rank: "02",
    badge: "ON A STREAK",
    badgeStyle: "bg-[#1a1c38] text-[#93c5fd] border-[#313a73]",
    cardStyle:
      "border-white/10 bg-[#11111a]",
    player: "luna.live",
    points: "21,420 pts",
    pointsColor: "text-white",
    delta: "↑ 1 place",
    deltaColor: "text-emerald-400",
  },
  {
    rank: "03",
    badge: "RISING STAR",
    badgeStyle: "bg-[#1e1836] text-[#c4b5fd] border-[#3c2f6e]",
    cardStyle:
      "border-white/10 bg-[#11111a]",
    player: "pixelking",
    points: "18,960 pts",
    pointsColor: "text-white",
    delta: "↓ 1 place",
    deltaColor: "text-rose-400",
  },
];

const LINEUP_ROWS = [
  { rank: "01", player: "cosmic_jay", games: "38", score: "24,850", change: "↑ 2", changeStyle: "text-emerald-400" },
  { rank: "02", player: "luna.live", games: "32", score: "21,420", change: "↑ 1", changeStyle: "text-emerald-400" },
  { rank: "03", player: "pixelking", games: "29", score: "18,960", change: "↓ 1", changeStyle: "text-rose-400" },
  { rank: "04", player: "violet.exe", games: "26", score: "16,340", change: "↑ 4", changeStyle: "text-emerald-400" },
  { rank: "05", player: "neon_ghost", games: "24", score: "14,720", change: "—", changeStyle: "text-slate-500" },
  { rank: "06", player: "streamqueen", games: "22", score: "12,480", change: "↑ 3", changeStyle: "text-emerald-400" },
];

const MAKING_MOVES = [
  {
    title: "cosmic_jay claimed #1",
    meta: "Gift Race · 12 minutes ago",
  },
  {
    title: "violet.exe climbed 4 places",
    meta: "Word Rush · 28 minutes ago",
  },
  {
    title: "luna.live crossed 20k points",
    meta: "Drop Zone · 42 minutes ago",
  },
];

export default function LeaderboardsPage() {
  const [gameFilter, setGameFilter] = useState("All games");
  const [timeRange, setTimeRange] = useState("This week");

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="flex min-w-0 flex-col">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Leaderboards</span>
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
        <main className="mx-auto w-full max-w-6xl space-y-5 px-6 py-7">
          {/* Header */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
              CREATOR WORKSPACE
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
              Leaderboards
            </h1>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Give your community something to chase.
            </p>
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <select
                aria-label="Filter by game"
                value={gameFilter}
                onChange={(e) => setGameFilter(e.target.value)}
                className="rounded-lg border border-white/10 bg-[#12121b] px-3.5 py-2 text-xs font-medium text-slate-200 transition focus:border-[#7c5dfa] focus:outline-none"
              >
                <option value="All games">All games</option>
                <option value="Gift Race">Gift Race</option>
                <option value="Word Rush">Word Rush</option>
                <option value="Drop Zone">Drop Zone</option>
              </select>

              <select
                aria-label="Filter by time period"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="rounded-lg border border-white/10 bg-[#12121b] px-3.5 py-2 text-xs font-medium text-slate-200 transition focus:border-[#7c5dfa] focus:outline-none"
              >
                <option value="This week">This week</option>
                <option value="Today">Today</option>
                <option value="All time">All time</option>
              </select>
            </div>

            <p className="text-xs text-slate-400">
              Resets in <span className="font-semibold text-slate-200">2d 08h</span>
            </p>
          </div>

          {/* Top 3 Podium Cards */}
          <section className="grid gap-4 md:grid-cols-3">
            {TOP_THREE.map((entry) => (
              <article
                key={entry.rank}
                className={`flex flex-col justify-between rounded-xl border p-5 ${entry.cardStyle}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl font-extrabold tracking-tight text-[#8b76ff]">
                    {entry.rank}
                  </span>
                  <span
                    className={`rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${entry.badgeStyle}`}
                  >
                    {entry.badge}
                  </span>
                </div>

                <div className="mt-5">
                  <h2 className="text-base font-bold text-white">
                    {entry.player}
                  </h2>
                  <div className="mt-2 flex items-baseline justify-between gap-2">
                    <span className={`text-lg font-extrabold ${entry.pointsColor}`}>
                      {entry.points}
                    </span>
                    <span className={`text-[11px] font-medium ${entry.deltaColor}`}>
                      {entry.delta}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Bottom Split: The full lineup + Making moves */}
          <section className="grid gap-5 lg:grid-cols-[1.65fr_1fr]">
            <div className="rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-white">The full lineup</h2>
                <span className="text-[11px] text-slate-400">
                  128 ranked players · {gameFilter} ({timeRange})
                </span>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-[11px] text-slate-500">
                      <th className="pb-2.5 font-medium">Rank</th>
                      <th className="pb-2.5 font-medium">Player</th>
                      <th className="pb-2.5 font-medium">Games</th>
                      <th className="pb-2.5 font-medium">Score</th>
                      <th className="pb-2.5 font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {LINEUP_ROWS.map((row) => (
                      <tr key={row.rank}>
                        <td className="py-3 font-medium text-slate-400">
                          {row.rank}
                        </td>
                        <td className="py-3 font-semibold text-white">
                          {row.player}
                        </td>
                        <td className="py-3 text-slate-300">{row.games}</td>
                        <td className="py-3 font-semibold text-[#a78bfa]">
                          {row.score}
                        </td>
                        <td className={`py-3 font-medium ${row.changeStyle}`}>
                          {row.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="rounded-xl border border-white/10 bg-[#11111a] p-5">
              <h2 className="text-sm font-bold text-white">Making moves</h2>

              <div className="mt-4 space-y-4">
                {MAKING_MOVES.map((move) => (
                  <div
                    key={move.title}
                    className="flex items-start gap-3 rounded-lg bg-[#0d0d14] p-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#5a43b8]/40 bg-[#22193b] text-xs font-bold text-[#a78bfa]"
                    >
                      ↗
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {move.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {move.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}