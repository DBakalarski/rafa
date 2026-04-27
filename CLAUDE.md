# Rafa Jeziorsko - Strona Internetowa

## Projekt
Strona internetowa "Rafa Jeziorsko" — Next.js 16 + TypeScript + Tailwind CSS 4.

## Stack technologiczny
- **Framework**: Next.js 16 (App Router, katalog `src/`)
- **Język**: TypeScript (strict)
- **Style**: Tailwind CSS 4
- **Linting**: ESLint 9 z eslint-config-next

## Struktura projektu
```
src/
  app/          — strony (App Router)
  components/   — komponenty wielokrotnego użytku
  lib/          — utility, helpery, konfiguracje
  assets/       — obrazy, fonty, ikony
public/         — pliki statyczne (favicon, obrazy)
```

## Komendy
- `npm run dev` — serwer deweloperski (http://localhost:3000)
- `npm run build` — build produkcyjny
- `npm run lint` — linting ESLint

## Zasady kodowania
- Komponenty jako funkcje (arrow functions z export)
- Nazewnictwo plików: PascalCase dla komponentów, camelCase dla utilsów
- Tailwind CSS — unikaj custom CSS, korzystaj z klas utility
- Obrazy przez `next/image`, linki przez `next/link`
- Responsywność: mobile-first
- Język strony: polski (pl)
- SEO: każda strona musi mieć metadata (title, description)
- Accessibility: semantyczny HTML, aria-labels gdzie potrzeba

## Konwencje commitów
- Commity po polsku lub angielsku (konsekwentnie)
- Format: typ(zakres): opis (np. feat(home): dodaj sekcję hero)
