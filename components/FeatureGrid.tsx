"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Code2, KanbanSquare, Search, Timer, Users, Zap } from "lucide-react";
import { features } from "@/lib/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  kanban: KanbanSquare,
  timer: Timer,
  zap: Zap,
  search: Search,
  users: Users,
  code: Code2,
};

export default function FeatureGrid() {
  return (
    <section id="features" className="container py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Features</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything your dev team needs to ship faster</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || BadgeCheck;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.22, delay: index * 0.04 }}
            >
              <Card className="h-full transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                    <Icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
