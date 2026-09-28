import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
        {eyebrow}
      </span>
      <h2 className="font-heading max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
          {description}
        </p>
      ) : null}
      </div>
    </Reveal>
  );
}