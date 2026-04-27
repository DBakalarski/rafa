import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const FooterA = () => {
  return (
    <footer
      className="mt-auto border-t"
      style={{
        backgroundColor: "var(--color-a-primary)",
        borderColor: "color-mix(in srgb, var(--color-a-primary) 80%, black)",
        color: "var(--color-a-bg)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-bg)" }}
            >
              Rafa Jeziorsko
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Ośrodek Wypoczynkowo-Żeglarski<br />
              Zachodni brzeg Zbiornika Jeziorsko
            </p>
            <a
              href={CONTACT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 opacity-90">Kontakt</h4>
            <address className="not-italic text-sm space-y-1 opacity-70">
              <p>{CONTACT_INFO.address}</p>
              <p>{CONTACT_INFO.city}</p>
              <p className="mt-2">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:opacity-100 transition-opacity">
                  Tel: {CONTACT_INFO.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 opacity-90">Informacje</h4>
            <nav className="flex flex-col gap-2">
              {["Kontakt", "Regulamin Ośrodka", "Regulamin Przystani"].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-50 border-t"
          style={{ borderColor: "color-mix(in srgb, white 20%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Rafa-Jeziorsko. Wszelkie prawa zastrzeżone.</p>
          <p>Sezon: Kwiecień – Listopad</p>
        </div>
      </div>
    </footer>
  );
};
