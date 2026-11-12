---
title: Plugins
description: Install plugins from the Breezell market, or build one with the Breezell API.
---

# Plugins

A Breezell plugin is a VS Code extension that also brings `vscode.breezell`, so it can work with Breezell itself: the chat, the agent, the model picker and the editor's own screens. Plugins run only while you are signed in to Breezell; signing out turns them off.

## Install and manage

Open **Box ▸ Plugins**. The market lists every published plugin: search it, filter by category, switch between open and closed source, and browse page by page. Each card has Install, Open, an enable switch and Uninstall.

- **Installed** lists one row per plugin, with its status, version, source, licence, id, and cards for its windows, what it adds and its permissions.
- **Develop** creates a plugin from a template and lists the steps from code to market.
- **Install local .vsix** installs a package you built yourself; a package whose checksum does not match the published one is not installed.

A plugin that adds a panel or a window also appears under Plugins in the Box sidebar.

## Kinds of plugins

| Kind | What it is | Example |
|---|---|---|
| Pack | No code: skills, AI rules, MCP servers and themes declared in `package.json` | Starter Pack |
| Panel | A panel inside Breezell with its own page, following the conversation | Focus Player |
| AI | Commands that use your chat model | Doc Writer |
| Window | A window of its own, which can also open without the editor | Focus Timer |
| Conversation | Reads conversations, sends messages, approves tool calls, and starts, messages and closes subagents | Chat Mirror |
| Screens | Buttons, pages, replaced parts, code fences and modes in Breezell's own screens | Desk Pet |
| Companion | A pet on the chat box that follows what the AI is doing | Desk Pet |
| Long-running | Keeps a conversation going until something is done, with limits and its own page | Goal |

Kinds combine: one plugin can bring skills, a panel, AI commands and a window. For a large plugin with its own settings page, data downloaded from a GitHub release and a part installed in the system, see Breezell IME.

## Build a plugin

In Breezell, open **Box ▸ Plugins ▸ Develop**, enter an id and a name, pick a template (Pack, Panel, AI command, Window or Minimal) and whether it is open or closed source, then choose a folder and open it in a new window. Press **F5** to run it.

From the command line (Node.js 18 or later):

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| Command | What it does |
|---|---|
| `npm run build` / `npm run watch` | Bundle `src/extension.ts` into `dist/extension.js` with esbuild |
| `npm run typecheck` | TypeScript type check |
| `npm run validate` | Check `package.json` |
| `npm run package:open` | Pack as open source: the source and source maps ship in the package |
| `npm run package:closed` | Pack as closed source: minified code only, no source, no source maps |
| `npm run submit -- --market` | Add the package to the market |

## What a plugin may do

A plugin declares the permissions it needs in `package.json`; anything it does not declare is refused. Everyday permissions, such as knowing when a turn starts or ends, are granted by default. Riskier ones, such as using your chat model, reading conversations, sending messages, approving tool calls, reading your code or the chat box, changing a message before it is sent, or reading your custom API keys, are asked for the first time the plugin uses them, and the answer is remembered.

Plugins cannot reach your account, plan, quota, billing, custom API settings, permission dialogs, tool approvals or the plugin management screens. Anything that needs you is shown above the plugin's own window, and a button a plugin adds to Breezell is marked "From plugin: name".

### Subagents

From Breezell newer than 1.4.56, a plugin can also work with subagents: conversations of their own that a conversation in Agent or Entanglement mode starts, which keep that conversation's mode and report back to it. With `chat.read` a plugin lists a conversation's subagents and sees which conversations are subagents and what each is doing; with `chat.send` it starts one with a task, sends it a message and closes it. What a plugin sends this way is shown as the plugin's, never as yours or the main agent's, and the main agent is told when a plugin starts or closes one of its subagents. See [Subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md#subagents-chatread-chatsend) in the developer guide.

## Publish

Fork the [BreezellCode repository](https://github.com/BreezellCode/BreezellCode), pack the plugin (`npm run package:open` or `npm run package:closed`), run `npm run submit -- --market`, then open a pull request. The market check runs on it and a maintainer reviews it. Closed-source plugins ship minified code only.

## Full developer guide

The complete guide — `package.json`, every permission, every call of the API, errors, limits, the chat, models and providers, the agent, Breezell's screens, windows, restarting, translations, security, publishing and recipes — lives in the repository:

- [Plugins overview](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [Getting started](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [API reference](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [Permissions](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [Chat and subagents](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/chat.md)
- [Publishing](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

Every plugin made from a template also carries an AI skill in `.agents/skills/breezell-plugin/`, with those pages as its references, so an assistant can follow the same guide.
