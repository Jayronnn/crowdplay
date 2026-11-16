"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RegisterPage() {
  const [creatorName, setCreatorName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!creatorName.trim() || !email.trim() || !password.trim()) {
      setStatusMessage("Please fill out your name, email, and password.");
      return;
    }

    if (password.length < 6) {
      setStatusMessage("Password must be at least 6 characters.");
      return;
    }

    setStatusMessage(
      `Registration preview ready for ${creatorName} (${email}).`
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-14">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Streamer Sign Up
          </span>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
            Register for CrowdPlay
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Create your streamer profile to launch interactive TikTok LIVE games.
          </p>

          <form onSubmit={handleRegister} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="creatorName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Streamer / Display Name
              </label>
              <input
                id="creatorName"
                type="text"
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                placeholder="LiveCreator99"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="streamer@example.com"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {statusMessage && (
              <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-200">
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">
              Back to Home
            </Link>
            <Link href="/dashboard" className="text-indigo-400 hover:text-indigo-300">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}