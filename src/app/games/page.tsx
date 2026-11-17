"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

type FilterCategory = "all" | "gift" | "chat";

type GameCatalogEntry = {
  id: string;
  title: string;
  badge: string;
  badgeStyle: string;
  description: string;
  category: "gift" | "chat";
  previewKind:
    | "race"
    | "word"
    | "drop"
    | "trivia"
    | "versus"
    | "boss";
};

const GAMES: GameCatalogEntry[] = [
  {
    id: "gift-race",
    title: "Gift Race",
    badge: "GIFT-POWERED",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    description: "Gifts fuel the race. Only one takes the podium.",
    category: "gift",
    previewKind: "race",
  },
  {
    id: "word-rush",
    title: "Word Rush",
    badge: "CHAT + GIFTS",
    badgeStyle: "bg-[#1a1c38] text-[#818cf8] border-[#31366e]",
    description: "Turn your comments into a fast-paced word game.",
    category: "chat",
    previewKind: "word",
  },
  {
    id: "drop-zone",
    title: "Drop Zone",
    badge: "GIFT-POWERED",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    description: "Let the crowd drop in and chase the big score.",
    category: "gift",
    previewKind: "drop",
  },
  {
    id: "quick-fire",
    title: "Quick Fire Trivia",
    badge: "CHAT-POWERED",
    badgeStyle: "bg-[#112b26] text-[#34d399] border-[#1b5e4b]",
    description: "Which planet has the most moons? Fast chat answers win.",
    category: "chat",
    previewKind: "trivia",
  },
  {
    id: "team-clash",
    title: "Team Purple vs Blue",
    badge: "CHAT + GIFTS",
    badgeStyle: "bg-[#1a1c38] text-[#818cf8] border-[#31366e]",
    description: "Two crowd sides face off with live score momentum.",
    category: "chat",
    previewKind: "versus",
  },
  {
    id: "boss-raid",
    title: "Boss Health Raid",
    badge: "GIFT-POWERED",
    badgeStyle: "bg-[#241942] text-[#a78bfa] border-[#4c358a]",
    description: "Every gift deals damage toward taking down the boss bar.",
    category: "gift",
    previewKind: "boss",
  },
];

