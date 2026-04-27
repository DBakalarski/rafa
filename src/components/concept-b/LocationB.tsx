export const LocationB = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-b-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div
            className="h-72 lg:h-96 rounded-2xl flex items-center justify-center"
            style={{
              background: `
                radial-gradient(circle at 40% 60%, color-mix(in srgb, var(--color-b-secondary) 25%, transparent) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--color-b-highlight) 10%, transparent) 0%, transparent 40%),
                linear-gradient(135deg, var(--color-b-surface) 0%, var(--color-b-primary) 100%)
              `,
            }}
          >
            <div className="text-center">
              <span className="text-5xl block mb-3">📍</span>
              <p className="font-bold" style={{ color: "var(--color-b-text)" }}>
                Kościanki 15, 62-730 Dobra
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-b-text-secondary)" }}>
                N: 51° 51&apos; 8.74&quot; / E: 18° 40&apos; 27.04&quot;
              </p>
            </div>
          </div>

          {/* Info */}
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-b-secondary)" }}
            >
              Lokalizacja
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black mt-2 mb-6"
              style={{ color: "var(--color-b-text)" }}
            >
              Jak do nas dojechać?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: "🛣️", text: "Trasa 83, następnie droga 478" },
                { icon: "🏛️", text: "100 metrów przed tamą skręt w prawo" },
                { icon: "🌊", text: "Zachodni brzeg Zbiornika Jeziorsko, 1,5 km od tamy" },
                { icon: "⚡", text: "Stacja ładowania pojazdów elektrycznych na terenie" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <p style={{ color: "var(--color-b-text-secondary)" }}>{item.text}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-colors"
              style={{
                borderColor: "color-mix(in srgb, var(--color-b-text) 30%, transparent)",
                color: "var(--color-b-text)",
              }}
            >
              Otwórz w Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
