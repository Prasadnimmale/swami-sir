import {
  ChevronDown,
  CalendarCheck,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import HeroPortrait from "./HeroPortrait";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "3", label: "Hospitals Led" },
  { value: "1,000s", label: "Lives Impacted" },
  { value: "98%", label: "Diagnostic Accuracy" },
];

const specialities = ["CT & MRI", "Pediatric Care", "AI Diagnostics"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[380px] w-[380px] rounded-full border border-gold-500/10" />
      <div className="pointer-events-none absolute -left-28 top-1/2 h-[240px] w-[240px] rounded-full border border-gold-500/10" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[48fr_52fr] lg:gap-12 lg:px-8">
        <div className="flex flex-col items-start animate-fade-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 font-body text-sm font-medium tracking-wide text-gold-400">
            <Sparkles className="h-4 w-4" />
            Senior Consultant Radiologist
          </span>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-gold-300/90">
              Diagnostics · Critical Care
            </p>
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[64px]">
            Dr. Swami <span className="text-gold-gradient">Karri</span>
          </h1>
          <p className="mt-3 font-body text-xl font-medium text-neutral-300 sm:text-2xl">
            MBBS, DNB <span className="text-gold-400">(Radio Diagnosis)</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            A dedicated radiology specialist with 12+ years of clinical
            experience, founder of Aayushman Hospital, and a pioneer bringing
            AI-powered imaging and accessible critical care to Vizag.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {specialities.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-800/80 px-4 py-1.5 font-body text-sm font-medium text-neutral-300"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                {s}
              </span>
            ))}
          </div>

          <a
            href="#testimonials"
            className="mt-7 inline-flex items-center gap-2 font-body text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold-500 text-gold-500"
                />
              ))}
            </span>
            Trusted by thousands of parents
          </a>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-body text-base font-semibold text-ink-950 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all hover:bg-gold-400 hover:shadow-[0_0_45px_rgba(212,175,55,0.5)]"
            >
              <CalendarCheck className="h-5 w-5" />
              Book an Appointment
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-body text-base font-medium text-white transition-colors hover:border-gold-500/60 hover:text-gold-400"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-gold-500">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroPortrait />
      </div>

      <div className="mt-16 flex flex-col items-center gap-3">
        <span className="font-body text-xs font-medium uppercase tracking-[0.3em] text-neutral-600">
          Scroll to explore
        </span>
        <a
          href="#about"
          className="text-neutral-500 transition-colors hover:text-gold-400"
          aria-label="Scroll to About"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}