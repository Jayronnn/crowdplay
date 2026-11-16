import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GameCard, type GameItem } from "@/components/GameCard";

const GAMES: GameItem[] = [
  {
    id: "1000-step-obby",
    title: "1,000-Step Obby",
    badge: "3D Obstacle Challenge",
    status: "Available First",
    description:
      "Climb a massive 1,000-step 3D obstacle course powered by Three.js while TikTok LIVE chat gifts boost speed, spawn hazards, or push players forward.",
    triggerExamples: ["Gift: Boost Steps", "Comment: !jump", "Gift: Gravity Flip"],
  },
  {
    id: "crowd-arena-dash",
    title: "Crowd Arena Dash",
    badge: "Live Survival Mode",
    status: "Coming Soon",
    description:
      "Survive shifting platforms and audience-triggered chaos waves during high-energy TikTok LIVE streams.",
    triggerExamples: ["Gift: Meteor Drop", "Comment: !shield"],
  },
  {
    id: "gift-tower-climb",
    title: "Gift Tower Climb",
    badge: "Interactive Vertical Race",
    status: "Coming Soon",
    description:
      "A vertical climbing showdown where supporter milestones unlock checkpoints and bonus multipliers.",
    triggerExamples: ["Gift: Checkpoint", "Gift: Turbo Climb"],
  },
];

export default function GamesPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Game Library
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Interactive TikTok LIVE Games
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Start with our flagship{" "}
              <strong className="text-slate-200">1,000-Step Obby</strong>{" "}
              challenge and expand your stream lineup with new real-time games
              as they launch.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}