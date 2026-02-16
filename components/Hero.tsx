import { CheckCircle2 } from "lucide-react";
import { heroValueProps } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroAppMock from "@/components/HeroAppMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.14),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.1),transparent_36%)]" />
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Badge className="mb-4">Built for web dev teams</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Kanban + sprint planning built for teams that ship web apps.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Track execution with per-task timers and weekly worklogs, let overdue issues auto-turn red and high priority, and jump across tasks, projects, and users instantly with Ctrl+K.
          </p>
          <div className="mt-6 space-y-2">
            {heroValueProps.map((item) => (
              <p key={item} className="inline-flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Get started free</Button>
            <Button size="lg" variant="outline">
              View demo
            </Button>
          </div>
        </div>

        <HeroAppMock />
      </div>
    </section>
  );
}
