import Image from "next/image";
import { Award, Stethoscope, Trophy } from "lucide-react";
import Reveal from "./Reveal";
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
<<<<<<< HEAD
    <section id="achievements" className="section-violet py-20 sm:py-28">
=======
    <section id="achievements" className="bg-white py-20 sm:py-28">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones That Define Him"
          description="Clinical leadership, national honours and community impact — earned over a career of service."
        />

        <div className="mt-16 flex flex-col gap-16">
          {achievementGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
<<<<<<< HEAD
                  <group.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
=======
                  <group.icon className="h-6 w-6 text-violet-500" />
                  <h3 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-6 flex flex-col gap-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
<<<<<<< HEAD
                      className="card card-hover flex items-start gap-3 rounded-xl p-5"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-[16px] leading-relaxed text-ink-soft">
=======
                      className="flex items-start gap-3 rounded-xl border border-violet-100 bg-white p-5"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span className="text-[16px] leading-relaxed text-slate-600">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative lg:justify-self-end ${group.image.includes("achievement-award") || group.image.includes("achievement-cricket") ? "mx-auto w-full max-w-lg" : ""}`}>
<<<<<<< HEAD
                <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-tr from-primary/15 to-primary-light/20 blur-2xl" />
                <div className="media-frame group">
=======
                <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-tr from-violet-500/15 to-transparent blur-2xl" />
                <div className="group relative overflow-hidden rounded-2xl border border-violet-500/15 bg-white transition-colors duration-500 hover:border-violet-500/50">
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={681}
                    height={681}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
<<<<<<< HEAD
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
=======
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
>>>>>>> 191f7a3dc2d772f69b97cab5f84d36ee1da6be02
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}