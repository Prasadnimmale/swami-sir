import { MessageCircle, MapPin, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-white relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Book an Appointment or Say Hello"
          description="Prefer a quick conversation? Message him directly on WhatsApp — consultations, appointments or any query."
        />

        <Reveal delay={100}>
          <div className="card card-soft mt-12 p-8 sm:p-12">
            <div className="icon-chip mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
              <MessageCircle className="h-8 w-8" />
            </div>

            <h3 className="font-heading mt-6 text-2xl font-bold text-ink sm:text-3xl">
              Direct WhatsApp Contact
            </h3>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
              Reach out anytime for appointment bookings, imaging queries or
              second opinions. His team responds promptly during working hours.
            </p>

            <a
              href={site.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-2.5 px-8 py-4 font-body text-base font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div className="mt-10 grid gap-4 border-t border-hairline pt-8 sm:grid-cols-2">
              <div className="card flex items-center justify-center gap-3 rounded-xl px-5 py-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <p className="font-body text-sm text-ink-soft">
                  {site.location}
                </p>
              </div>
              <div className="card flex items-center justify-center gap-3 rounded-xl px-5 py-4">
                <Stethoscope className="h-5 w-5 shrink-0 text-primary" />
                <p className="font-body text-sm text-ink-soft">
                  {site.credentials}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}