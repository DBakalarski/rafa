"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerParent } from "@/components/ui/StaggerParent";

const TESTIMONIALS = [
  {
    text: "Cudowne miejsce — wracamy tu już czwarty rok z rzędu. Domki czyste, obsługa sympatyczna, a widok na jezioro bezcenny.",
    author: "Anna i Marek",
    location: "Łódź",
  },
  {
    text: "Idealne miejsce dla rodziny z dziećmi. Plaża, plac zabaw i bezpieczeństwo sprawiają, że maluchom nie chce się wracać do domu.",
    author: "Katarzyna W.",
    location: "Warszawa",
  },
  {
    text: "Jako żeglarz bardzo cenię sobie port i doskonałą lokalizację. Warunki żeglarskie na Jeziorsku są naprawdę świetne.",
    author: "Piotr S.",
    location: "Poznań",
  },
];

export const TestimonialsA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-a-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--color-a-secondary)" }}>
              Opinie
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-a-primary)" }}
            >
              Co mówią goście
            </h2>
          </div>
        </FadeIn>

        <StaggerParent
          staggerMs={120}
          baseDelay={0}
          direction="up"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-2xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(200,149,108,0.2)]"
              style={{ backgroundColor: "var(--color-a-surface)" }}
            >
              <div className="flex mb-3 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="animate-scale-in inline-block"
                    style={{
                      color: "var(--color-a-accent)",
                      animationDelay: `${i * 50}ms`,
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4 italic animate-fade-in"
                style={{ color: "var(--color-a-text-secondary)", animationDelay: "300ms" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--color-a-primary)" }}>
                  {t.author}
                </p>
                <p className="text-xs" style={{ color: "var(--color-a-text-secondary)" }}>
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
};
