"use client";

import { ATTRACTIONS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerParent } from "@/components/ui/StaggerParent";

export const AttractionsA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-a-secondary)" }}>
              Atrakcje
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
            >
              Co czeka na Ciebie?
            </h2>
          </div>
        </FadeIn>

        <StaggerParent
          staggerMs={60}
          baseDelay={0}
          direction="up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ATTRACTIONS.map((attr) => (
            <div
              key={attr.id}
              className="group p-6 rounded-2xl border transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(200,149,108,0.25)]"
              style={{
                borderColor: "color-mix(in srgb, var(--color-a-primary) 10%, transparent)",
                backgroundColor: "var(--color-a-bg)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:rotate-[5deg] group-hover:scale-110"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-a-accent) 15%, transparent)" }}
              >
                <span className="text-lg">
                  {attr.category === "wodne" ? "🌊" : "📍"}
                </span>
              </div>
              <span
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: attr.category === "wodne" ? "var(--color-a-secondary)" : "var(--color-a-accent)" }}
              >
                {attr.category === "wodne" ? "Na miejscu" : "W okolicy"}
              </span>
              <h3
                className="font-bold mt-1 mb-2"
                style={{ color: "var(--color-a-primary)" }}
              >
                {attr.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-a-text-secondary)" }}>
                {attr.description}
              </p>
            </div>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
};
