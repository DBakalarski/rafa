---
name: dev
description: Uruchamia serwer deweloperski i sprawdza czy strona działa poprawnie
user_invocable: true
---

Uruchom serwer deweloperski i zweryfikuj stan projektu.

**Kroki:**
1. Sprawdź czy port 3000 jest wolny (`lsof -i :3000`)
2. Jeśli zajęty — powiadom użytkownika
3. Uruchom `npm run dev` w tle
4. Poczekaj na start serwera
5. Sprawdź czy strona odpowiada na http://localhost:3000
6. Uruchom `npm run lint` żeby sprawdzić błędy
7. Raportuj status: czy serwer działa, czy są błędy lint, ile stron jest dostępnych

**Jeśli są błędy:**
- Pokaż użytkownikowi listę problemów
- Zaproponuj naprawę
