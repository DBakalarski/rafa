import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const FooterB = () => {
  return (
    <footer style={{ backgroundColor: "var(--color-b-surface)", color: "var(--color-b-text-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-xl font-black tracking-tight mb-1" style={{ color: "var(--color-b-text)" }}>
              RAFA JEZIORSKO
            </p>
            <p className="text-xs leading-relaxed">
              Ośrodek Wypoczynkowo-Żeglarski<br />
              Sezon: Kwiecień – Listopad
            </p>
            <a
              href={CONTACT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-b-secondary)" }}
            >
              Facebook →
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-b-text)" }}>
              Kontakt
            </p>
            <address className="not-italic text-sm space-y-1">
              <p>{CONTACT_INFO.address}, {CONTACT_INFO.city}</p>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="block hover:opacity-100 transition-opacity" style={{ color: "var(--color-b-accent)" }}>
                {CONTACT_INFO.phone}
              </a>
            </address>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-b-text)" }}>
              Informacje
            </p>
            <nav className="flex flex-col gap-2">
              {["Kontakt", "Regulamin Ośrodka", "Regulamin Przystani"].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t"
          style={{ borderColor: "color-mix(in srgb, var(--color-b-text) 10%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Rafa-Jeziorsko. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
