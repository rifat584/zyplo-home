"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bell,
  CalendarClock,
  CheckSquare,
  ChevronDown,
  Clock3,
  FolderKanban,
  GripVertical,
  KanbanSquare,
  LayoutDashboard,
  MoreHorizontal,
  Search,
  Settings,
} from "lucide-react";
import {
  heroActivity,
  heroCommandPaletteGroups,
  heroKanbanColumns,
  heroSelectedTask,
  heroSidebarNav,
  heroWeeklyBars,
  heroWorklogEntries,
} from "@/lib/content";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sidebarIconMap = {
  layout: LayoutDashboard,
  folder: FolderKanban,
  "check-square": CheckSquare,
  kanban: KanbanSquare,
  clock: Clock3,
  "bar-chart": BarChart3,
  settings: Settings,
};

const priorityStyles = {
  High: "border-red-300 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300",
  Med: "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
  Low: "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300",
};

const tagStyles = {
  bug: "border-red-300 text-red-700 dark:border-red-900 dark:text-red-300",
  feature: "border-sky-300 text-sky-700 dark:border-sky-900 dark:text-sky-300",
  chore: "border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
};

export default function HeroAppMock() {
  const reduced = useReducedMotion();
  const transition = reduced ? { duration: 0 } : { duration: 0.22, ease: "easeOut" };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-2xl dark:border-zinc-800/90 dark:bg-zinc-950/80">
      <div className="flex h-12 items-center justify-between border-b border-zinc-200/90 px-3 dark:border-zinc-800/90">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 text-xs font-semibold text-white">
            Z
          </span>
          <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-xs">
            DaoScroll / Zyplo Core
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" className="h-7 gap-1.5 px-2 text-[11px]">
            <Search className="h-3.5 w-3.5" />
            Search
            <span className="rounded border border-zinc-300 px-1 py-0 text-[10px] dark:border-zinc-700">Ctrl+K</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0" aria-label="Notifications">
            <Bell className="h-3.5 w-3.5" />
          </Button>
          <Avatar className="h-7 w-7 border border-zinc-300 dark:border-zinc-700">
            <AvatarFallback className="text-[10px]">RF</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[170px_1fr_320px]">
        <aside className="hidden border-r border-zinc-200/90 bg-zinc-50/80 p-2 dark:border-zinc-800/90 dark:bg-zinc-900/40 lg:block">
          <div className="space-y-1">
            {heroSidebarNav.map((item) => {
              const Icon = sidebarIconMap[item.icon] || KanbanSquare;
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs ${
                    item.active
                      ? "border border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-300"
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </aside>

        <section className="border-b border-zinc-200/80 p-3 dark:border-zinc-800/80 lg:border-b-0">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Projects / Zyplo / Sprint 3</p>
              <h3 className="text-sm font-semibold">Sprint Board</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge className="text-[10px]">Status</Badge>
              <Badge className="text-[10px]">Priority</Badge>
              <Badge className="text-[10px]">Assignee</Badge>
              <Button size="sm" className="h-7 px-2 text-[11px]">New Task</Button>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {heroKanbanColumns.map((column, columnIndex) => (
              <motion.div
                key={column.key}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: reduced ? 0 : columnIndex * 0.04 }}
                className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-2 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[11px] font-medium text-zinc-700 dark:text-zinc-200">{column.title}</p>
                    <span className="rounded-full bg-zinc-200 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {column.count}
                    </span>
                    {column.wip ? <span className="text-[10px] text-amber-600 dark:text-amber-400">{column.wip}</span> : null}
                  </div>
                  <MoreHorizontal className="h-3.5 w-3.5 text-zinc-500" />
                </div>

                <div className="space-y-2">
                  {column.tasks.map((task, taskIndex) => (
                    <motion.div
                      key={task.id}
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={reduced ? {} : { y: -2 }}
                      transition={{ ...transition, delay: reduced ? 0 : columnIndex * 0.05 + taskIndex * 0.03 }}
                      className="rounded-md border border-zinc-200 bg-white p-2 shadow-sm hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:border-sky-900"
                    >
                      <div className="mb-1.5 flex items-start justify-between gap-2">
                        <p className="text-[11px] leading-4 text-zinc-800 dark:text-zinc-100">{task.title}</p>
                        <GripVertical className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400" />
                      </div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-1">
                        <span className={`rounded border px-1.5 py-0.5 text-[10px] ${tagStyles[task.tag] || tagStyles.chore}`}>
                          {task.tag}
                        </span>
                        <span className={`rounded border px-1.5 py-0.5 text-[10px] ${priorityStyles[task.priority] || priorityStyles.Med}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
                        <span className={`inline-flex items-center gap-1 ${task.overdue ? "text-red-600 dark:text-red-300" : ""}`}>
                          <CalendarClock className="h-3 w-3" />
                          {task.due}
                        </span>
                        <span className="rounded border border-zinc-300 px-1.5 py-0.5 dark:border-zinc-700">{task.estimate}</span>
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[9px] dark:border-zinc-700">
                          {task.assignee}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.aside
          initial={reduced ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: reduced ? 0 : 0.12 }}
          className="border-l border-zinc-200/80 bg-white/90 p-3 dark:border-zinc-800/80 dark:bg-zinc-950/90"
        >
          <div className="mb-2 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-[10px] text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
            Automation Applied: Overdue -> High Priority
          </div>

          <h4 className="text-sm font-semibold">{heroSelectedTask.title}</h4>
          <div className="mt-2 grid grid-cols-3 gap-1.5 text-[10px]">
            <button className="flex items-center justify-between rounded border border-zinc-300 px-1.5 py-1 dark:border-zinc-700">
              {heroSelectedTask.status}
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center justify-between rounded border border-zinc-300 px-1.5 py-1 dark:border-zinc-700">
              {heroSelectedTask.priority}
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center justify-between rounded border border-zinc-300 px-1.5 py-1 dark:border-zinc-700">
              {heroSelectedTask.assignee}
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {heroSelectedTask.labels.map((label) => (
              <Badge key={label} className="text-[10px]">
                {label}
              </Badge>
            ))}
            <Badge className="text-[10px]">Due {heroSelectedTask.due}</Badge>
          </div>

          <Tabs defaultValue="worklog" className="mt-3">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details" className="text-[10px]">Details</TabsTrigger>
              <TabsTrigger value="worklog" className="text-[10px]">Worklog</TabsTrigger>
              <TabsTrigger value="activity" className="text-[10px]">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-2">
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">{heroSelectedTask.description}</p>
              <div className="space-y-1.5 rounded-md border border-zinc-200 p-2 dark:border-zinc-800">
                {heroSelectedTask.checklist.map((item) => (
                  <p key={item} className="text-[11px] text-zinc-600 dark:text-zinc-300">• {item}</p>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="worklog" className="space-y-2">
              <div className="rounded-md border border-zinc-200 p-2 dark:border-zinc-800">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-[10px] text-zinc-500">Current Session</p>
                  <Badge className="text-[10px]">Running</Badge>
                </div>
                <div className="mb-1 text-sm font-semibold tabular-nums">12:45</div>
                <div className="flex gap-1.5">
                  <Button size="sm" className="h-6 px-2 text-[10px]">Start</Button>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-[10px]">Stop</Button>
                </div>
                <Input className="mt-2 h-7 text-[10px]" placeholder="Add note" />
              </div>

              <div className="space-y-1.5 rounded-md border border-zinc-200 p-2 dark:border-zinc-800">
                {heroWorklogEntries.map((entry) => (
                  <div key={`${entry.date}-${entry.note}`} className="flex items-start justify-between gap-2 text-[10px]">
                    <div>
                      <p className="text-zinc-700 dark:text-zinc-200">{entry.note}</p>
                      <p className="text-zinc-500">{entry.date}</p>
                    </div>
                    <span className="rounded border border-zinc-300 px-1.5 py-0.5 dark:border-zinc-700">{entry.duration}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-md border border-zinc-200 p-2 dark:border-zinc-800">
                <p className="mb-1 text-[10px] text-zinc-500">Weekly Total: 6h 10m</p>
                <div className="flex items-end gap-1.5">
                  {heroWeeklyBars.map((bar) => (
                    <div key={bar.day} className="flex flex-col items-center gap-1">
                      <div className="w-3 rounded-sm bg-sky-500/80" style={{ height: `${Math.max(10, Math.round(bar.minutes / 2))}px` }} />
                      <span className="text-[9px] text-zinc-500">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-1.5 rounded-md border border-zinc-200 p-2 dark:border-zinc-800">
              {heroActivity.map((event) => (
                <p key={event} className="text-[11px] text-zinc-600 dark:text-zinc-300">• {event}</p>
              ))}
            </TabsContent>
          </Tabs>
        </motion.aside>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: reduced ? 0 : 0.18 }}
        className="pointer-events-none absolute inset-0 bg-zinc-950/25 backdrop-blur-[1.5px]"
      />
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 8, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...transition, delay: reduced ? 0 : 0.2 }}
        className="pointer-events-none absolute left-1/2 top-[19%] w-[92%] max-w-lg -translate-x-1/2 rounded-lg border border-zinc-300/80 bg-white/95 p-2.5 shadow-2xl dark:border-zinc-700/90 dark:bg-zinc-900/95"
      >
        <div className="mb-2 flex items-center gap-2 rounded-md border border-zinc-300/80 px-2 py-1.5 dark:border-zinc-700/90">
          <Search className="h-3.5 w-3.5 text-zinc-500" />
          <span className="text-xs text-zinc-500">Search tasks, projects, commands…</span>
        </div>

        <div className="space-y-2">
          {heroCommandPaletteGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <p className="mb-1 text-[10px] uppercase tracking-wide text-zinc-500">{group.title}</p>
              <div className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`rounded-md border px-2 py-1 text-xs ${
                      groupIndex === 0 && itemIndex === 0
                        ? "border-sky-300 bg-sky-50 text-sky-700 shadow-[0_0_0_1px_rgba(14,165,233,.2)] dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-300"
                        : "border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-zinc-200 pt-2 text-[10px] text-zinc-500 dark:border-zinc-700">
          <span>↑ ↓ to navigate</span>
          <span>Enter to select</span>
          <span>Esc to close</span>
        </div>
      </motion.div>
    </div>
  );
}
