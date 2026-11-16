import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
            CP
          </span>
          <div>
            <span className="text-lg font-bold tracking-tight text-white">
              CrowdPlay
            </span>
            <p className="text-xs text-slate-400">Your Audience. Your Game.</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <Link
            href="/games"
            className="text-slate-300 transition hover:text-white"
          >
            Games
          </Link>
          <Link
            href="/dashboard"
            className="text-slate-300 transition hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/studio"
            className="text-slate-300 transition hover:text-white"
          >
            Studio
          </Link>
          <Link
            href="/live-studio"
            className="rounded-lg bg-indigo-600 px-3.5 py-1.5 font-medium text-white transition hover:bg-indigo-500"
          >
            Live Studio
          </Link>
        </nav>
      </div>
    </header>
  );
}