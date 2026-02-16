"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { workflowSteps } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WorkflowTabs() {
  const [active, setActive] = useState("plan");

  return (
    <section id="workflow" className="container py-16 sm:py-24">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Workflow</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Plan, build, and review with one dev-native flow</h2>
      </div>

      <Tabs defaultValue="plan" value={active} onValueChange={setActive}>
        <TabsList>
          {workflowSteps.map((step) => (
            <TabsTrigger key={step.value} value={step.value}>
              {step.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {workflowSteps.map((step) => (
          <TabsContent key={step.value} value={step.value}>
            <AnimatePresence mode="wait">
              {active === step.value ? (
                <motion.div
                  key={step.value}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.text}</p>
                    </CardHeader>
                    <CardContent className="grid gap-3 sm:grid-cols-3">
                      {step.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-lg border border-zinc-200 bg-white/60 p-3 text-sm dark:border-zinc-800 dark:bg-zinc-950/60">
                          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{bullet}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
