"use client";

import { cloneElement, createContext, isValidElement, useContext, useMemo, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogContext = createContext(null);

export function Dialog({ open, onOpenChange, children }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const controlled = open !== undefined;
  const current = controlled ? open : internalOpen;

  const setOpen = (next) => {
    onOpenChange?.(next);
    if (!controlled) setInternalOpen(next);
  };

  const value = useMemo(() => ({ open: current, setOpen }), [current]);
  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild = false, children }) {
  const ctx = useContext(DialogContext);

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        ctx?.setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => ctx?.setOpen(true)}>
      {children}
    </button>
  );
}

export function DialogContent({ className, children }) {
  const ctx = useContext(DialogContext);
  if (!ctx?.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close dialog" onClick={() => ctx.setOpen(false)} />
      <div className={cn("relative z-10 w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-950", className)}>
        <button
          type="button"
          onClick={() => ctx.setOpen(false)}
          className="absolute right-3 top-3 rounded p-1 text-zinc-500 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:hover:bg-zinc-800"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className, children }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function DialogTitle({ className, children }) {
  return <h3 className={cn("text-base font-semibold", className)}>{children}</h3>;
}

export function DialogDescription({ className, children }) {
  return <p className={cn("mt-1 text-sm text-zinc-600 dark:text-zinc-400", className)}>{children}</p>;
}
