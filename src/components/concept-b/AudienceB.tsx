const SEGMENTS = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Rodziny",
    description: "Plac zabaw, plaża, kajaki i domki do 6 osób. Dzieci do 16 lat z zniżką do 50%.",
    color: "var(--color-b-accent)",
  },
  {
    icon: "⛵",
    title: "Żeglarze",
    description: "Własny port, slip, zimowanie jachtów. Kursy motorowodne na miejscu.",
    color: "var(--color-b-secondary)",
  },
  {
    icon: "🎣",
    title: "Wędkarze",
    description: "Rejestrowana łódź wędkarska, doskonałe łowiska na Zbiorniku Jeziorsko.",
    color: "var(--color-b-highlight)",
  },
  {
    icon: "🎉",
    title: "Grupy",
    description: "Altana na 50 osób, sala wielofunkcyjna, Tawerna, domki dla 20+ gości.",
    color: "var(--color-b-accent)",
  },
];

export const AudienceB = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-b-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-b-secondary)" }}
          >
            Dla kogo
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mt-2"
            style={{ color: "var(--color-b-text)" }}
          >
            Tu każdy znajdzie swoje miejsce
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: "var(--color-b-surface)",
                borderColor: `color-mix(in srgb, ${seg.color} 20%, transparent)`,
              }}
            >
              <span className="text-4xl block mb-4">{seg.icon}</span>
              <h3
                className="text-xl font-black mb-2"
                style={{ color: seg.color }}
              >
                {seg.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-b-text-secondary)" }}>
                {seg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
