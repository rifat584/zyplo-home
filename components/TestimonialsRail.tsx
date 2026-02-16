"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { testimonialStats, testimonialsRailData } from "@/lib/content";
import { motionTransition } from "@/lib/motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsRail() {
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!railRef.current || !viewportRef.current) return;
      const trackWidth = railRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      setMaxDrag(Math.max(0, trackWidth - viewportWidth));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="container py-16 sm:py-24">
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {testimonialStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionTransition(!!reduced, reduced ? 0 : idx * 0.04, 0.2)}
            className="rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for dev teams that care about flow</h2>
      </div>

      <div ref={viewportRef} className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/30">
        <motion.div
          ref={railRef}
          drag={maxDrag > 0 ? "x" : false}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.05}
          className="flex cursor-grab gap-3 active:cursor-grabbing"
        >
          {testimonialsRailData.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={motionTransition(!!reduced, reduced ? 0 : idx * 0.04, 0.22)}
              whileHover={reduced ? {} : { y: -3 }}
              className={`shrink-0 snap-start rounded-xl border p-5 shadow-sm ${
                item.featured
                  ? "w-[360px] border-transparent bg-gradient-to-br from-sky-500/20 via-white to-cyan-500/20 dark:from-sky-900/40 dark:via-zinc-950 dark:to-cyan-900/30"
                  : "w-[300px] border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/75"
              }`}
            >
              <p className="text-sm text-zinc-700 dark:text-zinc-300">“{item.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
