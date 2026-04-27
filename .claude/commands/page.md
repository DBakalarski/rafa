---
name: page
description: Tworzy nową stronę (route) w Next.js App Router z metadata SEO
user_invocable: true
arguments:
  - name: route
    description: Ścieżka strony (np. "kontakt", "o-nas", "galeria")
    required: true
---

Stwórz nową stronę w App Router (`src/app/{{route}}/page.tsx`).

**Zasady:**
1. Utwórz katalog `src/app/{{route}}/`
2. Plik `page.tsx` z exportem `metadata` (title, description po polsku)
3. Komponent strony jako default export
4. Responsywny layout mobile-first z Tailwind
5. Semantyczny HTML (main, section, h1, etc.)
6. Jeśli strona potrzebuje layoutu — stwórz też `layout.tsx`

**Szablon:**
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{{tytuł}} | Rafa Jeziorsko',
  description: '{{opis strony po polsku}}',
}

export default function {{NazwaStrony}}Page() {
  return (
    <main>
      <section>
        <h1>{{nagłówek}}</h1>
      </section>
    </main>
  )
}
```

Zapytaj użytkownika o cel strony i treść, następnie wygeneruj kompletną implementację z odpowiednim SEO metadata.
