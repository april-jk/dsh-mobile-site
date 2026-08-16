---
publishDate: 2026-08-17T00:00:00Z
author: DSH Mobile community
title: How to run DeepSeek Harness from an Android phone
excerpt: Pair DSH Mobile with a computer, open the real Harness Web UI, and submit a normal task without exposing a public computer port.
image: '~/assets/images/dsh/mobile-harness-running.png'
category: Guides
tags:
  - deepseek harness
  - android
  - remote access
metadata:
  description: Learn how to open a local DeepSeek Harness Web UI from Android with DSH Mobile Remote and an outbound-only Relay connection.
---

DSH Mobile Remote opens the normal DeepSeek Harness Web UI from a paired Android phone. It does not replace Harness with a separate task API. The phone receives the same workspace, mode, model, task composer, conversation, reasoning state, elapsed time, and stop control.

This guide covers the public Android release and the pinned DSH plugin.

## What you need

- A computer with Node.js 18 or newer.
- DeepSeek Harness `0.1.0-rc.6`.
- An Android phone running Android 8.0 or newer.
- HTTPS access to the hosted Relay or a compatible private Relay.

DeepSeek Harness is in Developer Preview. The plugin pins a tested version so compatibility changes are explicit.

## Install the Android app

Open the [latest DSH Mobile Suite release](https://github.com/april-jk/dsh-mobile-suite/releases/latest) and download:

- `dsh-mobile-android.apk`
- `SHA256SUMS`

Verify the download before installation:

```bash
shasum -a 256 -c SHA256SUMS
```

Android may ask you to allow the browser or file manager to install unknown apps. The application ID is `io.github.apriljk.dshremote`.

## Install the DSH plugin

Run the pinned GitHub installation command on the computer:

```bash
npx @deepseek-ai/dsh plugin --profile web add "github:april-jk/dsh-mobile-plugin#v0.1.2"
npx @deepseek-ai/dsh web
```

The plugin follows the DSH Web process. You do not need to start a separate Companion process.

## Pair the phone

1. Register or sign in from the Android app.
2. Open **Settings > Remote Access** in the computer's DSH Web UI.
3. Create a QR code or six-digit pairing code.
4. Tap **+** in the mobile computer list.
5. Scan the QR code or enter the six-digit code.
6. Select the online computer.

The phone opens the real DSH interface after it receives a short-lived WebView ticket.

## Submit a task

Choose a workspace, create a task, select the mode and model, then submit instructions as you would on the computer. The conversation and active reasoning status update in the remote WebView.

The computer shows as offline when DSH stops or the plugin loses its Relay connection.

## Understand the security boundary

DSH stays bound to `127.0.0.1:3080`. The computer opens only an outbound WSS connection. The mobile app never receives the computer's device token.

The current MVP uses HTTPS/WSS, but it does not add application-level end-to-end encryption. The Relay process can observe forwarded content. Read the [full security model](/security) or [deploy a private Relay](/self-hosted-relay) before using it with sensitive work.
