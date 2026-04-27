import { CONTACT_INFO } from "@/lib/constants";

export const ContactStripA = () => {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-a-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Zadzwoń i zarezerwuj
            </h2>
            <address className="not-italic text-sm text-white/70">
              {CONTACT_INFO.address}, {CONTACT_INFO.city}
            </address>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="text-3xl font-bold text-white hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "var(--color-a-accent)", color: "white" }}
            >
              Formularz kontaktowy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
