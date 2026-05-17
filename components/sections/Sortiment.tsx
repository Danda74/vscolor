import { sortiment } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Sortiment() {
  return (
    <section id="sortiment" className="bg-gray-200 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sortiment"
          title="Všechno podstatné pro venkovní i vnitřní nátěry, malování, renovace i domácnost."
          text="Přehledný výběr pro rychlý nákup, ale i prostor poradit se, když záleží na správném základu, odstínu nebo finální vrstvě."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortiment.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/10"
            >
              <div
                className={`mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-xl font-black text-white shadow-lg shadow-slate-950/10`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-slate-100 transition group-hover:w-24 group-hover:bg-cyan-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
