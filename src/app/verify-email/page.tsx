"use client";

import { useState } from "react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function handleVerifiedClick() {
    setStatusMessage("Email verification status checked. Ready to continue.");
  }

  return (
    <main className="min-h-screen bg-[#0b0b10] text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[44%_56%]">
        {/* Left Brand & Value Panel */}
        <section className="flex flex-col justify-between bg-gradient-to-b from-[#1a102e] via-[#130c22] to-[#0e0919] px-8 py-9 sm:px-12 lg:px-14">
          <Link href="/" className="inline-flex w-fit items-center gap-2.5 text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="text-white"
            >
              <path d="M6 4.5L19.5 12L6 19.5V4.5Z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">crowdplay</span>
          </Link>

          <div className="my-12 max-w-md space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              The best part of your stream? Everyone gets to play.
            </h1>

            <p className="text-sm leading-relaxed text-purple-200/70 sm:text-base">
              Bring your audience off the sidelines.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-[#1c1330]/90 p-5 shadow-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-300/70">
                YOUR NEXT LIVE, UPGRADED
              </p>
              <p className="mt-1.5 text-lg font-bold text-white">
                One crowd. All in.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="h-1.5 w-[66%] rounded-full bg-gradient-to-r from-[#7c5dfa] to-[#9b7bff]" />
                <div className="h-1.5 w-[86%] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#38bdf8]" />
                <div className="h-1.5 w-[68%] rounded-full bg-gradient-to-r from-[#34d399] to-[#10b981]" />
              </div>
            </div>
          </div>

          <p className="text-xs font-medium text-purple-200/75">
            Your Audience. Your Game.
          </p>
        </section>

        {/* Right Verification Panel */}
        <section className="flex flex-col justify-between bg-[#0b0b10] px-6 py-8 sm:px-14 lg:px-24">
          <div className="flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
            >
              <span aria-hidden="true">←</span>
              <span>Back to CrowdPlay</span>
            </Link>
          </div>

          <div className="mx-auto my-10 w-full max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
              CHECK YOUR INBOX
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-[34px]">
              One click from the crowd.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
              We&apos;ve sent a verification link to your email. Open it to activate your CrowdPlay account.
            </p>

            <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-[#14141d] px-4 py-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#8b76ff]">1</span>
                <span className="font-medium text-slate-200">Open your email</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-500">2</span>
                <span className="text-slate-400">Follow the link, then return here</span>
              </div>
            </div>

            {statusMessage && (
              <div className="mt-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2.5 text-xs text-emerald-200">
                {statusMessage}
              </div>
            )}

            <button
              type="button"
              onClick={handleVerifiedClick}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6b4bf0]"
            >
              <span>I&apos;ve verified my email</span>
              <span aria-hidden="true">→</span>
            </button>

            <div className="mt-5 space-y-2 text-center">
              <p className="text-[11px] text-slate-500">
                Didn&apos;t see it? Check your spam folder.
              </p>
              <Link
                href="/register"
                className="inline-block text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
              >
                Use a different email
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <p className="text-[11px] text-slate-500">© 2026 CrowdPlay</p>
          </div>
        </section>
      </div>
    </main>
  );
}