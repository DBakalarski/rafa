export const HeroA = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Text side */}
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-a-accent) 15%, transparent)", color: "var(--color-a-accent)" }}
            >
              Sezon 2026 — Rezerwuj teraz
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
            >
              Bezpieczny wypoczynek{" "}
              <span style={{ color: "var(--color-a-accent)" }}>nad jeziorem</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--color-a-text-secondary)" }}
            >
              Samodzielne domki kempingowe, własna plaża i przystań — na zachodnim brzegu
              Zbiornika Jeziorsko. Idealne miejsce dla rodzin, żeglarzy i wędkarzy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-a-accent)" }}
              >
                Rezerwuj pobyt
              </a>
              <a
                href="domki"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors border-2"
                style={{ borderColor: "var(--color-a-primary)", color: "var(--color-a-primary)" }}
              >
                Zobacz domki
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 mt-12 pt-8 border-t"
              style={{ borderColor: "color-mix(in srgb, var(--color-a-primary) 15%, transparent)" }}
            >
              {[
                { value: "8", label: "typów domków" },
                { value: "50+", label: "atrakcji" },
                { value: "IV–XI", label: "sezon" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold" style={{ color: "var(--color-a-primary)" }}>
                    {stat.value}
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
              className="rounded-3xl overflow-hidden aspect-[4/3]"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 40%, color-mix(in srgb, var(--color-a-secondary) 40%, transparent) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 60%, color-mix(in srgb, var(--color-a-secondary) 30%, transparent) 0%, transparent 50%),
                  linear-gradient(135deg, var(--color-a-primary) 0%, color-mix(in srgb, var(--color-a-primary) 70%, var(--color-a-secondary)) 100%)
                `,
              }}
            >
              <div className="flex items-end justify-center h-full pb-8">
                <div
                  className="text-center px-6 py-4 rounded-2xl"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-a-surface) 90%, transparent)" }}
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
            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-a-accent) 20%, transparent)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
