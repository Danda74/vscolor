"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vscolor-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(!window.localStorage.getItem(STORAGE_KEY));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function acceptConsent(value: "necessary" | "all") {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, acceptedAt: new Date().toISOString() }),
    );
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/18 sm:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">
              Cookies
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
              Používáme cookies, abychom zajistili správné fungování a
              bezpečnost našich stránek. Tím vám můžeme zajistit tu nejlepší
              zkušenost při jejich návštěvě.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
            <button
              type="button"
              onClick={() => acceptConsent("necessary")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-black text-slate-950 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              Přijmout nezbytné
            </button>
            <button
              type="button"
              onClick={() => acceptConsent("all")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-black text-white shadow-lg shadow-slate-950/10 transition hover:bg-cyan-800"
            >
              Přijmout vše
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
