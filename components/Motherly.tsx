"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Baby,
  HeartPulse,
  Play,
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
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.volume = 1;
      video.muted = false;
      setSoundOn(true);
      void video.play().catch(() => {
        if (!video) return;
        video.muted = true;
        setSoundOn(false);
        void video.play().catch(() => {});
      });
    } else {
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
    } else {
      video.volume = 1;
      video.muted = false;
      setSoundOn(true);
      void video.play().catch(() => {
        video.muted = true;
        setSoundOn(false);
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryUnmutedPlay = async () => {
      video.volume = 1;
      video.muted = false;
      try {
        await video.play();
      } catch {
        video.muted = true;
        void video.play().catch(() => {});
      }
    };
    void tryUnmutedPlay();
  }, []);

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
      className="section-white py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[46fr_54fr] lg:gap-14">
          <div className="flex flex-col">
            <div className={contentCls}>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Managing Director &amp; Co-Founder
              </span>
              <h2 className="font-heading mt-3 text-4xl font-bold leading-tight text-ink sm:text-[44px]">
                Motherly Women &amp; Children Hospital
              </h2>
              <div
                className="rule-violet mt-4 h-px"
                style={{
                  width: inView ? "100%" : "0%",
                  transition: "width 1s ease-out",
                  transitionDelay: "200ms",
                }}
              />

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
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
                  className={`card card-soft flex items-center gap-2.5 rounded-xl px-4 py-3 transition-all duration-700 ease-out ${
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${280 + i * 90}ms` }}
                >
                  <service.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="font-body text-sm font-medium text-ink">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`card card-soft mt-8 flex flex-wrap items-center gap-3 rounded-xl px-5 py-4 ${contentCls}`}
              style={{ transitionDelay: "620ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              <p className="font-body text-sm text-ink-soft">
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
                className="btn-primary group inline-flex items-center gap-2.5 px-7 py-3.5 font-body text-base font-semibold hover:scale-[1.03]"
              >
                Explore Hospital
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative h-[780px] overflow-visible">
            <div
              className={`absolute -inset-3 rounded-[24px] bg-primary/15 blur-2xl ${videoCls}`}
              style={{ transitionDelay: "0ms" }}
            />
            <div
              className={`relative h-full w-full overflow-hidden rounded-[20px] border border-violet-200 bg-white shadow-[0_24px_70px_rgba(124,58,237,0.14)] ${videoCls}`}
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
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="Motherly Women & Children Hospital video"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video with sound"}
                className={`absolute inset-0 z-[1] flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-300 bg-white/80 text-primary backdrop-blur transition-transform hover:scale-105">
                  <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                </span>
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/75 to-transparent" />
              <div className="absolute bottom-4 left-4 z-[2] flex items-center gap-2.5 max-w-[calc(100%-80px)]">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="rounded-md bg-white/80 px-2.5 py-1 font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-deep-purple backdrop-blur whitespace-normal break-words">
                  Motherly Women &amp; Children Hospital
                </span>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                aria-label={soundOn ? "Mute video" : "Unmute video"}
                title={soundOn ? "Mute" : "Enable sound"}
                className="absolute bottom-4 right-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 bg-white/80 text-purple backdrop-blur transition-colors hover:border-violet-300 hover:text-deep-purple"
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