import { Check } from "lucide-react";
import { pricing } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section id="pricing" className="container py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">Pricing</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple plans for solo devs and shipping teams</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.map((plan) => (
          <Card key={plan.name} className={plan.highlight ? "border-sky-400 shadow-md" : ""}>
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                {plan.name}
                <span className="text-3xl">{plan.price}</span>
              </CardTitle>
              <CardDescription>{plan.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
