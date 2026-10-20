---
layout: ~/layouts/DshBlogLayout.astro
publishDate: 2026-08-17T00:00:00Z
title: Kiedy prowadzić własny DSH Mobile Relay
description: Oceń, czy hostowany Relay pasuje do Twoich potrzeb, i poznaj różnice przy samodzielnym prowadzeniu otwartego serwera Relay.
image: '~/assets/images/dsh/remote-access-settings.png'
imageAlt: Ustawienia dostępu zdalnego DSH — oryginalny zrzut ekranu
---

DSH Mobile potrzebuje Relay dostępnego zarówno dla telefonu, jak i komputera. Domyślna publiczna wersja wskazuje `https://relay.dshmobile.online`, ale aplikacja może przełączyć się na zgodny prywatny Relay bez ponownej kompilacji.

Własny hosting zmienia operatora usługi przekazującej ruch. Wersja 0.1.4 używa tego samego tunelu szyfrowanego od końca do końca zarówno z hostowanym, jak i prywatnym Relay.

## Korzystaj z hostowanego Relay, gdy

- Chcesz szybko wypróbować otwarty projekt.
- Akceptujesz, że Relay może obserwować powiązania kont i urządzeń oraz metadane ruchu, ale nie treść DSH.
- Nie potrzebujesz prywatnej bazy kont ani prywatnych logów operacyjnych.
- Znasz brak utajniania z wyprzedzeniem (forward secrecy) w profilu PSK.

Publiczny Relay przechowuje konta, urządzenia, stan parowania i ograniczone metadane dostępu. Nie utrwala przekazywanej treści HTTP ani WebSocket DSH.

## Prowadź własny Relay, gdy

- Potrzebujesz kontroli nad serwerem, terminacją TLS, magazynem danych, kopiami zapasowymi i logami.
- Chcesz odizolować konta i tokeny we własnej instancji Relay.
- Potrzebujesz wybrać region hostingu lub punkt brzegowy sieci.
- Możesz utrzymywać stabilną usługę HTTPS z obsługą WebSocket.

Relay w MVP używa SQLite i musi działać jako jedna instancja. Zaplanuj trwały magazyn oraz kopie zapasowe dla `/data`.

## Co zmienia własny hosting

Relay przechowuje rekordy kont i urządzeń oraz obserwuje stan online, czas połączeń i rozmiary szyfrogramów. Własny hosting oddaje te dane i logi operacyjne pod Twoją kontrolę.

Nie zmienia protokołu szyfrowania treści w wersji 0.1.4: koperty DSH HTTP, SSE i WebSocket pozostają zaszyfrowane między Mobile a Companion, a PSK przekazywany kodem QR nadal nie zapewnia utajniania z wyprzedzeniem.

## Zarys wdrożenia

Pobierz `dsh-relay-v*.tar.gz` z najnowszego wydania Suite, utwórz `.env`, ustaw długi, losowy `JWT_SECRET` i uruchom stos Docker Compose.

```bash
cp .env.example .env
docker compose up -d --build
curl http://127.0.0.1:8787/health
```

Dodaj odwrotne proxy HTTPS przed portem `8787`, zezwól na przejście do WebSocket i wykonuj kopie zapasowe trwałych danych.

Następnie uruchom DSH z własnym originem:

```bash
DSH_RELAY=https://relay.example.com npx @deepseek-ai/dsh web
```

Wprowadź ten sam origin w aplikacji mobilnej. Zmiana Relay wylogowuje bieżące konto, ponieważ każda instancja ma niezależną granicę kont i tokenów.

Skorzystaj z [pełnego poradnika prywatnego Relay](/pl/self-hosted-relay/) i przeczytaj [model bezpieczeństwa](/pl/security/), zanim zaprosisz innych użytkowników.
