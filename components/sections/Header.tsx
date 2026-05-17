import Image from "next/image";
import { navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="VS COLOR domů">
          <Image
            src="/logo-vscolor.png"
            alt="VS COLOR"
            width={200}
            height={6 2}
            priority
            style={{ width: "auto", height: "auto" }}
            className="h-auto w-[200px] min-w-[200px] sm:w-[220px]"
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
      </div>
    </header>
  );
}
