"use client";

import { faqs } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="container py-16 sm:py-24">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Answers for teams evaluating Zyplo</h2>
      </div>

      <Accordion type="single" collapsible className="glass rounded-xl px-5">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
