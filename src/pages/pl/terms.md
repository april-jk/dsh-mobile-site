---
layout: ~/layouts/MarkdownLayout.astro
title: Warunki i informacja o projekcie
description: Przeczytaj informację o nieoficjalnym charakterze projektu, licencji otwartego oprogramowania, ograniczeniach bezpieczeństwa i obowiązkach użytkownika DSH Mobile Remote.
---

Ostatnia aktualizacja: 17 sierpnia 2026 r.

## Nieoficjalny projekt społecznościowy

DSH Mobile Remote jest rozwijany i utrzymywany niezależnie przez społeczność. Nie był oceniany, polecany, sponsorowany ani wspierany przez DeepSeek.

DeepSeek, DeepSeek Harness oraz powiązane nazwy i znaki należą do ich właścicieli. Wzmianki w tej witrynie opisują zgodność techniczną i nie oznaczają powiązań organizacyjnych.

## Otwarte oprogramowanie

DSH Mobile Suite, klient mobilny, wtyczka DSH, Relay i ta witryna są udostępniane na licencji MIT w odpowiednich repozytoriach. Tekst licencji reguluje kopiowanie, modyfikowanie, rozpowszechnianie i warunki gwarancji dotyczące kodu źródłowego.

## Zgodność z wersją Developer Preview

DeepSeek Harness jest w fazie Developer Preview i może wprowadzać niezgodne zmiany w obsłudze wtyczek. Obecna wtyczka ma przypiętą przetestowaną wersję Harness, ale przyszłe wydania DSH mogą wymagać aktualizacji wtyczki.

## Granica bezpieczeństwa

Wersja 0.1.4 używa HTTPS/WSS i szyfrowania od końca do końca na poziomie aplikacji dla treści sesji DSH między Mobile a Companion. Relay nadal może obserwować powiązania kont i urządzeń oraz metadane ruchu, a profil PSK z kluczem przekazywanym kodem QR nie zapewnia utajniania z wyprzedzeniem (forward secrecy). Zapoznaj się z [modelem bezpieczeństwa](/pl/security/), zanim sparujesz telefon lub prześlesz poufne zadania.

## Twoje obowiązki

Odpowiadasz za:

- Sprawdzanie sum kontrolnych wydań i pobieranie oprogramowania z zaufanych stron wydań.
- Zabezpieczenie telefonu, komputera, kont, danych uwierzytelniających i każdego prowadzonego przez Ciebie prywatnego Relay.
- Używanie HTTPS i odpowiedniej kontroli dostępu w publicznych wdrożeniach Relay.
- Tworzenie kopii zapasowych i przechowywanie danych prywatnego Relay.
- Przestrzeganie przepisów, zasad i warunków stron trzecich mających zastosowanie do Twojego użytkowania.

## Brak gwarancji

Oprogramowanie jest udostępniane na licencji MIT bez gwarancji. Może zawierać błędy, tracić dostępność lub przestać być zgodne z przyszłymi wersjami DeepSeek Harness.

## Zgłoszenia bezpieczeństwa

Zgłaszaj podatności prywatnie zgodnie z [SECURITY.md](https://github.com/april-jk/dsh-mobile-suite/blob/main/SECURITY.md) pakietu Suite. Nie ujawniaj szczegółów umożliwiających wykorzystanie podatności w publicznych zgłoszeniach.
