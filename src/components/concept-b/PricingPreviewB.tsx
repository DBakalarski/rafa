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
            <div className="space-y-3">
              {[
                { label: "Domek MINI", from: "Zapytaj o cenę", sub: "do 3 osób, camping" },
                { label: "Domek STANDARD", from: "Zapytaj o cenę", sub: "do 4 osób" },
                { label: "Domek SUPERIOR", from: "Zapytaj o cenę", sub: "do 6 osób, AC, pełny aneks" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-xl"
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
            </div>
          </div>

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
              {[
                "Do 50% na zakwaterowanie dla dzieci do 16 lat",
                "5% od 7 noclegów",
                "8% od 10 noclegów",
                "5% dla członków PFCC, CCI, ACSI",
                "50% zniżki na rejsy dla dzieci do 12 lat",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-b-text-secondary)" }}>
                  <span style={{ color: "var(--color-b-accent)" }} className="shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 block w-full text-center py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
            >
              Pełny cennik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
