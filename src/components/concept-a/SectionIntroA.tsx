export const SectionIntroA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-a-secondary)" }}
            >
              O nas
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-6 leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
            >
              Kameralna atmosfera{" "}
              <br />
              <span style={{ color: "var(--color-a-accent)" }}>na własnej plaży</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-a-text-secondary)" }}
            >
              Witamy serdecznie na stronie Ośrodka Rafa-Jeziorsko! Znajdziecie tu Państwo pełną
              ofertę świadczonych przez nas usług, aktualny cennik oraz wszelkie informacje o
              zbliżających się wydarzeniach.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-a-text-secondary)" }}
            >
              Jesteśmy ośrodkiem dla rodzin, grup, żeglarzy, wędkarzy i miłośników aktywnego
              wypoczynku. Własna plaża, przystań i kameralny klimat sprawiają, że goście
              wracają do nas rok po roku.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⚓", title: "Port żeglarski", desc: "Pełna infrastruktura dla żeglarzy i motorowodniaków" },
              { icon: "🏖️", title: "Własna plaża", desc: "Piaszczysta plaża bezpośrednio przy ośrodku" },
              { icon: "🏕️", title: "Pole namiotowe", desc: "Miejsca dla kamperów, przyczep i namiotów" },
              { icon: "🎣", title: "Wędkarstwo", desc: "Rejestrowana łódź wędkarska i doskonałe łowiska" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "var(--color-a-bg)" }}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--color-a-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-a-text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
