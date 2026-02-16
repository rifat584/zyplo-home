"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Play, Square } from "lucide-react";
import { timeTrackingData } from "@/lib/content";
import { motionTransition } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TimeTrackingBento() {
  const reduced = useReducedMotion();

  return (
    <section className="container py-16 sm:py-24">
      <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-sky-50/80 via-white to-cyan-50/70 p-6 dark:border-zinc-800/80 dark:from-sky-950/20 dark:via-zinc-950 dark:to-cyan-950/10 sm:p-8">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Time Tracking & Worklog</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Timer-first logging that feels built into the board</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionTransition(!!reduced, 0, 0.24)}
            className="rounded-xl border border-zinc-200 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-950/75 lg:col-span-2"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Current task</p>
                <p className="text-sm font-medium">{timeTrackingData.currentTask}</p>
              </div>
              <Badge>Running</Badge>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="relative grid h-36 w-36 place-items-center rounded-full border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/70">
                <motion.div
                  aria-hidden="true"
                  animate={reduced ? {} : { scale: [1, 1.04, 1], opacity: [0.55, 0.8, 0.55] }}
                  transition={reduced ? { duration: 0 } : { duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-3 rounded-full border border-sky-300/80 dark:border-sky-900"
                />
                <span className="text-2xl font-semibold tabular-nums">{timeTrackingData.running}</span>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="gap-1.5"><Play className="h-3.5 w-3.5" />Start</Button>
                  <Button size="sm" variant="outline" className="gap-1.5"><Square className="h-3.5 w-3.5" />Stop</Button>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <motion.div
                    initial={{ width: reduced ? "72%" : "0%" }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={motionTransition(!!reduced, 0.05, 0.35)}
                    className="h-full rounded-full bg-sky-500"
                  />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">session synced to sprint analytics</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionTransition(!!reduced, 0.06, 0.24)}
            className="rounded-xl border border-zinc-200 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-950/75"
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Weekly total</p>
            <p className="mt-1 text-2xl font-semibold">{timeTrackingData.weeklyTotal}</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">{timeTrackingData.trend} vs last week</p>
            <div className="mt-4 flex items-end gap-1.5">
              {timeTrackingData.bars.map((height, idx) => (
                <div key={`${height}-${idx}`} className="flex flex-col items-center gap-1">
                  <motion.div
                    initial={{ height: reduced ? `${height}%` : "20%" }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={motionTransition(!!reduced, reduced ? 0 : idx * 0.03, 0.24)}
                    className="w-3 rounded-sm bg-gradient-to-t from-sky-500 to-cyan-400"
                    style={{ minHeight: 14 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionTransition(!!reduced, 0.03, 0.24)}
            className="rounded-xl border border-zinc-200 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-950/75"
          >
            <p className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">Recent worklog entries</p>
            <div className="space-y-2">
              {timeTrackingData.entries.map((entry) => (
                <div
                  key={`${entry.task}-${entry.when}`}
                  className="rounded-md border border-zinc-200 px-3 py-2 text-xs transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-zinc-700 dark:hover:border-sky-900"
                >
                  <p className="text-zinc-700 dark:text-zinc-200">{entry.task}</p>
                  <div className="mt-1 flex items-center justify-between text-zinc-500">
                    <span>{entry.when}</span>
                    <span>{entry.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionTransition(!!reduced, 0.09, 0.24)}
            className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white/85 p-5 dark:border-zinc-800 dark:bg-zinc-950/75"
          >
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Worklog export</p>
              <p className="text-sm font-medium">CSV ready for sprint review</p>
            </div>
            <Button size="sm" variant="outline" className="gap-1.5"><Download className="h-3.5 w-3.5" />Export CSV</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
