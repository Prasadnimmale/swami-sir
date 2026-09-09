import { MessageCircle, MapPin, Stethoscope } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-900 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Book an Appointment or Say Hello"
          description="Prefer a quick conversation? Message him directly on WhatsApp — consultations, appointments or any query."
        />

        <div className="mt-12 rounded-3xl border border-gold-500/25 bg-gradient-to-b from-ink-700 to-ink-800 p-8 sm:p-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10">
              <MessageCircle className="h-10 w-10 text-gold-500" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Direct WhatsApp Contact
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-neutral-400">
                Reach out anytime for appointment bookings, imaging queries or
                second opinions. His team responds promptly during working
                hours.
              </p>
              <a
                href={site.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-8 py-4 font-body text-base font-semibold text-ink-950 shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all hover:bg-gold-400 hover:shadow-[0_0_45px_rgba(212,175,55,0.5)]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-ink-800 px-5 py-4">
              <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
              <div className="text-left">
                <p className="font-body text-sm font-semibold text-white">
                  Based in
                </p>
                <p className="font-body text-sm text-neutral-400">
                  {site.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-ink-800 px-5 py-4">
              <Stethoscope className="h-5 w-5 shrink-0 text-gold-500" />
              <div className="text-left">
                <p className="font-body text-sm font-semibold text-white">
                  Practice
                </p>
                <p className="font-body text-sm text-neutral-400">
                  {site.credentials}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}