import { Quote, Star } from "lucide-react";
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
    <section id="testimonials" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Testimonials"
          title="What Families Say"
          description="Trust earned one patient at a time — a glimpse into real experiences shared by patients and parents."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.category}
              className="relative flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-ink-700 to-ink-800 p-8 transition-colors hover:border-gold-500/40"
            >
              <Quote className="absolute right-8 top-8 h-8 w-8 text-gold-500/20" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote className="mt-5 leading-relaxed text-neutral-300">
                {t.body}
              </blockquote>
              <figcaption className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4">
                <span className="font-heading text-lg font-semibold text-gold-400">
                  {t.category}
                </span>
                <span className="font-body text-sm text-neutral-500">
                  {t.tag}
                </span>
                {t.sources ? (
                  <span className="font-body text-xs text-neutral-600">
                    Verified via Google reviews
                  </span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}