"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { commandPaletteData } from "@/lib/content";
import { motionTransition } from "@/lib/motion";

function useTypedPrompts(prompts: string[], reduced: boolean | null) {
  const [promptIndex, setPromptIndex] = useState(0);
  const [text, setText] = useState(prompts[0] || "");

  useEffect(() => {
    if (!prompts.length || reduced) {
      setText(prompts[0] || "");
      return;
    }

    let charIndex = 0;
    const target = prompts[promptIndex];
    setText("");

    const typeInterval = window.setInterval(() => {
      charIndex += 1;
      setText(target.slice(0, charIndex));
      if (charIndex >= target.length) {
        window.clearInterval(typeInterval);
        window.setTimeout(() => {
          setPromptIndex((prev) => (prev + 1) % prompts.length);
        }, 900);
      }
    }, 42);

    return () => window.clearInterval(typeInterval);
  }, [promptIndex, prompts, reduced]);

  return text;
}

export default function CommandPaletteShowcase() {
  const reduced = useReducedMotion();
  const flatResults = useMemo(
    () =>
      commandPaletteData.groups.flatMap((group) =>
        group.items.map((item) => ({ key: `${group.title}-${item}`, group: group.title, item }))
      ),
    []
  );
  const [active, setActive] = useState(flatResults[0]?.key || "");
  const typed = useTypedPrompts(commandPaletteData.prompts, reduced);

  return (
    <section className="py-16 sm:py-24">
      <div className="relative overflow-hidden border-y border-zinc-200/70 bg-zinc-950 py-14 dark:border-zinc-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(14,165,233,.22),transparent_34%),radial-gradient(circle_at_75%_60%,rgba(6,182,212,.18),transparent_36%)]" />
        <div className="container relative">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-medium text-sky-300">Command Palette</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ctrl+K across tasks, projects, and commands</h2>
          </div>

          <motion.div
            initial={reduced ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={motionTransition(!!reduced, 0, 0.28)}
            className="mx-auto max-w-4xl rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur"
          >
            <div className="mb-3 flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2">
              <Search className="h-4 w-4 text-zinc-500" />
              <span className="text-sm text-zinc-300">{typed || "Search tasks, projects, commands…"}</span>
              <span className={`ml-1 inline-block h-4 w-px bg-zinc-500 ${reduced ? "" : "animate-pulse"}`} aria-hidden="true" />
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_0.75fr]">
              <div className="space-y-3">
                {commandPaletteData.groups.map((group, groupIndex) => (
                  <div key={group.title}>
                    <p className="mb-1 text-[11px] uppercase tracking-wide text-zinc-500">{group.title}</p>
                    <div className="space-y-1">
                      {group.items.map((item, idx) => {
                        const key = `${group.title}-${item}`;
                        const focused = key === active;
                        return (
                          <motion.button
                            key={key}
                            type="button"
                            onMouseEnter={() => setActive(key)}
                            onFocus={() => setActive(key)}
                            className={`w-full rounded-md border px-3 py-2 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                              focused
                                ? "border-sky-500 bg-sky-500/10 text-sky-200"
                                : "border-zinc-700 text-zinc-300 hover:border-zinc-600"
                            }`}
                            initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={motionTransition(!!reduced, reduced ? 0 : (groupIndex * 3 + idx) * 0.02, 0.18)}
                          >
                            {item}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-zinc-700 bg-zinc-950/60 p-4">
                <p className="text-[11px] uppercase tracking-wide text-zinc-500">Preview</p>
                <p className="mt-2 text-sm font-medium text-zinc-100">{commandPaletteData.preview.title}</p>
                <p className="mt-1 text-xs text-zinc-400">{commandPaletteData.preview.meta}</p>
                <p className="mt-3 text-sm text-zinc-300">{commandPaletteData.preview.text}</p>

                <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3 text-[11px] text-zinc-500">
                  <span>↑ ↓ navigate</span>
                  <span>Enter select</span>
                  <span>Esc close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
