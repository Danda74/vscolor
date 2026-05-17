import Image from "next/image";
import { gallery } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section
      id="galerie"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-18 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Fotogalerie prodejny"
          title="Místo pro skutečné fotky interiéru, regálů a sortimentu."
          text="Aktuálně jsou použité placeholder obrázky. Později stačí nahrát reálné fotky do public/images a upravit cesty v lib/site-data.ts."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-sm shadow-slate-950/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-base font-black text-white">
                  {item.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
