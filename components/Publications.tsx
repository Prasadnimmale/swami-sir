import { FlaskConical, Microscope, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const publications = [
  {
    title: "Healthcare Research & AI Technology Integration",
    icon: FlaskConical,
    imageText: "/images/pub-ai.svg",
    points: [
      {
        text: "Rather than focusing solely on traditional laboratory research, Dr. Swamy Karri actively drives clinical implementation research.",
      },
      {
        text: "AI-Based Diagnostic Research — as the CEO of Aayushman Hospital, Dr. Karri has been a vocal proponent of integrating advanced artificial intelligence into diagnostic workflows. He notably endorsed and backed clinical implementation research utilizing Pix2pix-GAN-based AI to automate lung segmentation from chest X-rays.",
        sources: [
          "https://www.outlookindia.com/healthcare-spotlight/dr-swami-karri-ceo-aayushman-hospital-praises-mr-rahul-vadisetty-and-mr-anand-polamarasettis-groundbreaking-research-on-ai-based-lung-segmentation",
        ],
      },
      {
        text: "Clinical Impact — this technology adoption focuses on automating diagnostic processes to improve reporting speed and accuracy for severe lung conditions like tuberculosis and lung cancer, establishing modernized standards for radiology workloads.",
      },
    ],
  },
  {
    title: "Clinical Case Work & Radiology Expertise",
    icon: Microscope,
    imageText: "/images/pub-clinical.svg",
    points: [
      {
        text: "Through his 12+ years of practicing as a senior consultant radiologist, his academic insights revolve around field-specific diagnostics.",
        sources: ["https://motherlyhospital.com/our-doctors/dr-swamy-karri/"],
      },
      {
        text: "Pediatric and Neonatal Emergency Imaging — research and protocol development for rapid-response trauma scans in children.",
      },
      {
        text: "Fetal Medicine Anomaly Scans — enhancing the precision of prenatal diagnostic sonography for high-risk pregnancies.",
      },
    ],
  },
];

export default function Publications() {
  return (
    <section id="research" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Publications & Research"
          title="Driving Clinical Implementation Research"
          description="From AI-powered lung segmentation to precision fetal imaging — research that reaches the bedside."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-ink-700 to-ink-800 p-8 transition-colors hover:border-gold-500/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10">
                  <pub.icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {pub.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-col gap-5">
                {pub.points.map((point) => (
                  <li key={point.text} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-[16px] leading-relaxed text-neutral-400">
                      {point.text}
                      {point.sources ? (
                        <span className="mt-1.5 flex flex-wrap gap-2">
                          {point.sources.map((url) => (
                            <a
                              key={url}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-gold-500 hover:text-gold-400"
                            >
                              Source <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}