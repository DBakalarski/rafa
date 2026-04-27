import { INCLUDED_AMENITIES } from "@/lib/constants";

const iconMap: Record<string, string> = {
  wifi: "📶",
  sun: "☀️",
  zap: "⚡",
  waves: "🏖️",
  smile: "🛝",
  dumbbell: "💪",
  flame: "🔥",
  trophy: "🏐",
  table: "🏓",
  gamepad: "🎲",
  basketball: "🏀",
  feather: "🏸",
};

export const IncludedA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-a-secondary)" }}>
            Bez dopłat
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
          >
            W cenie pobytu
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: "var(--color-a-text-secondary)" }}>
            Wszystkie poniższe atrakcje i udogodnienia są wliczone w cenę noclegu — bez ukrytych opłat.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INCLUDED_AMENITIES.map((amenity) => (
            <div
              key={amenity.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl"
              style={{ backgroundColor: "var(--color-a-surface)" }}
            >
              <span className="text-3xl mb-3">{iconMap[amenity.icon] ?? "✓"}</span>
              <span className="text-sm font-medium" style={{ color: "var(--color-a-text)" }}>
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
