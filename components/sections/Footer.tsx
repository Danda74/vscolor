export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-slate-950">VS COLOR · Frýdlant nad Ostravicí</p>
        <p>© {year} VS COLOR. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
