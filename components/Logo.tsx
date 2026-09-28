import { useId } from "react";

type LogoProps = {
  size?: number;
  withText?: boolean;
};

export default function Logo({ size = 40, withText = true }: LogoProps) {
  const id = useId();
  const gid = `logo-violet-${id}`;

  return (
    <span className="flex items-center gap-3">
      <span
        className="relative flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7c3aed" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="21"
            stroke={`url(#${gid})`}
            strokeWidth="2"
          />
          {/* Inner thin ring */}
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke={`url(#${gid})`}
            strokeWidth="0.5"
            opacity="0.4"
          />
          {/* SK Monogram */}
          <text
            x="24"
            y="24"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="17"
            letterSpacing="1.5"
            fill="#4c1d95"
          >
            SK
          </text>
        </svg>
      </span>
      {withText ? (
        <span className="flex flex-col justify-center leading-none">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-900">
            Dr. Swami
          </span>
          <span
            className="mt-0.5 text-[20px] font-bold tracking-tight text-slate-900"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Karri
          </span>
        </span>
      ) : null}
    </span>
  );
}
