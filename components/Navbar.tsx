"use client";

import { useEffect, useState } from "react";
import LogoCircle from "./LogoCircle";

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
      className={`fixed inset-x-0 top-0 z-50 border-b-2 border-[#C4B5FD] shadow-[0_6px_16px_-6px_rgba(76,29,149,0.35)] transition-colors duration-300 ${
        scrolled ? "navbar-surface-scrolled" : "navbar-surface"
      }`}
      style={{ overflowX: "hidden", boxSizing: "border-box" }}
    >
      <nav
        className="mx-auto flex h-[80px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo + Name */}
        <a
          href="#top"
          className="mr-auto flex shrink-0 items-center gap-2 rounded-lg py-0.5 transition-transform duration-200 hover:scale-[1.02] sm:gap-3"
        >
          <LogoCircle size={44} />
          <span
            className="font-script whitespace-nowrap text-[20px] text-deep-purple sm:text-[22px] md:text-[24px] lg:text-[28px] -ml-0.5 leading-none"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Dr. Swami Karri
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group/nav relative font-body text-base font-medium text-ink transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-purple transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-pill px-6 py-2.5 font-body text-base font-medium"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-300 bg-violet-100 shadow-sm transition-colors hover:border-violet-400 hover:bg-violet-200 lg:hidden"
          style={{ boxSizing: "border-box" }}
        >
          <span
            className={`absolute block h-[1.5px] w-[18px] rounded-full bg-violet-600 transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-[18px] rounded-full bg-violet-600 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-[18px] rounded-full bg-violet-600 transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar-panel overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] border-t border-hairline opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 font-body text-[15px] font-medium text-ink-soft transition-colors hover:bg-violet-50 hover:text-purple"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-secondary mt-4 px-5 py-2.5 text-center font-body text-[15px] font-medium"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
