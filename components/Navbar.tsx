"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Specialties" },
  { href: "#aayushman", label: "Hospitals" },
  { href: "#media", label: "Media" },
  { href: "#research", label: "Research" },
  { href: "#achievements", label: "Achievements" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-violet-100 bg-white/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 rounded-lg py-0.5 transition-transform duration-200 hover:scale-[1.02] sm:gap-3 sm:px-1">
          <Logo size={44} />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group/nav relative font-body text-base font-medium text-slate-600 transition-colors hover:text-violet-800"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-violet-600 transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-violet-700/50 bg-gradient-to-r from-violet-700 to-violet-800 px-6 py-2.5 font-body text-base font-medium text-white shadow-[0_2px_12px_rgba(124,58,237,0.3)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(124,58,237,0.45)] hover:brightness-110"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-200 bg-white/80 text-slate-900 transition-colors hover:border-violet-400 hover:text-violet-700 lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="5" y1="7" x2="19" y2="7" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="17" x2="19" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-violet-100 bg-white/95 px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-violet-100 py-3 font-body text-[15px] font-medium text-slate-600 transition-colors hover:text-violet-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-violet-700/40 bg-violet-700/10 px-5 py-2.5 text-center font-body text-[15px] font-medium text-violet-800"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}