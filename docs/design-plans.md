# Plan: 2 koncepcje strony głównej Rafa Jeziorsko

## Context
Redesign strony ośrodka wypoczynkowego Rafa Jeziorsko. Obecny projekt to świeży Next.js 16 + TS + Tailwind 4 (domyślny template). Tworzymy 2 odrębne koncepcje wizualne strony głównej, każda w osobnym route, z pełnym menu nawigacyjnym i jedną działającą podstroną (Domki).

---

## Routing

```
/                  → strona wyboru koncepcji (2 karty podglądu)
/concept-a         → Koncepcja A: "Klasyczna Elegancja"
/concept-a/domki   → podstrona Domki (jasny motyw)
/concept-b         → Koncepcja B: "Odważna Przygoda"
/concept-b/domki   → podstrona Domki (ciemny motyw)
```

---

## Koncepcja A — "Klasyczna Elegancja Nad Jeziorem"

**Filozofia:** Spokój, zaufanie, rodzinny klimat. Jasne tło, serif w nagłówkach, dużo whitespace.

**Paleta kolorów:**
| Rola | Kolor | Hex |
|------|-------|-----|
| Primary | Deep lake navy | `#1B3A4B` |
| Secondary | Forest green | `#4A7C59` |
| Accent | Warm copper | `#C8956C` |
| Background | Warm off-white | `#FAF8F5` |
| Surface | White | `#FFFFFF` |
| Text | Dark gray | `#1A1A1A` |
| Text secondary | Medium gray | `#6B7280` |

**Typografia:** Playfair Display (serif) dla nagłówków + Geist Sans (body)

**Hero:** Pełny viewport, split layout — tekst lewo, gradient-placeholder prawo. Tagline: "Bezpieczny wypoczynek nad jeziorem". CTA: "Rezerwuj pobyt".

**Sekcje strony głównej (kolejność):**
1. Hero (full-screen, serif headline, 1 CTA)
2. O nas — krótkie intro, 2-kolumny
3. Domki — karty 4 wyróżnionych typów, horizontal scroll
4. Atrakcje — siatka 3-kolumnowa
5. Sezon 2026 — full-width pasek CTA (kolor miedziany)
6. W cenie pobytu — siatka ikon udogodnień
7. Zniżki — karty rabatowe
8. Opinie — placeholder testimoniale
9. Kontakt — telefon + adres + CTA
10. Footer

**Nawigacja desktop:** Sticky, białe/półprzezroczyste tło. Logo lewo, menu center, telefon + "Rezerwuj" prawo. Dropdown dla "Oferta" na hover.

**Nawigacja mobile:** Hamburger → pełnoekranowy overlay, slide z prawej.

---

## Koncepcja B — "Odważna Przygoda"

**Filozofia:** Energetyczna, ciemna, nowoczesna. Duża bold typografia, gradient mesh, vivid akcenty.

**Paleta kolorów:**
| Rola | Kolor | Hex |
|------|-------|-----|
| Primary | Slate dark | `#0F172A` |
| Secondary | Sky blue | `#0EA5E9` |
| Accent | Amber | `#F59E0B` |
| Surface | Slate 800 | `#1E293B` |
| Text | Almost white | `#F8FAFC` |
| Text secondary | Slate 400 | `#94A3B8` |
| Highlight | Cyan | `#22D3EE` |

**Typografia:** Geist Sans bold/black (nagłówki) + Geist Mono (statystyki)

**Hero:** Dark background z animated gradient mesh (CSS radial-gradients). Oversized nagłówek "RAFA JEZIORSKO", podnagłówek "Twoja przygoda nad jeziorem". CTA: "Odkryj ośrodek" (amber). Stats strip: "8 typów domków | 50+ atrakcji | Sezon IV–XI".

**Sekcje strony głównej (kolejność):**
1. Hero — dark, immersive, duża typografia
2. Feature strip — horizontal scroll ikon (Domki, Port, Plaża, Sauna...)
3. Domki showcase — alternating left/right layout, 4 typy
4. Atrakcje — duże feature cards na ciemnym tle
5. Dla kogo — 4 karty segmentów (Rodziny, Żeglarze, Wędkarze, Grupy)
6. Cennik preview — ciemna karta z amber akcentem + ceny od
7. Lokalizacja — gradient placeholder mapy
8. Kontakt — duży numer telefonu, amber CTA
9. Footer — dark, minimal

