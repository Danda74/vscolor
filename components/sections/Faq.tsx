"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Časté dotazy před návštěvou prodejny."
          align="center"
        />

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-3xl border border-slate-100 bg-slate-50/70 p-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-4 text-left text-base font-black text-slate-950 transition hover:bg-white sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xl leading-none text-cyan-700 shadow-sm">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-5 pt-1 leading-7 text-slate-600 sm:px-5">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
