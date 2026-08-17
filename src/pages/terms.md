---
layout: ~/layouts/MarkdownLayout.astro
title: Terms and project notice
description: Read the unofficial project notice, open-source licensing terms, security limitations, and user responsibilities for DSH Mobile Remote.
---

Last updated: August 17, 2026

## Unofficial community project

DSH Mobile Remote is independently developed and maintained by the community. It is not reviewed, endorsed, sponsored, or supported by DeepSeek.

DeepSeek, DeepSeek Harness, and related names and marks belong to their respective owners. References on this site describe technical compatibility and do not imply affiliation.

## Open-source software

The DSH Mobile Suite, mobile client, DSH plugin, Relay, and this website are distributed under the MIT License in their respective repositories. The license text governs copying, modification, distribution, and warranty terms for the source code.

## Developer Preview compatibility

DeepSeek Harness is in Developer Preview and can introduce breaking plugin changes. The current plugin pins a tested Harness version, but future DSH releases may require an updated plugin.

## Security boundary

Version 0.1.3 uses HTTPS/WSS and application-layer end-to-end encryption for DSH session content between Mobile and Companion. The Relay can still observe account/device associations and traffic metadata, and the QR-delivered PSK profile does not provide forward secrecy. Review the [security model](/security/) before pairing a phone or sending sensitive work.

## Your responsibilities

You are responsible for:

- Verifying release checksums and obtaining software from trusted release pages.
- Securing the phone, computer, accounts, credentials, and any private Relay you operate.
- Using HTTPS and appropriate access controls for public Relay deployments.
- Backing up and retaining data for a private Relay.
- Complying with laws, policies, and third-party terms that apply to your use.

## No warranty

The software is provided under the MIT License without warranty. It may contain defects, lose availability, or become incompatible with future DeepSeek Harness versions.

## Security reports

Report vulnerabilities privately through the Suite [SECURITY.md](https://github.com/april-jk/dsh-mobile-suite/blob/main/SECURITY.md). Do not disclose exploitable details in a public issue.
