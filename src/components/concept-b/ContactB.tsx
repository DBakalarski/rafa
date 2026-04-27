import { CONTACT_INFO } from "@/lib/constants";

export const ContactB = () => {
  return (
    <section
      className="py-24 border-t"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--color-b-secondary)" }}
        >
          Kontakt
        </span>
        <h2
          className="text-4xl sm:text-6xl font-black mt-2 mb-4"
          style={{ color: "var(--color-b-text)" }}
        >
          Gotowy na przygodę?
        </h2>
        <p className="mb-10 max-w-md mx-auto" style={{ color: "var(--color-b-text-secondary)" }}>
          Zadzwoń lub napisz — pomożemy wybrać idealny termin i domek dla Ciebie.
        </p>

        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          className="inline-block text-5xl sm:text-6xl font-black tracking-tight mb-10 transition-opacity hover:opacity-80"
          style={{ color: "var(--color-b-accent)" }}
        >
          {CONTACT_INFO.phone}
        </a>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
          >
            Formularz rezerwacji
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border transition-colors"
            style={{
              borderColor: "color-mix(in srgb, var(--color-b-text) 30%, transparent)",
              color: "var(--color-b-text)",
            }}
          >
            Napisz email
          </a>
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--color-b-text-secondary)" }}>
          {CONTACT_INFO.address}, {CONTACT_INFO.city}
        </p>
      </div>
    </section>
  );
};
