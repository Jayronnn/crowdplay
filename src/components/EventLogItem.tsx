export interface LiveEventLog {
  id: number;
  source: "Gift" | "Comment";
  detail: string;
  effect: string;
}

interface EventLogItemProps {
  item: LiveEventLog;
}

export function EventLogItem({ item }: EventLogItemProps) {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 sm:flex-row sm:items-center">
      <div>
        <span
          className={`mr-2 inline-block rounded px-2 py-0.5 font-mono text-xs font-semibold ${
            item.source === "Gift"
              ? "bg-indigo-500/20 text-indigo-300"
              : "bg-cyan-500/20 text-cyan-300"
          }`}
        >
          {item.source}
        </span>
        <span className="text-sm text-slate-200">{item.detail}</span>
      </div>
      <span className="font-mono text-xs text-emerald-300">{item.effect}</span>
    </div>
  );
}