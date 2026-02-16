"use client";

import { cloneElement, createContext, isValidElement, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const MenuContext = createContext(null);

export function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return (
    <MenuContext.Provider value={value}>
      <div className="relative inline-block">{children}</div>
    </MenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ asChild = false, children }) {
  const ctx = useContext(MenuContext);

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        ctx?.setOpen(!ctx.open);
      },
    });
  }

  return (
    <button type="button" onClick={() => ctx?.setOpen(!ctx.open)}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ className, align = "end", children }) {
  const ctx = useContext(MenuContext);
  if (!ctx?.open) return null;

  return (
    <div
      role="menu"
      className={cn(
        "absolute z-30 mt-2 min-w-[10rem] rounded-md border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900",
        align === "end" ? "right-0" : "left-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ className, onSelect, children }) {
  const ctx = useContext(MenuContext);

  return (
    <button
      type="button"
      className={cn("flex w-full items-center rounded px-2 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800", className)}
      onClick={() => {
        onSelect?.();
        ctx?.setOpen(false);
      }}
    >
      {children}
    </button>
  );
}
