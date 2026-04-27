import { ATTRACTIONS } from "@/lib/constants";

export const AttractionsB = () => {
  return (
    <section
      className="py-24 border-t"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-b-secondary)" }}
          >
            Atrakcje
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mt-2"
            style={{ color: "var(--color-b-text)" }}
          >
            Co tu zrobisz?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ATTRACTIONS.map((attr) => (
            <div
              key={attr.id}
              className="group p-6 rounded-2xl border transition-all hover:border-opacity-60 cursor-default"
              style={{
                backgroundColor: "var(--color-b-primary)",
                borderColor: "color-mix(in srgb, var(--color-b-text) 10%, transparent)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: attr.category === "wodne" ? "var(--color-b-secondary)" : "var(--color-b-accent)" }}
                >
                  {attr.category === "wodne" ? "Na miejscu" : "W okolicy"}
                </span>
              </div>
              <h3
                className="text-lg font-black mb-2"
                style={{ color: "var(--color-b-text)" }}
              >
                {attr.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-b-text-secondary)" }}>
                {attr.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
