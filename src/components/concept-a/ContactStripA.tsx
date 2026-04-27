"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export const ContactStripA = () => {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-a-primary)" }}
    >
      {/* Subtle background drift */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: "meshDrift 35s ease-in-out infinite alternate" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 80% at 90% 50%, rgba(200,149,108,0.08) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn direction="left" delay={0}>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Zadzwoń i zarezerwuj
              </h2>
              <address className="not-italic text-sm text-white/70">
                {CONTACT_INFO.address}, {CONTACT_INFO.city}
              </address>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={100}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-3xl font-bold text-white hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                style={{ backgroundColor: "var(--color-a-accent)", color: "white" }}
              >
                Formularz kontaktowy
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
