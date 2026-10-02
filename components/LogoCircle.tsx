type LogoCircleProps = {
  size?: number;
};

export default function LogoCircle({ size = 44 }: LogoCircleProps) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #7C3AED 0%, #6D28D9 55%, #5B21B6 100%)",
        boxShadow:
          "0 4px 14px rgba(124,58,237,0.30), inset 0 1px 2px rgba(255,255,255,0.22)",
      }}
    >
      {/* Inner ring */}
      <span
        className="absolute rounded-full border border-white/25"
        style={{
          width: size - 5,
          height: size - 5,
        }}
      />
      {/* SK monogram - S in white, K in soft violet */}
      <span
        className="relative font-bold"
        style={{
          fontSize: size * 0.42,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "0.02em",
        }}
      >
        <span className="text-white">S</span>
        <span className="text-violet-200">K</span>
      </span>
    </span>
  );
}
