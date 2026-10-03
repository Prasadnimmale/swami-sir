import { CalendarCheck, ArrowRight, Sparkles, Star } from "lucide-react";
import HeroPortrait from "./HeroPortrait";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "3", label: "Hospitals Led" },
  { value: "1,000s", label: "Lives Impacted" },
  { value: "98%", label: "Diagnostic Accuracy" },
];

export default function Hero() {
  const del = (i: number) => ({ animationDelay: `${i * 0.12}s` });

  return (
    <section
      id="top"
      className="hero-atmosphere relative overflow-hidden pb-16 pt-[110px] sm:pt-[120px] lg:pb-24"
    >
      <div className="pointer-events-none absolute -top-10 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-primary-light/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="flex flex-col items-start">
          <span
            className="tag hero-item mb-6 inline-flex items-center gap-2 px-4 py-1.5 font-body text-sm font-medium tracking-wide"
            style={del(0)}
          >
            <Sparkles className="h-4 w-4" />
            Senior Consultant Radiologist
          </span>

          <div
            className="hero-item mb-5 flex items-center gap-3"
            style={del(1)}
          >
            <span className="rule-violet h-px w-10" />
            <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-purple">
              Diagnostics · Critical Care
            </p>
          </div>

          <h1
            className="hero-item font-heading text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-[64px]"
            style={del(2)}
          >
            Dr. Swami{" "}
            <span className="text-violet-gradient animate-title-shimmer">
              Karri
            </span>
          </h1>
          <p
            className="hero-item mt-3 font-body text-xl font-medium text-ink-soft sm:text-2xl"
            style={del(3)}
          >
            MBBS, DNB <span className="text-purple">(Radio Diagnosis)</span>
          </p>
          <p
            className="hero-item mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={del(4)}
          >
            A dedicated radiology specialist with 12+ years of clinical
            experience, founder of Aayushman Hospital, and a pioneer bringing
            AI-powered imaging and accessible critical care to Vizag.
          </p>

          <div
            className="hero-item mt-7 inline-flex items-center gap-2 font-body text-sm font-medium text-purple"
            style={del(5)}
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </span>
            Trusted by thousands of parents
          </div>

          <div
            className="hero-item mt-9 flex flex-wrap items-center gap-4"
            style={del(6)}
          >
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2.5 px-7 py-3.5 font-body text-base font-semibold"
            >
              <CalendarCheck className="h-5 w-5" />
              Book an Appointment
            </a>
            <a
              href="#about"
              className="btn-secondary group inline-flex items-center gap-2 px-7 py-3.5 font-body text-base font-medium"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="hero-item mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-8 sm:grid-cols-4"
            style={del(7)}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroPortrait />
      </div>
    </section>
  );
}