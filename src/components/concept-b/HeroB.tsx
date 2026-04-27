"use client";

import { CountUp } from "@/components/ui/CountUp";

export const HeroB = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-b-primary)" }}
    >
      {/* Animated gradient mesh background — each blob drifts independently */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: "meshDrift 18s ease-in-out infinite alternate" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 20% 30%, color-mix(in srgb, var(--color-b-secondary) 18%, transparent) 0%, transparent 70%)`,
          }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: "meshDrift 22s ease-in-out infinite alternate-reverse" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 80% at 80% 70%, color-mix(in srgb, var(--color-b-accent) 12%, transparent) 0%, transparent 70%)`,
          }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: "meshDrift 28s ease-in-out infinite alternate" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 50% at 50% 10%, color-mix(in srgb, var(--color-b-highlight) 8%, transparent) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-8 px-4 py-2 rounded-full border animate-scale-in"
          style={{
            color: "var(--color-b-highlight)",
            borderColor: "color-mix(in srgb, var(--color-b-highlight) 30%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-b-highlight) 8%, transparent)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "var(--color-b-highlight)",
              animation: "pulseGlow 2s ease-in-out infinite",
            }}
          />
          Sezon 2026 otwarty
        </span>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          style={{ color: "var(--color-b-text)" }}
        >
          <span className="block animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            RAFA
          </span>
          <span
            className="block animate-fade-in-up"
            style={{ color: "var(--color-b-secondary)", animationDelay: "200ms" }}
          >
            JEZIORSKO
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-xl mx-auto mb-10 animate-fade-in"
          style={{ color: "var(--color-b-text-secondary)", animationDelay: "350ms" }}
        >
          Twoja przygoda nad jeziorem. Żeglowanie, SUP, rejsy i prawdziwy wypoczynek
          na zachodnim brzegu Zbiornika Jeziorsko.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm transition-[opacity,transform] duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
          >
            Odkryj ośrodek
          </a>
          <a
            href="domki"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border transition-[colors,transform] duration-150 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              borderColor: "color-mix(in srgb, var(--color-b-text) 30%, transparent)",
              color: "var(--color-b-text)",
            }}
          >
            Zobacz domki →
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="inline-flex flex-wrap justify-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl animate-fade-in-up"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-b-surface) 80%, transparent)",
            border: `1px solid color-mix(in srgb, var(--color-b-text) 8%, transparent)`,
            animationDelay: "700ms",
          }}
        >
          {[
            { numeric: 8, display: null, label: "typów domków", suffix: "" },
            { numeric: 50, display: null, label: "atrakcji", suffix: "+" },
            { numeric: null, display: "IV–XI", label: "sezon" },
            { numeric: null, display: "1,5 km", label: "od tamy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-xl sm:text-2xl font-black"
                style={{ color: "var(--color-b-accent)", fontFamily: "var(--font-mono)" }}
              >
                {stat.numeric !== null
                  ? <CountUp target={stat.numeric} suffix={stat.suffix} duration={1200} />
                  : stat.display}
              </p>
              <p className="text-xs" style={{ color: "var(--color-b-text-secondary)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "900ms" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-b-text-secondary)" }}>
          Odkryj
        </span>
        <div
          className="w-px h-10 animate-scroll-bounce"
          style={{ background: `linear-gradient(to bottom, var(--color-b-text-secondary), transparent)` }}
        />
      </div>
    </section>
  );
};
