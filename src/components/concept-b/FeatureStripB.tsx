"use client";

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

/* 8 copies = ~7680px total width. Even on 4K ultra-wide, there's no gap. */
const ITEMS_REPEATED = Array.from({ length: 8 }, () => FEATURES).flat();

export const FeatureStripB = () => {
  return (
    <section
      className="py-10 border-y overflow-hidden"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
      aria-label="Udogodnienia i atrakcje ośrodka"
    >
      {/* Desktop: auto-scrolling marquee */}
      <div
        className="hidden sm:flex w-max will-change-transform"
        style={{ animation: "marquee-scroll 40s linear infinite" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {ITEMS_REPEATED.map((f, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col items-center gap-2 px-6 py-2"
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

      {/* Mobile: static snap scroll */}
      <div className="flex sm:hidden justify-center gap-6 overflow-x-auto pb-2 px-4 snap-x snap-mandatory">
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
