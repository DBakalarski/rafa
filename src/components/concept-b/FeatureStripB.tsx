const FEATURES = [
  { icon: "🏠", label: "Domki" },
  { icon: "⚓", label: "Port" },
  { icon: "🏖️", label: "Plaża" },
  { icon: "🧖", label: "Sauna" },
  { icon: "🛶", label: "Kajaki" },
  { icon: "🏄", label: "SUP" },
  { icon: "⛵", label: "Jachty" },
  { icon: "🎣", label: "Wędkarstwo" },
  { icon: "🛥️", label: "Rejsy" },
  { icon: "🏕️", label: "Camping" },
  { icon: "🔥", label: "Grill" },
  { icon: "⚡", label: "Stacja EV" },
];

export const FeatureStripB = () => {
  return (
    <section
      className="py-10 border-y"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="flex justify-center gap-6 overflow-x-auto pb-2 px-4 sm:px-8 lg:px-16 snap-x snap-mandatory no-scrollbar">
        {FEATURES.map((f) => (
          <div
            key={f.label}
            className="snap-start shrink-0 flex flex-col items-center gap-2 px-4 py-2"
          >
            <span className="text-2xl">{f.icon}</span>
            <span
              className="text-xs font-semibold tracking-wide whitespace-nowrap"
              style={{ color: "var(--color-b-text-secondary)" }}
            >
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
