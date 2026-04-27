import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wybierz koncepcję — Rafa Jeziorsko",
  description: "Podgląd dwóch koncepcji wizualnych strony Rafa Jeziorsko.",
};

const CONCEPTS = [
  {
    href: "/concept-a",
    label: "Koncepcja A",
    title: "Klasyczna Elegancja",
    description:
      "Spokój, zaufanie, rodzinny klimat. Jasne tło, serif w nagłówkach, ciepłe akcenty miedziane.",
    palette: ["#1B3A4B", "#4A7C59", "#C8956C", "#FAF8F5"],
    paletteLabels: ["Navy", "Forest", "Copper", "Off-white"],
    tag: "Jasna · Elegancka · Serif",
    tagColor: "#C8956C",
    bg: "linear-gradient(135deg, #FAF8F5 0%, #f0ece5 100%)",
    textColor: "#1B3A4B",
    secondaryColor: "#6B7280",
    borderColor: "#e5e0d8",
    ctaBg: "#C8956C",
  },
  {
    href: "/concept-b",
    label: "Koncepcja B",
    title: "Odważna Przygoda",
    description:
      "Energetyczna, ciemna, nowoczesna. Duża bold typografia, gradient mesh, żywe akcenty bursztynowe.",
    palette: ["#0F172A", "#0EA5E9", "#F59E0B", "#1E293B"],
    paletteLabels: ["Slate", "Sky", "Amber", "Surface"],
    tag: "Ciemna · Nowoczesna · Bold",
    tagColor: "#F59E0B",
    bg: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    textColor: "#F8FAFC",
    secondaryColor: "#94A3B8",
    borderColor: "#334155",
    ctaBg: "#F59E0B",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6B7280" }}>
            Rafa Jeziorsko — Redesign 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Wybierz koncepcję
          </h1>
          <p style={{ color: "#9CA3AF" }} className="max-w-md mx-auto">
            Dwie odrębne wizje strony ośrodka. Kliknij kartę, by zobaczyć pełny podgląd.
            Na każdej stronie widoczny toggle pozwala przełączać się między koncepcjami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONCEPTS.map((concept) => (
            <Link
              key={concept.href}
              href={concept.href}
              className="group block rounded-3xl overflow-hidden border transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ borderColor: concept.borderColor }}
            >
              {/* Preview area */}
              <div
                className="h-56 p-6 flex flex-col justify-between"
                style={{ background: concept.bg }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: concept.tagColor + "22", color: concept.tagColor }}
                  >
                    {concept.tag}
                  </span>
                </div>

                {/* Mini nav preview */}
                <div>
                  <div
                    className="text-2xl font-black mb-1"
                    style={{ color: concept.textColor, fontFamily: concept.label === "Koncepcja A" ? "Georgia, serif" : "system-ui, sans-serif" }}
                  >
                    {concept.label === "Koncepcja A" ? "Rafa Jeziorsko" : "RAFA JEZIORSKO"}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {["Oferta", "Domki", "Atrakcje", "Port", "Cennik"].map((item) => (
                      <span
                        key={item}
                        className="text-xs"
                        style={{ color: concept.secondaryColor }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Color palette */}
                <div className="flex gap-2">
                  {concept.palette.map((color, i) => (
                    <div key={color} className="flex flex-col items-center gap-1">
                      <div
                        className="w-7 h-7 rounded-lg border border-black/10"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <span className="text-[9px]" style={{ color: concept.secondaryColor }}>
                        {concept.paletteLabels[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info area */}
              <div className="p-6" style={{ backgroundColor: "#1F2937", borderTop: `1px solid ${concept.borderColor}` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6B7280" }}>
                      {concept.label}
                    </p>
                    <h2 className="text-xl font-bold text-white">{concept.title}</h2>
                  </div>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ backgroundColor: concept.ctaBg + "22", color: concept.ctaBg }}
                  >
                    →
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {concept.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center mt-10 text-xs" style={{ color: "#4B5563" }}>
          Oba koncepty zawierają stronę główną + podstronę &quot;Domki&quot;
        </p>
      </div>
    </div>
  );
}
