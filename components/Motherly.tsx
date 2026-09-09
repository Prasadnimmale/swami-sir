"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  HeartPulse,
  Stethoscope,
  Volume2,
  VolumeX,
} from "lucide-react";

const services = [
  {
    label: "Maternity",
    icon: Baby,
  },
  {
    label: "Neonatology",
    icon: Stethoscope,
  },
  {
    label: "NICU",
    icon: Activity,
  },
  {
    label: "PICU",
    icon: HeartPulse,
  },
  {
    label: "Fetal Medicine",
    icon: Baby,
  },
];

export default function Motherly() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
    } else {
      video.muted = false;
      void video.play();
      setSoundOn(true);
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const contentCls = `transition-all duration-700 ease-out ${
    inView ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
  }`;

  const videoCls = `transition-all duration-[800ms] ease-out ${
    inView
      ? "translate-x-0 scale-100 opacity-100"
      : "translate-x-[30px] scale-[0.97] opacity-0"
  }`;

  return (
    <section
      id="motherly"
      ref={sectionRef}
      className="bg-ink-950 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[46fr_54fr] lg:gap-14">
          <div className="flex flex-col">
            <div className={contentCls}>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-gold-500">
                Managing Director &amp; Co-Founder
              </span>
              <h2 className="font-heading mt-3 text-4xl font-bold leading-tight text-white sm:text-[44px]">
                Motherly Women &amp; Children Hospital
              </h2>
              <div
                className="mt-4 h-px bg-gradient-to-r from-gold-500 to-transparent"
                style={{
                  width: inView ? "100%" : "0%",
                  transition: "width 1s ease-out",
                  transitionDelay: "200ms",
                }}
              />

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
                A specialized healthcare venture at Daspalla Hills, Vizag,
                dedicated entirely to maternal and child health — with
                round-the-clock emergency care for high-risk pregnancies and
                pediatric emergencies.
              </p>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={service.label}
                  className={`flex items-center gap-2.5 rounded-xl border border-white/5 bg-ink-800/70 px-4 py-3 transition-all duration-700 ease-out ${
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${280 + i * 90}ms` }}
                >
                  <service.icon className="h-4 w-4 shrink-0 text-gold-500" />
                  <span className="font-body text-sm font-medium text-neutral-200">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-gold-500/15 bg-ink-800/40 px-5 py-4 ${contentCls}`}
              style={{ transitionDelay: "620ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              <p className="font-body text-sm text-neutral-300">
                Daspalla Hills, Visakhapatnam · 24x7 emergency support for
                mother &amp; child
              </p>
            </div>

            <div
              className={`mt-9 ${contentCls}`}
              style={{ transitionDelay: "720ms" }}
            >
              <a
                href="https://motherlyhospital.com/our-doctors/dr-swamy-karri/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-body text-base font-semibold text-ink-950 shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.03] hover:bg-gold-400 hover:shadow-[0_0_45px_rgba(212,175,55,0.5)]"
              >
                Explore Hospital
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative h-[400px] overflow-visible sm:h-[480px] md:h-[560px] lg:h-[640px]">
            <div
              className={`absolute -inset-3 rounded-[24px] bg-gold-500/15 blur-2xl ${videoCls}`}
              style={{ transitionDelay: "0ms" }}
            />
            <div
              className={`relative h-full w-full overflow-hidden rounded-[20px] border border-gold-500/25 bg-ink-800 shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_60px_rgba(212,175,55,0.08)] ${videoCls}`}
              style={{ transitionDelay: "100ms" }}
            >
              <video
                ref={videoRef}
                src="/video2.mp4"
                autoPlay
                muted={!soundOn}
                loop
                playsInline
                preload="auto"
                aria-label="Motherly Women & Children Hospital video"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-gold-500" />
                <span className="rounded-md bg-ink-950/60 px-2.5 py-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 backdrop-blur">
                  Motherly Women &amp; Children Hospital
                </span>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                aria-label={soundOn ? "Mute video" : "Unmute video"}
                title={soundOn ? "Mute" : "Enable sound"}
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-ink-950/70 text-gold-300 backdrop-blur transition-colors hover:border-gold-500/60 hover:text-gold-400"
              >
                {soundOn ? (
                  <Volume2 className="h-4.5 w-4.5" />
                ) : (
                  <VolumeX className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}