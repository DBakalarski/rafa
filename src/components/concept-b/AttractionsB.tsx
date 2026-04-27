"use client";

import { useRef, MouseEvent } from "react";
import { ATTRACTIONS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerParent } from "@/components/ui/StaggerParent";

export const AttractionsB = () => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty("--mouse-x");
    e.currentTarget.style.removeProperty("--mouse-y");
  };

  return (
    <section
      className="py-24 border-t"
      style={{
        backgroundColor: "var(--color-b-surface)",
        borderColor: "color-mix(in srgb, var(--color-b-text) 8%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="left" delay={0}>
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
        </FadeIn>

        <StaggerParent
          staggerMs={50}
          baseDelay={0}
          direction="up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ATTRACTIONS.map((attr) => (
            <div
              key={attr.id}
              className="group p-6 rounded-2xl border transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(14,165,233,0.2)] cursor-default relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-b-primary)",
                borderColor: "color-mix(in srgb, var(--color-b-text) 10%, transparent)",
                background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--color-b-secondary) 6%, transparent) 0%, var(--color-b-primary) 60%)",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
        </StaggerParent>
      </div>
    </section>
  );
};
