import { Heart } from "lucide-react";
import { site } from "@/lib/site";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#specialties", label: "Specialties" },
  { href: "#experience", label: "Experience" },
  { href: "#aayushman", label: "Hospitals" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#media", label: "Media & Features" },
  { href: "#research", label: "Research" },
  { href: "#ventures", label: "Ventures" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "YouTube", href: site.socials.youtube, icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <p className="font-heading text-2xl font-bold text-white">
              Dr. Swami{" "}
              <span className="text-gold-gradient font-heading">Karri</span>
            </p>
            <p className="max-w-xs text-[16px] leading-relaxed text-neutral-500">
              {site.title}. Committed to precise, compassionate and accessible
              healthcare in Visakhapatnam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1.5 font-body text-[15px] text-neutral-400 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-heading text-lg font-semibold text-white">
              Follow
            </p>
            <p className="font-body text-[16px] text-neutral-500">
              Stay updated on his hospitals, media appearances and community
              initiatives.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-ink-950"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-body text-sm text-neutral-600">
            © {new Date().getFullYear()} Dr. Swami Karri. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-body text-sm text-neutral-600">
            Compassion in every diagnosis
            <Heart className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}