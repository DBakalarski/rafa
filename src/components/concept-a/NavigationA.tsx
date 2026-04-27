"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const NavigationA = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Oferta", href: "#", hasDropdown: true },
    { label: "Domki", href: "/concept-a/domki" },
    { label: "Atrakcje", href: "#" },
    { label: "Port", href: "#" },
    { label: "Cennik", href: "#" },
    { label: "Kontakt", href: "#" },
  ];

  const offerLinks = [
    { label: "O nas", href: "#" },
    { label: "W obiekcie", href: "#" },
    { label: "Pakiety sezonowe", href: "#" },
    { label: "Rezerwacje", href: "#" },
    { label: "Kursy motorowodne", href: "#" },
    { label: "Plan Ośrodka", href: "#" },
  ];

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="sticky top-8 z-40 w-full transition-[box-shadow,backdrop-filter] duration-300"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-a-surface) 95%, transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px -4px rgba(27,58,75,0.12)" : "none",
        }}
      >
        <div
          className="absolute inset-0 border-b"
          style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/concept-a"
            className={mounted ? "animate-fade-in" : "opacity-0"}
          >
            <Image
              src="/logo-rf.png"
              alt="Rafa Jeziorsko"
              width={120}
              height={52}
              className="h-13 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop menu center */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className={`relative ${mounted ? "animate-fade-in" : "opacity-0"}`}
                  style={mounted ? { animationDelay: `${100 + i * 40}ms` } : undefined}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium relative group"
                    style={{ color: "var(--color-a-text)" }}
                    onMouseEnter={() => setOfferOpen(true)}
                    onMouseLeave={() => setOfferOpen(false)}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      style={{ backgroundColor: "var(--color-a-accent)" }}
                    />
                  </button>
                  {offerOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg py-1 z-50 animate-scale-in"
                      style={{
                        backgroundColor: "var(--color-a-surface)",
                        border: `1px solid color-mix(in srgb, var(--color-a-primary) 15%, transparent)`,
                        transformOrigin: "top left",
                      }}
                      onMouseEnter={() => setOfferOpen(true)}
                      onMouseLeave={() => setOfferOpen(false)}
                    >
                      {offerLinks.map((ol) => (
                        <Link
                          key={ol.label}
                          href={ol.href}
                          className="block px-4 py-2 text-sm transition-colors hover:opacity-70"
                          style={{ color: "var(--color-a-text)" }}
                        >
                          {ol.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium relative group ${mounted ? "animate-fade-in" : "opacity-0"}`}
                  style={{
                    color: "var(--color-a-text)",
                    ...(mounted ? { animationDelay: `${100 + i * 40}ms` } : {}),
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ backgroundColor: "var(--color-a-accent)" }}
                  />
                </Link>
              )
            )}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className={`text-sm font-medium ${mounted ? "animate-fade-in" : "opacity-0"}`}
              style={{
                color: "var(--color-a-secondary)",
                ...(mounted ? { animationDelay: "300ms" } : {}),
              }}
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href="#"
              className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] ${mounted ? "animate-scale-in" : "opacity-0"}`}
              style={{
                backgroundColor: "var(--color-a-accent)",
                ...(mounted ? { animationDelay: "350ms" } : {}),
              }}
            >
              Rezerwuj
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Otwórz menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-a-primary)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col animate-fade-in"
          style={{ backgroundColor: "var(--color-a-surface)", animationDuration: "200ms" }}
        >
          <div className="flex items-center justify-between px-4 h-16 border-b" style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}>
            <Image src="/logo-rf.png" alt="Rafa Jeziorsko" width={120} height={52} className="h-13 w-auto object-contain" />
            <button onClick={() => setMobileOpen(false)} aria-label="Zamknij menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-a-primary)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4 overflow-y-auto flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 px-4 rounded-lg text-base font-medium animate-fade-in-left"
                style={{
                  color: "var(--color-a-text)",
                  animationDelay: `${i * 50}ms`,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t" style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}>
            <a
              href="#"
              className="block w-full text-center py-3 rounded-full font-semibold text-white animate-scale-in"
              style={{
                backgroundColor: "var(--color-a-accent)",
                animationDelay: `${navLinks.length * 50}ms`,
              }}
            >
              Rezerwuj pobyt
            </a>
          </div>
        </div>
      )}
    </>
  );
};
