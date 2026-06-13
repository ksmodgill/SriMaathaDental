"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { clinic, faqs } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f7fafc] py-12 sm:py-14 lg:py-16">
      <div className="container-premium">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions Patients Usually Ask Before Visiting"
          description="These answers help with common concerns around pain, implants, braces, aligners, children's dental care, emergency visits, timing and treatment planning."
        />

        <div className="mt-7 rounded-[1.5rem] bg-navy-950 p-4 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div>
            <p className="text-lg font-extrabold tracking-[-0.03em]">
              Unsure if your concern is urgent?
            </p>
            <p className="mt-2 text-sm leading-6 text-white/84">
              Call or WhatsApp the hospital team and explain your symptoms
              before you decide when to visit.
            </p>
          </div>
          <ButtonLink
            href={clinic.whatsappHref}
            variant="secondary"
            className="mt-5 w-full sm:mt-0 sm:w-auto"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp Your Question
          </ButtonLink>
        </div>

        <div className="mt-7 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition duration-300 hover:border-navy-800"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-5 px-5 py-4 text-left text-base font-extrabold text-navy-950 transition active:bg-blue-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-navy-800 sm:px-6"
                >
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                        "size-5 shrink-0 text-navy-800 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
