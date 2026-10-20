---
layout: ~/layouts/DshBlogLayout.astro
publishDate: 2026-08-17T00:00:00Z
title: Co DSH Mobile szyfruje, a czego nie
description: Konkretne wyjaśnienie TLS, kluczy przekazywanych kodem QR, szyfrowanych tuneli, metadanych Relay i pozostałych ograniczeń szyfrowania.
image: '~/assets/images/dsh/mobile-devices.png'
imageAlt: Lista komputerów w DSH Mobile — oryginalny zrzut ekranu
---

Oprogramowanie zdalnego dostępu powinno jasno opisywać granice zaufania. DSH Mobile Remote 0.1.4 łączy TLS, dane uwierzytelniające o ograniczonym zakresie i szyfrowanie na poziomie aplikacji między Mobile a Companion.

## Ochrona ruchu podczas przesyłania

Ruch produkcyjny korzysta z HTTPS i WSS. Chroni to połączenia telefon–Relay i komputer–Relay przed biernymi obserwatorami sieci, gdy TLS jest poprawnie skonfigurowany i weryfikowany.

Komputer nie otwiera publicznego portu przychodzącego. DeepSeek Harness pozostaje na `127.0.0.1:3080`, a wtyczka otwiera wychodzące, uwierzytelnione połączenie WSS.

## Treść DSH jest zaszyfrowana na całej drodze przez Relay

QR v2 przenosi losowy 32-bajtowy klucz bezpośrednio z Companion do Mobile. Każda sesja zdalna uwierzytelnia ten klucz, wyprowadza oddzielne klucze dla obu kierunków za pomocą HKDF-SHA256 i szyfruje koperty HTTP, SSE i WebSocket przy użyciu AES-256-GCM.

Mobilny WebView łączy się z lokalnym proxy aplikacji na interfejsie loopback. Relay widzi wyłącznie uwierzytelnione, nieprzezroczyste ramki, a nie ścieżki DSH, nagłówki, kody stanu, treść czy wiadomości WebSocket.

## Dane uwierzytelniające urządzenia nie trafiają do telefonu

Klient mobilny używa tokenów dostępu do konta i krótkotrwałych biletów WebView. Nigdy nie otrzymuje tokenu urządzenia Relay należącego do komputera.

Komputer przechowuje swój token urządzenia w `~/.dsh-remote/config.json` z uprawnieniami wyłącznie dla właściciela. Relay przechowuje skróty haseł, tokenów odświeżania i tokenów urządzeń.

## Relay zachowuje metadane, a nie treść zadań

Relay nie utrwala przekazywanej treści żądań HTTP DSH, odpowiedzi HTTP ani ładunków WebSocket. Przechowuje dane potrzebne do działania usługi:

- Konta i stan tokenów odświeżania.
- Sparowane urządzenia i skróty tokenów urządzeń.
- Stan przejmowania parowań, krótkotrwałe bilety i metadane rodzajów zdarzeń.
- Ograniczone metadane telefonu i czasu dostępu.

Relay nadal może obserwować powiązania kont i urządzeń, stan online, czas połączenia, rozkład ruchu w czasie i rozmiary szyfrogramów. Te metadane nie są objęte szyfrowaniem treści.

## Czego nie chroni wersja 0.1.4

Profil PSK z kluczem przekazywanym kodem QR nie zapewnia utajniania z wyprzedzeniem (forward secrecy). Jeśli główny klucz urządzenia zostanie później przejęty, a napastnik wcześniej zapisał szyfrogramy, poufność historycznych danych może być zagrożona. Przejęte urządzenia końcowe — telefon lub komputer — również pozostają poza modelem zagrożeń.

## Parowania można unieważniać

Usunięcie parowania unieważnia dane uwierzytelniające urządzenia w Relay, rozłącza aktywny dostęp i usuwa lokalne dane uwierzytelniające po potwierdzeniu Relay. Zastępcze polecenie `dsh-mobile unpair` wykonuje tę samą operację, gdy interfejs ustawień DSH jest niedostępny.

## Praktyczne możliwości

Zarówno hostowany, jak i prywatny Relay zachowuje szyfrowanie treści od końca do końca. [Prowadź prywatny Relay](/pl/self-hosted-relay/), gdy potrzebujesz również kontroli nad danymi kont, logami i widocznymi metadanymi ruchu.

Zobacz [pełny model bezpieczeństwa](/pl/security/) i zgłaszaj podatności prywatnie zgodnie z polityką bezpieczeństwa Suite.
