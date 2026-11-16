import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row">
        <div>
          <span className="font-semibold text-slate-200">CrowdPlay</span> —
          Interactive TikTok LIVE &amp; TikFinity SaaS (1,000-Step Obby)
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/games" className="transition hover:text-white">
            Games
          </Link>
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
          <Link href="/studio" className="transition hover:text-white">
            Studio
          </Link>
          <Link href="/live-studio" className="transition hover:text-white">
            Live Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}