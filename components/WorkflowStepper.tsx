"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { workflowStepsData } from "@/lib/content";
import { motionTransition } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";

export default function WorkflowStepper() {
  const [active, setActive] = useState("plan");
  const reduced = useReducedMotion();
  const step = workflowStepsData.find((item) => item.id === active) || workflowStepsData[0];

  return (
    <section id="workflow" className="container py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/75 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/60 sm:p-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(161,161,170,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,.12)_1px,transparent_1px)] bg-[size:22px_22px] dark:bg-[linear-gradient(to_right,rgba(63,63,70,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,.35)_1px,transparent_1px)]" />

        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Workflow</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Plan, build, and ship without losing thread</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {workflowStepsData.map((item, index) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`w-full rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "border-sky-300 bg-sky-50/80 dark:border-sky-900 dark:bg-sky-950/30"
                      : "border-zinc-200 bg-white/70 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center">
                      {isActive ? <CheckCircle2 className="h-5 w-5 text-sky-600 dark:text-sky-400" /> : <Circle className="h-4 w-4 text-zinc-400" />}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{index + 1}. {item.label}</p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.title}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                transition={motionTransition(!!reduced, 0, 0.22)}
              >
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{step.label}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{step.text}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {step.bullets.map((bullet) => (
                    <Badge key={bullet} className="text-[11px]">{bullet}</Badge>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-zinc-200 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-200">{step.panel.heading}</p>
                    <span className="text-[10px] text-zinc-500">live preview</span>
                  </div>
                  <div className="space-y-2">
                    {step.panel.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={motionTransition(!!reduced, reduced ? 0 : idx * 0.04, 0.18)}
                        className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
