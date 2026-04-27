"use client";

import Link from "next/link";
import { CABIN_TYPES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export const CabinShowcaseB = () => {
  const featured = CABIN_TYPES.filter((c) => c.highlight);

  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-b-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" delay={0}>
          <div className="mb-16">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-b-secondary)" }}
            >
              Zakwaterowanie
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-2 gap-4">
              <h2
                className="text-4xl sm:text-5xl font-black"
                style={{ color: "var(--color-b-text)" }}
              >
                8 typów domków
              </h2>
              <Link
                href="domki"
                className="text-sm font-bold shrink-0 group flex items-center gap-1"
                style={{ color: "var(--color-b-accent)" }}
              >
                Wszystkie domki
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Alternating layout */}
        <div className="flex flex-col gap-12">
          {featured.map((cabin, i) => {
            const isOdd = i % 2 === 1;
            return (
              <div
                key={cabin.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isOdd ? "lg:[&>*:first-child]:order-last" : ""}`}
              >
                {/* Image placeholder */}
                <FadeIn direction={isOdd ? "right" : "left"} delay={0}>
                  <div
                    className="rounded-2xl overflow-hidden h-64 lg:h-80 flex items-end p-6 transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      background: `
                        radial-gradient(ellipse at ${isOdd ? "70%" : "30%"} 50%,
                          color-mix(in srgb, var(--color-b-secondary) 30%, transparent) 0%,
                          transparent 60%),
                        linear-gradient(135deg,
                          color-mix(in srgb, var(--color-b-surface) 100%, transparent),
                          color-mix(in srgb, var(--color-b-primary) 80%, var(--color-b-secondary)))
                      `,
                    }}
                  >
                    <span
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
                    >
                      maks. {cabin.maxGuests} osób
                    </span>
                  </div>
                </FadeIn>

                {/* Content */}
                <FadeIn direction={isOdd ? "left" : "right"} delay={100}>
                  <div>
                    <h3
                      className="text-3xl font-black mb-3"
                      style={{ color: "var(--color-b-text)" }}
                    >
                      {cabin.name}
                    </h3>
                    <p className="mb-4" style={{ color: "var(--color-b-text-secondary)" }}>
                      {cabin.rooms}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cabin.hasAC && (
                        <span
                          className="px-3 py-1 text-xs font-semibold rounded-full border animate-scale-in"
                          style={{ color: "var(--color-b-highlight)", borderColor: "color-mix(in srgb, var(--color-b-highlight) 30%, transparent)" }}
                        >
                          Klimatyzacja
                        </span>
                      )}
                      {cabin.hasKitchen && (
                        <span
                          className="px-3 py-1 text-xs font-semibold rounded-full border animate-scale-in"
                          style={{
                            color: "var(--color-b-secondary)",
                            borderColor: "color-mix(in srgb, var(--color-b-secondary) 30%, transparent)",
                            animationDelay: "60ms",
                          }}
                        >
                          Aneks kuchenny
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-6" style={{ color: "var(--color-b-text-secondary)" }}>
                      {cabin.notes}
                    </p>
                    <Link
                      href="domki"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
                    >
                      Szczegóły i rezerwacja
                    </Link>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
