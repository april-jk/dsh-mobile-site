# Strona DSH Mobile Remote

[English](README.md) | [Polski](README.pl.md)

Statyczna strona promocyjno-dokumentacyjna projektu [DSH Mobile Remote](https://github.com/april-jk/dsh-mobile-suite), publikowana pod adresem [dshmobile.online](https://dshmobile.online).

Strona opiera się na szablonie [AstroWind](https://github.com/arthelokyo/astrowind) na licencji MIT i zachowuje jego infrastrukturę Astro, Tailwind CSS, mapy witryny, RSS, optymalizacji obrazów i metadanych.

## Rozwój

Wymagany jest Node.js 22.22.3 lub nowszy.

```bash
npm ci
npm run dev
```

Serwer deweloperski uruchamia się pod adresem `http://localhost:4321`.

## Weryfikacja

```bash
npm run generate:assets
npm run check
npm run build
npm run check:locales
```

## Języki witryny

- [English](https://dshmobile.online/), [Polski](https://dshmobile.online/pl/) i istniejąca [strona główna 简体中文](https://dshmobile.online/zh-cn/).
- Polska wersja obejmuje stronę główną, pobieranie, opis działania, bezpieczeństwo, prywatny Relay, prywatność, warunki oraz wszystkie trzy poradniki produktowe. Angielskie adresy pozostają bez zmian. Chińska wersja zachowuje istniejącą stronę główną i jawnie oznacza odnośniki do treści dostępnych tylko po angielsku.
- Treść strony głównej i FAQ znajdują się w `src/data/dsh-site.ts`; wspólna nawigacja korzysta z tego samego źródła lokalizacji. Po zbudowaniu witryny `npm run check:locales` sprawdza zgodność struktury tłumaczeń, wygenerowane adresy, odnośniki wewnętrzne, metadane, nazwy dostępności i typowe pozostałości angielskiego tekstu. RSS pozostaje angielski i jest odpowiednio oznaczony.
- Zrzuty ekranu produktu pozostają oryginalnymi zasobami. Przetłumaczone podpisy i teksty alternatywne nie oznaczają lokalizacji tekstu na obrazach.

## Wdrożenie

Wypchnięcie zmian do `main` uruchamia kontrole, buduje statyczną witrynę i wdraża `dist/` w GitHub Pages. Konfiguracja Pages w repozytorium używa `dshmobile.online` jako domeny niestandardowej.

DNS jest obsługiwany w Cloudflare. Rekordy witryny nie mogą zastępować ani być proxy dla niezależnego rekordu usługi `relay.dshmobile.online`.

### Odzyskiwanie HTTPS

Pozostaw rekordy witryny dla domeny głównej i `www` w trybie DNS-only, dopóki GitHub nie wystawi certyfikatu. GitHub dokumentuje, że HTTPS może pojawić się do godziny po zmianie domeny niestandardowej lub DNS. Jeśli DNS już wskazuje GitHub Pages, ale zadanie certyfikatu nigdy nie powstało, usuń i ponownie dodaj domenę niestandardową Pages, aby ponowić wystawienie:

```bash
gh api --method PUT repos/april-jk/dsh-mobile-site/pages -F cname=null
gh api --method PUT repos/april-jk/dsh-mobile-site/pages \
  -f cname=dshmobile.online \
  -f build_type=workflow
```

Usunięcie domeny niestandardowej powoduje tymczasowe udostępnianie witryny wyłącznie z domyślnego adresu `github.io`. Gdy GitHub zakończy wystawianie certyfikatu, wymuś HTTPS i sprawdź oba adresy:

```bash
gh api --method PUT repos/april-jk/dsh-mobile-site/pages \
  -F https_enforced=true \
  -f cname=dshmobile.online \
  -f build_type=workflow
curl -I https://dshmobile.online/
curl -I https://www.dshmobile.online/
```

## Granice treści

- Twierdzenia produktowe muszą być zgodne z repozytoriami Suite i komponentów.
- Projekt zawsze trzeba oznaczać jako nieoficjalny projekt społecznościowy.
- Wersję 0.1.4 należy opisywać precyzyjnie jako szyfrowanie end-to-end treści sesji DSH między aplikacją Mobilną a Companion; zachowaj udokumentowane ograniczenia dotyczące metadanych i utajniania z wyprzedzeniem.
- Nie publikuj wskaźników wydań, deklaracji zgodności ani opinii użytkowników bez źródła.

## Licencja

Strona i szablon AstroWind są udostępniane na [licencji MIT](LICENSE.md).
