import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  "Expert care in outpatient & inpatient pediatric services",
  "Focused on child health, development & growth",
  "Skilled in pediatric emergencies and critical care",
  "Personalized treatment plans parents can trust",
];

export default function About() {
  return (
    <section id="about" className="bg-violet-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A Doctor Parents Trust"
          description="Compassion, precision and years of hands-on experience — in every consultation."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2" delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-violet-500/20 to-transparent blur-2xl" />
              <div className="group relative overflow-hidden rounded-2xl border border-violet-500/15 bg-white transition-colors duration-500 hover:border-violet-500/50">
              <Image
                src="/images/doctor-about.jpg"
                alt="Dr. Swami Karri"
                width={554}
                height={554}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="relative mx-auto -mt-8 w-[calc(100%-3rem)] rounded-2xl border border-violet-500/25 bg-white/95 px-6 py-5 shadow-2xl backdrop-blur">
              <p className="font-heading text-xl font-bold text-slate-900">
                Dr. Karri Swami
              </p>
              <p className="font-body text-sm text-slate-600">
                MBBS, DNB (Radio Diagnosis)
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-violet-500" />
                <p className="font-body text-sm font-semibold text-violet-600">
                  Senior Consultant Radiologist &amp; Healthcare Entrepreneur
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/50" />
                <p className="font-body text-sm text-slate-500">
                  Currently leading Aayushman Hospital, Visakhapatnam · 12+ yrs
                </p>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal className="order-1">
            <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-slate-600">
              Dr. Karri Swami, MBBS, DNB, is a dedicated pediatric specialist
              with over 12 years of clinical experience. He offers expert care
              in both outpatient and inpatient pediatric services, with a strong
              focus on child health and development.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Known for his compassionate approach and precise diagnosis, Dr.
              Swami is actively involved in managing pediatric emergencies and
              critical care. His calm demeanor and personalized treatment plans
              have earned the trust of countless parents.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              He continues to make a meaningful impact in children&apos;s
              healthcare with his commitment and expertise.
            </p>

            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-violet-100 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                  <span className="font-body text-sm leading-snug text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}