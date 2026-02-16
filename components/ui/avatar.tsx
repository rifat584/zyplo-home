export function Avatar({ className = "", children }) {
  return <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>;
}

export function AvatarFallback({ className = "", children }) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-zinc-100 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 ${className}`}>
      {children}
    </div>
  );
}
