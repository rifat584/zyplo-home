"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bell, Sparkles, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { automationRulesData } from "@/lib/content";
import { motionTransition } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AutomationShowcase() {
  const reduced = useReducedMotion();
  const [after, setAfter] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setAfter((prev) => !prev), 2800);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const state = after ? automationRulesData.after : automationRulesData.before;

  return (
    <section className="container py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 p-6 dark:border-zinc-800/80 sm:p-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(14,165,233,.12),transparent_28%),linear-gradient(315deg,rgba(239,68,68,.08),transparent_30%)] dark:bg-[linear-gradient(135deg,rgba(14,165,233,.18),transparent_35%),linear-gradient(315deg,rgba(239,68,68,.14),transparent_35%)]" />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Smart Automation</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Turn stale tasks into visible action instantly</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Define one rule and let Zyplo auto-flag overdue work, bump priority, and notify the owner without standup overhead.
            </p>

            <div className="mt-5 rounded-xl border border-zinc-200 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/70">
              <p className="mb-2 text-xs text-zinc-500">Rule builder</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{automationRulesData.rule}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => setAfter((prev) => !prev)} className="gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Simulate transition
              </Button>
              <Badge className="gap-1.5"><Bell className="h-3 w-3" />Notify assignee</Badge>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-zinc-200 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/70">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Before / After</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={after ? "after" : "before"}
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={motionTransition(!!reduced, 0, 0.22)}
                className={`rounded-lg border p-4 ${
                  after
                    ? "border-red-300 bg-red-50/80 dark:border-red-900 dark:bg-red-950/30"
                    : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-950"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{state.title}</p>
                  {after ? <TriangleAlert className="h-4 w-4 text-red-600 dark:text-red-300" /> : null}
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge>{state.label}</Badge>
                  <Badge className={after ? "border-red-300 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300" : ""}>
                    Priority: {state.priority}
                  </Badge>
                </div>
                <p className={`mt-2 text-xs ${after ? "text-red-700 dark:text-red-300" : "text-zinc-500 dark:text-zinc-400"}`}>{state.due}</p>
              </motion.div>
            </AnimatePresence>

            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
              {automationRulesData.notes.map((note, idx) => (
                <motion.p
                  key={note}
                  initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={motionTransition(!!reduced, reduced ? 0 : idx * 0.04, 0.16)}
                  className="text-xs text-zinc-600 dark:text-zinc-300"
                >
                  • {note}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
