import { CheckCircle2, BriefcaseMedical } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experience = [
  "Diagnostic radiology with 12 years of clinical experience",
  "Expertise in ultrasound, CT, and MRI imaging",
  "Fetal imaging and anomaly scans",
  "Neuroimaging and brain/spine diagnostics",
  "Chest and abdominal radiology for children and adults",
  "Image-guided procedures and interventions",
  "Radiological support for emergency and trauma cases",
  "Cross-sectional imaging interpretation for accurate diagnosis",
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A Decade of Clinical Mastery"
          description="Hands-on expertise built over 12 years across imaging domains, trauma care and pediatric diagnostics."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gold-500/25 bg-gradient-to-b from-gold-500/10 to-transparent p-8">
              <BriefcaseMedical className="h-10 w-10 text-gold-500" />
              <p className="font-heading mt-6 text-6xl font-bold text-gold-gradient">
                12+
              </p>
              <p className="mt-2 font-heading text-2xl font-semibold text-white">
                Years of Clinical Experience
              </p>
              <p className="mt-4 leading-relaxed text-neutral-400">
                Spanning diagnostic radiology, emergency trauma imaging and
                pediatric diagnostic care — across two leading hospitals in
                Vizag.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
            {experience.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-800 p-4 transition-colors hover:border-gold-500/40"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <span className="font-body text-[15px] leading-snug text-neutral-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}