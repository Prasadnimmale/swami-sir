import { CheckCircle2, BriefcaseMedical } from "lucide-react";
import Reveal from "./Reveal";
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
<<<<<<< HEAD
    <section id="experience" className="section-white relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
=======
    <section id="experience" className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A Decade of Clinical Mastery"
          description="Hands-on expertise built over 12 years across imaging domains, trauma care and pediatric diagnostics."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
<<<<<<< HEAD
            <div className="gradient-violet-glow rounded-[18px] border border-violet-200 p-8">
              <div className="icon-chip flex h-14 w-14 items-center justify-center">
                <BriefcaseMedical className="h-7 w-7" />
              </div>
              <p className="font-heading mt-6 text-6xl font-bold text-violet-gradient">
                12+
              </p>
              <p className="mt-2 font-heading text-2xl font-semibold text-ink">
                Years of Clinical Experience
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
=======
            <div className="rounded-2xl border border-violet-500/25 bg-gradient-to-b from-violet-500/10 to-transparent p-8">
              <BriefcaseMedical className="h-10 w-10 text-violet-500" />
              <p className="font-heading mt-6 text-6xl font-bold text-violet-600">
                12+
              </p>
              <p className="mt-2 font-heading text-2xl font-semibold text-slate-900">
                Years of Clinical Experience
              </p>
              <p className="mt-4 leading-relaxed text-slate-500">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                Spanning diagnostic radiology, emergency trauma imaging and
                pediatric diagnostic care — across two leading hospitals in
                Vizag.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={150}>
            <div className="grid gap-3 sm:grid-cols-2">
              {experience.map((item) => (
                <div
                  key={item}
<<<<<<< HEAD
                  className="card card-soft card-hover flex items-start gap-3 rounded-xl p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="font-body text-[15px] leading-snug text-ink-soft">
=======
                  className="flex items-start gap-3 rounded-xl border border-violet-100 bg-white p-4 transition-colors hover:border-violet-500/40"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                  <span className="font-body text-[15px] leading-snug text-slate-600">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}