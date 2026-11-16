export interface StatCardItem {
  label: string;
  value: string;
  detail: string;
  accentClass: string;
}

interface StatCardProps {
  stat: StatCardItem;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${stat.accentClass}`}
      >
        {stat.label}
      </p>
      <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
      <p className="mt-2 text-xs text-slate-400">{stat.detail}</p>
    </div>
  );
}