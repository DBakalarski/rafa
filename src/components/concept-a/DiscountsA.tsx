import { DISCOUNTS } from "@/lib/constants";

export const DiscountsA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-a-secondary)" }}>
            Oszczędzaj
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
          >
            Aktualne zniżki
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {DISCOUNTS.map((discount) => (
            <div
              key={discount.label}
              className="p-5 rounded-2xl border"
              style={{
                borderColor: "color-mix(in srgb, var(--color-a-primary) 10%, transparent)",
                backgroundColor: "var(--color-a-bg)",
              }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-a-accent)", fontFamily: "var(--font-playfair)" }}
              >
                {discount.value}
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--color-a-primary)" }}>
                {discount.label}
              </h3>
              <p className="text-xs" style={{ color: "var(--color-a-text-secondary)" }}>
                {discount.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
