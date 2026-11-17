"use client";

import { useState } from "react";
import Link from "next/link";

const LANES = [
  {
    lane: "01",
    player: "violet.exe",
    posClass: "left-[66%]",
    pillClass: "bg-[#7c5dfa] text-white",
    labelClass: "text-[#b9abff]",
  },
  {
    lane: "02",
    player: "cosmic_jay",
    posClass: "left-[46%]",
    pillClass: "bg-[#0ea5e9] text-white",
    labelClass: "text-sky-300",
  },
  {
    lane: "03",
    player: "luna.live",
    posClass: "left-[57%]",
    pillClass: "bg-[#10b981] text-white",
    labelClass: "text-emerald-300",
  },
  {
    lane: "04",
    player: "pixelking",
    posClass: "left-[34%]",
    pillClass: "bg-[#d97706] text-white",
    labelClass: "text-amber-300",
  },
];

export default function LandingPage() {
  const [highlightGift, setHighlightGift] = useState(true);

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100">
      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#09090f]/95">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2.5 text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 4.5L19.5 12L6 19.5V4.5Z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">crowdplay</span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-xs font-medium text-slate-400 md:flex"
          >
            <Link href="/games" className="transition hover:text-white">
              Games
            </Link>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <Link href="/billing" className="transition hover:text-white">
              Pricing
            </Link>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg border border-white/10 bg-[#13131d] px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#7c5dfa] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
            >
              <span>Get started</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero + Strip */}
      <main className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Left Hero Copy */}
          <section className="space-y-5">
            <span className="inline-block rounded-full border border-[#5a43b8]/40 bg-[#1c1433] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b9abff]">
              MADE FOR TIKTOK LIVE
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Your Audience.
              <br />
              Your Game.
            </h1>

            <p className="text-base font-bold text-white sm:text-lg">
              Turn your next LIVE into a game everyone plays.
            </p>

            <p className="max-w-lg text-xs leading-relaxed text-slate-400 sm:text-sm">
              Launch interactive games in your browser. Let gifts and comments
              drive the action. Give your audience a reason to stay.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7c5dfa] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
              >
                <span>Start your free trial</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/games"
                className="rounded-lg border border-white/15 bg-[#14141e] px-5 py-3 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Explore the games
              </Link>
            </div>

            <p className="pt-1 text-[11px] text-slate-500">
              7 days free · No credit card required
            </p>
          </section>

          {/* Right Preview Window */}
          <section className="rounded-2xl border border-white/10 bg-[#12111d] p-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                crowdplay.app / live
              </span>
              <span className="w-10" aria-hidden="true" />
            </div>

            <div className="mt-4 rounded-xl border border-white/5 bg-[#0d0d16] p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
                  GIFT RACE
                </span>
                <button
                  type="button"
                  onClick={() => setHighlightGift((prev) => !prev)}
                  className="rounded bg-[#22193b] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b9abff] transition hover:bg-[#2c204d]"
                >
                  LIVE DEMO
                </button>
              </div>

              <div className="mt-5 space-y-5">
                {LANES.map((item) => (
                  <div key={item.lane} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="w-4 font-mono text-[10px] text-slate-500">
                        {item.lane}
                      </span>
                      <div className="relative h-px flex-1 bg-white/10">
                        <span
                          className={`absolute -top-2.5 ${item.posClass} flex h-5 w-7 items-center justify-center rounded text-[10px] font-bold shadow ${item.pillClass}`}
                        >
                          »
                        </span>
                      </div>
                    </div>
                    <div className="pl-7">
                      <span
                        className={`inline-block ${item.posClass} relative text-[10px] font-medium ${item.labelClass}`}
                      >
                        {item.player}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-3.5 flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                highlightGift
                  ? "border-[#6d4aff]/45 bg-[#1b1430]"
                  : "border-white/10 bg-[#141420]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded bg-[#2c1f52] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#c4b5fd]">
                  GIFT
                </span>
                <div>
                  <p className="text-xs font-bold text-white">
                    luna.live sent a Galaxy
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Speed boost activated. The race is on.
                  </p>
                </div>
              </div>

              <span className="text-xs font-extrabold text-[#b9abff]">
                +500
              </span>
            </div>
          </section>
        </div>

        {/* Bottom Feature Strip */}
        <section
          id="how-it-works"
          className="mt-12 rounded-xl border border-white/10 bg-[#101019] px-6 py-4"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                LESS SETUP. MORE SHOWTIME.
              </p>
              <p className="mt-1 text-xs font-bold text-white">
                Browser-based
              </p>
            </div>

            <p className="text-xs font-semibold text-slate-300">
              TikFinity ready
            </p>
            <p className="text-xs font-semibold text-slate-300">
              Built for real-time
            </p>
            <p id="faq" className="text-xs font-semibold text-slate-300">
              Your stream, your rules
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}