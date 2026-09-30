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
      className={`fixed inset-x-0 top-0 z-50 border-b border-violet-100 bg-white shadow-[0_2px_12px_rgba(124,58,237,0.08)] transition-colors duration-300 ${
        scrolled ? "border-violet-200" : ""
      }`}
      style={{ overflowX: "hidden", boxSizing: "border-box" }}
    >
      <nav
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo + Name */}
        <a
          href="#top"
          className="mr-auto flex shrink-0 items-center gap-2 rounded-lg py-0.5 transition-transform duration-200 hover:scale-[1.02] sm:gap-3"
        >
          <LogoCircle size={30} />
          <span
            className="font-script whitespace-nowrap text-[22px] text-slate-900 sm:text-[26px] lg:text-[30px]"
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
              className="group/nav relative font-body text-base font-medium text-slate-600 transition-colors hover:text-violet-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-violet-600 transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-violet-600/50 bg-violet-600 px-6 py-2.5 font-body text-base font-medium text-white shadow-[0_2px_12px_rgba(124,58,237,0.3)] transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_4px_20px_rgba(124,58,237,0.45)]"
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
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-white shadow-sm transition-colors hover:border-violet-400 lg:hidden"
          style={{ boxSizing: "border-box" }}
        >
          <span
            className={`absolute block h-[2px] w-[22px] rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[7px]"
            }`}
          />
          <span
            className={`absolute block h-[2px] w-[22px] rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[2px] w-[22px] rounded-full bg-slate-900 transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[7px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] border-t border-violet-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-6 pt-2">
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
    </header>
  );
}
