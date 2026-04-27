"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerParent } from "@/components/ui/StaggerParent";

const PRICING_ROWS = [
  { label: "Domek MINI", from: "Zapytaj o cenę", sub: "do 3 osób, camping" },
  { label: "Domek STANDARD", from: "Zapytaj o cenę", sub: "do 4 osób" },
  { label: "Domek SUPERIOR", from: "Zapytaj o cenę", sub: "do 6 osób, AC, pełny aneks" },
];

const DISCOUNT_ITEMS = [
  "Do 50% na zakwaterowanie dla dzieci do 16 lat",
  "5% od 7 noclegów",
  "8% od 10 noclegów",
  "5% dla członków PFCC, CCI, ACSI",
  "50% zniżki na rejsy dla dzieci do 12 lat",
];

export const PricingPreviewB = () => {
  return (
    <section
      className="py-24 border-t"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" delay={0}>
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--color-b-secondary)" }}
              >
                Cennik
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black mt-2 mb-6"
                style={{ color: "var(--color-b-text)" }}
              >
                Ceny od
              </h2>
              <StaggerParent
                staggerMs={80}
                baseDelay={0}
                direction="up"
                className="space-y-3"
              >
                {PRICING_ROWS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 rounded-xl transition-[transform] duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--color-b-primary)" }}
                  >
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--color-b-text)" }}>
                        {item.label}
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-b-text-secondary)" }}>
                        {item.sub}
                      </p>
                    </div>
                    <p className="font-black text-sm" style={{ color: "var(--color-b-accent)" }}>
                      {item.from}
                    </p>
                  </div>
                ))}
              </StaggerParent>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={100}>
            <div
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--color-b-primary)",
                borderColor: `color-mix(in srgb, var(--color-b-accent) 30%, transparent)`,
              }}
            >
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: "var(--color-b-text)" }}
              >
                Zniżki sezonowe
              </h3>
              <ul className="space-y-3">
                {DISCOUNT_ITEMS.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm animate-fade-in-left"
                    style={{
                      color: "var(--color-b-text-secondary)",
                      animationDelay: `${i * 50}ms`,
                    }}
                  >
                    <span
                      style={{ color: "var(--color-b-accent)" }}
                      className="shrink-0 font-bold animate-scale-in"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 block w-full text-center py-3 rounded-full font-bold text-sm transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] animate-scale-in"
                style={{
                  backgroundColor: "var(--color-b-accent)",
                  color: "var(--color-b-primary)",
                  animationDelay: `${DISCOUNT_ITEMS.length * 50 + 50}ms`,
                }}
              >
                Pełny cennik
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
