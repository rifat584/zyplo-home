"use client";

import { motion } from "framer-motion";
import { Clock3, Play, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TimeTrackingSection() {
  return (
    <section className="container py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.25 }}>
          <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Time Tracking & Worklog</p>
          <h3 className="text-3xl font-semibold tracking-tight">Track real effort without leaving your task flow</h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Start and stop timers directly on tasks. Zyplo stores `timeSpent` automatically and rolls up daily and weekly totals for sprint reviews.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.25 }}>
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                Active Timer
                <Badge>In Progress</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />Implement command filters</span>
                <strong>01:16:42</strong>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 py-2 text-sm hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:border-zinc-700 dark:hover:bg-zinc-900"><Play className="h-4 w-4" />Start</button>
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 py-2 text-sm hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:border-zinc-700 dark:hover:bg-zinc-900"><Square className="h-4 w-4" />Stop</button>
              </div>
              <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                <p className="mb-2 text-xs text-zinc-500">Weekly Summary</p>
                <div className="space-y-1 text-zinc-700 dark:text-zinc-300">
                  <div className="flex justify-between"><span>Mon</span><span>4h 20m</span></div>
                  <div className="flex justify-between"><span>Tue</span><span>5h 10m</span></div>
                  <div className="flex justify-between"><span>Wed</span><span>6h 03m</span></div>
                  <div className="flex justify-between font-medium"><span>Total</span><span>27h 18m</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
