export function Separator({ className = "" }) {
  return <div className={`h-px w-full bg-zinc-200 dark:bg-zinc-800 ${className}`} aria-hidden="true" />;
}
