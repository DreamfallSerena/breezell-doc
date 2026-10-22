---
title: Dialog Box Overview
description: A complete tour of the Breezell chat panel — writing and sending, modes, models, @ and / menus, the tray buttons, context usage and compression, queued messages and rolling back.
---

# Dialog Box Overview

The chat panel on the **Agent** side of Breezell is where you talk to the AI: you write the request, pick how the AI works and which model it uses, attach context, and follow its progress. This page goes through every part of it.

::: tip About the screens on this page
The Breezell screens below are rebuilt in HTML from the Breezell source code. Their text follows the language of this page. Some of them react like the real panel: hover the mode menu, the Context list or a sent message, and click the switches and stars.
:::

## The parts of the chat panel

<BzLiaotian biaotilan quanbiao wen="Add a dark mode toggle to the settings page." da="I'll add a toggle to SettingsPage.vue that switches the theme class on the page and remembers the choice. Let me look at how the settings are stored first." />

| | Part | What it does |
| --- | --- | --- |
| 1 | Header buttons | **New Chat** (+), **Skills & Memory** (notebook) and **Chat History** (clock). Skills & Memory opens [Rules, Memories & Skills](/prompt-settings). |
| 2 | Input box | Where you write. It shows <BzWenben jian="chat.input.placeholder" /> while empty. |
| 3 | Mode | How the AI works on this message: chat only, plan, read-only analysis, edit files, and more. See [Choose a mode](#mode). |
| 4 | Model | The model that answers, followed by its context window and reasoning effort, for example `200K Medium`. See [Choose a model](#model). |
| 5 | Context ring | How full the context window is. Click it for the details and for manual compression. See [Context usage](#context). |
| 6 | **@** | Adds files, folders or past chats to the message. See [Add context with @](#mention). |
| 7 | Send | Sends the message. While the AI is answering it becomes a stop button. |
| 8 | Tray | The row of buttons under the input box: Breezell Browser, attach, Quick Phrases, Optimize prompt, MCP and Skills. See [The tray](#tray). |

## Write and send a message {#send}

1. Click the input box and write your request. Say what you want and where, for example the file or the page.
2. Press `Enter` to send. `Shift+Enter` starts a new line instead.

As soon as there is text, the send button turns from grey to white:

<BzLiaotian shuru="Add a dark mode toggle to the settings page." />

To add an image, paste it into the input box or drag it in. To add other files, use the paperclip in the tray. In the editor, select code and press `Ctrl+L` (`Cmd+L` on macOS) to add the selection to the chat.

### While the AI is answering

The send button turns into a white stop button with a square. Click it to stop the answer.

You can keep writing in the meantime. Messages you send while an answer is running are not lost: they wait above the input box, under <BzWenben jian="chat.queue.queued" canshu="2" />, and are sent one after another when the AI is free.

<BzLiaotian liushi duilie gaoliang="duilie" biaoji="1" duiliewen="Also update the README|Then run the tests" wen="Add a dark mode toggle to the settings page." da="I'll add a toggle to SettingsPage.vue that switches the theme class on the page." />

Each queued message has these buttons: <BzWenben jian="chat.queue.moveUp" /> and <BzWenben jian="chat.queue.moveDown" /> (when there is more than one), <BzWenben jian="common.edit" /> (back into the input box), <BzWenben jian="chat.queue.sendNow" /> (stops the current answer and sends this one) and <BzWenben jian="common.delete" />. You can also drag them into a new order. If a queued message cannot be sent, the reason appears under it, for example <BzWenben jian="chat.queue.notSent.turnError" />

## Choose a mode {#mode}

Click the mode capsule at the bottom left of the input box. Hover a mode to read what it does:

<BzLiaotian tanchu="moshi" moshi="agent" />

| Mode | In short |
| --- | --- |
| [Chat](/mode-selection#chat) | <BzWenben jian="chatMode.normalDetail" />: <BzWenben jian="chatMode.normalExplain" /> |
| [Plan](/mode-selection#plan) | <BzWenben jian="chatMode.planDetail" /> |
| [Analyze](/mode-selection#analyze) | <BzWenben jian="chatMode.analyzeDetail" /> |
| [Entanglement](/mode-selection#entanglement) | <BzWenben jian="chatMode.entanglementDetail" /> |
| [Agent](/mode-selection#agent) | <BzWenben jian="chatMode.agentDetail" /> |
| [Teams](/mode-selection#teams) | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| DarkSelene | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Agent is the default and suits most tasks. The mode you pick applies from your next message on; when you send in a different mode, a <BzWenben jian="chatMode.switchedTo" canshujian="chatMode.planLabel" /> line marks the change in the conversation.

Entanglement and Teams are locked until five friends have helped you unlock them, or until you buy any plan. A locked mode shows a lock in the menu, and its description shows your progress:

<BzLiaotian tanchu="moshi" moshi="agent" suoding />

## Choose a model {#model}

Click the model name next to the mode. The model picker has a search box, the model sources and the per-model settings (context window, reasoning effort, Fast). It is described step by step in [Custom API (BYOK)](/custom-api#use-claude-in-chat).

<BzLiaotian xuanzeqi="api" moxing="claude-opus-5-5" />

The text after the model name is a short summary of those settings: `200K Medium` means a 200K context window and medium reasoning effort; `1M High Fast` means the 1M window, high effort and Fast. See [Context, reasoning and Fast](/custom-api#context-reasoning-and-fast).

## Add context with @ {#mention}

Type `@` in the input box, or click the **@** button. The menu opens right above the input box:

<BzLiaotian tanchu="tiji" shuru="@" />

| Entry | Adds |
| --- | --- |
| files | A file from the workspace. |
| folders | A whole folder. |
| chats | An earlier conversation. The AI gets a pointer to its transcript and reads it when it needs to, so several chats can come along without filling the context. |

You do not have to open a category first: type right after `@` and Breezell searches files and folders together. Open files come first and are marked `Recent`. Use the arrow keys and `Enter`, or click.

<BzLiaotian tanchu="tijisou" shuru="@side" sou="side" />

Inside files and folders, a chip in the menu header switches between <BzWenben jian="inputToolbar.filterOn" /> and <BzWenben jian="inputToolbar.filterOff" />: <BzWenben jian="inputToolbar.toggleWorkspaceNoiseFilter" />. If nothing matches, Breezell offers files with uncommitted changes, marked `Changed`.

Each pick becomes a tag in your message, so the AI knows exactly which file, folder or chat you mean.

## Skills and quick phrases with / {#slash}

Type `/` at the start of the input box to see your [quick phrases](#quick-phrases) and skills in one list:

<BzLiaotian tanchu="xiegang" shuru="/" />

- Picking a quick phrase does what the phrase is set to do: insert its text, send it, or run it in the terminal.
- Picking a skill adds it to the message, so the AI uses that skill for this request.
- Skills that are off are greyed out with a switch on the row; switch one on right here to use it.

## The tray under the input box {#tray}

The dashed tray under the input box holds six buttons. Hover a button to see its name.

| Button | What it does |
| --- | --- |
| Breezell Browser (globe) | Opens the panel of Breezell's built-in browser. |
| <BzWenben jian="inputToolbar.attach" /> (paperclip) | Attaches files from your computer to the message. |
| <BzWenben jian="inputToolbar.quickPhrases" /> | Your saved phrases and commands. |
| <BzWenben jian="inputToolbar.optimizePrompt" /> (wand) | Rewrites what you have written into a clearer prompt. |
| MCP | Switches MCP servers on or off. |
| <BzWenben jian="inputToolbar.skills" /> (layers) | Switches skills on or off. |

A small green dot on MCP or Skills means at least one is on. When the chat panel is narrow, Breezell Browser moves into a **⋯** (<BzWenben jian="inputToolbar.more" />) menu. When you have referenced a conversation from Chat History, a blue <BzWenben jian="inputToolbar.referenced" /> button appears in the tray; click it to remove the reference.

### Breezell Browser {#browser}

Breezell Browser is the browser built into Breezell. Pages open in editor tabs, right next to your code.

<BzLiaotian tanchu="liulanqi" gaoliang="liulanqi" biaoji="1" />

- While no browser is open, the panel shows <BzWenben jian="browserPanel.readyToLaunch" />. Click <BzWenben jian="browserPanel.open" />, or type a link or search words into the field (<BzWenben jian="browserPanel.searchPlaceholder" />) and press `Enter`.
- Once pages are open, the panel lists them as tabs: click one to switch to it, and use the buttons on a row to mute or close it. The header button mutes all tabs.

The AI's own browser tools run off-screen by default. To watch them work, turn off <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> in [Feature Options](/feature-options-overview).

### Quick Phrases {#quick-phrases}

Quick Phrases are texts and commands you use often. The button opens your favorites; click one to use it.

<BzLiaotian tanchu="duanyu" tanchugaoliang="guanli" biaoji="1" />

Click <BzWenben jian="quickPhrases.manage" /> to open the manager. The left side lists all phrases, the right side your favorites, which are the ones the button shows.

<BzDuanyu gaoliang="jiantou" biaoji="2" />

- Click the star on a phrase, or select it and click the arrow in the middle, to add it to <BzWenben jian="quickPhrases.favorites" />. You can also drag it to the right. The **×** on a favorite removes it from the favorites only.
- The pencil on a favorite edits it; the bin on the left deletes the phrase.
- <BzWenben jian="common.add" /> at the top opens the editor for a new phrase:

<BzDuanyu bianji gaoliang="leixing" biaoji="3" />

Every phrase has a name, content and an action type:

| Type | When you pick the phrase |
| --- | --- |
| <BzWenben jian="quickPhrases.insert" /> | The content is put into the input box, so you can still edit it before sending. |
| <BzWenben jian="quickPhrases.send" /> | The content is sent as a message right away. |
| <BzWenben jian="quickPhrases.terminal" /> | The content runs as a command in a terminal. An optional <BzWenben jian="quickPhrases.workingDirectory" /> sets the folder it runs in. |

Quick phrases also appear in the [`/` menu](#slash).

### Optimize prompt {#optimize}

Write a rough request, then click the wand. Breezell rewrites it into a clearer prompt and shows the result first; nothing is sent.

<BzLiaotian tanchu="youhua" shuru="make settings page have dark mode" youhuawen="Add a dark mode toggle to the settings page. Store the choice so it persists across reloads, apply it by switching a theme class on the root element, and follow the system preference until the user picks a mode." tanchugaoliang="tihuan" biaoji="1" />

- <BzWenben jian="promptOptimize.replace" /> puts the new text into the input box. Until you change the text, clicking the wand again is <BzWenben jian="promptOptimize.undo" /> and brings your original back.
- <BzWenben jian="promptOptimize.retrySame" /> writes another version; <BzWenben jian="promptOptimize.dismiss" /> closes the panel.
- With an empty input box, the wand only shows <BzWenben jian="inputToolbar.optimizePromptEmpty" />.

The rewrite uses the Chat model unless you give it a dedicated one in [Feature Options](/feature-options-overview) (<BzWenben jian="models.promptOptimizeModel.title" />).

### MCP {#mcp}

The MCP panel lists your MCP servers with their status: green is connected, red has an error, grey is off or not started.

<BzLiaotian tanchu="mcp" gaoliang="mcp" biaoji="1" />

- The switch turns a server on or off for the AI. The header shows how many are on, for example `2/3`.
- The arrow (<BzWenben jian="inputToolbar.referenceMcpServer" />) adds the server to your message, so the AI uses its tools for this request.
- **+** (<BzWenben jian="mcp.addServer" />) opens `mcp.json`, where servers are added.

### Skills {#skills}

The Skills button works the same way for skills, with the tabs <BzWenben jian="skills.builtinTab" /> and <BzWenben jian="skills.myTab" />. See [Use skills in a chat](/prompt-settings#use-skills-in-a-chat).

::: warning Switch MCP servers and skills before a long conversation
<BzWenben jian="inputToolbar.toolsCacheTip" />
:::

## Context usage and compression {#context}

The ring next to **@** fills up as the conversation uses the model's context window. Hover it to see the numbers, for example `47.0% - 94.2K / 200.0K context used`, and click it to open the **Context** panel:

<BzLiaotian tanchu="shangxiawen" tanchugaoliang="yasuo" biaoji="1" />

The bar and the list split the used tokens by kind. Hover a row to pick out its part of the bar.

| Category | What it counts |
| --- | --- |
| System prompt | Breezell's instructions for the current mode |
| Tools | The descriptions of the tools the AI can call |
| Rules | Your workspace or global rules |
| Memories | Memories sent with the request |
| Skills | The list of skills that are on |
| MCP | The tools of the MCP servers that are on |
| Subagents | Work done by subagents |
| Conversation | Your messages, the answers and the tool results |

### Automatic and manual compression

When a conversation reaches about 90% of the usable context window, Breezell compresses it automatically: older messages are replaced by a summary, and the conversation goes on. You do not need to do anything.

To make room earlier, click <BzWenben jian="contextUsage.compress" /> in the Context panel (<BzWenben jian="contextUsage.compressTooltip" />). While it runs, the button shows <BzWenben jian="contextUsage.compressing" /> and a percentage. Afterwards the panel shows one of:

| Message | Meaning |
| --- | --- |
| <BzWenben jian="contextUsage.compressed" /> | Done. |
| <BzWenben jian="contextUsage.nothingToCompress" /> | The conversation is too short to compress. |
| <BzWenben jian="contextUsage.errorBusy" /> | Stop the answer first, then compress. |
| <BzWenben jian="contextUsage.errorNoModel" /> | Choose a model under the input box first. |

After you switch to a model with a smaller context window, the ring may show <BzWenben jian="contextUsage.converting" /> while Breezell fits the conversation into the new window.

## Edit or roll back a sent message {#edit}

Hover one of your sent messages. A pencil appears at its top left and a return arrow on its right:

<BzLiaotian bianji gaoliang="huigun" biaoji="1" wen="Add a dark mode toggle to the settings page." da="Done. SettingsPage.vue now has a Dark mode switch, the choice is saved, and the page follows the system setting until you change it." />

- **Edit**: click the message or the pencil, change the text and send it again.
- **Roll back** (<BzWenben jian="editor.revertToThisPoint" />): click the arrow and confirm. The later messages are removed, and the files they changed go back to how they were at that message.

<BzLiaotian huigun wen="Add a dark mode toggle to the settings page." da="Done. SettingsPage.vue now has a Dark mode switch, the choice is saved, and the page follows the system setting until you change it." />

A rollback cannot be undone from the editor, so check the dialog before you click <BzWenben jian="editor.revertConfirmDo" />. While the AI is still answering in this conversation, the arrow is dimmed; stop the answer first.

## Keyboard shortcuts {#shortcuts}

| Keys | Action |
| --- | --- |
| `Enter` | Send the message |
| `Shift+Enter` | New line |
| `@` | Open the mention menu |
| `/` at the start | Open skills and quick phrases |
| `↑` `↓` then `Enter` | Move through an open menu and pick |
| `Esc` | Close the open panel or menu |
| `Ctrl+L` / `Cmd+L` | Add the editor selection to the chat |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | Start a new chat |

## Tips

- Agent is the right mode for most work. Switch only when you want a specific workflow, such as a plan first or an analysis without edits.
- Point the AI at the right place with `@`: a file or folder is better than a long description of where something is.
- Keep long-running conversations healthy with the Context ring; compression is automatic, and manual compression is there when you want to make room yourself.
- Save requests you type again and again as Quick Phrases, and run project commands with the Terminal type.
- Set MCP servers and skills before a long conversation rather than in the middle of it.
