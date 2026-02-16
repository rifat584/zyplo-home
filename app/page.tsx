import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import FeatureGrid from "@/components/FeatureGrid";
import WorkflowStepper from "@/components/WorkflowStepper";
import TimeTrackingBento from "@/components/TimeTrackingBento";
import AutomationShowcase from "@/components/AutomationShowcase";
import CommandPaletteShowcase from "@/components/CommandPaletteShowcase";
import Pricing from "@/components/Pricing";
import TestimonialsRail from "@/components/TestimonialsRail";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoMarquee />

      <FeatureGrid />
      <WorkflowStepper />
      <TimeTrackingBento />
      <CommandPaletteShowcase />
      <AutomationShowcase />

      <Pricing />
      <TestimonialsRail />
      <FAQ />

      <section className="container pb-16 pt-6 sm:pb-24">
        <div className="glass rounded-2xl bg-gradient-to-br from-sky-100/70 to-cyan-100/40 p-8 dark:from-sky-950/30 dark:to-cyan-950/10">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Ship your next sprint with less overhead.</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Start free and move your current board into Zyplo in minutes.</p>
            </div>
            <Button size="lg" className="gap-2">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Separator />
      <Footer />
    </main>
  );
}
