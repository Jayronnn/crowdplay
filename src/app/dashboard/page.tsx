import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatCard, type StatCardItem } from "@/components/StatCard";

const DASHBOARD_STATS: StatCardItem[] = [
  {
    label: "Featured Game",
    value: "1,000-Step Obby",
    detail: "Ready for 3D engine & live triggers",
    accentClass: "text-indigo-400",
  },
  {
    label: "TikFinity Bridge",
    value: "Standby (Phase 5)",
    detail: "Real-time Socket.IO listener pending",
    accentClass: "text-cyan-400",
  },
  {
    label: "Subscription Plan",
    value: "Starter Preview",
    detail: "Billing & plan gating in Phase 6",
    accentClass: "text-emerald-400",
  },
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Streamer Dashboard
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              CrowdPlay Command Center
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Overview of your active game, TikTok LIVE event bridge, and
              account setup.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/games"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Open Game Library
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {DASHBOARD_STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Quick Setup Checklist */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-lg font-bold text-white">
            Frontend & SaaS Build Progress
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            How your current frontend screens connect to upcoming CrowdPlay
            phases.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between rounded-xl border border-slate-800/90 bg-slate-950/70 px-4 py-3">
              <span>Landing Page & Shared Navbar / Footer</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                UI Ready
              </span>
            </li>
            <li className="flex items-center justify-between rounded-xl border border-slate-800/90 bg-slate-950/70 px-4 py-3">
              <span>Game Library (/games) & 1,000-Step Obby Card</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                UI Ready
              </span>
            </li>
            <li className="flex items-center justify-between rounded-xl border border-slate-800/90 bg-slate-950/70 px-4 py-3">
              <span>Streamer Dashboard (/dashboard)</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                UI Ready
              </span>
            </li>
            <li className="flex items-center justify-between rounded-xl border border-slate-800/90 bg-slate-950/70 px-4 py-3">
              <span>Game Studio & Live Studio</span>
              <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                UI Ready
              </span>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}