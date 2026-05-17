import Image from "next/image";

export function Hero() {
  return (
    <section className="paint-sheen relative overflow-hidden pt-32 sm:pt-36">
      <div className="soft-grid absolute inset-0 opacity-45" />
      <div className="absolute left-6 top-28 h-24 w-24 rounded-full bg-rose-400/28 blur-2xl sm:left-20" />
      <div className="absolute bottom-20 right-8 h-36 w-36 rounded-full bg-cyan-400/25 blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-8 sm:px-6 md:pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="fade-up">
          <p className="inline-flex rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-800 shadow-sm backdrop-blur">
            Kamenná prodejna pro barvy, laky a drogerii
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Barvy, laky a drogerie, které probudí chuť tvořit
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-800 sm:text-2xl">
            Navštivte nás ve Frýdlantě nad Ostravicí.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Zastavte se pro odstín, štětec, váleček, lak, čisticí prostředek
            nebo obyčejně dobrou radu. Všechno pro malování, natírání,
            renovace i domácí péči na jednom praktickém místě.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-800"
            >
              Kde nás najdete
            </a>
            <a
              href="#sortiment"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-black text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white"
            >
              Sortiment
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] fade-up sm:min-h-[500px] lg:min-h-[560px]">
          <div className="absolute inset-x-0 top-0 overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-950/12">
            <Image
              src="/images/paint-studio2.png"
              alt="Barvy, laky, štětce a malířské potřeby"
              width={1536}
              height={1024}
              priority
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/12]"
            />
          </div>

          <div className="slow-float absolute -left-2 bottom-10 rounded-3xl bg-white p-4 shadow-2xl shadow-slate-950/14 sm:left-8">
            <div className="grid grid-cols-4 gap-2">
              {["#00a6fb", "#ffbe0b", "#ef476f", "#06d6a0"].map((color) => (
                <span
                  key={color}
                  className="block h-12 w-10 rounded-2xl"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm font-black text-slate-950">
              Od nápadu k hotové stěně
            </p>
          </div>

          <div className="absolute bottom-0 right-0 max-w-[240px] rounded-3xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              VS COLOR
            </p>
            <p className="mt-2 text-xl font-black leading-tight">
              Vybereme spolu správný nátěr i pomůcky.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
