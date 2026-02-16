"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = createContext(null);
const ItemContext = createContext(null);

export function Accordion({ type = "single", collapsible = false, className, children }) {
  const [value, setValue] = useState("");

  const toggle = (next) => {
    if (type !== "single") return;
    if (collapsible && value === next) {
      setValue("");
      return;
    }
    setValue(next);
  };

  const context = useMemo(() => ({ value, toggle }), [value]);
  return (
    <AccordionContext.Provider value={context}>
      <div className={cn(className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, className, children }) {
  return (
    <ItemContext.Provider value={value}>
      <div className={cn("border-b border-zinc-200 dark:border-zinc-800", className)}>{children}</div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ className, children }) {
  const ctx = useContext(AccordionContext);
  const itemValue = useContext(ItemContext);
  const open = ctx?.value === itemValue;

  return (
    <button
      type="button"
      onClick={() => ctx?.toggle(itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:hover:text-zinc-100",
        className
      )}
      aria-expanded={open}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
    </button>
  );
}

export function AccordionContent({ className, children }) {
  const ctx = useContext(AccordionContext);
  const itemValue = useContext(ItemContext);
  if (ctx?.value !== itemValue) return null;
  return <div className={cn("pb-4 text-sm text-zinc-600 dark:text-zinc-400", className)}>{children}</div>;
}
