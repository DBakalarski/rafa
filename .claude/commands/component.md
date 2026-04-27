---
name: component
description: Tworzy nowy komponent React w src/components/ z TypeScript i Tailwind
user_invocable: true
arguments:
  - name: name
    description: Nazwa komponentu (PascalCase)
    required: true
---

Stwórz nowy komponent React w katalogu `src/components/`.

**Zasady:**
1. Nazwa pliku: `{{name}}.tsx`
2. Eksport jako named arrow function
3. Zdefiniuj interfejs Props (nawet jeśli pusty na start)
4. Stylowanie wyłącznie Tailwind CSS (klasy utility)
5. Semantyczny HTML, accessibility (aria-labels jeśli potrzeba)
6. Komponent musi być responsywny (mobile-first)

**Szablon bazowy:**
```tsx
interface {{name}}Props {
  // props
}

export const {{name}} = ({}: {{name}}Props) => {
  return (
    <div>
      {/* content */}
    </div>
  )
}
```

Zapytaj użytkownika jaki jest cel komponentu i jakie props powinien przyjmować, a następnie wygeneruj pełną implementację.
