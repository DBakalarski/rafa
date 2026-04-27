"use client";

import { CountUp } from "@/components/ui/CountUp";

export const HeroA = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Text side */}
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full animate-fade-in"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-a-accent) 15%, transparent)", color: "var(--color-a-accent)" }}
            >
              Sezon 2026 — Rezerwuj teraz
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--color-a-primary)",
                animationDelay: "100ms",
              }}
            >
              Bezpieczny wypoczynek{" "}
              <span
                style={{ color: "var(--color-a-accent)", display: "inline-block" }}
                className="animate-fade-in-up"
              >
                nad jeziorem
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up"
              style={{ color: "var(--color-a-text-secondary)", animationDelay: "350ms" }}
            >
              Samodzielne domki kempingowe, własna plaża i przystań — na zachodnim brzegu
              Zbiornika Jeziorsko. Idealne miejsce dla rodzin, żeglarzy i wędkarzy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-a-accent)" }}
              >
                Rezerwuj pobyt
              </a>
              <a
                href="domki"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-[colors,transform] duration-150 border-2 hover:scale-[1.02] active:scale-[0.98]"
                style={{ borderColor: "var(--color-a-primary)", color: "var(--color-a-primary)" }}
              >
                Zobacz domki
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 mt-12 pt-8 border-t animate-fade-in-up"
              style={{
                borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)",
                animationDelay: "650ms",
              }}
            >
              {[
                { numeric: 8, display: null, label: "typów domków", suffix: "" },
                { numeric: 50, display: null, label: "atrakcji", suffix: "+" },
                { numeric: null, display: "IV–XI", label: "sezon", suffix: "" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold" style={{ color: "var(--color-a-primary)" }}>
                    {stat.numeric !== null
                      ? <CountUp target={stat.numeric} suffix={stat.suffix} duration={1200} />
                      : stat.display}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-a-text-secondary)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — gradient placeholder */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3] animate-scale-in"
              style={{
                animationDelay: "200ms",
                animationDuration: "800ms",
                background: `
                  radial-gradient(ellipse at 30% 40%, color-mix(in srgb, var(--color-a-secondary) 40%, transparent) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 60%, color-mix(in srgb, var(--color-a-secondary) 30%, transparent) 0%, transparent 50%),
                  linear-gradient(135deg, var(--color-a-primary) 0%, color-mix(in srgb, var(--color-a-primary) 70%, var(--color-a-secondary)) 100%)
                `,
              }}
            >
              <div className="flex items-end justify-center h-full pb-8">
                <div
                  className="text-center px-6 py-4 rounded-2xl animate-fade-in-up"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-a-surface) 90%, transparent)",
                    animationDelay: "500ms",
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: "var(--color-a-text-secondary)" }}>
                    Zbiornik Jeziorsko
                  </p>
                  <p className="font-bold" style={{ color: "var(--color-a-primary)" }}>
                    Zachodni brzeg, 1,5 km od tamy
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative floating element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10 animate-float"
              style={{
                backgroundColor: "color-mix(in srgb, var(--color-a-accent) 20%, transparent)",
                animationDelay: "800ms",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
