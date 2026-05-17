import { benefits } from "@/lib/site-data";

export function Benefits() {
  return (
    <section
      id="proc-k-nam"
      className="bg-slate-950 px-4 py-18 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Proč přijít k nám
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Obchod, kde se řeší výsledek, ne položky v košíku.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Přijďte s plánem, fotkou povrchu nebo jen s představou. Pomůžeme
            vybrat tak, aby se vám do práce chtělo a výsledek držel.
          </p>
        </div>

        <div className="grid gap-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:bg-white/[0.1]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-slate-950">
                {index + 1}
              </span>
              <p className="pt-1 text-base font-semibold leading-7 text-slate-100">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
