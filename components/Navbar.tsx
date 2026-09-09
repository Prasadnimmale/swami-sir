"use client";

import { useEffect, useState } from "react";

const links = [
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
          ? "border-b border-white/5 bg-ink-950/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-heading text-2xl font-bold text-white">
            Dr. Swami{" "}
            <span className="text-gold-gradient font-heading">Karri</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base font-medium text-neutral-300 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold-500/40 bg-gold-500/10 px-6 py-2.5 font-body text-base font-medium text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink-950"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-ink-950/95 px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-body text-[15px] font-medium text-neutral-300 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-center font-body text-[15px] font-medium text-gold-400"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}