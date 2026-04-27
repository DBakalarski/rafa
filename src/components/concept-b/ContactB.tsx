"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { RevealText } from "@/components/ui/RevealText";

export const ContactB = () => {
  return (
    <section
      className="py-24 border-t"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="none" delay={0}>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-b-secondary)" }}
          >
            Kontakt
          </span>
        </FadeIn>

        <div className="mt-2 mb-4">
          <RevealText
            as="h2"
            splitBy="word"
            baseDelay={50}
            className="text-4xl sm:text-6xl font-black"
            style={{ color: "var(--color-b-text)" }}
          >
            Gotowy na przygodę?
          </RevealText>
        </div>

        <FadeIn direction="up" delay={400}>
          <p className="mb-10 max-w-md mx-auto" style={{ color: "var(--color-b-text-secondary)" }}>
            Zadzwoń lub napisz — pomożemy wybrać idealny termin i domek dla Ciebie.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={500} duration={800}>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            className="inline-block text-5xl sm:text-6xl font-black tracking-tight mb-10 transition-[opacity,transform] duration-200 hover:opacity-80 hover:scale-[1.01]"
            style={{
              color: "var(--color-b-accent)",
              background: "linear-gradient(90deg, var(--color-b-accent) 0%, color-mix(in srgb, var(--color-b-accent) 70%, white) 50%, var(--color-b-accent) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}
          >
            {CONTACT_INFO.phone}
          </a>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <FadeIn direction="up" delay={600}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
            >
              Formularz rezerwacji
            </a>
          </FadeIn>
          <FadeIn direction="up" delay={700}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border transition-[colors,transform] duration-150 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                borderColor: "color-mix(in srgb, var(--color-b-text) 30%, transparent)",
                color: "var(--color-b-text)",
              }}
            >
              Napisz email
            </a>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={800}>
          <p className="mt-8 text-sm" style={{ color: "var(--color-b-text-secondary)" }}>
            {CONTACT_INFO.address}, {CONTACT_INFO.city}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