**Nawigacja desktop:** Fixed, transparent → solid dark on scroll. Logo: "RAFA" (bold) + "JEZIORSKO" (light). Menu prawo. Active = amber underline.

**Nawigacja mobile:** Hamburger → pełnoekranowy dark overlay, staggered animacja wejścia.

---

## Struktura plików

```
src/
  app/
    globals.css              ← MODYFIKACJA: tokeny kolorów obu koncepcji
    layout.tsx               ← MODYFIKACJA: lang="pl", font Playfair, metadata
    page.tsx                 ← MODYFIKACJA: selektor koncepcji
    concept-a/
      layout.tsx             ← layout z NavigationA + FooterA
      page.tsx               ← strona główna A
      domki/
        page.tsx             ← podstrona Domki A
    concept-b/
      layout.tsx             ← layout z NavigationB + FooterB
      page.tsx               ← strona główna B
      domki/
        page.tsx             ← podstrona Domki B
  components/
    concept-a/
      NavigationA.tsx        ← "use client", hamburger, dropdown
      HeroA.tsx
      SectionIntroA.tsx
      CabinPreviewA.tsx
      AttractionsA.tsx
      SeasonBannerA.tsx
      IncludedA.tsx
      DiscountsA.tsx
      TestimonialsA.tsx
      ContactStripA.tsx
      FooterA.tsx
    concept-b/
      NavigationB.tsx        ← "use client", scroll-aware bg
      HeroB.tsx
      FeatureStripB.tsx
      CabinShowcaseB.tsx
      AttractionsB.tsx
      AudienceB.tsx
      PricingPreviewB.tsx
      LocationB.tsx
      ContactB.tsx
      FooterB.tsx
  lib/
    types.ts                 ← MenuItem, CabinType, ContactInfo
    constants.ts             ← MENU_ITEMS, CABIN_TYPES, CONTACT_INFO, DISCOUNTS
```

---

## Kolejność implementacji

### Faza 1 — Fundament
1. `src/lib/types.ts` — interfejsy TypeScript
2. `src/lib/constants.ts` — dane biznesowe (menu, domki, kontakt, zniżki)
3. `src/app/globals.css` — tokeny kolorów obu koncepcji w `@theme inline`
4. `src/app/layout.tsx` — lang="pl", dodanie Playfair Display, metadata base

### Faza 2 — Koncepcja A
5. `NavigationA.tsx` + `FooterA.tsx`
6. `concept-a/layout.tsx`
7. `HeroA.tsx` → `SectionIntroA.tsx` → `CabinPreviewA.tsx` → kolejne sekcje
8. `concept-a/page.tsx` — złożenie sekcji
9. `concept-a/domki/page.tsx`

### Faza 3 — Koncepcja B
10. `NavigationB.tsx` + `FooterB.tsx`
11. `concept-b/layout.tsx`
12. `HeroB.tsx` → `FeatureStripB.tsx` → `CabinShowcaseB.tsx` → kolejne sekcje
13. `concept-b/page.tsx` — złożenie sekcji
14. `concept-b/domki/page.tsx`

### Faza 4 — Root + Szlif
15. `src/app/page.tsx` — selektor koncepcji (2 karty preview)
16. Test responsywności, linki w menu (# dla nieistniejących)

---

## Kluczowe decyzje techniczne

- **Tailwind 4**: Brak `tailwind.config` — wszystkie custom kolory w `@theme inline` w `globals.css`
- **Placeholder obrazów**: Gradienty CSS zamiast prawdziwych zdjęć (brak materiałów foto)
- **Nawigacja "use client"**: Stan hamburger menu + efekt scroll (Concept B)
- **Font Playfair Display**: Import via `next/font/google`, zmienna CSS `--font-playfair`
- **Menu linki**: Wszystkie pozycje widoczne, nieaktywne prowadzą do `#`, tylko `/domki` działa
- **Izolacja koncepcji**: Osobne layouty per route — różny nav/footer bez konfliktów

---

## Weryfikacja

1. `npm run dev` → sprawdzić `/` (selektor), `/concept-a`, `/concept-b`
2. Test mobile: hamburger menu otwiera/zamyka, sekcje responsywne
3. Test nawigacji: "Domki" prowadzi do `/concept-a/domki` lub `/concept-b/domki`
4. Test pozostałych linków menu: prowadzą do `#` (nie 404)
5. `npm run build` — brak błędów TypeScript
6. `npm run lint` — brak błędów ESLint
