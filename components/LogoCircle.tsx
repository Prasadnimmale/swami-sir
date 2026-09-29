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
          "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6d28d9 100%)",
        boxShadow:
          "0 2px 8px rgba(124,58,237,0.3), inset 0 1px 2px rgba(255,255,255,0.2)",
      }}
    >
      {/* Inner white ring for premium depth */}
      <span
        className="absolute rounded-full border border-white/30"
        style={{
          width: size - 6,
          height: size - 6,
        }}
      />
      {/* SK monogram */}
      <span
        className="relative font-bold text-white"
        style={{
          fontSize: size * 0.38,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "0.05em",
        }}
      >
        SK
      </span>
    </span>
  );
}
