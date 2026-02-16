import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const results = [
  "Task: Fix stale cache in dashboard",
  "Project: Zyplo Marketing Site",
  "User: Maya Chen",
  "Filter: status:in-progress",
];

export default function CommandPaletteMock() {
  return (
    <div className="glass rounded-xl p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>Command Palette</span>
        <Badge className="text-[10px]">Ctrl+K</Badge>
      </div>
      <Input value="Search tasks, projects, users..." readOnly aria-label="Demo command palette input" className="mb-3" />
      <div className="space-y-2">
        {results.map((result) => (
          <div key={result} className="rounded-md border border-zinc-200 px-3 py-2 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}
