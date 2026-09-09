import Image from "next/image";
import { Mic2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Feature = {
  title: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  category: string;
  body: string | string[];
};

const features: Feature[] = [
  {
    title: "TEDx International Stage",
    image: "/images/feature-tedx.jpg",
    imageWidth: 1080,
    imageHeight: 1470,
    category: "Speaking Platforms",
    body: [
      "Dr. Swami Karri has been featured on the TEDx International Stage, presenting his perspectives and professional experiences to a wider audience. His participation reflects his engagement beyond clinical practice and highlights his ability to communicate ideas, experiences, and insights on a prominent international platform.",
      "Through such speaking platforms, Dr. Swami brings together his experience in healthcare, medical diagnostics, leadership, and innovation, creating meaningful conversations around the evolving landscape of healthcare and technology.",
      "His presence at TEDx represents another important milestone in his professional journey, alongside his work in clinical care, healthcare leadership, medical technology, and community engagement.",
    ],
  },
  {
    title: "Regional News Coverage",
    image: "/images/feature-news2.jpg",
    imageWidth: 720,
    imageHeight: 733,
    category: "Media & Magazines",
    body: [
      "Dr. Swami Karri's professional journey and contributions to healthcare have received attention through regional news coverage, highlighting his work across medical practice, healthcare leadership, and community engagement.",
      "With his involvement in diagnostic radiology, advanced medical imaging, hospital leadership, and healthcare initiatives, Dr. Swami continues to build a professional presence that extends beyond his clinical responsibilities.",
      "His work as a medical professional and healthcare leader reflects a commitment to delivering quality healthcare while contributing to the growth and development of the healthcare ecosystem.",
    ],
  },
];

export default function Featured() {
  return (
    <section id="media" className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured In"
          title="Stages, Conclaves & Media"
          description="Recognized on national and city platforms for his healthcare leadership, humanitarian work and business vision."
        />

        <div className="mt-16 flex flex-col gap-14">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                idx % 2 === 1
                  ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-tr from-gold-500/15 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-gold-500/15 bg-ink-800">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={f.imageWidth ?? 900}
                    height={f.imageHeight ?? 650}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 font-body text-sm font-medium text-gold-400">
                  <Mic2 className="h-3.5 w-3.5" />
                  {f.category}
                </span>
                <h3 className="font-heading mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  {f.title}
                </h3>
                {Array.isArray(f.body) ? (
                  f.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 leading-relaxed text-neutral-400"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="mt-4 leading-relaxed text-neutral-400">
                    {f.body}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}