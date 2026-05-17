"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="VS COLOR domů">
          <Image
            src="/logo-vscolor.png"
            alt="VS COLOR"
            width={200}
            height={62}
            priority
            style={{ width: "auto", height: "auto" }}
            className="h-auto w-[150px] min-w-[150px] sm:w-[220px] sm:min-w-[220px]"
          />

        </a>

        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-red-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden min-h-11 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-black text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-cyan-800 sm:inline-flex sm:px-5"
        >
          Kde se schováváme
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:border-cyan-300 lg:hidden"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={[
                "h-0.5 w-full rounded-full bg-current transition",
                isOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-full rounded-full bg-current transition",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-full rounded-full bg-current transition",
                isOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          "lg:hidden",
          isOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 pb-5 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-white px-4 py-3 text-base font-black text-slate-800 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="mt-1 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-black text-white shadow-lg shadow-slate-950/10 transition hover:bg-cyan-800 sm:hidden"
          >
            Kde se schováváme
          </a>
        </nav>
      </div>
    </header>
  );
}
