import Image from "next/image";
import { Award, Stethoscope, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievementGroups = [
  {
    title: "Medical & Clinical Leadership",
    icon: Stethoscope,
    image: "/images/achievement-medical.jpg",
    items: [
      "Hospital Founder — successfully built and launched Aayushman Hospital, a leading multi-speciality critical care hospital near the KGH Out Gate in Maharani Peta, Vizag.",
      "Managing Director — successfully manages and co-leads the Motherly Women & Children Hospital, providing niche care in neonatology (NICU) and maternal health.",
      "Expert Radiologist — accumulated over 12 years of professional clinical experience in complex diagnostic workflows, emergency trauma scans, and pediatric imaging.",
    ],
  },
  {
    title: "National Awards & Recognition",
    icon: Award,
    image: "/images/achievement-award.jpg",
    items: [
      "75 Under 75 Doctors Award (2022) — recognized nationally as one of India's medical changemakers for his exceptional work and dedication to healthcare development.",
      "India Pride Excellence Summit (2025) — invited as a Guest of Honour at the high-profile excellence summit celebrating national achievers.",
      "COVID-19 Humanitarian Honors — heavily praised for organizing and providing low-cost and free medical diagnostic imaging services for underprivileged families during the pandemic crisis.",
    ],
  },
  {
    title: "Sports & Community Achievements",
    icon: Trophy,
    image: "/images/achievement-cricket.webp",
    items: [
      "Cricket League Champion — captained/played for the team that won the official Doctors Premier League Championship.",
      "Franchise Owner — successfully founded and manages \u201CAayushman Avengers\u201D, a popular corporate doctor cricket team participating in the Elite Cricket League.",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones That Define Him"
          description="Clinical leadership, national honours and community impact — earned over a career of service."
        />

        <div className="mt-16 flex flex-col gap-16">
          {achievementGroups.map((group) => (
            <div
              key={group.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <group.icon className="h-6 w-6 text-gold-500" />
                  <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-6 flex flex-col gap-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-800 p-5"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      <span className="text-[16px] leading-relaxed text-neutral-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative lg:justify-self-end ${group.image.includes("achievement-award") || group.image.includes("achievement-cricket") ? "mx-auto w-full max-w-lg" : ""}`}>
                <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-tr from-gold-500/15 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-gold-500/15 bg-ink-800">
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={681}
                    height={681}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}