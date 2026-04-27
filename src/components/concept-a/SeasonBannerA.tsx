export const SeasonBannerA = () => {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-a-accent)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-2">
              Sezon 2026
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Wakacje 2026 — zarezerwuj miejsce
            </h2>
            <p className="text-white/80 mt-3 max-w-lg">
              Sezon trwa od kwietnia do listopada. Zapraszamy na majówkę, wakacje
              i długi weekend Bożego Ciała. Zaliczka 30% ceny pobytu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#"
              className="px-8 py-4 rounded-full font-semibold text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-a-primary)", color: "white" }}
            >
              Rezerwuj pobyt
            </a>
            <a
              href={`tel:608108431`}
              className="px-8 py-4 rounded-full font-semibold text-center border-2 border-white/50 text-white hover:border-white transition-colors"
            >
              608 108 431
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
