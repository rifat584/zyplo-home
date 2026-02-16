import { logos } from "@/lib/content";

export default function LogoMarquee() {
  const looped = [...logos, ...logos];

  return (
    <section className="container pb-8 pt-2 sm:pb-14" aria-label="Trusted tools">
      <div className="glass rounded-2xl p-6">
        <p className="mb-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Trusted by fast-moving teams building production web apps.
        </p>

        <div className="logo-marquee group relative overflow-hidden">
          <div className="logo-marquee-track group-hover:[animation-play-state:paused]">
            {looped.map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="inline-flex h-10 items-center rounded-full border border-zinc-200/90 bg-white/85 px-4 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800/90 dark:bg-zinc-950/80 dark:text-zinc-300"
                aria-hidden={index >= logos.length}
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/95 to-transparent dark:from-zinc-950/95" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/95 to-transparent dark:from-zinc-950/95" />
        </div>
      </div>
    </section>
  );
}
