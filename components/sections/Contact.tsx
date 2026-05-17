export function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-slate-950 px-4 py-18 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            VS COLOR
          </h2>
          <p className="mt-2 text-lg font-semibold text-white">
            Frýdlant nad Ostravicí
          </p>

          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-3xl bg-white/[0.07] p-5">
              <p className="font-black text-cyan-200">Telefon</p>
              <a href="tel:+420000000000" className="mt-2 block text-lg font-bold">
                +420 000 000 000
              </a>
            </div>
            <div className="rounded-3xl bg-white/[0.07] p-5">
              <p className="font-black text-cyan-200">E-mail</p>
              <a
                href="mailto:info@vscolor.cz"
                className="mt-2 block text-lg font-bold"
              >
                info@vscolor.cz
              </a>
            </div>
            <div className="rounded-3xl bg-white/[0.07] p-5 sm:col-span-2">
              <p className="font-black text-cyan-200">Otevírací doba</p>
              <p className="mt-2 leading-7 text-slate-200">
                Po-Pá: doplnit podle provozu
                <br />
                So-Ne: doplnit podle provozu
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=VS%20COLOR%20Fr%C3%BDdlant%20nad%20Ostravic%C3%AD"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100 sm:w-auto"
          >
            Navigovat do prodejny
          </a>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl shadow-black/20">
          <div className="flex h-full min-h-[360px] items-center justify-center bg-[linear-gradient(135deg,#e0f2fe,#ffffff_42%,#fef3c7)] p-6 text-center">
            <div className="max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-800">
                Google mapa
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight">
                Místo pro vložení mapového iframe
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Sem lze později vložit iframe z Google Maps se skutečnou
                adresou prodejny VS COLOR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
