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
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        boxShadow: "0 2px 8px rgba(30,27,75,0.3), inset 0 1px 2px rgba(255,255,255,0.15)",
      }}
    >
      {/* Inner gold ring */}
      <span
        className="absolute rounded-full border border-amber-400/40"
        style={{
          width: size - 5,
          height: size - 5,
        }}
      />
      {/* SK monogram - S in white, K in gold */}
      <span
        className="relative font-bold"
        style={{
          fontSize: size * 0.42,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "0.02em",
        }}
      >
        <span className="text-white">S</span>
        <span className="text-amber-400">K</span>
      </span>
    </span>
  );
}
