---
publishDate: 2026-08-17T00:00:00Z
author: DSH Mobile community
title: What DSH Mobile encrypts and what it does not
excerpt: A direct explanation of TLS, device tokens, WebView tickets, Relay storage, and the missing end-to-end encryption layer.
image: '~/assets/images/dsh/mobile-devices.png'
category: Security
tags:
  - security
  - encryption
  - relay
metadata:
  description: Understand DSH Mobile transport encryption, credential boundaries, stored Relay data, and current end-to-end encryption limitations.
---

Remote access software should describe its trust boundaries directly. DSH Mobile Remote is an MVP with transport encryption and scoped credentials, but without application-level end-to-end encryption.

## Traffic is protected in transit

Production traffic uses HTTPS and WSS. This protects the phone-to-Relay and computer-to-Relay connections from passive network observers when TLS is configured and validated correctly.

The computer does not open an inbound public port. DeepSeek Harness remains on `127.0.0.1:3080`, while the plugin opens an outbound authenticated WSS connection.

## The Relay can see forwarded content

TLS terminates at the Relay. The current MVP does not encrypt DSH payloads again at the application layer, so the Relay process can observe HTTP and WebSocket content while forwarding it.

This is the most important current limitation. Do not describe the MVP as end-to-end encrypted.

## Device credentials stay off the phone

The mobile client uses account access tokens and short-lived WebView tickets. It never receives the computer's Relay device token.

The computer stores its device token in `~/.dsh-remote/config.json` with owner-only permissions. The Relay stores hashes of passwords, refresh tokens, and device tokens.

## The Relay does not persist task bodies

The Relay does not persist forwarded DSH HTTP request bodies, HTTP response bodies, or WebSocket payload bodies. It stores the data needed to operate the service:

- Accounts and refresh-token state.
- Paired devices and device-token hashes.
- Pairing claims and short-lived tickets.
- Bounded phone and access-time metadata.

Not persisting task bodies reduces retained data, but it does not prevent the Relay process from seeing content in transit.

## Pairings can be revoked

Removing a pairing revokes the Relay device credential, disconnects active access, and clears the local credential after Relay confirmation. The fallback `dsh-mobile unpair` command provides the same operation when the DSH settings UI is unavailable.

## Practical choices

For low-risk evaluation, use the public Relay with the documented limitation in mind. For more control over the trust boundary, [operate a private Relay](/self-hosted-relay). Self-hosting does not create end-to-end encryption, but it places the Relay process and stored metadata under your control.

See the [complete security model](/security) and report vulnerabilities privately through the Suite security policy.
