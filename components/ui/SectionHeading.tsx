type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "mx-auto mb-8 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
