"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, HeartHandshake } from "lucide-react";

export default function HeroPortrait() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative z-[2] flex w-full min-h-[320px] items-center justify-center overflow-visible sm:min-h-[420px] lg:min-h-[520px]">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[86%] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/35" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[86%] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[64%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/25" />

      <div
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateX(0) scale(1)" : "translateX(40px) scale(0.96)",
          filter: entered ? "blur(0)" : "blur(6px)",
          transition:
            "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="relative w-full max-w-[620px]"
      >
        <Image
          src="/images/hero-portrait.png"
          alt="Dr. Swami Karri medical consultation illustration"
          width={1367}
          height={1151}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full object-contain object-center opacity-100"
        />
      </div>

      <div
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "scale(1)" : "scale(0.6) translateY(14px)",
          transition:
            "opacity 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.8s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.8s",
        }}
        className="absolute -top-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-xl backdrop-blur sm:flex"
      >
        <Award className="h-5 w-5 text-gold-500" />
        <div>
          <p className="font-body text-sm font-semibold text-white">
            75 Under 75
          </p>
          <p className="font-body text-xs text-neutral-400">
            National Doctor Award 2022
          </p>
        </div>
      </div>

      <div
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "scale(1)" : "scale(0.6) translateY(14px)",
          transition:
            "opacity 0.6s cubic-bezier(0.34,1.56,0.64,1) 1.1s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 1.1s",
        }}
        className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-xl backdrop-blur sm:flex"
      >
        <HeartHandshake className="h-5 w-5 text-gold-500" />
        <div>
          <p className="font-body text-sm font-semibold text-white">
            Compassionate Care
          </p>
          <p className="font-body text-xs text-neutral-400">
            Emergency &amp; Critical Support
          </p>
        </div>
      </div>
    </div>
  );
}