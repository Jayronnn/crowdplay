"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarNavItem = {
  label: string;
  href: string;
  matchPrefix?: boolean;
};

const WORKSPACE_NAV_ITEMS: SidebarNavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Game library", href: "/games" },
  { label: "Game studio", href: "/studio" },
  { label: "Live studio", href: "/live-studio" },
  { label: "Leaderboards", href: "/leaderboards" },
  { label: "Billing", href: "/billing" },
  { label: "Settings", href: "/settings" },
  { label: "Admin console", href: "/login" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col justify-between border-b border-white/10 bg-[#0b0a12] px-3.5 py-4 lg:min-h-screen lg:border-b-0 lg:border-r">
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 px-2.5 py-1.5 text-white"
        >
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

        <div className="mt-4 rounded-xl border border-white/10 bg-[#141222] px-3 py-2.5">
          <p className="text-xs font-semibold text-white">Alex&apos;s workspace</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            PRO WORKSPACE
          </p>
        </div>

        <p className="mt-5 px-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          WORKSPACE
        </p>

        <nav aria-label="Workspace navigation" className="mt-2 space-y-1">
          {WORKSPACE_NAV_ITEMS.map((item) => {
            const isActive =
              !item.href.includes("#") &&
              (pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`)));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#22193b] text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-[#9f8cff]" : "bg-slate-600"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-[#141222] px-3 py-2.5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9f8cff]">
          PRO PLAN
        </p>
      </div>
    </aside>
  );
}