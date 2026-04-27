import type { Metadata } from "next";
import Link from "next/link";
import { CABIN_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Domki — Koncepcja B",
  description:
    "8 typów domków kempingowych nad Zbiornikiem Jeziorsko. Zarezerwuj swój pobyt.",
};

export default function DomkiBPage() {
  return (
    <div
      className="pt-24 pb-16 min-h-screen"
      style={{ backgroundColor: "var(--color-b-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/concept-b"
            className="inline-flex items-center gap-1 text-sm mb-8"
            style={{ color: "var(--color-b-text-secondary)" }}
          >
            ← Strona główna
          </Link>
          <span
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--color-b-secondary)" }}
          >
            Zakwaterowanie
          </span>
          <h1
            className="text-5xl sm:text-7xl font-black mb-4"
            style={{ color: "var(--color-b-text)" }}
          >
            8 typów<br />
            <span style={{ color: "var(--color-b-accent)" }}>domków</span>
          </h1>
          <p className="max-w-2xl" style={{ color: "var(--color-b-text-secondary)" }}>
            Każdy domek: ogrzewanie, nowoczesna łazienka, zadaszony taras, WiFi, TV LCD,
            pościel i ręczniki. Check-in 16:00, check-out 11:00. Kaucja 500 zł.
          </p>
        </div>

        {/* Cabin grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {CABIN_TYPES.map((cabin) => (
            <div
              key={cabin.id}
              className="rounded-2xl overflow-hidden border"
              style={{
                backgroundColor: "var(--color-b-surface)",
                borderColor: cabin.highlight
                  ? `color-mix(in srgb, var(--color-b-accent) 40%, transparent)`
                  : "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
              }}
            >
              {/* Image placeholder */}
              <div
                className="h-44 flex items-end p-4"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 50%, color-mix(in srgb, var(--color-b-secondary) 20%, transparent) 0%, transparent 60%),
                    linear-gradient(135deg, var(--color-b-primary), var(--color-b-surface))
                  `,
                }}
              >
                {cabin.highlight && (
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full"
                    style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
                  >
                    Polecany
                  </span>
                )}
              </div>

              <div className="p-5">
                <h2
                  className="text-lg font-black mb-1"
                  style={{ color: "var(--color-b-text)" }}
                >
                  {cabin.name}
                </h2>
                <p className="text-sm mb-3" style={{ color: "var(--color-b-text-secondary)" }}>
                  {cabin.rooms} · maks. {cabin.maxGuests} osób
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cabin.hasAC && (
                    <span
                      className="px-2 py-0.5 text-xs font-semibold rounded-full border"
                      style={{ color: "var(--color-b-highlight)", borderColor: "color-mix(in srgb, var(--color-b-highlight) 30%, transparent)" }}
                    >
                      AC
                    </span>
                  )}
                  {cabin.hasKitchen && (
                    <span
                      className="px-2 py-0.5 text-xs font-semibold rounded-full border"
                      style={{ color: "var(--color-b-secondary)", borderColor: "color-mix(in srgb, var(--color-b-secondary) 30%, transparent)" }}
                    >
                      Kuchnia
                    </span>
                  )}
                </div>

                {cabin.notes && (
                  <p className="text-xs mb-4" style={{ color: "var(--color-b-text-secondary)" }}>
                    {cabin.notes}
                  </p>
                )}

                <a
                  href="#"
                  className="block w-full text-center py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--color-b-accent)", color: "var(--color-b-primary)" }}
                >
                  Zapytaj o termin
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-8 rounded-3xl text-center border"
          style={{
            backgroundColor: "var(--color-b-surface)",
            borderColor: `color-mix(in srgb, var(--color-b-accent) 30%, transparent)`,
          }}
        >
          <h2
            className="text-3xl font-black mb-3"
            style={{ color: "var(--color-b-text)" }}
          >
            Pytania o domki?
          </h2>
          <p className="mb-6" style={{ color: "var(--color-b-text-secondary)" }}>
            Zadzwoń — pomożemy wybrać najlepszy domek dla Twojej grupy.
          </p>
          <a
            href="tel:608108431"
            className="inline-block text-4xl font-black transition-opacity hover:opacity-80"
            style={{ color: "var(--color-b-accent)" }}
          >
            608 108 431
          </a>
        </div>
      </div>
    </div>
  );
}
