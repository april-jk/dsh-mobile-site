---
layout: ~/layouts/MarkdownLayout.astro
title: Prywatność
description: Dowiedz się, co przechowują witryna DSH Mobile i Relay, czego nie utrwalają oraz jakie są obecne ograniczenia szyfrowania i usuwania danych.
---

Ostatnia aktualizacja: 17 sierpnia 2026 r.

DSH Mobile Remote to nieoficjalny, otwarty projekt społecznościowy. Ta strona wyjaśnia obecne działanie witryny i Relay. Nie zastępuje polityki prywatności wymaganej przed publicznym wydaniem w sklepie z aplikacjami.

## Witryna promocyjna

Witryna `dshmobile.online` jest generowana statycznie. Obecnie nie korzysta z reklam, analityki, formularzy kont ani marketingowych plików cookie.

Dostawcy hostingu i DNS mogą przetwarzać standardowe dane żądań, takie jak adres IP, identyfikator przeglądarki (user agent), żądany URL, znacznik czasu i sygnały bezpieczeństwa, w ramach obsługi i ochrony witryny.

## DSH Mobile Relay

Gdy korzystasz z DSH Mobile Relay, dany Relay przechowuje dane potrzebne do obsługi kont, parowania i sesji zdalnych. Obecna implementacja obejmuje:

- Adres e-mail konta i skrót hasła.
- Skróty tokenów odświeżania i powiązany stan tokenów.
- Rekordy sparowanych urządzeń i skróty tokenów urządzeń.
- Stan parowania i krótkotrwałych biletów WebView.
- Ograniczone metadane dostępu, w tym informacje o telefonie i czas dostępu, oraz metadane rodzajów zdarzeń bez ich ładunków.

Relay nie utrwala przekazywanej treści żądań HTTP DeepSeek Harness, odpowiedzi HTTP ani ładunków WebSocket.

## Granica szyfrowania

Połączenia produkcyjne używają HTTPS/WSS. Wersja 0.1.4 dodatkowo szyfruje treść DSH HTTP, SSE i WebSocket od końca do końca między Mobile a Companion. Relay przekazuje nieprzezroczyste ramki i nie otrzymuje klucza treści dostarczanego kodem QR.

Relay nadal może obserwować powiązania kont i urządzeń, stan online, czas połączenia, długość szyfrogramu i rozkład ruchu w czasie. Profil PSK z kluczem przekazywanym kodem QR nie zapewnia utajniania z wyprzedzeniem (forward secrecy). Możesz [wdrożyć własny Relay](/pl/self-hosted-relay/), aby kontrolować serwer, przechowywanie metadanych i logi operacyjne.

## Dane uwierzytelniające

Klient mobilny używa tokenów dostępu do konta, krótkotrwałych biletów WebView i klucza E2EE dla każdego urządzenia w bezpiecznym magazynie platformy. Nigdy nie otrzymuje tokenu urządzenia Relay należącego do komputera. Komputer przechowuje swoje dane uwierzytelniające i odpowiadający klucz E2EE lokalnie, z uprawnieniami do pliku wyłącznie dla właściciela.

## Przechowywanie i usuwanie danych

MVP przechowuje konta, urządzenia, stan parowania i metadane dostępu do czasu usunięcia przez dostępne funkcje produktu lub operatora Relay. Pełna samoobsługowa procedura usuwania konta nie jest jeszcze zaimplementowana.

Jeśli prowadzisz prywatny Relay, odpowiadasz za zasady przechowywania danych, kopie zapasowe, proces usuwania, kontrolę dostępu i obowiązujące wymogi prawne.

## Zgłoszenia bezpieczeństwa

Zgłaszaj problemy bezpieczeństwa prywatnie zgodnie z instrukcjami w [SECURITY.md](https://github.com/april-jk/dsh-mobile-suite/blob/main/SECURITY.md) pakietu Suite. Nie publikuj szczegółów umożliwiających wykorzystanie podatności w publicznych zgłoszeniach.

## Zmiany

Ta strona będzie się zmieniać wraz z dodawaniem usuwania kont, mechanizmów zgodności, ulepszeń szyfrowania i nowych przepływów danych. Sprawdź datę aktualizacji, zanim oprzesz się na tych informacjach.
