"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = displayName.trim();
    const trimmedEmail = email.trim();
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);

    if (!trimmedName || !trimmedEmail || !password) {
      setIsError(true);
      setStatusMessage("Please fill out your display name, email address, and password.");
      return;
    }

    if (!hasMinLength || !hasNumber) {
      setIsError(true);
      setStatusMessage("Password must be at least 8 characters and include a number.");
      return;
    }

    setIsError(false);
    setStatusMessage(
      `Account details ready for ${trimmedName} (${trimmedEmail}). Trial preview staged.`
    );
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

        {/* Right Form Panel */}
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
              LET&apos;S GET YOU LIVE
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-[34px]">
              Meet your next crowd.
            </h2>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Create your account. Your 7-day trial starts here.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="displayName"
                  className="block text-xs font-medium text-slate-300"
                >
                  Display name
                </label>
                <input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your creator name"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#14141d] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#14141d] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-slate-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#14141d] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
                />
                <p className="mt-1.5 text-[11px] text-slate-500">
                  At least 8 characters, including a number.
                </p>
              </div>

              <p className="pt-1 text-[11px] leading-relaxed text-slate-500">
                By creating an account, you agree to our{" "}
                <span className="text-slate-300 underline underline-offset-2">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-slate-300 underline underline-offset-2">
                  Privacy Policy
                </span>
                .
              </p>

              {statusMessage && (
                <div
                  className={`rounded-lg border px-3.5 py-2.5 text-xs ${
                    isError
                      ? "border-rose-500/40 bg-rose-500/10 text-rose-200"
                      : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7c5dfa] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6b4bf0]"
              >
                <span>Create account</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
<p className="mt-5 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
              >
                Log in
              </Link>
            </p>
          </div>

          <div className="mx-auto w-full max-w-md">
            <p className="text-[11px] text-slate-500">© 2026 CrowdPlay</p>
          </div>
        </section>
      </div>
    </main>
  );
}