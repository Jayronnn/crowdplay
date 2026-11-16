export interface GameItem {
  id: string;
  title: string;
  badge: string;
  status: "Available First" | "Coming Soon";
  description: string;
  triggerExamples: string[];
}

interface GameCardProps {
  game: GameItem;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-cyan-400">
            {game.badge}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              game.status === "Available First"
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border border-slate-700 bg-slate-800 text-slate-400"
            }`}
          >
            {game.status}
          </span>
        </div>

        <h2 className="mt-3 text-xl font-bold text-white">{game.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {game.description}
        </p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Sample Live Triggers
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {game.triggerExamples.map((trigger) => (
              <span
                key={trigger}
                className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              >
                {trigger}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-800/80 pt-4">
        <span className="text-xs text-slate-500">
          {game.status === "Available First"
            ? "1,000-Step Obby — Ready for Studio & Live triggers"
            : "Scheduled for future expansion"}
        </span>
      </div>
    </article>
  );
}