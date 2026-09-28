import {
  Scan,
  Baby,
  Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Medical Imaging & Diagnostics",
    icon: Scan,
    points: [
      {
        text: "Cross-Sectional Imaging Interpretation — highly skilled in evaluating complex scans like multi-detector CT and MRI for accurate, precise disease diagnosis.",
      },
      {
        text: "Advanced Ultrasound & Fetal Scans — experienced in evaluating fetal health and high-risk pregnancies through specialized sonography and Doppler scans.",
      },
    ],
  },
  {
    title: "Emergency & Pediatric Care",
    icon: Baby,
    points: [
      {
        text: "Emergency & Trauma Radiology — providing rapid, high-priority imaging support to guide life-saving decisions during sudden trauma, accidents, or acute emergencies.",
      },
      {
        text: "Pediatric Diagnostic Care — actively involved in medical imaging and support for pediatric emergencies and critical child care.",
      },
    ],
  },
  {
    title: "Medical Technology Integration",
    icon: Cpu,
    points: [
      {
        text: "AI in Diagnostics — an advocate for incorporating cutting-edge technologies such as Generative AI and automated lung segmentation to speed up diagnostic processing for severe lung conditions.",
      },
    ],
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-violet-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialist In"
          title="Areas of Clinical Expertise"
          description="Three pillars of his practice — precise imaging, emergency care, and forward-looking medical technology."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} className="h-full" delay={i * 150}>
              <div className="flex h-full flex-col rounded-2xl border border-violet-100 bg-gradient-to-b from-white to-violet-50 p-7 transition-colors hover:border-violet-500/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10">
                <cat.icon className="h-7 w-7 text-violet-500" />
              </div>
              <h3 className="font-heading mt-6 text-2xl font-semibold text-slate-900">
                {cat.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                {cat.points.map((point) => (
                  <li key={point.text} className="flex flex-col gap-2">
                    <p className="text-[16px] leading-relaxed text-slate-500">
                      {point.text}
                    </p>
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}