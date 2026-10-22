---
title: Introduction
description: Meet Breezell, an AI code editor built on Code – OSS, and get from install to your first AI-assisted change.
---

# Introduction

Breezell is an AI code editor built on VS Code (Code – OSS). The editor, your extensions and your keybindings work the way you know, and next to them sits an AI that can read your project, edit files, run commands and use tools on its own.

::: tip About the screens on this page
The Breezell screens in this guide are rebuilt in HTML from the Breezell source code instead of screenshots. Their text follows the language of this page and their colors follow the light / dark switch of this site. Numbered orange badges are only labels for this guide.
:::

## The Breezell window

<BzChuangti wen="Load the config file once at startup and cache it." da="Done. config.ts now reads the file once and keeps the parsed result, and index.ts calls loadConfig() before the server starts." />

| | Part | What it is |
| --- | --- | --- |
| 1 | **Box \| Agent** | Switches the whole window between the **Agent** page (your code and the AI) and the **Box** page (settings and data). |
| 2 | Editor | The Code – OSS editor with its tabs, file explorer, search, Git and extensions. |
| 3 | Chat | Where you talk to the AI. A chat can also open as an editor tab next to your code. |
| 4 | Mode | How much the AI may do in this conversation, from plain chat to autonomous agents. See [Modes](#modes). |
| 5 | Model | Which model answers, with its context, reasoning and speed options. |

### Agent and Box

**Agent** is where you work: the editor and the chat side by side.

**Box** is the management page. Its sidebar holds the <BzWenben jian="box.title" /> (models and providers, feature options, general and language settings, MCP and skills, privacy, experimental features) and the data around your work: <BzWenben jian="box.review.group" />, <BzWenben jian="box.memory.group" />, <BzWenben jian="box.storage.group" />, <BzWenben jian="box.perf.group" />, <BzWenben jian="box.database.group" /> and <BzWenben jian="box.vault.group" />. The chat stays open while you are in Box.

<BzHezi />

## Modes {#modes}

The mode pill at the bottom left of the chat input decides what the AI is allowed to do. Each mode has its own color in the input box:

| Mode | In Breezell's words |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement and Teams unlock after five friends assist you or with any paid plan. Teams and DarkSelene use many more tokens than the other modes. [Mode Selection](/mode-selection) explains when to use which.

## Models

Breezell groups models into four kinds of providers:

- **Breezell**: the official Breezell models, billed to your Breezell quota.
- **Sign in**: accounts you already have, such as ChatGPT (Codex), GitHub Copilot, Kimi, Grok, Gemini, DeepSeek, MiniMax or OpenRouter.
- **API providers**: official vendor APIs with your own key, such as Anthropic, OpenAI, Gemini or DeepSeek.
- **OpenAI-compatible**: up to 50 slots for relays, gateways and self-hosted proxies.

Everything except the Breezell models runs on your own key or account. [Custom API (BYOK)](/custom-api) walks through it with Claude models.

## What else is in Breezell

- **Super Memory**: long-term memory across conversations, with a memory library you can browse and edit. See [Super Memory](/super-memory).
- **Breezell Mind**: keeps long conversations within budget by folding older history into working notes while the raw record stays on disk.
- **Code Review**: a review page for the AI's changes, with per-file diffs and one-click revert.
- **Breezell Browser**: a built-in browser the AI can open, read and operate.
- **MCP and Skills**: connect external tools through the Model Context Protocol and reuse skills across projects. See [Prompt & Skill Settings](/prompt-settings).
- **Database**: connect to SQLite, MySQL, PostgreSQL, SQL Server, Oracle, MariaDB, MongoDB and Redis from inside the editor.
- **Vault**: keeps relay addresses and keys in your system keychain and fills them in where you need them.
- **Image Studio**: generate images and videos.
- **Hot updates**: new versions download inside the editor and take effect after a restart, without reinstalling.

## Get started

1. Download Breezell for your platform and install it.
2. Sign in to your Breezell account.
3. Choose your interface language. See [Language Settings](/settings-page-language-settings).
4. Pick your models: use the Breezell models right away, or bring your own key with [Custom API (BYOK)](/custom-api).
5. Open a project folder, choose a mode and a model under the chat input, describe what you want and send.

> Breezell is built on Code – OSS (MIT License). VS Code and Visual Studio Code are trademarks of Microsoft Corporation. Breezell is not affiliated with or endorsed by Microsoft.
