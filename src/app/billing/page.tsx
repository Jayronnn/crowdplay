"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type PlanTier = {
  id: "starter" | "creator" | "pro";
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
};

const PLANS: PlanTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$12",
    period: "/ month",
    features: [
      "3 interactive games",
      "Core gift & comment triggers",
      "Session leaderboards",
    ],
    ctaLabel: "Switch to Starter",
  },
  {
    id: "creator",
    name: "Creator",
    price: "$29",
    period: "/ month",
    features: [
      "All 6 interactive games",
      "Custom rules & gift rewards",
      "Persistent player rankings",
    ],
    ctaLabel: "Switch to Creator",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$59",
    period: "/ month",
    features: [
      "Everything in Creator",
      "Advanced event controls",
      "Priority support",
    ],
    ctaLabel: "Manage plan",
  },
];

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState<PlanTier["id"]>("pro");
  const [billingNotice, setBillingNotice] = useState<string | null>(null);

  function handlePlanAction(plan: PlanTier) {
    setCurrentPlan(plan.id);
    setBillingNotice(
      plan.id === currentPlan
        ? `${plan.name} plan (${plan.price} ${plan.period}) is selected in billing preview.`
        : `Switched active preview plan to ${plan.name} (${plan.price} ${plan.period}).`
    );
  }

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 lg:grid lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="flex min-w-0 flex-col">
        {/* Top Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b0b12] px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="font-medium text-slate-200">Billing</span>
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
        <main className="mx-auto w-full max-w-6xl space-y-6 px-6 py-7">
          {/* Header */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b76ff]">
              CREATOR WORKSPACE
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
              Subscription &amp; billing
            </h1>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Everything you need to manage your plan.
            </p>
          </div>

          {/* Active Plan Banner */}
          <section className="flex flex-wrap items-center justify-between gap-5 rounded-xl border border-[#5a43b8]/40 bg-gradient-to-r from-[#241745] via-[#1c1336] to-[#151026] p-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#c4b5fd]">
                  {currentPlan.toUpperCase()} PLAN
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  Active
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                More play. No limits on creativity.
              </h2>
              <p className="mt-1.5 text-xs text-slate-300/80">
                $59 / month · Next payment on December 15, 2026
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <button
                type="button"
                onClick={() =>
                  setBillingNotice(
                    "Subscription management preview opened (no real charge processed)."
                  )
                }
                className="rounded-lg border border-white/15 bg-[#1b182b] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Manage subscription
              </button>
              <span className="mt-2 text-[11px] text-slate-400">
                Monthly billing · USD
              </span>
            </div>
          </section>

          {billingNotice && (
            <div className="rounded-lg border border-[#7c5dfa]/40 bg-[#7c5dfa]/10 px-4 py-2.5 text-xs text-purple-100">
              {billingNotice}
            </div>
          )}

          {/* Plan Comparison Cards */}
          <section className="space-y-4">
            <h2 className="text-base font-bold text-white">
              Find your perfect fit
            </h2>

            <div className="grid gap-5 lg:grid-cols-3">
              {PLANS.map((plan) => {
                const isCurrent = currentPlan === plan.id;

                return (
                  <article
                    key={plan.id}
                    className={`flex flex-col justify-between rounded-xl border p-6 ${
                      isCurrent
                        ? "border-[#7c5dfa] bg-gradient-to-b from-[#1a142e] to-[#11111a]"
                        : "border-white/10 bg-[#11111a]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {plan.name}
                        </h3>
                        {isCurrent && (
                          <span className="rounded bg-[#2b1f4d] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#b9abff]">
                            YOUR PLAN
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold tracking-tight text-white">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-400">
                          {plan.period}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5">
                            <span
                              aria-hidden="true"
                              className="text-xs font-bold text-[#9f8cff]"
                            >
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePlanAction(plan)}
                      className={`mt-7 w-full rounded-lg px-4 py-2.5 text-xs font-semibold transition ${
                        isCurrent
                          ? "bg-[#7c5dfa] text-white hover:bg-[#6b4bf0]"
                          : "border border-white/10 bg-[#171724] text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {isCurrent ? "Manage plan" : plan.ctaLabel}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Bottom Split: Payment method + Billing details */}
          <section className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div>
                <h2 className="text-sm font-bold text-white">
                  Payment method
                </h2>
                <div className="mt-3.5 flex items-center gap-3">
                  <span className="rounded border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-sky-300">
                    VISA
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold text-white">
                      •••• 4242
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Expires 08/2028
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setBillingNotice(
                    "Card update modal preview (VISA •••• 4242)."
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
              >
                <span>Update</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#11111a] p-5">
              <div>
                <h2 className="text-sm font-bold text-white">
                  Billing details
                </h2>
                <div className="mt-3.5">
                  <p className="text-xs font-semibold text-white">Alex Nova</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    alex@yourstream.com
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setBillingNotice(
                    "Billing details preview for Alex Nova (alex@yourstream.com)."
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-medium text-[#9f8cff] transition hover:text-[#b9abff]"
              >
                <span>Edit</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}