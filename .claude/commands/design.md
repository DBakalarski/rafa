---
name: design
description: Projektuje rozwiązanie graficzne bazując na aktualnych trendach UI/UX i best practices
user_invocable: true
arguments:
  - name: element
    description: Co zaprojektować (np. "hero", "landing page", "nawigacja", "formularz kontaktowy")
    required: true
---

Zaprojektuj i zaimplementuj rozwiązanie graficzne oparte na aktualnych trendach UI/UX.

**Proces:**

1. **Research** — Przeszukaj web pod kątem aktualnych trendów UI/UX 2025-2026 dla danego elementu:
   - Wyszukaj "{{element}} UI design trends 2025 2026"
   - Wyszukaj "{{element}} best practices UX"
   - Wyszukaj "{{element}} tailwind examples modern"
   - Sprawdź inspiracje z Dribbble, Awwwards, Land-book

2. **Analiza** — Na podstawie researchu wybierz:
   - Styl wizualny (glassmorphism, bento grid, brutalism, minimalizm, etc.)
   - Paleta kolorów dopasowana do projektu
   - Typografia (hierarchia, rozmiary, font pairing)
   - Spacing i rhythm (consistent spacing scale)
   - Mikrointerakcje i animacje (subtle, purposeful)
   - Wzorce UX (F-pattern, Z-pattern, visual hierarchy)

3. **Zaproponuj** — Przed implementacją przedstaw użytkownikowi:
   - 2-3 koncepcje wizualne z opisem
   - Jakie trendy wykorzystujesz i dlaczego
   - Jak to wpływa na UX (czytelność, konwersja, dostępność)
   - Responsywność — jak element wygląda na mobile vs desktop

4. **Implementuj** — Po akceptacji koncepcji:
   - Tailwind CSS (utility-first, custom wartości tylko gdy konieczne)
   - Animacje przez Tailwind `animate-*` lub CSS transitions
   - Mobile-first breakpoints
   - Accessibility (contrast ratio min. 4.5:1, focus states, screen readers)
   - Performance (lazy loading obrazów, optymalne fonty)

**Zasady UX do przestrzegania:**
- Whitespace jest twoim przyjacielem — nie upychaj elementów
- Jeden główny CTA na sekcję (visual hierarchy)
- Maksymalnie 2 fonty, 3 kolory bazowe + akcent
- Tekst max 65-75 znaków na linię (czytelność)
- Touch targets min. 44x44px na mobile
- Loading states i skeleton screens
- Konsekwentny border-radius w całym projekcie
- System spacingowy oparty na wielokrotnościach (4px/8px grid)

**Trendy 2025-2026 do rozważenia:**
- Bento grids (asymetryczne siatki)
- Glassmorphism / frosted glass z subtelnymi gradientami
- Oversized typography z thin fonts
- Scroll-driven animations
- Dark/light mode toggle
- Organic shapes i blob backgrounds
- Micro-interactions na hover/focus
- Variable fonts z animowaną wagą
- 3D elements z perspective
- Grainy gradients i noise textures
