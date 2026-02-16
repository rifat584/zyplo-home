import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="pb-10 pt-16">
      <div className="container">
        <Separator className="mb-8" />
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">Zyplo</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Project management built for web developers.</p>
          </div>
          <div>
            <p className="text-sm font-medium">Product</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#features">Features</a></li>
              <li><a href="#workflow">Workflow</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Resources</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Social</p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#">X / Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
