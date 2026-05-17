import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VS COLOR | Barvy, laky a drogerie ve Frýdlantě nad Ostravicí",
  description:
    "Moderní prezentační web kamenné prodejny VS COLOR ve Frýdlantě nad Ostravicí. Barvy, laky, drogerie a potřeby pro domácí renovace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">{children}</body>
    </html>
  );
}
