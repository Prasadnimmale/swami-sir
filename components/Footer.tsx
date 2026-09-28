import { Heart } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "./Logo";

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

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navLinks = [
  { href: "#top", label: "Home" },
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
  { label: "WhatsApp", href: site.whatsappUrl(), icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-700/20 bg-gradient-to-b from-violet-100 to-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-700/60 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <a href="#top" className="inline-flex rounded-lg transition-transform duration-200 hover:scale-[1.02]">
              <Logo />
            </a>
            <p className="max-w-xs text-[16px] leading-relaxed text-slate-600">
              {site.title}. Committed to precise, compassionate and accessible
              healthcare in Visakhapatnam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1.5 font-body text-[15px] text-slate-500 transition-colors hover:text-violet-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-heading text-lg font-semibold text-slate-900">
              Follow
            </p>
            <p className="font-body text-[16px] text-slate-600">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-300 text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-700 hover:bg-violet-700 hover:text-white hover:shadow-[0_4px_14px_rgba(124,58,237,0.35)]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-200 pt-8 sm:flex-row">
          <p className="font-body text-sm text-slate-400">
            © {new Date().getFullYear()} Dr. Swami Karri. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-body text-sm text-slate-400">
            Compassion in every diagnosis
            <Heart className="h-3.5 w-3.5 fill-violet-700 text-violet-700" />
          </p>
        </div>
      </div>
    </footer>
  );
}