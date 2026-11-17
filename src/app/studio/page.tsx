"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const PREVIEW_LANES = [
  { id: "p-1", positionClass: "left-[54%]", markerClass: "bg-[#7c5dfa] text-white" },
  { id: "p-2", positionClass: "left-[35%]", markerClass: "bg-[#0ea5e9] text-white" },
  { id: "p-3", positionClass: "left-[61%]", markerClass: "bg-[#10b981] text-white" },
  { id: "p-4", positionClass: "left-[42%]", markerClass: "bg-[#d97706] text-white" },
];

export default function StudioPage() {
  const [sessionTitle, setSessionTitle] = useState("Friday Night Live");
  const [roundDuration, setRoundDuration] = useState("5 minutes");
  const [maxPlayers, setMaxPlayers] = useState("100 players");
  const [pointsPerWin, setPointsPerWin] = useState("500 points");
  const [joinWithComment, setJoinWithComment] = useState(true);
  const [keepScoresBetweenRounds, setKeepScoresBetweenRounds] = useState(true);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="flex min-w-0 flex-col">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Game studio</span>
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
                Game studio
              </h1>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Make the rules. Create your signature live.
              </p>
            </div>

            <Link
              href="/live-studio"
              onClick={() =>
                setStatusNotice("Saved studio configuration and opening Live studio.")
              }
              className="inline-flex items-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
            >
              <span>Save &amp; open live studio</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Selected Game Banner */}
          <section className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#5a43b8]/35 bg-gradient-to-r from-[#231742] via-[#1a1230] to-[#141024] px-5 py-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b9abff]">
                GIFT RACE
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-white">
                Your next crowd favorite.
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/games"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#b9abff] transition hover:text-white"
              >
                <span>Change game</span>
                <span aria-hidden="true">→</span>
              </Link>

              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-300">
                All changes saved
              </span>
            </div>
          </section>

          {statusNotice && (
            <div className="rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-4 py-2.5 text-xs text-purple-100">
              {statusNotice}
            </div>
          )}

          {/* Two-Column Studio Grid */}
          <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
            {/* Left Column: Game Settings + Gameplay Rules + Rewards Header */}
            <div className="space-y-5">
              {/* Game settings */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">Game settings</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sessionTitle"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Session title
                    </label>
                    <input
                      id="sessionTitle"
                      type="text"
                      value={sessionTitle}
                      onChange={(e) => {
                        setSessionTitle(e.target.value);
                        setStatusNotice(null);
                      }}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="roundDuration"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Round duration
                    </label>
                    <select
                      id="roundDuration"
                      value={roundDuration}
                      onChange={(e) => {
                        setRoundDuration(e.target.value);
                        setStatusNotice(null);
                      }}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                    >
                      <option value="3 minutes">3 minutes</option>
                      <option value="5 minutes">5 minutes</option>
                      <option value="10 minutes">10 minutes</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="maxPlayers"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Maximum players
                    </label>
                    <select
                      id="maxPlayers"
                      value={maxPlayers}
                      onChange={(e) => {
                        setMaxPlayers(e.target.value);
                        setStatusNotice(null);
                      }}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white transition focus:border-[#7c5dfa] focus:outline-none"
                    >
                      <option value="50 players">50 players</option>
                      <option value="100 players">100 players</option>
                      <option value="250 players">250 players</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="pointsPerWin"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Points per win
                    </label>
                    <input
                      id="pointsPerWin"
                      type="text"
                      value={pointsPerWin}
                      onChange={(e) => {
                        setPointsPerWin(e.target.value);
                        setStatusNotice(null);
                      }}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-[#161622] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Gameplay rules */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">Gameplay rules</h2>

                <div className="mt-4 divide-y divide-white/10">
                  <div className="flex items-center justify-between gap-4 pb-4">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Join with a comment
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Viewers type !join to enter the next round.
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={joinWithComment}
                      onClick={() => {
                        const next = !joinWithComment;
                        setJoinWithComment(next);
                        setStatusNotice(
                          `Join with a comment ${next ? "enabled" : "disabled"} in studio UI.`
                        );
                      }}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition ${
                        joinWithComment ? "bg-[#7c5dfa]" : "bg-white/15"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white transition ${
                          joinWithComment ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Keep scores between rounds
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Build a leaderboard across your whole session.
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={keepScoresBetweenRounds}
                      onClick={() => {
                        const next = !keepScoresBetweenRounds;
                        setKeepScoresBetweenRounds(next);
                        setStatusNotice(
                          `Keep scores between rounds ${next ? "enabled" : "disabled"} in studio UI.`
                        );
                      }}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition ${
                        keepScoresBetweenRounds ? "bg-[#7c5dfa]" : "bg-white/15"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white transition ${
                          keepScoresBetweenRounds ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* Gift & comment rewards */}
              <section className="rounded-xl border border-white/10 bg-[#11111a] px-5 py-4">
                <h2 className="text-sm font-bold text-white">
                  Gift &amp; comment rewards
                </h2>
              </section>
            </div>

            {/* Right Column: Live preview + Test your triggers first */}
            <div className="space-y-5">
              <section className="rounded-xl border border-white/10 bg-[#11111a] p-5">
                <h2 className="text-sm font-bold text-white">Live preview</h2>

                <div className="mt-4 rounded-xl border border-white/5 bg-gradient-to-b from-[#171226] to-[#120e1f] px-5 py-7">
                  <div className="space-y-5">
                    {PREVIEW_LANES.map((lane) => (
                      <div key={lane.id} className="relative h-px w-full bg-white/10">
                        <span
                          className={`absolute -top-2.5 ${lane.positionClass} flex h-5 w-7 items-center justify-center rounded text-[10px] font-bold shadow ${lane.markerClass}`}
                        >
                          »
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-bold text-white">
                    The crowd changes everything.
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    Map gifts and comments to in-game actions. Your rules drive every round.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setStatusNotice(
                      `Studio preview ready for "${sessionTitle}" (no game mechanics active yet).`
                    )
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
                >
                  <span>Launch game</span>
                  <span aria-hidden="true">→</span>
                </button>
              </section>

              <section className="rounded-xl border border-[#5a43b8]/35 bg-gradient-to-br from-[#1b142e] to-[#11111a] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                  BEFORE YOU GO LIVE
                </p>
                <h2 className="mt-1.5 text-base font-bold text-white">
                  Test your triggers first.
                </h2>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}