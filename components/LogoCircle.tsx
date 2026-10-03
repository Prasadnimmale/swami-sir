import Image from "next/image";

type LogoCircleProps = {
  size?: number;
};

export default function LogoCircle({ size = 44 }: LogoCircleProps) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-violet-300 bg-white shadow-md"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src="/images/ssk-logo.png"
        alt="Dr. Swami Karri Logo"
        width={size * 2}
        height={size * 2}
        priority
        sizes={`${size}px`}
        className="h-full w-full object-cover scale-110"
      />
    </span>
  );
}
