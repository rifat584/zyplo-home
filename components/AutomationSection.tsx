"use client";

import { motion } from "framer-motion";
import { Bell, Flame, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AutomationSection() {
  return (
    <section className="container py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.25 }}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="text-base">Rules Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                <p className="mb-1 font-medium">When</p>
                <p className="text-zinc-600 dark:text-zinc-300">Task due date passes and status != done</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                <p className="mb-1 font-medium">Then</p>
                <p className="text-zinc-600 dark:text-zinc-300">Set priority to high, color card red, optionally notify assignee</p>
              </div>
              <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
                <span className="inline-flex items-center gap-2"><Flame className="h-4 w-4" />Overdue: API timeout in payments webhook</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.25 }}>
          <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Smart Automation</p>
          <h3 className="text-3xl font-semibold tracking-tight">Let stale tasks escalate automatically</h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Zyplo catches overdue work before standup: tasks can auto-upgrade to high priority, turn red, and trigger optional notifications.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="gap-2"><WandSparkles className="h-3.5 w-3.5" />Rule-based priorities</Badge>
            <Badge className="gap-2"><Bell className="h-3.5 w-3.5" />Optional auto-notifications</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
