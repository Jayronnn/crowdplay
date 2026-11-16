"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface LiveEventLog {
  id: number;
  source: "Gift" | "Comment";
  detail: string;
  effect: string;
}

export default function LiveStudioPage() {
  const [isLive, setIsLive] = useState(false);
  const [events, setEvents] = useState<LiveEventLog[]>([
    {
      id: 1,
      source: "Gift",
      detail: "Viewer_01 sent Rose x1",
      effect: "+25 Steps in 1,000-Step Obby",
    },
    {
      id: 2,
      source: "Comment",
      detail: "ObbyFan typed !jump",
      effect: "Triggered jump boost",
    },
  ]);

  function addSimulatedEvent(source: "Gift" | "Comment") {
    const nextId = Date.now();
    const newEvent: LiveEventLog =
      source === "Gift"
        ? {
            id: nextId,
            source: "Gift",
            detail: "StreamSupporter sent Rose x1",
            effect: "+25 Steps in 1,000-Step Obby",
          }
        : {
            id: nextId,
            source: "Comment",
            detail: "ChatPlayer typed !jump",
            effect: "Triggered jump boost",
          };

    setEvents((prev) => [newEvent, ...prev]);
  }

  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                Live Studio
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  isLive
                    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border border-slate-700 bg-slate-800 text-slate-400"
                }`}
              >
                {isLive ? "Live Preview Active" : "Standby"}
              </span>
            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              TikTok LIVE Stream Deck
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Test incoming event triggers for{" "}
              <strong className="text-slate-200">1,000-Step Obby</strong>{" "}
              before wiring Socket.IO and TikFinity in Phase 5.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsLive((prev) => !prev)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                isLive
                  ? "border border-rose-500/40 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20"
                  : "bg-emerald-600 text-white hover:bg-emerald-500"
              }`}
            >
              {isLive ? "Stop Preview" : "Start Live Preview"}
            </button>
            <Link
              href="/studio"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Edit Triggers
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Test Trigger Controls */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-lg font-bold text-white">Simulate Events</h2>
            <p className="text-xs leading-relaxed text-slate-400">
              Click below to preview how gift and comment triggers appear in
              your live feed.
            </p>

            <button
              type="button"
              onClick={() => addSimulatedEvent("Gift")}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Simulate Gift (+25 Steps)
            </button>

            <button
              type="button"
              onClick={() => addSimulatedEvent("Comment")}
              className="w-full rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
            >
              Simulate Comment (!jump)
            </button>
          </div>

          {/* Event Feed */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Live Event Feed</h2>
              <span className="font-mono text-xs text-slate-400">
                {events.length} events
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {events.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 sm:flex-row sm:items-center"
                >
                  <div>
                    <span
                      className={`mr-2 inline-block rounded px-2 py-0.5 font-mono text-xs font-semibold ${
                        item.source === "Gift"
                          ? "bg-indigo-500/20 text-indigo-300"
                          : "bg-cyan-500/20 text-cyan-300"
                      }`}
                    >
                      {item.source}
                    </span>
                    <span className="text-sm text-slate-200">{item.detail}</span>
                  </div>
                  <span className="font-mono text-xs text-emerald-300">
                    {item.effect}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}