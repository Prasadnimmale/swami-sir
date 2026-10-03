import Image from "next/image";
import { Trophy, ExternalLink, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Venture = {
  title: string;
  role: string;
  image: string;
  icon: LucideIcon;
  link?: string;
  details: { label: string; value: string }[];
};

const ventures: Venture[] = [
  {
    title: "Cricket Team & Tournaments",
    role: "Sports Franchise & Athlete",
    image: "/images/venture-cricket-2.webp",
    icon: Trophy,
    details: [
      {
        label: "Aayushman Avengers",
        value:
          "Owner of the cricket team that took part in the Elite Cricket League Season-2, where doctors played as professional cricketers using the slogan \u201CStethoscopes to Stadium Cheers.\u201D",
      },
      {
        label: "Doctors Premier League",
        value:
          "Plays cricket himself — his team won the Doctors Premier League championship.",
      },
    ],
  },
];

const gallery = [
  { src: "/images/venture-cricket-3.webp", width: 1168, height: 836 },
  { src: "/images/venture-cricket-1.webp", width: 1170, height: 860 },
  { src: "/images/venture-cricket-6.webp", width: 1080, height: 742 },
  { src: "/images/venture-cricket-5.webp", width: 1086, height: 853 },
];

export default function Ventures() {
  return (
    <section id="ventures" className="section-off-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Entrepreneurial Ventures"
          title="Sports Visionary"
          description="Beyond the clinic — building teams and championing the sport he loves."
        />

        <div className="mt-16 flex flex-col gap-16">
          {ventures.map((v, idx) => (
            <Reveal key={v.title} delay={idx * 120}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-tr from-primary/15 to-primary-light/20 blur-2xl" />
                <div className="media-frame group">
                  <Image
                    src={v.image}
                    alt={v.title}
                    width={615}
                    height={615}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <v.icon className="h-6 w-6 text-primary" />
                  <p className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                    {v.role}
                  </p>
                </div>
                <h3 className="font-heading mt-4 text-3xl font-bold text-ink">
                  {v.title}
                </h3>
                {v.link ? (
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-violet mt-2 inline-flex items-center gap-1.5 font-body text-sm font-medium"
                  >
                    Reference <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}

                <dl className="mt-7 flex flex-col gap-5">
                  {v.details.map((d) => (
                    <div
                      key={d.label}
                      className="card card-hover rounded-xl p-5"
                    >
                      <dt className="font-heading text-base font-semibold text-purple">
                        {d.label}
                      </dt>
                      <dd className="mt-2 text-[16px] leading-relaxed text-ink-soft">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 w-full max-w-5xl">
          <h3 className="font-heading text-center text-2xl font-semibold text-ink">
            <span className="text-violet-gradient">Team &amp; Tournaments</span>
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 80}>
                <div className="media-frame group aspect-[4/3]">
                  <Image
                    src={g.src}
                    alt={`Cricket — ${i + 1}`}
                    width={g.width}
                    height={g.height}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}