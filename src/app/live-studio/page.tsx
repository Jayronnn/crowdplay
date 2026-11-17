"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const LANES = [
  { id: "lane-1", positionClass: "left-[47%]", markerClass: "bg-[#7c5dfa] text-white" },
  { id: "lane-2", positionClass: "left-[38%]", markerClass: "bg-[#0ea5e9] text-white" },
  { id: "lane-3", positionClass: "left-[51%]", markerClass: "bg-[#10b981] text-white" },
  { id: "lane-4", positionClass: "left-[42%]", markerClass: "bg-[#d97706] text-white" },
];

const LIVE_EVENTS = [
  {
    badge: "GIFT",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    title: "luna.live sent a Galaxy",
    detail: "2× speed for 10s",
    time: "Just now",
  },
  {
    badge: "CHAT",
    badgeStyle: "bg-[#12263a] text-[#38bdf8] border-[#1e4976]",
    title: "pixelking: !join",
    detail: "Joined the next round",
    time: "4s ago",
  },
  {
    badge: "GIFT",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    title: "cosmic_jay sent 5 Roses",
    detail: "+50 points",
    time: "12s ago",
  },
  {
    badge: "GIFT",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    title: "violet.exe sent a Rose",
    detail: "+10 points",
    time: "18s ago",
  },
  {
    badge: "CHAT",
    badgeStyle: "bg-[#112b26] text-[#34d399] border-[#1b5e4b]",
    title: "luna.live: !boost",
    detail: "Mini boost activated",
    time: "24s ago",
  },
];

export default function LiveStudioPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [controlNotice, setControlNotice] = useState<string | null>(null);

  function handlePauseToggle() {
    if (sessionEnded) {
      setControlNotice("Session is ended. Start a new session to control playback.");
      return;
    }
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);
    setControlNotice(
      nextPaused ? "Studio view set to Paused (UI preview)." : "Studio view resumed (UI preview)."
    );
  }

  function handleTestGift() {
    setControlNotice("Test gift event preview triggered (no game mechanics active yet).");
  }

  function handleEndSession() {
    setSessionEnded(true);
    setIsPaused(false);
    setControlNotice("Live session marked as ended in UI preview.");
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
            <span className="font-medium text-slate-200">Live studio</span>
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
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                CREATOR WORKSPACE
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
                Live studio
              </h1>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Your control room for every crowd moment.
              </p>
            </div>

            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold ${
                sessionEnded
                  ? "border-slate-500/30 bg-slate-500/10 text-slate-400"
                  : "border-rose-500/35 bg-rose-500/15 text-rose-300"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  sessionEnded ? "bg-slate-400" : "bg-rose-400"
                }`}
              />
              <span>{sessionEnded ? "ENDED" : "LIVE"}</span>
            </span>
          </div>

          {/* Connection Status Strip */}
          <section className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#11111a] px-5 py-3.5 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-300">
                TikFinity connected
              </span>
              <span className="font-medium text-slate-200">@alexnova</span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-slate-400">
              <span>Session 00:24:18</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>812 viewers</span>
              </span>
              <button
                type="button"
                onClick={() =>
                  setControlNotice("TikFinity connection set to 127.0.0.1:21213.")
                }
                className="font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
              >
                Manage connection →
              </button>
            </div>
          </section>

          {/* Two-Column Studio Body */}
          <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
            {/* Left Column: Stage Card + Controls */}
            <div className="space-y-5">
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                    GIFT RACE
                  </span>

                  <div className="flex items-center gap-2.5 text-[11px]">
                    <span className="font-medium uppercase tracking-wider text-slate-400">
                      ROUND 4 OF 10
                    </span>
                    <span className="rounded-md bg-[#201936] px-2.5 py-1 font-mono font-semibold text-[#b9abff]">
                      02:38 LEFT
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/5 bg-gradient-to-b from-[#171226] to-[#120e1f] px-5 py-7">
                  <div className="space-y-6">
                    {LANES.map((lane) => (
                      <div key={lane.id} className="relative h-px w-full bg-white/10">
                        <span
                          className={`absolute -top-3 ${lane.positionClass} flex h-6 w-8 items-center justify-center rounded-md text-xs font-bold shadow ${lane.markerClass}`}
                        >
                          »
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      LEADER
                    </span>
                    <span className="font-semibold text-white">cosmic_jay</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#a78bfa]">
                    1,840 pts
                  </span>
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">
                  You&apos;re in control
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <button
                    type="button"
                    onClick={handlePauseToggle}
                    className="rounded-lg border border-white/10 bg-[#161622] px-3 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    {isPaused ? "▶ Resume game" : "|| Pause game"}
                  </button>

                  <button
                    type="button"
                    onClick={handleTestGift}
                    className="rounded-lg border border-white/10 bg-[#161622] px-3 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    Test gift
                  </button>

                  <Link
                    href="/studio"
                    className="flex items-center justify-center rounded-lg border border-white/10 bg-[#161622] px-3 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    Edit rules
                  </Link>

                  <button
                    type="button"
                    onClick={handleEndSession}
                    className="rounded-lg border border-rose-500/25 bg-rose-500/10 px-3 py-2.5 text-xs font-semibold text-rose-300 transition hover:bg-rose-500/20"
                  >
                    End session
                  </button>
                </div>

                {controlNotice && (
                  <div className="mt-4 rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-3.5 py-2 text-xs text-purple-100">
                    {controlNotice}
                  </div>
                )}
              </section>
            </div>

            {/* Right Column: Live Events Feed */}
            <aside className="rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white">Live events</h2>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  {isPaused || sessionEnded ? "Idle" : "Listening"}
                </span>
              </div>

              <div className="mt-4 divide-y divide-white/10">
                {LIVE_EVENTS.map((ev) => (
                  <div
                    key={`${ev.title}-${ev.time}`}
                    className="flex items-start justify-between gap-3 py-3.5 first:pt-1 last:pb-1"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex shrink-0 items-center justify-center rounded border px-1.5 py-1 text-[9px] font-bold uppercase ${ev.badgeStyle}`}
                      >
                        {ev.badge}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {ev.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {ev.detail}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-[10px] text-slate-500">
                      {ev.time}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}