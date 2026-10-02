import { GraduationCap, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const qualifications = [
  {
    title: "MBBS",
    subtitle: "Bachelor of Medicine, Bachelor of Surgery",
    body: "The primary medical undergraduate degree — the foundation of his clinical expertise.",
  },
  {
    title: "DNB (Radio Diagnosis)",
    subtitle: "Diplomate of National Board — Diagnostic Radiology",
    body: "A postgraduate master's degree awarded by the National Board of Examinations (NBE), India, specializing in Diagnostic Radiology.",
  },
];

const sources = [
  {
    label: "Srinivasan Medical College",
    url: "https://www.srinivasanmedicalcollege.org/smch-radio-diagnosis.php",
  },
  {
    label: "Motherly Hospital",
    url: "https://motherlyhospital.com/our-doctors/dr-swamy-karri/",
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="section-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Qualifications"
          title="Academic & Professional Credentials"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {qualifications.map((q, i) => (
            <Reveal key={q.title} className="h-full" delay={i * 150}>
              <div className="card card-soft card-hover group relative flex h-full flex-col overflow-hidden p-8">
                <div className="icon-chip absolute right-6 top-6 flex h-12 w-12 items-center justify-center">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                  Qualification 0{i + 1}
                </p>
                <h3 className="font-heading mt-4 text-3xl font-bold text-ink">
                  {q.title}
                </h3>
                <p className="mt-2 font-body text-base font-semibold text-purple">
                  {q.subtitle}
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">{q.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="card card-soft mt-8 flex flex-wrap items-center gap-3 rounded-2xl p-6">
          <p className="font-body text-sm font-medium text-ink-soft">
            Sources:
          </p>
          {sources.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tag inline-flex items-center gap-1.5 px-4 py-1.5 font-body text-sm"
            >
              {s.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}