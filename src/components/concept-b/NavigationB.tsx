"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const NavigationB = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Oferta", href: "#" },
    { label: "Domki", href: "/concept-b/domki" },
    { label: "Atrakcje", href: "#" },
    { label: "Port", href: "#" },
    { label: "Cennik", href: "#" },
    { label: "Kontakt", href: "#" },
  ];

  return (
    <>
      <nav
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--color-b-surface) 98%, transparent)"
            : "transparent",
          borderBottom: scrolled ? `1px solid color-mix(in srgb, var(--color-b-secondary) 20%, transparent)` : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/concept-b"
            className={`flex items-baseline gap-1 ${mounted ? "animate-fade-in" : "opacity-0"}`}
          >
            <span
              className="text-xl font-black tracking-tight"
              style={{ color: "var(--color-b-text)" }}
            >
              RAFA
            </span>
            <span
              className="text-sm font-light tracking-widest"
              style={{ color: "var(--color-b-text-secondary)" }}
            >
              JEZIORSKO
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium relative group ${mounted ? "animate-fade-in" : "opacity-0"}`}
                style={{
                  color: "var(--color-b-text-secondary)",
                  ...(mounted ? { animationDelay: `${100 + i * 40}ms` } : {}),
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: "var(--color-b-accent)" }}
                />
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className={`text-sm font-medium ${mounted ? "animate-fade-in" : "opacity-0"}`}
              style={{
                color: "var(--color-b-text-secondary)",
                ...(mounted ? { animationDelay: "310ms" } : {}),
              }}
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href="#"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] ${mounted ? "animate-scale-in" : "opacity-0"}`}
              style={{
                backgroundColor: "var(--color-b-accent)",
                color: "var(--color-b-primary)",
                ...(mounted ? { animationDelay: "400ms" } : {}),
              }}
            >
              Odkryj ośrodek
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Otwórz menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-b-text)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col animate-fade-in"
          style={{ backgroundColor: "var(--color-b-primary)", animationDuration: "200ms" }}
        >
          <div className="flex items-center justify-between px-4 h-16">
            <span className="text-xl font-black tracking-tight" style={{ color: "var(--color-b-text)" }}>
              RAFA JEZIORSKO
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Zamknij menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-b-text)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4 flex-1 justify-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-4 px-2 text-2xl font-black tracking-tight border-b animate-fade-in-left"
                style={{
                  color: "var(--color-b-text)",
                  borderColor: "color-mix(in srgb, var(--color-b-text) 10%, transparent)",
                  animationDelay: `${i * 60}ms`,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block w-full text-center py-4 rounded-full font-bold text-sm animate-scale-in"
              style={{
                backgroundColor: "var(--color-b-accent)",
                color: "var(--color-b-primary)",
                animationDelay: `${navLinks.length * 60}ms`,
              }}
            >
              Odkryj ośrodek
            </a>
          </div>
        </div>
      )}
    </>
  );
};
