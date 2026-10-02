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
<<<<<<< HEAD
        background:
          "linear-gradient(135deg, #7C3AED 0%, #6D28D9 55%, #5B21B6 100%)",
        boxShadow:
          "0 4px 14px rgba(124,58,237,0.30), inset 0 1px 2px rgba(255,255,255,0.22)",
      }}
    >
      {/* Inner ring */}
      <span
        className="absolute rounded-full border border-white/25"
=======
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        boxShadow: "0 2px 8px rgba(30,27,75,0.3), inset 0 1px 2px rgba(255,255,255,0.15)",
      }}
    >
      {/* Inner gold ring */}
      <span
        className="absolute rounded-full border border-amber-400/40"
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
        style={{
          width: size - 5,
          height: size - 5,
        }}
      />
<<<<<<< HEAD
      {/* SK monogram - S in white, K in soft violet */}
=======
      {/* SK monogram - S in white, K in gold */}
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
      <span
        className="relative font-bold"
        style={{
          fontSize: size * 0.42,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "0.02em",
        }}
      >
        <span className="text-white">S</span>
<<<<<<< HEAD
        <span className="text-violet-200">K</span>
=======
        <span className="text-amber-400">K</span>
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
      </span>
    </span>
  );
}
