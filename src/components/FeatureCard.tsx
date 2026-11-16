export interface WorkflowStep {
  stepCode: string;
  title: string;
  description: string;
  stepColorClass: string;
}

interface FeatureCardProps {
  step: WorkflowStep;
}

export function FeatureCard({ step }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
      <span className={`text-xs font-bold ${step.stepColorClass}`}>
        {step.stepCode}
      </span>
      <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        {step.description}
      </p>
    </div>
  );
}