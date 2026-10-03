import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    category: "Accurate & Life-Saving Diagnostics",
    body: "Many reviewers highlight their gratitude for precise diagnostic scans. One parent specifically thanked Dr. Swamy and his team for their compassion and accurate identification of their son's medical condition.",
    tag: "Parent Testimonial",
  },
  {
    category: "Exceptional Critical Care Support",
    body: "Reviewers frequently thank Dr. Swamy and his senior clinical partners (such as chief neurologist Dr. G. Sivaram) for successfully treating and safely recovering family members admitted in serious or critical condition.",
    tag: "Critical Care Families",
    sources: [
      { url: "https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVdkcWVIUm1NM2MxGAo" },
      { url: "https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVdkb016ZzNOVEJ4GAo" },
    ],
  },
  {
    category: "Responsive & Interactive Management",
    body: "Patients note that the hospital management, public relations executives, and staff are very interactive, guiding patients smoothly through every step of their medical care.",
    tag: "Patient Experience",
  },
  {
    category: "Cleanliness & Infrastructure",
    body: "The hospital is routinely commended for a highly hygienic environment, a friendly nursing staff, and prompt, reliable emergency resources — including ambulance availability.",
    tag: "Facility Feedback",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-off-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Testimonials"
          title="What Families Say"
          description="Trust earned one patient at a time — a glimpse into real experiences shared by patients and parents."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.category} className="h-full" delay={(i % 2) * 150}>
              <figure className="card card-soft card-hover relative flex h-full flex-col p-8">
                <Quote className="absolute right-8 top-8 h-8 w-8 text-violet-300" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 leading-relaxed text-ink-soft">
                  {t.body}
                </blockquote>
                <figcaption className="mt-6 flex flex-col gap-2 border-t border-violet-200 pt-4">
                  <span className="font-heading text-lg font-semibold text-purple">
                    {t.category}
                  </span>
                  <span className="font-body text-sm text-ink-soft">
                    {t.tag}
                  </span>
                  {t.sources ? (
                    <span className="font-body text-xs text-ink-soft">
                      Verified via Google reviews
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}