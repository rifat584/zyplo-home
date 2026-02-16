"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="container py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trusted by dev teams who ship every week</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.24, delay: idx * 0.05 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">“{item.quote}”</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
