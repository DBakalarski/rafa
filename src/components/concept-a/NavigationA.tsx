"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const NavigationA = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

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
        className="sticky top-8 z-40 w-full"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-a-surface) 95%, transparent)" }}
      >
        <div
          className="absolute inset-0 border-b"
          style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/concept-a">
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
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: "var(--color-a-text)" }}
                    onMouseEnter={() => setOfferOpen(true)}
                    onMouseLeave={() => setOfferOpen(false)}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {offerOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg py-1 z-50"
                      style={{ backgroundColor: "var(--color-a-surface)", border: `1px solid color-mix(in srgb, var(--color-a-primary) 15%, transparent)` }}
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
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-a-text)" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium"
              style={{ color: "var(--color-a-secondary)" }}
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-a-accent)" }}
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
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "var(--color-a-surface)" }}
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 px-4 rounded-lg text-base font-medium transition-colors"
                style={{ color: "var(--color-a-text)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t" style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}>
            <a
              href="#"
              className="block w-full text-center py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "var(--color-a-accent)" }}
            >
              Rezerwuj pobyt
            </a>
          </div>
        </div>
      )}
    </>
  );
};
