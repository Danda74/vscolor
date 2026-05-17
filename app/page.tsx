import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { CookieBanner } from "@/components/CookieBanner";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Inspiration } from "@/components/sections/Inspiration";
import { Sortiment } from "@/components/sections/Sortiment";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Header />
      <Hero />
      <Sortiment />
      <Benefits />
      <Inspiration />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