function CardPreview({ kind }: { kind: GameCatalogEntry["previewKind"] }) {
  if (kind === "race") {
    return (
      <div className="flex h-36 flex-col justify-center gap-3 rounded-lg border border-white/5 bg-gradient-to-br from-[#1d1433] to-[#120d21] px-5">
        <div className="relative h-px w-full bg-white/10">
          <span className="absolute -top-2.5 left-[56%] rounded bg-[#7c5dfa] px-2 py-0.5 text-[10px] font-bold text-white">
            »
          </span>
        </div>
        <div className="relative h-px w-full bg-white/10">
          <span className="absolute -top-2.5 left-[34%] rounded bg-[#0ea5e9] px-2 py-0.5 text-[10px] font-bold text-white">
            »
          </span>
        </div>
        <div className="relative h-px w-full bg-white/10">
          <span className="absolute -top-2.5 left-[68%] rounded bg-[#10b981] px-2 py-0.5 text-[10px] font-bold text-white">
            »
          </span>
        </div>
        <div className="relative h-px w-full bg-white/10">
          <span className="absolute -top-2.5 left-[44%] rounded bg-[#d97706] px-2 py-0.5 text-[10px] font-bold text-white">
            »
          </span>
        </div>
      </div>
    );
  }

  if (kind === "word") {
    const letters = [
      { char: "P", active: false },
      { char: "L", active: false },
      { char: "A", active: false },
      { char: "Y", active: true },
    ];
    return (
      <div className="flex h-36 flex-col items-center justify-center rounded-lg border border-white/5 bg-gradient-to-br from-[#14172b] to-[#0f111f] px-4">
        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
          COMPLETE THE WORD
        </p>
        <div className="grid grid-cols-4 gap-2">
          {letters.map((item) => (
            <div
              key={item.char}
              className={`flex h-11 w-11 items-center justify-center rounded-lg border text-base font-extrabold ${
                item.active
                  ? "border-[#9f8cff] bg-[#7c5dfa] text-white"
                  : "border-white/10 bg-[#1a1d2e] text-slate-200"
              }`}
            >
              {item.char}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "drop") {
    const slots = ["10", "25", "100", "25", "10"];
    return (
      <div className="flex h-36 flex-col justify-between rounded-lg border border-white/5 bg-gradient-to-br from-[#0f2229] to-[#0b151c] p-4">
        <div className="grid grid-cols-6 gap-2 pt-1">
          {Array.from({ length: 12 }).map((_, idx) => (
            <span
              key={idx}
              className="mx-auto h-1.5 w-1.5 rounded-full bg-cyan-300/35"
            />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {slots.map((val, index) => (
            <div
              key={`${val}-${index}`}
              className={`rounded py-1 text-center text-[10px] font-bold ${
                index === 2
                  ? "bg-cyan-500/25 text-cyan-200 ring-1 ring-cyan-400/40"
                  : "bg-white/5 text-slate-400"
              }`}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "trivia") {
    return (
      <div className="flex h-36 flex-col justify-between rounded-lg border border-white/5 bg-gradient-to-br from-[#171229] to-[#0e0c1a] p-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9f8cff]">
            QUICK FIRE
          </p>
          <p className="mt-1.5 text-xs font-bold text-white">
            Which planet has the most moons?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-md bg-[#7c5dfa]/25 px-2.5 py-1.5 font-medium text-purple-100 ring-1 ring-[#7c5dfa]/40">
            Saturn
          </div>
          <div className="rounded-md bg-white/5 px-2.5 py-1.5 text-slate-400">
            Mars
          </div>
        </div>
      </div>
    );
  }

  if (kind === "versus") {
    return (
      <div className="flex h-36 flex-col justify-center rounded-lg border border-white/5 bg-gradient-to-br from-[#14172b] to-[#0f111f] px-5">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em]">
          <span className="text-[#a78bfa]">TEAM PURPLE</span>
          <span className="text-sky-400">TEAM BLUE</span>
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-2xl font-extrabold text-[#a78bfa]">1,250</span>
          <span className="text-2xl font-extrabold text-sky-400">980</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-36 flex-col justify-between rounded-lg border border-white/5 bg-gradient-to-br from-[#0f2229] to-[#0b151c] p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-300/80">
        BOSS HEALTH
      </p>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-pink-400 to-rose-400" />
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xl font-extrabold text-white">62%</span>
        <span className="text-[11px] text-slate-400">
          Every gift deals damage.
        </span>
      </div>
    </div>
  );
}

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("all");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const filteredGames = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return GAMES.filter((game) => {
      const matchesFilter =
        selectedFilter === "all" || game.category === selectedFilter;
      const matchesQuery =
        !query ||
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.badge.toLowerCase().includes(query);
      return matchesFilter && matchesQuery;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="flex min-w-0 flex-col">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Game library</span>
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
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
              CREATOR WORKSPACE
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
              Game library
            </h1>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Pick a game. Bring your crowd.
            </p>
          </div>

          <p className="text-xs text-slate-400">
            {GAMES.length} games included in your Pro plan
          </p>

          {/* Search & Filter Row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[240px] flex-1 max-w-md">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500"
              >
                ⌕
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games..."
                className="w-full rounded-lg border border-white/10 bg-[#12121b] py-2 pl-9 pr-3.5 text-xs text-white placeholder-slate-500 transition focus:border-[#7c5dfa] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition ${
                  selectedFilter === "all"
                    ? "border-[#7c5dfa] bg-[#241a42] text-white"
                    : "border-white/10 bg-[#12121b] text-slate-400 hover:text-slate-200"
                }`}
              >
                All games
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter("gift")}
                className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition ${
                  selectedFilter === "gift"
                    ? "border-[#7c5dfa] bg-[#241a42] text-white"
                    : "border-white/10 bg-[#12121b] text-slate-400 hover:text-slate-200"
                }`}
              >
                Gift-powered
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter("chat")}
                className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition ${
                  selectedFilter === "chat"
                    ? "border-[#7c5dfa] bg-[#241a42] text-white"
                    : "border-white/10 bg-[#12121b] text-slate-400 hover:text-slate-200"
                }`}
              >
                Chat-powered
              </button>
            </div>
          </div>

          {/* Info Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#5a43b8]/35 bg-gradient-to-r from-[#1d1433] via-[#171229] to-[#131120] px-5 py-4">
            <div>
              <h2 className="text-sm font-bold text-white">
                Your stream. Your rules.
              </h2>
              <p className="mt-0.5 text-xs text-slate-400">
                Choose a game to configure scoring, gift rewards, and how your viewers join in.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setStatusMessage(
                  "Catalog cards are UI previews only—select Configure to open /studio."
                )
              }
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
            >
              <span>How it works</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {statusMessage && (
            <div className="rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-4 py-2.5 text-xs text-purple-100">
              {statusMessage}
            </div>
          )}

          {/* Game Cards Grid */}
          {filteredGames.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#11111a] px-6 py-10 text-center text-xs text-slate-400">
              No games match &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredGames.map((game) => (
                <article
                  key={game.id}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#11111a] p-4"
                >
                  <div>
                    <CardPreview kind={game.previewKind} />

                    <span
                      className={`mt-4 inline-block rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${game.badgeStyle}`}
                    >
                      {game.badge}
                    </span>

                    <h3 className="mt-2.5 text-base font-bold text-white">
                      {game.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {game.description}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/studio?game=${game.id}`}
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-[#171724] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                    >
                      <span>Configure</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setStatusMessage(
                          `${game.title} UI selected (no game mechanics active yet).`
                        )
                      }
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[#7c5dfa] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#6b4bf0]"
                    >
                      <span>Launch</span>
                      <span aria-hidden="true">▷</span>
                    </button>
                  </div>
                </article>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}