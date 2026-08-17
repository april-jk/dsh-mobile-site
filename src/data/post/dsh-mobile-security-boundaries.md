---
publishDate: 2026-08-17T00:00:00Z
author: DSH Mobile community
title: What DSH Mobile encrypts and what it does not
excerpt: A direct explanation of TLS, QR-delivered keys, sealed tunnels, Relay metadata, and the remaining encryption limits.
image: '~/assets/images/dsh/mobile-devices.png'
category: Security
tags:
  - security
  - encryption
  - relay
metadata:
  title: DSH Mobile encryption boundaries
  description: Understand DSH Mobile end-to-end content encryption, credential boundaries, stored Relay metadata, and current limitations.
---

Remote access software should describe its trust boundaries directly. DSH Mobile Remote 0.1.3 combines TLS, scoped credentials, and application-layer encryption between Mobile and Companion.

## Traffic is protected in transit

Production traffic uses HTTPS and WSS. This protects the phone-to-Relay and computer-to-Relay connections from passive network observers when TLS is configured and validated correctly.

The computer does not open an inbound public port. DeepSeek Harness remains on `127.0.0.1:3080`, while the plugin opens an outbound authenticated WSS connection.

## DSH content is sealed across the Relay

QR v2 carries a random 32-byte key directly from Companion to Mobile. Each remote session authenticates that key, derives separate directional keys with HKDF-SHA256, and encrypts HTTP, SSE, and WebSocket envelopes with AES-256-GCM.

The Mobile WebView connects to an app-local loopback proxy. The Relay sees only authenticated opaque frames, not DSH paths, headers, status codes, bodies, or WebSocket messages.

## Device credentials stay off the phone

The mobile client uses account access tokens and short-lived WebView tickets. It never receives the computer's Relay device token.

The computer stores its device token in `~/.dsh-remote/config.json` with owner-only permissions. The Relay stores hashes of passwords, refresh tokens, and device tokens.

## The Relay retains metadata, not task content

The Relay does not persist forwarded DSH HTTP request bodies, HTTP response bodies, or WebSocket payload bodies. It stores the data needed to operate the service:

- Accounts and refresh-token state.
- Paired devices and device-token hashes.
- Pairing claims, short-lived tickets, and event-kind metadata.
- Bounded phone and access-time metadata.

The Relay can still observe account/device associations, online status, connection time, traffic timing, and ciphertext sizes. This metadata is outside the content-encryption boundary.

## What version 0.1.3 does not protect

The QR-delivered PSK profile does not provide forward secrecy. If the device master key is later compromised and an attacker previously recorded ciphertext, historical confidentiality may be affected. Compromised phone or computer endpoints are also outside the threat model.

## Pairings can be revoked

Removing a pairing revokes the Relay device credential, disconnects active access, and clears the local credential after Relay confirmation. The fallback `dsh-mobile unpair` command provides the same operation when the DSH settings UI is unavailable.

## Practical choices

The hosted and private Relay paths both preserve end-to-end content encryption. [Operate a private Relay](/self-hosted-relay/) when you also need account data, logs, and observable traffic metadata under your control.

See the [complete security model](/security/) and report vulnerabilities privately through the Suite security policy.
