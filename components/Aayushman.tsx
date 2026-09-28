"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Building2,
  MapPin,
  Play,
  ScanLine,
  Volume2,
  VolumeX,
} from "lucide-react";

const facts = [
  {
    icon: Building2,
    title: "Founder & CEO",
    description:
      "A high-volume emergency and trauma-care hospital founded and led by Dr. Karri Swami.",
  },
  {
    icon: Activity,
    title: "Multi-Speciality Critical Care",
    description:
      "Major specialities including Neurology and Spine Surgery — high-tech care that stays accessible and affordable.",
  },
  {
    icon: ScanLine,
    title: "Advanced Diagnostics",
    description:
      "Integrated CT, MRI and ultrasound imaging for rapid, precise diagnosis.",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Near the KGH Out Gate in Maharani Peta, Visakhapatnam.",
  },
];

export default function Aayushman() {
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

  const revealCls = (extraScale = false) =>
    `transition-all duration-1000 ease-out ${
      inView
        ? "translate-y-0 opacity-100 scale-100"
        : `translate-y-8 opacity-0 ${extraScale ? "scale-[1.02]" : ""}`
    }`;

  return (
    <section
      id="aayushman"
      ref={sectionRef}
      className="bg-violet-50 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-[780px] overflow-visible">
            <div
              className={`absolute -inset-3 rounded-[24px] bg-violet-500/15 blur-2xl ${revealCls(
                true
              )}`}
              style={{ transitionDelay: "0ms" }}
            />
            <div
              className={`relative h-full w-full overflow-hidden rounded-[20px] border border-violet-500/25 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_60px_rgba(139,92,246,0.08)] ${revealCls(
                true
              )}`}
              style={{ transitionDelay: "80ms" }}
            >
              <video
                ref={videoRef}
                src="/video1.mp4"
                autoPlay
                muted={!soundOn}
                loop
                playsInline
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="Aayushman Hospital video"
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
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/40 bg-white/75 text-violet-600 backdrop-blur transition-transform hover:scale-105">
                  <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                </span>
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/75 to-transparent" />
              <div className="absolute bottom-4 left-4 z-[2] flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-violet-700">
                  Aayushman Hospital
                </span>
              </div>
              <button
                type="button"
                onClick={toggleSound}
                aria-label={soundOn ? "Mute video" : "Unmute video"}
                title={soundOn ? "Mute" : "Enable sound"}
                className="absolute bottom-4 right-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-white/70 text-violet-600 backdrop-blur transition-colors hover:border-violet-500/60 hover:text-violet-600"
              >
                {soundOn ? (
                  <Volume2 className="h-4.5 w-4.5" />
                ) : (
                  <VolumeX className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className={revealCls()} style={{ transitionDelay: "150ms" }}>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
                Founder &amp; CEO
              </span>
              <h2 className="font-heading mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-[44px]">
                Aayushman Hospital
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" />

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
                A major multi-speciality critical care hospital near the KGH
                Out Gate in Maharani Peta, Vizag — founded and led by Dr. Swami
                as a high-volume emergency and trauma-care facility integrating
                advanced diagnostics with major specialities while keeping
                high-tech care accessible and affordable.
              </p>
            </div>

            <dl
              className={`mt-8 grid gap-4 sm:grid-cols-2 ${revealCls()}`}
              style={{ transitionDelay: "300ms" }}
            >
              {facts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-xl border border-violet-100 bg-white/80 p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <fact.icon className="h-5 w-5 shrink-0 text-violet-500" />
                    <dt className="font-heading text-base font-semibold text-violet-600">
                      {fact.title}
                    </dt>
                  </div>
                  <dd className="mt-2 font-body text-sm leading-relaxed text-slate-500">
                    {fact.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div
              className={`mt-9 ${revealCls()}`}
              style={{ transitionDelay: "420ms" }}
            >
              <a
                href="https://www.instagram.com/aayushmanvizag/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-violet-500 px-7 py-3.5 font-body text-base font-semibold text-slate-900 shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]"
              >
                Explore Hospital
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}