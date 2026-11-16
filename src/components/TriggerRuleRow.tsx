export interface TriggerRule {
  id: number;
  kind: "Gift" | "Comment";
  triggerName: string;
  actionSummary: string;
}

interface TriggerRuleRowProps {
  rule: TriggerRule;
}

export function TriggerRuleRow({ rule }: TriggerRuleRowProps) {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2.5">
        <span
          className={`rounded px-2 py-0.5 font-mono text-xs font-semibold ${
            rule.kind === "Gift"
              ? "bg-indigo-500/20 text-indigo-300"
              : "bg-cyan-500/20 text-cyan-300"
          }`}
        >
          {rule.kind}
        </span>
        <span className="font-mono text-sm font-semibold text-white">
          {rule.triggerName}
        </span>
      </div>

      <span className="text-xs text-emerald-300">{rule.actionSummary}</span>
    </div>
  );
}