export const HeroB = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-b-primary)" }}
    >
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, color-mix(in srgb, var(--color-b-secondary) 18%, transparent) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 70%, color-mix(in srgb, var(--color-b-accent) 12%, transparent) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 50% 10%, color-mix(in srgb, var(--color-b-highlight) 8%, transparent) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-8 px-4 py-2 rounded-full border"
          style={{
            color: "var(--color-b-highlight)",
            borderColor: "color-mix(in srgb, var(--color-b-highlight) 30%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-b-highlight) 8%, transparent)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-b-highlight)" }} />
          Sezon 2026 otwarty
        </span>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          style={{ color: "var(--color-b-text)" }}
        >
          RAFA
          <br />
          <span style={{ color: "var(--color-b-secondary)" }}>JEZIORSKO</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-xl mx-auto mb-10"
          style={{ color: "var(--color-b-text-secondary)" }}
        >
          Twoja przygoda nad jeziorem. Żeglowanie, SUP, rejsy i prawdziwy wypoczynek
          na zachodnim brzegu Zbiornika Jeziorsko.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
          >
            Odkryj ośrodek
          </a>
          <a
            href="domki"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border transition-colors"
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
          className="inline-flex flex-wrap justify-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-b-surface) 80%, transparent)",
            border: `1px solid color-mix(in srgb, var(--color-b-text) 8%, transparent)`,
          }}
        >
          {[
            { value: "8", label: "typów domków" },
            { value: "50+", label: "atrakcji" },
            { value: "IV–XI", label: "sezon" },
            { value: "1,5 km", label: "od tamy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-xl sm:text-2xl font-black"
                style={{ color: "var(--color-b-accent)", fontFamily: "var(--font-mono)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs" style={{ color: "var(--color-b-text-secondary)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-b-text-secondary)" }}>
          Odkryj
        </span>
        <div
          className="w-px h-10"
          style={{ background: `linear-gradient(to bottom, var(--color-b-text-secondary), transparent)` }}
        />
      </div>
    </section>
  );
};
