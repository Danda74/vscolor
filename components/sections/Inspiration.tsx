import Image from "next/image";
import { inspirations } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Inspiration() {
  return (
    <section id="inspirace" className="bg-white px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Inspirace"
          title="Stačí jeden odstín a doma se najednou začne něco dít."
          text="Nová stěna, oživený nábytek, chráněné dřevo nebo čistější domov. VS COLOR je dobrý první krok pro malé i větší proměny."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {inspirations.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/10"
            >
              <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                <div className={`relative min-h-56 ${item.tone}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={700}
                    className="h-full min-h-56 w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                    Chuť pustit se do práce
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
