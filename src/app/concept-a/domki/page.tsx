import type { Metadata } from "next";
import Link from "next/link";
import { CABIN_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Domki — Koncepcja A",
  description:
    "8 typów komfortowych domków kempingowych nad jeziorem. Od MINI po SUPERIOR — każdy z tarasem, WiFi i pościelą.",
};

export default function DomkiAPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "var(--color-a-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/concept-a"
            className="inline-flex items-center gap-1 text-sm mb-6"
            style={{ color: "var(--color-a-text-secondary)" }}
          >
            ← Strona główna
          </Link>
          <span className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--color-a-secondary)" }}>
            Zakwaterowanie
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
          >
            Nasze domki
          </h1>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: "var(--color-a-text-secondary)" }}>
            Wszystkie domki są ogrzewane, posiadają nowoczesne łazienki, zadaszony taras
            z meblami, WiFi, TV LCD oraz pościel i ręczniki. Check-in: 16:00, check-out: 11:00.
            Kaucja: 500 zł.
          </p>
        </div>

        {/* Cabin grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CABIN_TYPES.map((cabin) => (
            <div
              key={cabin.id}
              className="rounded-2xl overflow-hidden border"
              style={{
                backgroundColor: "var(--color-a-surface)",
                borderColor: cabin.highlight
                  ? "var(--color-a-accent)"
                  : "color-mix(in srgb, var(--color-a-primary) 10%, transparent)",
              }}
            >
              {/* Placeholder image */}
              <div
                className="h-48 flex items-end p-4"
                style={{
                  background: `linear-gradient(135deg,
                    color-mix(in srgb, var(--color-a-primary) 85%, var(--color-a-secondary)),
                    color-mix(in srgb, var(--color-a-secondary) 50%, var(--color-a-primary)))`,
                }}
              >
                {cabin.highlight && (
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: "var(--color-a-accent)", color: "white" }}
                  >
                    Polecany
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-bold" style={{ color: "var(--color-a-primary)" }}>
                    {cabin.name}
                  </h2>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {cabin.hasAC && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: "color-mix(in srgb, var(--color-a-secondary) 15%, transparent)", color: "var(--color-a-secondary)" }}
                      >
                        Klimatyzacja
                      </span>
                    )}
                    {cabin.hasKitchen && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: "color-mix(in srgb, var(--color-a-primary) 10%, transparent)", color: "var(--color-a-primary)" }}
                      >
                        Aneks kuchenny
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-a-text-secondary)" }}>
                    <span>🛏️</span>
                    <span>{cabin.rooms}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-a-text-secondary)" }}>
                    <span>👥</span>
                    <span>Maks. {cabin.maxGuests} osób</span>
                  </div>
                  {cabin.notes && (
                    <div className="flex items-start gap-2 text-sm" style={{ color: "var(--color-a-text-secondary)" }}>
                      <span className="shrink-0">ℹ️</span>
                      <span>{cabin.notes}</span>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="block w-full text-center py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--color-a-accent)", color: "white" }}
                >
                  Zapytaj o termin
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-8 rounded-3xl text-center"
          style={{ backgroundColor: "var(--color-a-primary)" }}
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nie wiesz który domek wybrać?
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Zadzwoń, a doradzimy najlepsze rozwiązanie dla Twojej grupy.
          </p>
          <a
            href="tel:608108431"
            className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-a-accent)", color: "white" }}
          >
            608 108 431
          </a>
        </div>
      </div>
    </div>
  );
}
