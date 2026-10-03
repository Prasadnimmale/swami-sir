import Image from "next/image";
import { Award, HeartHandshake } from "lucide-react";

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
      <div className="relative">
        <div className="aspect-square w-full overflow-hidden rounded-[2rem] border border-violet-200 bg-violet-50/60 shadow-[0_18px_55px_rgba(124,58,237,0.16)]">
          <Image
            src="/images/ssk.jpg"
            alt="Dr. Swami Karri"
            width={224}
            height={228}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <div className="card flex items-center gap-2.5 rounded-xl border-violet-200 bg-white px-3 py-2.5 shadow-[0_6px_18px_rgba(124,58,237,0.08)]">
          <Award className="h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-body text-[13px] font-semibold text-ink">
              75 Under 75
            </p>
            <p className="font-body text-[11px] text-ink-soft">
              National Doctor Award 2022
            </p>
          </div>
        </div>

        <div className="card flex items-center gap-2.5 rounded-xl border-violet-200 bg-white px-3 py-2.5 shadow-[0_6px_18px_rgba(124,58,237,0.08)]">
          <HeartHandshake className="h-4 w-4 shrink-0 text-primary" />
          <div>
            <p className="font-body text-[13px] font-semibold text-ink">
              Compassionate Care
            </p>
            <p className="font-body text-[11px] text-ink-soft">
              Emergency &amp; Critical Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}