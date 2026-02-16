"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const fakeResults = [
  "Open: Sprint board",
  "Search: bug labels",
  "Filter: assignee:me",
  "Task: Setup GitHub webhook (coming soon)",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 text-white">Z</span>
          Zyplo
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-600 transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:text-zinc-300 dark:hover:text-zinc-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="hidden gap-2 sm:inline-flex">
            <Search className="h-4 w-4" />
            Ctrl+K
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Toggle theme">
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="hidden h-4 w-4 dark:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setTheme("system")}>
                <Monitor className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Command Palette Demo</DialogTitle>
            <DialogDescription>
              Search tasks, projects, and users. Filter by status, priority, assignee, or labels.
            </DialogDescription>
          </DialogHeader>
          <Input autoFocus placeholder="Try: status:in-progress" aria-label="Search Zyplo" />
          <div className="mt-3 space-y-2">
            {fakeResults.map((result) => (
              <button
                key={result}
                type="button"
                className="w-full rounded-md border border-zinc-200 px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {result}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
