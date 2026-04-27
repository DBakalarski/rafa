"use client";

import Link from "next/link";
import { CABIN_TYPES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerParent } from "@/components/ui/StaggerParent";

export const CabinPreviewA = () => {
  const featured = CABIN_TYPES.filter((c) => c.highlight);

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <FadeIn direction="up" delay={0}>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-a-secondary)" }}>
                Zakwaterowanie
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mt-2"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
              >
                Nasze domki
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <Link
              href="domki"
              className="text-sm font-semibold flex items-center gap-1 shrink-0 group"
              style={{ color: "var(--color-a-accent)" }}
            >
              Wszystkie 8 typów
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          <StaggerParent
            staggerMs={100}
            baseDelay={0}
            direction="right"
            className="flex gap-5"
          >
            {featured.map((cabin) => (
              <div
                key={cabin.id}
                className="snap-start shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(27,58,75,0.15)]"
                style={{
                  backgroundColor: "var(--color-a-surface)",
                  borderColor: "color-mix(in srgb, var(--color-a-primary) 10%, transparent)",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="h-44 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg,
                      color-mix(in srgb, var(--color-a-primary) 80%, var(--color-a-secondary)),
                      color-mix(in srgb, var(--color-a-secondary) 60%, var(--color-a-primary)))`,
                  }}
                >
                  <span className="text-4xl transition-transform duration-300 hover:scale-110">🏠</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm tracking-wide" style={{ color: "var(--color-a-primary)" }}>
                      {cabin.name}
                    </h3>
                    <div className="flex gap-1">
                      {cabin.hasAC && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "color-mix(in srgb, var(--color-a-secondary) 15%, transparent)", color: "var(--color-a-secondary)" }}
                        >
                          AC
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs mb-3" style={{ color: "var(--color-a-text-secondary)" }}>
                    {cabin.rooms}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "var(--color-a-text-secondary)" }}>
                      Maks. {cabin.maxGuests} osób
                    </span>
                    <Link
                      href="domki"
                      className="text-xs font-semibold group flex items-center gap-0.5"
                      style={{ color: "var(--color-a-accent)" }}
                    >
                      Szczegóły
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggerParent>
        </div>
      </div>
    </section>
  );
};
