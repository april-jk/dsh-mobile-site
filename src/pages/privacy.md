---
layout: ~/layouts/MarkdownLayout.astro
title: Privacy
description: Learn what the DSH Mobile website and Relay store, what they do not persist, and the current encryption and deletion limitations.
---

Last updated: August 17, 2026

DSH Mobile Remote is an unofficial open-source community project. This page explains the current website and Relay behavior. It is not a substitute for the privacy policy required before a public app-store release.

## Promotional website

The website at `dshmobile.online` is statically generated. It does not currently use advertising, analytics, account forms, or marketing cookies.

The hosting and DNS providers may process standard request data such as IP address, user agent, requested URL, timestamp, and security signals as part of serving and protecting the website.

## DSH Mobile Relay

When you use a DSH Mobile Relay, that Relay stores data needed to operate accounts, pairing, and remote sessions. The current implementation includes:

- Account email and password hash.
- Refresh-token hashes and related token state.
- Paired device records and device-token hashes.
- Pairing state and short-lived WebView ticket state.
- Bounded access metadata, including phone information and access times.

The Relay does not persist forwarded DeepSeek Harness HTTP request bodies, HTTP response bodies, or WebSocket payload bodies.

## Important encryption limitation

Production connections use HTTPS/WSS. The current MVP does not provide application-level end-to-end encryption. A Relay process can see forwarded DSH content while it is in memory and being routed.

You can [deploy your own Relay](/self-hosted-relay/) to control the server, storage, and operational logs. Self-hosting does not add end-to-end encryption.

## Credentials

The mobile client uses account access tokens and short-lived WebView tickets. It never receives the computer's Relay device token. The computer stores its device credential locally with owner-only file permissions.

## Retention and deletion

The MVP stores accounts, devices, pairing state, and access metadata until removed through available product controls or by the Relay operator. A complete self-service account deletion workflow is not yet implemented.

If you operate a private Relay, you are responsible for its retention policy, backups, deletion process, access controls, and applicable legal obligations.

## Security reports

Report security issues privately using the instructions in the Suite [SECURITY.md](https://github.com/april-jk/dsh-mobile-suite/blob/main/SECURITY.md). Do not publish exploitable details in a public issue.

## Changes

This page will change as the project adds account deletion, compliance controls, encryption improvements, or new data flows. Review the update date before relying on it.
