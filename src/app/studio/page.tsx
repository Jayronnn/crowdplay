"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function StudioPage() {
  const [giftName, setGiftName] = useState("Rose");
  const [stepBoost, setStepBoost] = useState("25");
  const [chatCommand, setChatCommand] = useState("!jump");
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  function handleSaveStudio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSavedNotice(
      `Studio preset staged: "${giftName}" adds +${stepBoost || "0"} steps, and chat command "${chatCommand || "!jump"}" triggers a jump.`
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Game Studio
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              1,000-Step Obby Studio
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Customize how TikTok LIVE gifts and chat commands interact with
              your obstacle course.
            </p>
          </div>

          <Link
            href="/games"
            className="inline-flex w-fit items-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Back to Games
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Customization Form */}
          <form
            onSubmit={handleSaveStudio}
            className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <h2 className="text-lg font-bold text-white">
              Trigger Configuration
            </h2>

            <div>
              <label
                htmlFor="giftName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                TikTok Gift Trigger
              </label>
              <input
                id="giftName"
                type="text"
                value={giftName}
                onChange={(e) => setGiftName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="stepBoost"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Steps Added Per Gift
              </label>
              <input
                id="stepBoost"
                type="number"
                min="1"
                max="500"
                value={stepBoost}
                onChange={(e) => setStepBoost(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="chatCommand"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Chat Command Trigger
              </label>
              <input
                id="chatCommand"
                type="text"
                value={chatCommand}
                onChange={(e) => setChatCommand(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {savedNotice && (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-200">
                {savedNotice}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Preview Studio Preset
            </button>
          </form>

          {/* Live Preset Summary */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Live Preset Summary
              </span>
              <h2 className="mt-2 text-xl font-bold text-white">
                1,000-Step Obby Ruleset
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Updates live as you edit the fields on the left.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                  <span className="text-slate-400">Gift Event</span>
                  <span className="font-semibold text-white">
                    {giftName || "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                  <span className="text-slate-400">Step Advance</span>
                  <span className="font-semibold text-indigo-300">
                    +{stepBoost || "0"} Steps
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                  <span className="text-slate-400">Chat Keyword</span>
                  <span className="font-mono text-cyan-300">
                    {chatCommand || "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
              Database persistence via Supabase & PostgreSQL connects in Phase 3.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}