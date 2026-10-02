import Image from "next/image";
import { Award, HeartHandshake } from "lucide-react";

export default function HeroPortrait() {
  return (
<<<<<<< HEAD
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl animate-hero-glow" />

      <div className="relative animate-float-soft">
        <div className="aspect-square w-full overflow-hidden rounded-[2rem] border border-violet-200 bg-violet-50/60 shadow-[0_18px_55px_rgba(124,58,237,0.16)]">
          <Image
            src="/images/ssk.jpg"
            alt="Dr. Swami Karri"
            width={224}
            height={228}
=======
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px]">
      <div className="absolute -inset-10 rounded-full bg-violet-500/25 blur-3xl animate-hero-glow" />

      <div className="relative animate-float-soft">
        <div className="aspect-square w-full overflow-hidden rounded-full border border-violet-500/15 shadow-[0_16px_50px_rgba(139,92,246,0.18)]">
          <Image
            src="/images/doctor-patient.png"
            alt="Doctor and patient consultation illustration"
            width={1254}
            height={1254}
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
<<<<<<< HEAD
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <div className="card flex items-center gap-2.5 rounded-xl border-violet-200 bg-white px-3 py-2.5 shadow-[0_6px_18px_rgba(124,58,237,0.08)]">
          <Award className="h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-body text-[13px] font-semibold text-ink">
              75 Under 75
            </p>
            <p className="font-body text-[11px] text-ink-soft">
=======

        <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-violet-200 bg-white/95 px-4 py-3 shadow-lg shadow-violet-500/10 backdrop-blur">
          <Award className="h-5 w-5 shrink-0 text-violet-600" />
          <div>
            <p className="font-body text-sm font-semibold text-slate-900">
              75 Under 75
            </p>
            <p className="font-body text-xs text-slate-500">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
              National Doctor Award 2022
            </p>
          </div>
        </div>

<<<<<<< HEAD
        <div className="card flex items-center gap-2.5 rounded-xl border-violet-200 bg-white px-3 py-2.5 shadow-[0_6px_18px_rgba(124,58,237,0.08)]">
          <HeartHandshake className="h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-body text-[13px] font-semibold text-ink">
              Compassionate Care
            </p>
            <p className="font-body text-[11px] text-ink-soft">
=======
        <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-violet-200 bg-white/95 px-4 py-3 shadow-lg shadow-violet-500/10 backdrop-blur">
          <HeartHandshake className="h-5 w-5 shrink-0 text-violet-600" />
          <div>
            <p className="font-body text-sm font-semibold text-slate-900">
              Compassionate Care
            </p>
            <p className="font-body text-xs text-slate-500">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
              Emergency &amp; Critical Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}