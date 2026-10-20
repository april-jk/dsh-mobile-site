---
layout: ~/layouts/DshBlogLayout.astro
publishDate: 2026-08-17T00:00:00Z
title: Jak uruchomić DeepSeek Harness z telefonu z Androidem
description: Sparuj DSH Mobile z komputerem, otwórz prawdziwy interfejs Harness i wyślij zwykłe zadanie bez publicznego portu na komputerze.
image: '~/assets/images/dsh/mobile-harness-running.png'
imageAlt: Zadanie DeepSeek Harness w telefonie — oryginalny zrzut ekranu
---

DSH Mobile Remote otwiera zwykły interfejs WWW DeepSeek Harness ze sparowanego telefonu z Androidem. Nie zastępuje Harness osobnym API zadań. Telefon otrzymuje ten sam obszar roboczy, tryb, model, edytor zadania, rozmowę, stan rozumowania, czas wykonania i przycisk zatrzymania.

Ten poradnik dotyczy publicznego wydania na Androida i wtyczki DSH w przypiętej wersji.

## Czego potrzebujesz

- Komputera z Node.js 18 lub nowszym.
- DeepSeek Harness `0.1.0-rc.6`.
- Telefonu z Androidem 8.0 lub nowszym.
- Dostępu HTTPS do hostowanego Relay lub zgodnego prywatnego Relay.

DeepSeek Harness jest w fazie Developer Preview. Wtyczka przypina przetestowaną wersję, aby zmiany zgodności były jawne.

## Zainstaluj aplikację na Androida

Otwórz [najnowsze wydanie DSH Mobile Suite](https://github.com/april-jk/dsh-mobile-suite/releases/latest) i pobierz:

- `dsh-mobile-android.apk`
- `SHA256SUMS`

Sprawdź pobrane pliki przed instalacją:

```bash
shasum -a 256 -c SHA256SUMS
```

Android może poprosić o zezwolenie przeglądarce lub menedżerowi plików na instalowanie nieznanych aplikacji. Identyfikator aplikacji to `io.github.apriljk.dshremote`.

## Zainstaluj wtyczkę DSH

Na komputerze uruchom polecenie instalacji z przypiętego tagu GitHuba:

```bash
npx @deepseek-ai/dsh plugin --profile web add "github:april-jk/dsh-mobile-plugin#v0.1.4"
npx @deepseek-ai/dsh web
```

Wtyczka działa razem z procesem DSH Web. Nie musisz uruchamiać osobnego procesu Companion.

## Sparuj telefon

1. Zarejestruj się lub zaloguj w aplikacji na Androida.
2. W interfejsie DSH Web na komputerze otwórz ustawienia dostępu zdalnego (**Settings > Remote Access**).
3. Utwórz szyfrowany kod QR do parowania.
4. Dotknij **+** na liście komputerów w telefonie.
5. Zeskanuj kod QR. Wersja 0.1.4 nie pozwala na parowanie samym sześciocyfrowym kodem, ponieważ nie może on ustanowić klucza E2EE.
6. Wybierz komputer online.

Po otrzymaniu krótkotrwałego biletu WebView telefon otwiera prawdziwy interfejs DSH.

## Wyślij zadanie

Wybierz obszar roboczy, utwórz zadanie, wybierz tryb i model, a następnie wyślij instrukcje tak jak na komputerze. Rozmowa i stan aktywnego rozumowania aktualizują się w zdalnym WebView.

Komputer jest wyświetlany jako offline, gdy DSH przestanie działać lub wtyczka utraci połączenie z Relay.

## Poznaj granicę bezpieczeństwa

DSH pozostaje związany z `127.0.0.1:3080`. Komputer otwiera tylko wychodzące połączenie WSS. Aplikacja mobilna nigdy nie otrzymuje tokenu urządzenia komputera.

Wersja 0.1.4 szyfruje treść DSH HTTP, SSE i WebSocket od końca do końca między Mobile a Companion. Relay przekazuje nieprzezroczyste ramki, ale nadal może obserwować powiązania kont i urządzeń, czas połączeń i rozmiary szyfrogramów. Profil PSK nie zapewnia utajniania z wyprzedzeniem (forward secrecy). Przed użyciem do poufnych zadań przeczytaj [pełny model bezpieczeństwa](/pl/security/) lub [wdróż prywatny Relay](/pl/self-hosted-relay/).
